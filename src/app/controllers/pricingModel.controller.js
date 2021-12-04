const getAll = () => {
	// to do, create the Sequilize requests and return the necessary data
	return 'GET /pricing-models'
}

const create = (data) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'POST /pricing-models' + JSON.stringify(data)
}

const get = (pmId) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'GET /pricing-models/:pm-id' + pmId
}

const update = (pmId, data) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'PUT /pricing-models/:pm-id' + pmId + JSON.stringify(data)
}

const getPrices = (pmId) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'GET /pricing-models/:pm-id/prices' + pmId
}

const createPrices = (pmId, data) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'POST /pricing-models/:pm-id/prices' + pmId + JSON.stringify(data)
}

const deletePrice = (pmId, priceId) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'DELETE /pricing-models/:pm-id/prices/:price-id' + pmId + ':' + priceId
}

module.exports = {
	getAll,
	create,
	get,
	update,
	getPrices,
	createPrices,
	deletePrice
}
