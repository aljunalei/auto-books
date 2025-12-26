//ROOUTE.TS
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Step 1: Get the form data from the browser request
    const body = await request.json();
    
    // Step 2: Log what we received (for debugging)
    console.log('📨 API Route received form data:', body);

    // Step 3: Forward the data to n8n webhook
    const response = await fetch('https://alju.app.n8n.cloud/webhook/autobooks-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Step 4: Log n8n's response
    console.log('📬 n8n responded with status:', response.status);

    // Step 5: Check if n8n responded successfully
    if (!response.ok) {
      console.error('❌ n8n returned error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to submit to n8n', status: response.status }, 
        { status: response.status }
      );
    }

    // Step 6: Try to get JSON response from n8n (if any)
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // n8n might not return JSON, that's okay
      data = { success: true, message: 'Form submitted successfully' };
    }

    // Step 7: Log success
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