require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testConnection() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'Say hello!' }
      ],
    });

    console.log('OpenAI connection successful!');
    console.log('Response:', completion.choices[0].message.content);
  } catch (error) {
    console.error('Error connecting to OpenAI:', error.message);
  }
}

testConnection();