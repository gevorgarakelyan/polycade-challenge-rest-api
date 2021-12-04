const getAll = () => {
	// to do, create the Sequilize requests and return the necessary data
	return 'GET /pricing-models'
}

const create = (data) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'POST /pricing-models ' + JSON.stringify(data)
}

const get = (pmId) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'GET /pricing-models/' + pmId
}

const update = (pmId, data) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'PUT /pricing-models/' + pmId + ' ' + JSON.stringify(data)
}

const getPrices = (pmId) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'GET /pricing-models/' + pmId + '/prices'
}

const createPrices = (pmId, data) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'POST /pricing-models/' + pmId +'/prices ' + JSON.stringify(data)
}

const deletePrice = (pmId, priceId) => {
	// to do, create the Sequilize requests and return the necessary data
	return 'DELETE /pricing-models/' + pmId + '/prices/' + priceId
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
