const setPm = (machineId, pmId, data) => {
	// to do, create the Sequilize requests and return the necessary data
	return '/' + machineId + '/prices/' + pmId + ' ' + JSON.stringify(data)
}

const deletePm = (machineId, pmId) => {
	// to do, create the Sequilize requests and return the necessary data
	return '/' + machineId + '/prices/'+ pmId
}

const getPm = (machineId) => {
	// to do, create the Sequilize requests and return the necessary data
	return '/' + machineId + '/prices'
}

module.exports = {
	setPm,
	deletePm,
	getPm
}
