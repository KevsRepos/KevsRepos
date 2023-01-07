<script>
import ShiftBtn from "$lib/components/ShiftBtn.svelte";
import ScalingWord from '$lib/components/ScalingWord.svelte';
import { shiftPressed, event } from "$lib/store";

export let prevWord = true;

let 
    scalerOff, 
    fasterText, 
    shiftCounter = 10;

$: if(fasterText) {
    fasterText.style.fontSize = `${$shiftPressed * 0.1}em`;
    shiftCounter--;
}

$: if(shiftCounter === 0) {
    console.log('heir');
    $event++;
}
</script>

<style>
    span {
        font-style: bold;
    }
</style>

<section>
    {#if prevWord}
        <ScalingWord word='Unbelievable!' bind:scalerOff />
    {/if}

    {#if scalerOff || !prevWord}
        Press <ShiftBtn /> <span>FAST</span>
    {/if}

    {#if $shiftPressed > 5 && $shiftPressed <= 14}
        <div bind:this={fasterText}>FASTER!</div>

        {#if $event === 6}
            {shiftCounter}
        {/if}
    {/if}
</section>