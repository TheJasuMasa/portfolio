<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import TypeLine from '$lib/components/text/TypeLine.svelte';
	import BlinkingCursor from '$lib/components/text/BlinkingCursor.svelte';
	import HeroButton from '$lib/components/HeroButton.svelte';
	import CtaSolid from '$lib/components/CTASolid.svelte';
	import CtaGhost from '$lib/components/CTAGhost.svelte';
	import LogoSplash from '$lib/components/LogoSplash.svelte';

	let toType = [
		'はじめまして。',
		'ジャスティンともうします。',
		'ウェブ技術が大好きです。',
		'是非右のメニューで',
		'閲覧してください。'
	];
	let progress = [false, false, false, false, false, false];

	let index = 0;
	let animateLogo = false;
	let displayLogo = true;

	onMount(() => {
		animateLogo = true;
	});

	setTimeout(() => {
		displayLogo = false;
	}, 3000);

	$: console.log(index);
</script>

<div class="h-[100vh] flex justify-center items-center">
	{#if displayLogo}
		<div
			out:fade
			class="h-[100vh] absolute z-10 flex flex-row w-full items-center justify-center bg-darkgreen"
		>
			<button on:click={() => (animateLogo = !animateLogo)}>Click</button>
			{#if animateLogo}
				<LogoSplash />
			{/if}
		</div>
	{/if}
	{#if !displayLogo}
		<div in:fade class="grid grid-cols-2 w-full">
			<div class="col-span-1 place-content-center flex flex-col gap-4 w-full ps-4">
				{#each toType as phrase, i}
					<TypeLine
						bind:isFinished={progress[i]}
						isStarted={index === i}
						toType={phrase}
						bind:index
					/>
				{/each}
				{#if index === toType.length}
					<span class="text-white">~/$</span><BlinkingCursor />
				{/if}
			</div>
			<div class="col-span-1 flex flex-col h-full place-content-around">
				<div class="flex flex-col items-center justify-center gap-3">
					<CtaGhost size="text-2xl" url="#">ブログを見る</CtaGhost>
					<CtaSolid size="text-2xl" url="#">プロジェクトを見る</CtaSolid>
				</div>
				<!-- <fieldset
				class="grid grid-cols-4 w-1/2 gap-4 mx-auto border-4 border-lightgreen pt-[2rem] px-[2rem] rounded-lg"
			>
				<legend class="text-lightestgreen font-bold px-2">技術で閲覧</legend>
				<HeroButton icon="simple-icons:svelte" />
				<HeroButton icon="mdi:tailwind" />
				<HeroButton icon="mdi:react" />
				<HeroButton icon="nonicons:typescript-16" /ｘ
				<HeroButton icon="material-symbols:css" />
				<HeroButton icon="nonicons:typescript-16" />
				<HeroButton icon="nonicons:typescript-16" />
				<div class="flex flex-row col-span-4 w-full place-content-center h-[1.5rem]">
					<button class="bg-lightgreen px-3 py-1 disabled:hidden transition-all" disabled={false}
						>閲覧</button
					>
				</div>
			</fieldset>

			<fieldset
				class="grid grid-cols-4 w-1/2 gap-4 mx-auto border-4 border-lightgreen p-[2rem] rounded-lg"
			>
				<legend class="text-lightestgreen font-bold px-2">技術で閲覧</legend>
				<HeroButton icon="simple-icons:svelte" />
				<HeroButton icon="mdi:tailwind" />
				<HeroButton icon="mdi:react" />
				<HeroButton icon="nonicons:typescript-16" />
				<HeroButton icon="material-symbols:css" />
				<HeroButton icon="nonicons:typescript-16" />
				<HeroButton icon="nonicons:typescript-16" />
			</fieldset> -->
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
