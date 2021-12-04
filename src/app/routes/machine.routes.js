import Router from 'koa-router'

const router = new Router({
	prefix: '/machines'
})

const {
	setPm,
	deletePm
	getPm,
} = require ('../controllers/machine.controller')

// PUT /machines/:machine-id/prices/:pm-id
// sets the pricing model for an individual machine to the one from pm-id
// if the machine already has a pricing model, it is replaced by this one
// if the machine isn't found by machine-id it responds with not found
// if the pricing model isn't found by pm-id it responds with not found
router.put('/:machine-id/prices/:pm-id', ctx => {
	const machineId = ctx.params.machine-id
	const pmId = ctx.params.pm-id
	const requestBody = ctx.request.body
	const responseData = setPm(machineId, pmId, requestBody)
	ctx.body = responseData
})

// DELETE /machines/:machine-id/prices/:pm-id
// removes the pricing model from the machine (unsets it)
router.delete('/:machine-id/prices/:pm-id', ctx => {
	const machineId = ctx.params.machine-id
	const pmId = ctx.params.pm-id
	const responseData = deletePm(machineId, pmId)
	ctx.body = responseData	
})

// GET /machines/:machine-id/prices
// return the pricing model and price configurations set for a given machine
// if the machine does not have a pricing model configured then the default model from prices.json is returned
// if the machine isn't found by machine-id it responds with not found
router.get('/:machine-id/prices', ctx => {
	const machineId = ctx.params.machine-id
	const responseData = getPm(machineId)
	ctx.body = responseData
})

module.exports = router;
