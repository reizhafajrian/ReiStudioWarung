import bcrypt from 'bcrypt'

export const encrypt = async (password: string) => {
  return await bcrypt
    .hash(password, 10)
    .then((hash: string) => hash)
    .catch((err: any) => err)
}

export const comparePassword = async (password: string, hash: string) => {
  return bcrypt
    .compare(password, hash)
    .then((result) => true)
    .catch((err: any) => err)
}
