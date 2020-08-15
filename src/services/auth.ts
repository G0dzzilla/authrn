interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdfh0a8dsufha89034gt834dhsbjklvadsi9as8dfadsk',
        user: {
          name: 'Marcos',
          email: 'marcosleal@gmail.com',
        },
      });
    }, 2000);
  });
}
