<script lang="ts">
	import '../app.css';
	import { window } from '$lib/stores/window';

	let width: number;
	let height: number;
	let scrollY: number;

	$: $window.width = width;
	$: $window.height = height;
	$: $window.scrollY = scrollY;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} bind:scrollY />

<main>
	<!-- <nav class="bg-white bg-opacity-5 h-[60px] flex items-center px-5">
		<img src="/JS.svg" />
	</nav> -->
	<slot />
</main>
