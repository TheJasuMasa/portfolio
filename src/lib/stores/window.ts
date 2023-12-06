import { writable } from "svelte/store";

type WindowProps = {
    width: number | null;
    height: number | null;
    scrollY: number | null;
}

const windowParams: WindowProps = { width: null, height: null, scrollY: null }

export const window = writable(windowParams)