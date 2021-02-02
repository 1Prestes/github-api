import jwt from 'jsonwebtoken'

function GenerateToken (login) {
  if (!login) return
  const token = jwt.sign({ login }, process.env.REACT_APP_SECRET_JWT, {
    expiresIn: '1h'
  })
  return token
}

export default GenerateToken
