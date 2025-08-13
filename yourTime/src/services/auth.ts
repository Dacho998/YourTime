interface LoginResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface SingupResponse {
  message: string;
}

interface ErrorResponse {
  error: string;
}

const API_URL = import.meta.env.VITE_API_URL
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
const response = await fetch(`${API_URL}/log_in`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || 'Login failed');
  }

  const data: LoginResponse = await response.json();
  return data;
};

export const singupUser = async (name: string, email: string, password: string): Promise<SingupResponse> => {
  const response = await fetch(`${API_URL}/sign_up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  const text = await response.text();

  if (!response.ok) {
    try {
      const errorData: ErrorResponse = JSON.parse(text);
      throw new Error(errorData.error || 'Signup failed');
    } catch {
      throw new Error(text || 'Signup failed');
    }
  }

  return JSON.parse(text) as SingupResponse;
};
