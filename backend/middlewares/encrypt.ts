import bcrypt from 'bcrypt'

export const encrypt = async (password: string) => {
  return await bcrypt
    .hash(password, 10)
    .then((hash: string) => hash)
    .catch((err: any) => err)
}

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt
    .compare(password, hash)
    .then((result) => result)
    .catch((err: any) => err)
}
