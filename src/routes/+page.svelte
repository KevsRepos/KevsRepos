<script>
import { event, shiftPressed } from '$lib/store.js';
import ShiftBtn from "$lib/components/ShiftBtn.svelte";
import stateComponents from '$lib/stateComponents';
import { fly } from 'svelte/transition';

$: current = stateComponents[$event];
</script>

<svelte:component this={current[0]} props={current[1]} />

{#if $event >= 0 && $event <= 2}
    <aside transition:fly={{ y: 200, duration: 250 }}>
        You pressed shift {$shiftPressed} times!
    </aside>
{/if}

{#if $event >= 2 && $event <= 3}
    <span transition:fly={{ y: 200, duration: 3500 }}>
        Press 
        <ShiftBtn onEvent={true} /> 
        to continue
    </span>
{/if}

<style>
aside {
    position: fixed;
    bottom: 0px;
    left: 0px;
    margin: 20px;
}
span {
    position: fixed;
    bottom: 0px;
    left: 50vw;
    transform: translate(-50%);
    margin-bottom: 20px;
    padding: 10px;
    background-color: #191919;
    border: 1px #474747 solid;
    border-radius: 15px;
}
</style>
