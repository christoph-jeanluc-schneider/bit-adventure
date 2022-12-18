<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { next } from '../lib/store';

	const timeline = anime.timeline({
		delay: 0,
		easing: 'easeOutCubic',
		complete: next
	});

	onMount(() => {
		timeline
			.add({ targets: '.main', 'background-color': '#ff0000', duration: 100 })
			.add({ targets: '.main', 'background-color': '#008000', duration: 100 })
			.add({ targets: '.main', 'background-color': '#0059ff', duration: 100 })
			.add({ targets: '.main', 'background-color': '#000000', duration: 100 });
	});
</script>

<main class="main">
	&nbsp;
</main>

<style lang="scss">
	main {
		height: 100vh;
		overflow: hidden;
	}
</style>
