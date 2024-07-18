import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  console.log("Request received at /api/login");

  try {
    const response = await fetch('http://localhost:3005/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // Asegúrate de incluir las cookies
    });

    console.log("Response received from Express API");

    if (response.ok) {
      const cookies = response.headers.get('set-cookie');
      console.log("Cookies received:", cookies); // Para depuración

      if (cookies) {
        return new NextResponse(null, {
          status: 200,
          headers: {
            'Set-Cookie': cookies,
          },
        });
      } else {
        console.log("No cookies received"); // Para depuración
        return NextResponse.json({ message: 'Login successful, but no cookies' }, { status: 200 });
      }
    } else {
      const data = await response.json();
      console.log("Error response from Express API:", data); // Para depuración
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    console.error("Error in POST handler:", error); // Para depuración
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
