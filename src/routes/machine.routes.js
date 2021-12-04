import Router from 'koa-router'

const router = new Router({
	prefix: '/machines'
})

const {
	setPm,
	deletePm,
	getPm
} = require ('../controllers/machine.controller')

// PUT /machines/:machine_id/prices/:pm_id
// sets the pricing model for an individual machine to the one from pm_id
// if the machine already has a pricing model, it is replaced by this one
// if the machine isn't found by machine_id it responds with not found
// if the pricing model isn't found by pm_id it responds with not found
router.put('/:machine_id/prices/:pm_id', ctx => {
	const machineId = ctx.params.machine_id
	const pmId = ctx.params.pm_id
	const requestBody = ctx.request.body
	const responseData = setPm(machineId, pmId, requestBody)
	ctx.body = responseData
})

// DELETE /machines/:machine_id/prices/:pm_id
// removes the pricing model from the machine (unsets it)
router.delete('/:machine_id/prices/:pm_id', ctx => {
	const machineId = ctx.params.machine_id
	const pmId = ctx.params.pm_id
	const responseData = deletePm(machineId, pmId)
	ctx.body = responseData	
})

// GET /machines/:machine_id/prices
// return the pricing model and price configurations set for a given machine
// if the machine does not have a pricing model configured then the default model from prices.json is returned
// if the machine isn't found by machine_id it responds with not found
router.get('/:machine_id/prices', ctx => {
	const machineId = ctx.params.machine_id
	const responseData = getPm(machineId)
	ctx.body = responseData
})

module.exports = router;
