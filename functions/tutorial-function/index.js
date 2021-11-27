const { apiSuccess, apiFailure } = require('../../utils');

exports.handler = async (event, context, callback) => {
	console.log(JSON.stringify(event));
	try {
		const res = await fetch(
			'https://api.github.com/repos/facebook/react/issues',
			{
				method: 'GET',
			}
		);
		const data = await res.json();
		return apiSuccess(callback, data);
	} catch (error) {
		return apiFailure(callback, error);
	}
};
