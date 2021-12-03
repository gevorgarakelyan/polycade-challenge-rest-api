import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const PORT = process.env.PORT || 1337

const machineRoutes = ('./routes/machine.routes')
const pricingModelRoutes = ('./routes/pricingModel.routes')

const db = require("./app/models")
db.sequelize.sync()

app.use(bodyParser())

app
  .use(machineRoutes.routes())
  .use(pricingModelRoutes.routes())
  .listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
  )
