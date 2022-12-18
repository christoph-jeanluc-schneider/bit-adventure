import { derived, writable, type Readable } from 'svelte/store';
import wait from './wait';

export interface Terminal {
	text: Readable<string>;
	push: (text: string, animate?: boolean) => Promise<any>;
}

export default function (speed: number = 5): Terminal {
	const state = writable('');

	const text = derived([state], ([$state]) => {
		return $state;
	});

	async function push(text: string, animate = true) {
		if (speed > 0 && animate) {
			let buffer = text.split('');
			while (buffer.length > 0) {
				const char = buffer.shift();
				state.update((value) => (value += char));
				await wait(speed);
			}
		} else {
			state.update((value) => (value += text));
		}
	}

	return { text, push };
}
