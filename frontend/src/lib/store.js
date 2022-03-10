import { writable } from 'svelte/store';

export const categoryID = writable('aps');

// API cridentials
export const options = {
	headers: {
		'x-rapidapi-host': 'amazon24.p.rapidapi.com',
		'x-rapidapi-key': '970d5e0d03msh08d243d9bd0829dp176881jsn24a11d3d58e4'
	}
};

export const apiUrl = 'https://amazon24.p.rapidapi.com/api';

export const productList = writable([]);
