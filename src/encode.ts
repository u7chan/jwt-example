import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

type Payload = {
  userName: string
}

function createJwtToken(payload: Payload): string {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' })
}

dotenv.config()

console.log(
  createJwtToken({
    userName: 'John Doe',
  })
)
