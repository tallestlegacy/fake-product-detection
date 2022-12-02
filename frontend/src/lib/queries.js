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

export const getProductData = async (id) => {
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

export const fetchSentiment = async (text) => {
	const encodedParams = new URLSearchParams();
	encodedParams.append('text', text);

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': '970d5e0d03msh08d243d9bd0829dp176881jsn24a11d3d58e4',
			'X-RapidAPI-Host': 'text-sentiment.p.rapidapi.com'
		},
		body: encodedParams
	};

	fetch('https://text-sentiment.p.rapidapi.com/analyze', options)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
};
