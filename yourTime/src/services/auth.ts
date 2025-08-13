interface LoginResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface SignupResponse {
  message: string;
}

interface ErrorResponse {
  error: string;
}

const API_URL = import.meta.env.VITE_API_URL;

async function safeFetch<T>(url: string, options: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  const text = await response.text();

  if (!response.ok) {
    try {
      const errorData: ErrorResponse = JSON.parse(text);
      throw new Error(errorData.error || 'Request failed');
    } catch {
      throw new Error(text || 'Request failed');
    }
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error('Invalid JSON in successful response');
  }
}

export const loginUser = (email: string, password: string) => {
  return safeFetch<LoginResponse>(`${API_URL}/log_in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
};

export const singupUser = (name: string, email: string, password: string) => {
  return safeFetch<SignupResponse>(`${API_URL}/sign_up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
};
