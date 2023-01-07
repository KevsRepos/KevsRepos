<script>
import { event } from "$lib/store";
import Kekw from "$lib/components/emotes/Kekw.svelte";

let kekwCounter = 1;

function handleKeyUp(e) {
    if(e.keyCode === 16) {
        kekwCounter *= 2;

        //Site has scrollbar - site is full of kekw
        if(document.body.scrollHeight > window.innerHeight) {
            $event++;
        }
    }
}
</script>

<svelte:window on:keyup={handleKeyUp} />

<div class="flex">
    {#each Array(kekwCounter) as _}
        <Kekw />
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 100vh;
    }
</style>