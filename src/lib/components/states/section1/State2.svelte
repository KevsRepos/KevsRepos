<script>
import ShiftBtn from "$lib/components/ShiftBtn.svelte";
import ScalingWord from '$lib/components/ScalingWord.svelte';

let scalerOff;
console.log("state 2");
$: console.log(scalerOff);
</script>

<style>
    span {
        text-decoration: underline;
    }
</style>

<section>
    <ScalingWord word="not!" bind:scalerOff />

    {#if scalerOff}
        press <ShiftBtn /> more <span>precisely</span>
    {/if}
</section>