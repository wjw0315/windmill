<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	export let horizontal: boolean = false
	export let gap: 'none' | 'sm' | 'md' | 'lg' = 'sm'
	export let justify: 'start' | 'center' | 'end' | 'between' = 'start'
	export let wFull = true
	export let hFull = true

	const gapMap = {
		none: '',
		sm: 'gap-2',
		md: 'gap-4',
		lg: 'gap-8'
	}

	const justifyMap = {
		start: 'justify-start',
		center: 'justify-center',
		end: 'justify-end',
		between: 'justify-between'
	}
</script>

{#if horizontal}
	<div
		class="flex flex-row h-full {wFull ? 'w-full' : ''} {gapMap[gap]} items-center {justifyMap[
			justify
		]}"
	>
		<slot />
	</div>
{:else}
	<div
		class={twMerge(
			'flex flex-col w-full',
			hFull ? 'h-full' : '',
			gapMap[gap],
			'items-center',
			justifyMap[justify]
		)}
	>
		<slot />
	</div>
{/if}
