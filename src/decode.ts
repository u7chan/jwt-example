import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

type Payload = {
  userName: string
  iat: number
  exp: number
}

function verifyJwtToken(token: string): Payload | null {
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY)
    return payload
  } catch {
    return null
  }
}

dotenv.config()

console.log(verifyJwtToken(process.argv[2]))
