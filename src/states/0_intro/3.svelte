<script lang="ts">
	import { onMount } from 'svelte';
	import { next } from '../../lib/store';
	import terminal from '../../lib/terminal';
	import wait from '../../lib/wait';

	const textItems = [
		['[ERROR] system error (0xe8f2a8983)', 0, true],
		['[ERROR] system error (0xe89838f2a)', 0, true],
		['[ERROR] system error (0xfffffffff)', 0, true],
		['initializing system recovery, os set to failover mode...', 1000, true],
		['os not responding, system recovery not possible', 0, true],
		['reading emergency procedure from disk', 1000, true],
		['[ERROR] disk timeout, retrying...', 2000, true],
		['[ERROR] disk timeout, retrying...', 2000, true],
		['[ERROR] disk timeout, retrying...', 2000, true],
		['[FATAL] disk is not responding, sending crash report to kernel', 2000, true],
		['[FATAL] kernel unavailable, writing log to disk', 1000, true],
		['[FATAL] fatal error during write procedure on disk, disk is unresponsive', 500, true],
		['analyzing system status...', 3000, true],
		['status unavailable, analyzing available sources', 1000, true],
		['[ERROR] fatal crash, no sources found, initializing full reboot', 500, true],
		['[FATAL] no boot device found, trying to read from bootloader', 500, true],
		['[ERROR] [FATAL] fatal error, system down', 500, false],
		['[ERROR] [FATAL] fatal error, system down', 500, false],
		['[ERROR] [FATAL] fatal error, system down', 500, false],
		['[ERROR] [FATAL] fatal error, system down', 500, false],
		['[ERROR] [FATAL] fatal error, system down', 100, false],
		['[ERROR] [FATAL] fatal error, system down', 100, false],
		['[ERROR] [FATAL] fatal error, system down', 100, false],
		['[ERROR] [FATAL] fatal error, system down', 100, false],
		['[ERROR] [FATAL] fatal error, system down', 10, false],
		['[ERROR] [FATAL] fatal error, system down', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
		['[FATAL] [FATAL] fatal fatal, fatal fatal', 10, false],
	];

	const { push, text } = terminal();

	onMount(async () => {
		for (let line of textItems) {
			// @ts-ignore
			await push('\n' + line[0], line[2]);
			// @ts-ignore
			await wait(line[1]);
		}
		next();
	});
</script>

<main>
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
