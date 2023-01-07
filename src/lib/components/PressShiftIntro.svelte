<script>
import { fade, fly } from 'svelte/transition';
import ShiftBtn from "$lib/components/ShiftBtn.svelte";
import OnEvent, { reset } from '$lib/components/OnEvent.svelte';
import { onMount } from 'svelte';
import ScalingWord from '$lib/components/ScalingWord.svelte';
import { shiftPressed, event } from '$lib/store';

let
internalState = 1,
scalerOff = true,
fasterText,
shiftCounter = 10;

onMount(reset);

$: if(fasterText) {
    fasterText.style.fontSize = `${$shiftPressed * 0.3}em`;

    shiftCounter--;
}

$: if(shiftCounter === 0) {
    $event++;
}

function handleKeyUp() {
    if(scalerOff !== true) return;

    if(internalState < 7) internalState++;
}
</script>

<svelte:window on:keyup={handleKeyUp} />

<OnEvent state={internalState}>
    <section transition:fade>
        press <ShiftBtn />
    </section>
</OnEvent>

<OnEvent state={internalState}>
    <section in:fly={{ y: 200, duration: 250 }}>
        press <ShiftBtn /> again
    </section>
</OnEvent>


<OnEvent state={internalState}>
    <section>
        <ScalingWord word="good!" bind:scalerOff />
    
        {#if scalerOff}
            press <ShiftBtn /> more <span>precisely</span>
        {/if}
    </section>
</OnEvent>

<OnEvent state={internalState}>
    <section>
        <ScalingWord word="great!" bind:scalerOff />
    
        {#if scalerOff}
            press <ShiftBtn /> more <span>softly</span>
        {/if}
    </section>
</OnEvent>

<OnEvent state={internalState}>
    <section>
        <ScalingWord word="perfect!" bind:scalerOff />
    
        {#if scalerOff}
            Can you press <ShiftBtn /> extremely  <span>hard?</span>
        {/if}
    </section>
</OnEvent>

<OnEvent state={internalState}>
    <section>
        <ScalingWord word='Unbelievable!' bind:scalerOff />

        {#if scalerOff}
        Press <ShiftBtn /> <span>FAST</span>
        {/if}
    </section>
</OnEvent>

<OnEvent state={internalState}>
    <section>
        Press <ShiftBtn /> <span>FAST</span>
        <div bind:this={fasterText}>FASTER!</div>
    </section>
</OnEvent>

<style>
section {
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    font-size: 4em;
    text-align: center;
}
</style>