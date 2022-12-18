<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { next } from '../../lib/store';

	const timeline = anime.timeline({
		delay: 0,
		easing: 'easeOutCubic',
		complete: next
	});

	onMount(() => {
		timeline
			.add({ targets: '.inner', height: '100vh', duration: 200 })
			.add({ targets: '.main', 'background-color': '#000000', duration: 100 })
			.add({ targets: '.inner', height: '0', duration: 200 });
	});
</script>

<main class="main">
	<div class="inner">&nbsp;</div>
</main>

<style lang="scss">
	main {
		height: 100vh;
		overflow: hidden;
		background-color: white;

		.inner {
			height: 0;
			background-color: #00b800;
		}
	}
</style>
