<script lang="ts">
	import { onMount } from 'svelte';
	import BlinkingCursor from './BlinkingCursor.svelte';

	export let isFinished: boolean;
	export let isStarted: boolean;
	export let toType: string;
	export let index: number;

	let startTyping = false;

	let currentString = '';
	let stringArray = toType.split('');

	$: if (isStarted) {
		setTimeout(() => {
			startTyping = true;
		}, 2000);
	}

	$: if (startTyping && stringArray.length > 0) {
		setTimeout(() => {
			currentString += stringArray.shift();
			if (stringArray.length === 0) {
				isFinished = true;
				index++;
			}
		}, Math.random() * 300);
	}

	$: console.log(startTyping, stringArray, isFinished);
</script>

<div class="flex flex-row">
	<h1 class="text-lightestgreen text-5xl font-black">
		<span class="text-slate-100 min-w-[3rem]">
			{#if isStarted && !isFinished}
				{'~/$'}
			{:else}
				{' '}
			{/if}
		</span>
		{currentString}
		{#if isStarted && !isFinished}
			<BlinkingCursor />
		{/if}
	</h1>
</div>
