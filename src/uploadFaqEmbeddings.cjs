// uploadFaqEmbeddings.js
const { createClient } = require('@supabase/supabase-js');
const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const supabase = createClient('https://zzrytjexmycnzbkhqpcf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6cnl0amV4bXljbnpia2hxcGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODczNjgzNSwiZXhwIjoyMDY0MzEyODM1fQ.lJcOlqK7tU9JbadsDTwGVYfJD_nIz4N24w-k4ZoOzyw');
const openai = new OpenAI({ apiKey: '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'});

const run = async () => {
  const filePath = path.join(__dirname, 'faq_base.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const faqData = JSON.parse(raw);

  for (const item of faqData) {
    const { question, answer } = item;

    const embeddingRes = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: question,
    });

    const [{ embedding }] = embeddingRes.data;

    const { error } = await supabase.from('faq_embeddings').insert([
      {
        question,
        answer,
        embedding,
      },
    ]);

    if (error) {
      console.error(`❌ Error insertando: ${question}`, error);
    } else {
      console.log(`✅ Insertado: ${question}`);
    }
  }

  console.log('Proceso terminado.');
};

run();
