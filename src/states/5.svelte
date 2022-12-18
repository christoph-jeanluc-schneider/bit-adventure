<script lang="ts">
	import { onMount } from 'svelte';
	import { next } from '../lib/store';
	import terminal from '../lib/terminal';
	import wait from '../lib/wait';

	const textItems = [
		{ txt: '\nÖöhm...', ms: 2000 },
		{ txt: '\nWas isch ds gad gsii?', ms: 500 },
		{ txt: '\n', ms: 1000 },
		{ txt: 'Wart, i luege schnäu nache...', ms: 4000 },
		{ txt: '\nOuh du, das gseet gar nid guet uus!', ms: 1000 },
		{ txt: '\nF*ck, das gseet ganz und gar nid guet uus!!', ms: 500 },
		{ txt: '\n...', ms: 500 },
		{ txt: '\nDa isch nüt meh umä', ms: 500 },
		{ txt: '\n...', ms: 500 },
		{ txt: "\nDu heschs glöschä", ms: 1000 },
		{ txt: ", alles", ms: 1000 },
		{ txt: ", s'ganzä Internet!", ms: 1000 },
		{ txt: '\n', ms: 2000 },
		{ txt: 'was mache mir jetzt?', ms: 2000 },
		{ txt: '  o.o', ms: 2000 },
		{ txt: '\nwart...', ms: 500 },
		{ txt: ' i probiere schnäu öpis...', ms: 1000 },
	];

	const { push, text } = terminal(40);

	onMount(async () => {
		await wait(2000);

		for (let line of textItems) {
			await push(line.txt);
			await wait(line.ms);
		}
		next();
	});
</script>

<main class="main">
	<section class="section">
		<pre>{$text}<span class="cursor">|</span></pre>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		overflow: hidden;
		background-color: black;
		font-family: cascadiacode;
		font-weight: 800;

		section {
			width: 100%;
			max-width: 40rem;
			margin: 8rem auto;
			color: hsl(120, 100%, 36%);

			.cursor {
				animation: blink 800ms linear 0s infinite;
			}
		}
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		49% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		99% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
