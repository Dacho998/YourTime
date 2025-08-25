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

export const loginUser = async (
  email: string, 
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/log_in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data: LoginResponse | ErrorResponse = await res.json(); 
  if (!res.ok) {
    throw new Error((data as ErrorResponse).error || 'Request failed');
  }
  return data as LoginResponse;
};

export const singupUser = async (
  name: string, 
  email: string, 
  password: string
): Promise<SignupResponse> => {
  const res = await fetch(`${API_URL}/sing_up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  const data: SignupResponse | ErrorResponse = await res.json();
  if (!res.ok) {
    throw new Error((data as ErrorResponse).error || 'Request failed');
  }
  return data as SignupResponse;
};
