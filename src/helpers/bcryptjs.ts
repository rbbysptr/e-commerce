const bcrypt = require("bcryptjs");

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

