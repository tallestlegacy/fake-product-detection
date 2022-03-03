<script>
	import { loggedIn, user } from '$lib/store';
	import Button from '$lib/components/Button.svelte';

	let hasAccount = false;
	let tempUser = $user;

	const login = () => {
		user.set(tempUser);
		loggedIn.set(true);
	};
	const signUp = () => {
		user.set(tempUser);
		loggedIn.set(true);
	};

	const toggleHasAccount = () => {
		hasAccount = !hasAccount;
		tempUser = $user;
	};
</script>

<main>
	<div class="login">
		{#if hasAccount}
			<h1>Sign In</h1>
			<form on:submit|preventDefault={login}>
				<input bind:value={tempUser.email} type="text" placeholder="email" required />
				<input bind:value={tempUser.password} type="password" placeholder="password" required />
				<Button color="green" type="submit">Submit</Button>
			</form>
			<Button onClick={toggleHasAccount}>Don't have an Account?</Button>
		{:else}
			<h1>Create Account</h1>
			<form on:submit|preventDefault={signUp}>
				<input bind:value={tempUser.first_name} type="text" placeholder="First Name" required />
				<input bind:value={tempUser.last_name} type="text" placeholder="Last Name" required />
				<input bind:value={tempUser.email} type="email" placeholder="email" required />
				<input bind:value={tempUser.password} type="password" placeholder="password" required />
				<Button color="green" type="submit">Submit</Button>
			</form>
			<Button onClick={toggleHasAccount}>Already signed in Account?</Button>
		{/if}
	</div>
</main>

<style>
	h1 {
		margin: 0;
		padding: 0;
	}
	main {
		display: flex;
		height: 100vh;
		width: 100vw;
	}

	.login {
		display: flex;
		flex-direction: column;
		margin: auto;
		gap: 1rem;

		background-color: #fff;
		padding: 2rem;
	}

	form {
		display: grid;
		gap: 0.5rem;
	}

	form input {
		padding: 0.5rem;
		border: solid 2px grey;
	}
</style>
