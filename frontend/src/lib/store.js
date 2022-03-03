import { writable } from 'svelte/store';

export const user = writable({
	email: 'marvin@email.com',
	first_name: 'Marvin',
	last_name: 'Michaelson',
	password: 'nownwe'
});

export const loggedIn = writable(false);
