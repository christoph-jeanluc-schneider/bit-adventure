import { writable } from 'svelte/store';

const LS_STATE = 'bit-adv-state';

export const state = writable(Number(localStorage.getItem(LS_STATE) || 0));

state.subscribe(($state) => localStorage.setItem(LS_STATE, $state.toString()));

export function reset() {
	state.set(0);
}

export function next() {
	state.update((s) => s + 1);
}
