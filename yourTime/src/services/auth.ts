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

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
const response = await fetch(`${process.env.REACT_APP_API_URL}/log_in`, {
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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/sing_up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || 'singup failed');
  }

  const data: SingupResponse = await response.json();
  return data;
};
