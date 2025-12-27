//ROOUTE.TS
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    //Log received data
    console.log('API Route received form data:', body);

    //N8N webhook connection 
    const response = await fetch('https://alju.app.n8n.cloud/webhook/autobooks-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    //Log n8n's response
    console.log('N8N responded with status:', response.status);

    if (!response.ok) {
      console.error('N8N returned error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to submit to n8n', status: response.status }, 
        { status: response.status }
      );
    }

    // Get JSON response from n8n
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // N8N might not return JSON, that's okay
      data = { success: true, message: 'Form submitted successfully' };
    }

    //Log success
    console.log('✅ Success! Returning to browser:', data);

    // Step 8: Send success response back to the browser
    return NextResponse.json(data, { status: 200 });
    
  } catch (error) {
    // If anything goes wrong, catch the error
    console.error('💥 API Route error:', error);
    
    return NextResponse.json(
      { 
        error: 'Server error', 
        message: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

// Handle OPTIONS request (for CORS preflight)
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}