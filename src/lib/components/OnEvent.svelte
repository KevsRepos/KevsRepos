<script context="module">
	let index = 1;
    
	export function reset() { index = 1; }
</script>

<script>
	export let state;

	let myIndex = index++;
</script>

{#if myIndex === state}
	<div>
        <slot />
    </div>
{/if}
