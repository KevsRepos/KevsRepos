<script>
import { onMount } from 'svelte';
import { scale } from 'svelte/transition';

export let delay = 800, word, scalerOff;

let show = true;

onMount(() => {
    scalerOff = false;
    setTimeout(() => {
        show = false;

        scalerOff = true;
    }, delay);
});
</script>

<svelte:options accessors/>

{#if show}
<div in:scale={{duration: delay}}>{word}</div>
{/if}