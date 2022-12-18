<script lang="ts">
	import { state } from './lib/store';
	import Intro0 from './states/0_intro/0.svelte';
	import Intro1 from './states/0_intro/1.svelte';
	import Intro2 from './states/0_intro/2.svelte';
	import Intro3 from './states/0_intro/3.svelte';
	import Intro4 from './states/0_intro/4.svelte';
	import Intro5 from './states/0_intro/5.svelte';
	import Intro6 from './states/0_intro/6.svelte';
	import Terminal from './states/1_terminal/terminal.svelte';

	const states = [Intro0, Intro1, Intro2, Intro3, Intro4, Intro5, Intro6, Terminal];

	function ctxmenu(ev: MouseEvent) {
		if (ev.ctrlKey) {
			ev.preventDefault();
			state.set(Number(prompt('set state to:', '0')) || 0);
		}
	}
</script>

<svelte:window on:contextmenu={ctxmenu} />

<svelte:component this={states[$state]} />
