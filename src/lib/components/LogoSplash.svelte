<script lang="ts">
	import { draw, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<svg id="a" xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 0 28.9787 36.8936">
	<defs>
		<style>
			.c {
				fill: #183d3d;
			}
		</style>
	</defs>
	<polygon
		in:fade|global={{ duration: 800, easing: quintOut, delay: 1800 }}
		class="c"
		points="9.5266 1.4369 9.5266 23.4769 1.3566 31.6469 1.3566 31.6469 1.7816 24.2419 4.5866 21.4369 4.5866 1.4369 9.5266 1.4369"
	/><polygon
		in:fade|global={{ duration: 800, easing: quintOut, delay: 1800 }}
		class="c"
		points="26.5498 1.2654 17.2766 5.0469 17.2766 27.4169 9.1066 35.5869 2.9989 34.7146 12.3366 25.3769 12.3366 1.4369 26.5498 1.2654"
	/>
	<path
		stroke-linecap="round"
		style:fill-opacity={0}
		in:draw|global={{ duration: 2000, easing: quintOut }}
		stroke="#5C8374"
		fill="#183d3d"
		class="b"
		d="M9.5266 1.4369 9.5266 23.4769 1.3566 31.6469 1.3566 31.6469 1.7816 24.2419 4.5866 21.4369 4.5866 1.4369 9.5266 1.4369z"
	/><path
		stroke-linecap="round"
		style:fill-opacity={0}
		in:draw|global={{ duration: 2000, easing: quintOut, delay: 300 }}
		stroke="#5C8374"
		fill="#183d3d"
		class="b"
		d="M26.5498 1.2654 17.2766 5.0469 17.2766 27.4169 9.1066 35.5869 2.9989 34.7146 12.3366 25.3769 12.3366 1.4369 26.5498 1.2654z"
	/>
</svg>
