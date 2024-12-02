import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { fatherName, motherName, gender } = await request.json();

    const prompt = `Generate a baby name suggestion based on the following information:
    Father's name: ${fatherName}
    Mother's name: ${motherName}
    Desired gender: ${gender}
    
    Please provide the following information in JSON format:
    1. A suitable baby name
    2. The meaning of the name
    3. The origin/cultural background of the name
    4. Associated religious background (if any)
    
    Format the response as valid JSON with the following structure:
    {
      "name": "suggested name",
      "meaning": "meaning of the name",
      "origin": "cultural origin",
      "religion": "associated religion or 'Not specific to any religion'"
    }`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No suggestion generated');
    }

    const suggestion = JSON.parse(response);
    return NextResponse.json(suggestion);
    
  } catch (error) {
    console.error('Error in name generation:', error);
    return NextResponse.json(
      { error: 'Failed to generate name suggestion' },
      { status: 500 }
    );
  }
}
