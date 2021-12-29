import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = (token: any) => {
  return jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET!,
    (err: any, decoded: any) => {
      if (err) return err;
      return decoded;
    }
  );
};
