<script lang="ts">
	export let url: string;
	export let size: string;
</script>

<a
	href={url}
	class={`${size} text-darkgreen bg-lightgreen hover:bg-lightestgreen py-[1em] px-[2em] font-bold transition-all rounded-sm`}
>
	<slot />
</a>

<style lang="postcss">
</style>
