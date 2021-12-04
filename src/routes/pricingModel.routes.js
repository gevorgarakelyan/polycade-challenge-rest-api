import Router from 'koa-router'

const router = new Router({
	prefix: '/pricing-models'
})

const {
	getAll,
	create,
	get,
	update,
	getPrices,
	createPrices,
	deletePrice
} = require ('../controllers/pricingModel.controller')

// GET /pricing-models
// returns all of the pricing models available for the system
// also returns the default pricing model in prices.json
router.get('/', ctx => {
	const responseData = getAll()
	// ctx.response.status = 200
	ctx.body = responseData
})

// POST /pricing-models
// creates a new pricing model in the system
// returns the ID of the new pricing model to the caller
router.post('/', ctx => {
	const requestBody = ctx.request.body
	ctx.response.status = 201
	const responseData = create(requestBody)
	ctx.body = responseData
})

// GET /pricing-models/:pm_id
// get an individual pricing model
// include the price configurations for the pricing model
// if the pricing model isn't found by pm_id it responds with not found
router.get('/:pm_id', ctx => {
	const pmId = ctx.params.pm_id
	const responseData = get(pmId)
	ctx.body = responseData
})

// PUT /pricing-models/:pm_id
// updates an existing pricing model meta-data
// does not affect the pricing configurations for the pricing model
router.put('/:pm_id', ctx => {
	const pmId = ctx.params.pm_id
	const requestBody = ctx.request.body
	const responseData = update(pmId, requestBody)
	ctx.body = responseData
})

// GET /pricing-models/:pm_id/prices
// returns the prices configured for a specific pricing model
router.get('/:pm_id/prices', ctx => {
	const pmId = ctx.params.pm_id
	const responseData = getPrices(pmId)
	ctx.body = responseData
})

// POST /pricing-models/:pm_id/prices
// adds a new price configuration for a pricing model
router.post('/:pm_id/prices', ctx => {
	const pmId = ctx.params.pm_id
	const requestBody = ctx.request.body
	ctx.response.status = 201
	const responseData = createPrices(pmId, requestBody)
	ctx.body = responseData
})

// DELETE /pricing-models/:pm_id/prices/:price_id
// removes a price configuration from a pricing model
// if the pricing model isn't found by pm_id it responds with not found
// if the price configuration isn't found by price_id it responds with not found
router.delete('/:pm_id/prices/:price_id', ctx => {
	const pmId = ctx.params.pm_id
	const priceId = ctx.params.price_id
	const responseData = deletePrice(pmId, priceId)
	ctx.body = responseData
})

module.exports = router;
