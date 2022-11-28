<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { next } from '../lib/store';

	const timeline = anime.timeline({
		delay: 1000,
		easing: 'easeOutCubic',
		complete: () => {
			completed = true;
			setTimeout(() => {
				showHidden = true;
			}, 5000);
		},
	});
	let button: any;
	const p = { x: 0, y: 0 };
	let completed = false;
	let showHidden = false;

	onMount(() => {
		timeline
			.add({ targets: '.abelade', opacity: 1, translateY: -80, duration: 2000 })
			.add({ targets: '.info1', opacity: 1, translateY: -50, duration: 2000, delay: 1000 })
			.add({ targets: '.info2', opacity: 1, translateY: -50, duration: 2000, delay: 1000 })
			.add({
				targets: '.fake',
				opacity: 1,
				duration: 500,
				delay: 1500,
			});
	});

	function moveButton(ev: MouseEvent) {
		if (timeline.completed) {
			p.x += ev.movementX;
			p.y += ev.movementY;
			button.style.top = p.y + 'px';
			button.style.left = p.x + 'px';
		}
	}

	function onclick() {
		const animation = anime({
			targets: '.section',
			opacity: 0,
			duration: 1000,
			easing: 'easeInCubic',
		});
		animation.finished.then(next);
	}
</script>

<svelte:window on:mousemove={moveButton} />

<main>
	<section class="section">
		<h1 class="abelade">abelade.ch</h1>
		<h4 class="info1">alles wos im internet je het gä</h4>
		<h4 class="info2">chame hie abelade</h4>

		<div style:height="2rem">&nbsp;</div>

		<div>
			<button class="fake" bind:this={button}>okey lets go!</button>
		</div>
		<div>
			<button class="hidden" on:click={onclick} disabled={!completed} data-hint={showHidden}>okey lets go!</button>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;

		section {
			position: relative;
			top: -10vh;
			text-align: center;

			h1 {
				cursor: pointer;
				font-weight: 400;
				font-size: 6rem;
				transition: color 0.2s;
				opacity: 0;

				&:hover {
					color: hsl(330, 77%, 41%);
				}
			}

			h4 {
				font-weight: 200;
				font-size: 2rem;
				margin: 0.4em;
				opacity: 0;
			}

			button {
				outline: none;
				padding: 1rem 1.5rem;
				font-weight: 600;
				border: none;
				border-radius: 0.5rem;
				background-color: hsl(330, 77%, 51%);
				color: white;
				box-shadow: 0 0.25rem hsl(330, 77%, 41%);
				opacity: 0;
				transition: opacity 0.2s, transform 0.2s;

				&.fake {
					pointer-events: none;
					position: relative;
					top: 0;
					left: 0;
				}

				&.hidden {
					transform: translateY(-100%);

					&[data-hint="true"] {
						opacity: 0.02;
					}

					&:not(:disabled):hover {
						cursor: pointer;
						opacity: 1;
					}
				}
			}
		}
	}
</style>
