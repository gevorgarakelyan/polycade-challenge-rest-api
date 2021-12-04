import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const PORT = process.env.PORT || 1337

const machineRoutes = require('./routes/machine.routes')
const pricingModelRoutes = require('./routes/pricingModel.routes')

// const db = require("./models")
// db.sequelize.sync()

app
  .use(bodyParser())
  .use(machineRoutes.routes())
  .use(pricingModelRoutes.routes())
  .listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
  )
