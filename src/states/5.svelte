<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { next } from '../lib/store';

	const timeline = anime.timeline({
		delay: 0,
		easing: 'easeOutCubic',
		complete: next,
	});

	onMount(() => {
		timeline
			.add({ targets: '.main', 'background-color': '#00b800', duration: 100 })
			.add({ targets: '.main', 'background-color': '#ff0000', duration: 100 })
			.add({ targets: '.main', 'background-color': '#0059ff', duration: 100 })
			.add({ targets: '.main', 'background-color': '#ffffff', duration: 100 })
			.add({ targets: '.main', 'background-color': '#000000', duration: 100 })
			.add({ targets: '.inner', height: '50vh', duration: 600 })
			.add({ targets: '.inner', height: '50vh', duration: 200 })
			.add({ targets: '.inner', height: '60vh', duration: 400 })
			.add({ targets: '.inner', height: '60vh', duration: 200 })
			.add({ targets: '.inner', height: '100vh', duration: 600 })
			.add({ targets: '.main', 'background-color': '#000000', duration: 50 })
			.add({ targets: '.inner', height: '0', duration: 400 });
	});
</script>

<main class="main">
	<div class="inner">&nbsp;</div>
</main>

<style lang="scss">
	main {
		height: 100vh;
		background-color: black;

		.inner {
			height: 0;
			background-color: #00b800;
		}
	}
</style>
