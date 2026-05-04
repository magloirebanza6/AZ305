import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Get credentials from environment variables
    const validUsername = process.env.QUIZ_USERNAME || 'admin';
    const validPassword = process.env.QUIZ_PASSWORD || 'az305exam';

    // Check credentials
    if (username === validUsername && password === validPassword) {
      // Generate a simple token (in production, use proper JWT)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      
      return NextResponse.json({
        success: true,
        token,
        message: 'Authentication successful'
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid username or password'
    }, { status: 401 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Authentication failed'
    }, { status: 500 });
  }
}
