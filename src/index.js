import app from './app'
import './utils/mongoose'

app.listen(app.get('port'))
console.log(`server on port http://localhost:${app.get('port')}`)
