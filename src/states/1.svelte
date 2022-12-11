<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { next } from '../lib/store';

	const timeline = anime.timeline({
		delay: 0,
		easing: 'easeOutCubic',
	});

	onMount(() => {
		console.log("foo");

		timeline
			.add({ targets: '.alles', 'background-color': 'red', duration: 100 })
			.add({ targets: '.alles', 'background-color': 'green', duration: 100 })
			.add({ targets: '.alles', 'background-color': 'blue', duration: 100 })
			.add({ targets: '.alles', 'background-color': 'black', duration: 100 });
	});
</script>

<main class="alles">
	foo bar
</main>

<style lang="scss">
	main {
		height: 100vh;
		overflow: hidden;
	}
</style>
