import { writable, type Writable } from 'svelte/store';

export default function (text: string, ms = 50): Writable<string> {
	const chars = text.split('');
	const output = writable('');

	function tick() {
		if (chars.length > 0) {
			output.update((s) => s + chars.shift());
			setTimeout(tick, ms);
		}
	}
	setTimeout(tick, ms);

	return output;
}
