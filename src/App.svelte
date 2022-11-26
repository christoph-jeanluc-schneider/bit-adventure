<script lang="ts">
	import Menu from './lib/components/Menu.svelte';
	import { state } from './lib/store';
</script>

<main>
	<Menu />
	<h1>Abelade.ch</h1>
	<p>State: {$state}</p>
	<div>
		<button
			on:click={() => {
				$state += 1;
			}}>state go brr</button
		>
	</div>
</main>

<style lang="scss">
	h1 {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
