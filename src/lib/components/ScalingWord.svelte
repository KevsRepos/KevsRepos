<script>
import { onMount } from 'svelte';
import { scale } from 'svelte/transition';

export let delay = 800, word, scalerOff;

scalerOff = false;

let show = true;

onMount(() => {
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