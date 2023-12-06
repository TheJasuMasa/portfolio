<script lang="ts">
	import { onDestroy } from 'svelte';

	let interval = setInterval(() => {
		show = !show;
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});

	let show = true;

	function blinkCursor() {
		clearInterval;
	}
</script>

<span class={`${show ? 'text-black' : ''}`}> __ </span>
