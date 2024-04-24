export const register = async (request) => {
  const user = await fetch(`${process.env.NEXTAUTH_URL}/auth/sign-up`);
  return user;
};

export const registerUser = async (request) => {
  //   console.log("Request : ", request);
  //   const { email, password } = request;
  const user = await fetch(`${process.env.NEXTAUTH_URL}/auth/sign-up`, {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(request),
  });

  return user;
};