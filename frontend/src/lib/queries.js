import { options, apiUrl } from './store';

export const searchKeyword = async (params) => {
	try {
		const res = await fetch(
			`${apiUrl}/product?categoryID=${params.categoryID}&keyword=${params.keyword}&page=1`,
			{
				method: 'GET',
				headers: options.headers
			}
		);
		const json = await res.json();
		console.log(json.docs);
		return json.docs;
	} catch (err) {
		return [];
	}
};

export const getReviews = async (id) => {
	try {
		const res = await fetch(`${apiUrl}`);
	} catch (error) {
		return {
			error
		};
	}
};
