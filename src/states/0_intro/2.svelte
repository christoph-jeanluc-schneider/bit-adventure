<script lang="ts">
	import { onMount } from 'svelte';
	import { next } from '../../lib/store';
	import terminal from '../../lib/terminal';
	import wait from '../../lib/wait';

	const chars = '0123456789abcdef';
	function randomAddress() {
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
			.map(() => chars[Math.floor(Math.random() * chars.length)])
			.join('');
	}

	const { push, text } = terminal();

	onMount(async () => {
		await wait(1000);

		for (let i = 0; i < 60; i++) {
			await push(`[FATAL] system error at 0x${randomAddress()}\n`, false);
			await wait(10);
		}
		next();
	});
</script>

<main>
	<section class="section">
		<pre>{$text}</pre>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		overflow: hidden;
		background-color: black;
		font-family: cascadiacode;
		font-weight: 800;

		section {
			width: 100%;
			max-width: 40rem;
			margin: 8rem auto;
			color: hsl(120, 100%, 36%);
		}
	}
</style>
