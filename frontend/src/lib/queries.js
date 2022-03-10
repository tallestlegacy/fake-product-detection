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

export const getReviews = async (id, fetch) => {
	try {
		const res = await fetch(`${apiUrl}/review/${id}`, {
			method: 'GET',
			headers: options.headers
		});

		const json = await res.json();
		return {
			docs: json.docs,
			overview: json.overview
		};
	} catch (error) {
		return [];
	}
};

export const getProductData = async (id, fetch) => {
	try {
		const res = await fetch(`${apiUrl}/product/${id}`, {
			method: 'GET',
			headers: options.headers
		});
		const json = await res.json();
		return json;
	} catch (error) {
		return {};
	}
};
