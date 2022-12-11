<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { next } from '../lib/store';

	const timeline = anime.timeline({
		delay: 1000,
		easing: 'easeOutCubic',
	});
	let button: any;
	const p = { x: 0, y: 0 };
	let enableButtonMove = false;
	let showHidden = false;

	onMount(() => {
		timeline
			.add({ targets: '.abelade', opacity: 1, translateY: -80, duration: 800 })
			.add({ targets: '.info1', opacity: 1, translateY: -50, duration: 800 })
			.add({ targets: '.info2', opacity: 1, translateY: -50, duration: 800 })
			.add({ targets: '.fake', opacity: 1, duration: 200 });
	});

	function checkEnableButtonMove() {
		if (timeline.completed && !enableButtonMove) {
			enableButtonMove = true;
			setTimeout(() => {
				showHidden = true;
			}, 2000);
		}
	}

	function moveButton(ev: MouseEvent) {
		if (enableButtonMove && timeline.completed) {
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
			duration: 0/* 200 */,
			easing: 'easeInCubic',
		});
		animation.finished.then(next);
	}
</script>

<svelte:window on:mousemove={moveButton} />

<main>
	<section class="section" on:mouseenter={checkEnableButtonMove}>
		<h1 class="abelade">abelade.ch</h1>
		<h4 class="info1">alles wos im internet je het gä</h4>
		<h4 class="info2">chame hie abelade</h4>

		<div style:height="2rem">&nbsp;</div>

		<div>
			<button class="fake" bind:this={button}>okey lets go!</button>
		</div>
		<div>
			<button class="hidden" on:click={onclick} disabled={!showHidden}>okey lets go!</button>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		section {
			position: relative;
			top: -10vh;
			text-align: center;
			padding: 8rem;

			h1 {
				font-weight: 400;
				font-size: 6rem;
				transition: color 0.2s;
				opacity: 0;
			}

			h4 {
				font-weight: 200;
				font-size: 2rem;
				margin: 0.4em;
				opacity: 0;
			}

			button {
				position: relative;
				top: 0;
				outline: none;
				padding: 1rem 1.5rem;
				font-weight: 600;
				border: none;
				border-radius: 0.5rem;
				color: white;
				background-color: hsl(330, 77%, 51%);
				box-shadow: 0 0.25rem hsl(330, 77%, 41%);

				&.fake {
					pointer-events: none;
					position: relative;
					top: 0;
					left: 0;
					opacity: 0;
					background-color: hsl(330, 77%, 51%);
					box-shadow: 0 0.25rem hsl(330, 77%, 41%);
				}

				&.hidden {
					background-color: hsl(128, 64%, 45%);
					box-shadow: 0 0.25rem hsl(128, 64%, 35%);
					cursor: pointer;
					transform: translateY(-100%);
					transition: all 100ms;

					&:hover {
						background-color: hsl(128, 64%, 50%);
					}

					&:active {
						top: 0.25rem;
						box-shadow: 0 0 hsl(128, 64%, 35%);
					}

					&:disabled {
						opacity: 0;
					}
				}
			}
		}
	}
</style>
