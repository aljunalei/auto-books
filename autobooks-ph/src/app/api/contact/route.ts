//ROUTE.TS

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('API received contact form data:', data);

     //N8N webhook connection
    const response = await fetch('https://alju.app.n8n.cloud/webhook/autobooks-contact-form',{
      method: 'POST',
      headers: {
        contentType: 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log('N8N response status:', response.status)
  // Error handling for N8N response
    if (!response.ok) {
      console.log('N8N returned error:',  response.statusText);
      return NextResponse.json({error: 'Failed to forward message'}, {status: response.status});
  }

  
  }
  catch (error) {
    console.log('API fetching error:', error);
    return NextResponse.json({error: 'Failed'}, {status: 500});
  }
 
}

