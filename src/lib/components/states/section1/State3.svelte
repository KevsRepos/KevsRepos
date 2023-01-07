<script>
import ShiftBtn from "$lib/components/ShiftBtn.svelte";
import ScalingWord from '$lib/components/ScalingWord.svelte';

let scalerOff;
</script>

<style>
    span {
        text-decoration: underline;
        font-style: italic;
    }
</style>

<section>
    <ScalingWord word="great!" bind:scalerOff />

    {#if scalerOff}
        press <ShiftBtn /> more <span>softly</span>
    {/if}
</section>