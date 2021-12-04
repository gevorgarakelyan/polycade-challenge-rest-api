const setPm = (machineId, pmId, data) => {
	// to do, create the Sequilize requests and return the necessary data
	return '/:machine-id/prices/:pm-id' + machineId + ':' + pmId + JSON.stringify(data)
}

const deletePm = (machineId, pmId) => {
	// to do, create the Sequilize requests and return the necessary data
	return '/:machine-id/prices/:pm-id' + machineId + ':' + pmId
}

const getPm = (machineId) => {
	// to do, create the Sequilize requests and return the necessary data
	return '/:machine-id/prices' + machineId
}

module.exports = {
	setPm,
	deletePm,
	getPm
}
