import { createClient } from '@supabase/supabase-js';
import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Faltan credenciales de Supabase");
    return res.status(500).json({ error: "Faltan credenciales de base de datos" });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('testimonios')
      .select('*')
      .order('fecha', { ascending: false });

    if (error) {
      console.error('Error al obtener testimonios:', error);
      return res.status(500).json({ error: 'Error al obtener testimonios' });
    }

    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    return new Promise((resolve) => {
      const form = new multiparty.Form();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Form parse error:', err);
          return resolve(res.status(500).json({ error: 'Error parsing form data' }));
        }

        const nombre = fields.nombre?.[0];
        const texto = fields.texto?.[0];
        const servicio = fields.servicio?.[0];
        const estrellas = parseInt(fields.estrellas?.[0], 10);
        const imagen = files.imagen?.[0];

        if (!nombre || !texto || !servicio || !estrellas) {
          return resolve(res.status(400).json({ error: "Faltan campos obligatorios" }));
        }

        let imagen_url = "https://dfhulxkgsfhjgoqlyolv.supabase.co/storage/v1/object/public/testimonios/user1.jpg";

        if (imagen) {
          const ext = path.extname(imagen.originalFilename);
          const nombreArchivo = `testimonio-${Date.now()}${ext}`;
          
          const fileStream = fs.createReadStream(imagen.path);
          
          const { data, error } = await supabase.storage
            .from('testimonios')
            .upload(nombreArchivo, fileStream, {
              contentType: imagen.headers['content-type'],
              cacheControl: '3600',
              upsert: false,
            });

          if (error) {
            console.error('Error subiendo imagen:', error);
            return resolve(res.status(500).json({ error: 'Error subiendo imagen' }));
          }

          const { data: publicUrlData } = supabase.storage
            .from('testimonios')
            .getPublicUrl(nombreArchivo);

          imagen_url = publicUrlData.publicUrl;
        }

        const { error: dbError } = await supabase.from('testimonios').insert([
          {
            nombre,
            texto,
            servicio,
            estrellas,
            fecha: new Date().toISOString(),
            imagen_url,
          },
        ]);

        if (dbError) {
          console.error('Error guardando en DB:', dbError);
          return resolve(res.status(500).json({ error: 'Error guardando testimonio' }));
        }

        return resolve(res.status(201).json({ mensaje: 'Testimonio guardado correctamente' }));
      });
    });
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
