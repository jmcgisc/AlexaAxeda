// import OpenAI from "openai";
// import { createClient } from "@supabase/supabase-js";
// import fs from "fs";
// import readline from "readline";
// import "dotenv/config";

// // Procesa un archivo en streaming
// async function indexDocument(filePath) {
//   console.log(`📂 Procesando archivo: ${filePath}`);

//   const fileStream = fs.createReadStream(filePath, { encoding: "utf8" });
//   const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

//   let buffer = "";
//   const chunkSize = 1000; // caracteres por fragmento
//   const overlap = 150;    // solapamiento
//   let count = 0;

//   for await (const line of rl) {
//     buffer += line + "\n";

//     while (buffer.length >= chunkSize) {
//       const chunk = buffer.slice(0, chunkSize);
//       await saveChunk(chunk);
//       count++;
//       // mantener solapamiento
//       buffer = buffer.slice(chunkSize - overlap);
//     }
//   }

//   // Procesar lo que quede
//   if (buffer.trim().length > 0) {
//     await saveChunk(buffer);
//     count++;
//   }

//   console.log(`✅ ${count} fragmentos indexados desde ${filePath}`);
// }

// // Guardar fragmento en Supabase
// async function saveChunk(chunk) {
//   try {
//     const embeddingRes = await openai.embeddings.create({
//       model: "text-embedding-3-small",
//       input: chunk,
//     });

//     const embedding = embeddingRes.data[0].embedding;

//     await supabase.from("documents").insert({
//       content: chunk,
//       embedding,
//     });
//   } catch (err) {
//     console.error("❌ Error al guardar fragmento:", err.message);
//   }
// }

// async function main() {
//   // Limpiar documentos previos
//   await supabase.from("documents").delete().neq("id", "00000000-0000-0000-0000-000000000000");

//   // Indexar cada documento por separado
//   await indexDocument("./docs/FAQ.txt");
//   await indexDocument("./docs/Manual del producto.txt");
// }

// main();