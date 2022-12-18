<script lang="ts">
	import { state } from './lib/store';
	import State0 from './states/0.svelte';
	import State1 from './states/1.svelte';
	import State2 from './states/2.svelte';
	import State3 from './states/3.svelte';
	import State4 from './states/4.svelte';
	import State5 from './states/5.svelte';
	import State6 from './states/6.svelte';

	const states = [State0, State1, State2, State3, State4, State5, State6];

	function ctxmenu(ev: MouseEvent) {
		if (ev.ctrlKey) {
			ev.preventDefault();
			state.set(Number(prompt('set state to:', '0')) || 0);
		}
	}
</script>

<svelte:window on:contextmenu={ctxmenu} />

<svelte:component this={states[$state]} />
