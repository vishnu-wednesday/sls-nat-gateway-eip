import { apiSuccess, apiFailure } from '@utils';
import axios from 'axios';

exports.handler = async (event, context, callback) => {
	console.log(JSON.stringify(event));
	try {
		const response = await axios.get(
			'https://api.github.com/search/repositories?q=react&limit=50'
		);
		const data = response.data;
		console.log(data);
		return apiSuccess(callback, data);
	} catch (error) {
		return apiFailure(callback, error);
	}
};
