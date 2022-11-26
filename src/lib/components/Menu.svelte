<script lang="ts">
	import { reset } from '../store';

	let visible = false;
	let pos = [0, 0];

	function showMenu(ev: MouseEvent) {
		pos = [ev.clientX, ev.clientY];
		visible = true;
	}

	function hideMenu() {
		visible = false;
	}

	function confirmReset() {
		if (confirm('möchtisch de spielstand würklech zrügsetzä? das chame nüm widerhärstelle!'))
			reset();
	}
</script>

<svelte:window on:contextmenu|preventDefault={showMenu} on:click={hideMenu} />

{#if visible}
	<div id="ctxmenu" style={`left: ${pos[0]}px; top: ${pos[1]}px;`}>
		<div on:click={confirmReset} on:keydown={confirmReset} class="item danger">
			spielstand zrügsetzä
		</div>
		<a
			class="item"
			href="https://github.com/christoph-jeanluc-schneider/bit-adventure"
			target="_blank"
			rel="noopener noreferrer">source code aaluege</a
		>
	</div>
{/if}

<style lang="scss">
	#ctxmenu {
		display: block;
		margin: 0;
		position: fixed;
		padding: 1rem 0.75rem;
		background-color: hsl(0, 0%, 20%);
		border: 1px solid hsl(0, 0%, 15%);
		border-radius: 6px;
		box-shadow: 0 0.25rem 1rem hsla(0, 0%, 0%, 0.1);
		z-index: 10000;

		.item {
			display: block;
			padding: 0.25rem;
			cursor: pointer;
			color: var(--blue);

			&:not(:hover) {
				text-decoration: none;
			}

			&:hover {
				text-decoration: underline;
			}

			&.danger {
				color: hsl(352, 80%, 50%);
			}
		}
	}
</style>
