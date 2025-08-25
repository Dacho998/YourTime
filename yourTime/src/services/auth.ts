// src/services/auth.ts

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


export const loginUser = async (email: string, password: string) => {
  const log = await fetch(`${API_URL}/log_in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await log.json(); 
  if (!log.ok) {
    throw new Error(data.error || 'Request failed');
  }
  return data; 
};

export const singupUser = async (name: string, email: string, password: string) => {
  const sign = await fetch(`${API_URL}/sing_up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await sign.json();
  if (!sign.ok) {
    throw new Error(data.error || 'Request failed');
  }
  return data;
};

