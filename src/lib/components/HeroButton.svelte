<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string;
</script>

<div class="grid grid-cols-4">
	<div
		class="h-[3rem] w-[3rem] rounded-lg border-2 border-lightgreen flex items-center justify-center transition-all text-lightgreen hover:bg-lightestgreen hover:border-lightestgreen hover:text-darkgreen hover:cursor-pointer"
	>
		<Icon {icon} class="text-[2.5rem]" />
	</div>
</div>
