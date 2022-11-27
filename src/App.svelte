<script lang="ts">
	import { state } from './lib/store';
	import State0 from './states/0.svelte';
	import State1 from './states/1.svelte';

	const states = [State0, State1];

	function ctxmenu(ev: MouseEvent) {
		if (ev.ctrlKey) {
			ev.preventDefault();
			state.set(Number(prompt('set state to:', '0')) || 0);
		}
	}
</script>

<svelte:window on:contextmenu={ctxmenu} />

<svelte:component this={states[$state]} />
