<script>
import { shiftPressed, event } from '$lib/store.js';
export let onEvent = false;

let keyPressed = false;

const btnDown = e => {
    if(e.keyCode === 16) {
        keyPressed = true;
    }
}

const btnUp = e => {
    if(e.keyCode === 16) {
        keyPressed = false;

        setTimeout(() => {
            $shiftPressed++;

            if(onEvent) $event++;
        }, 230);
    }
}
</script>

<svelte:window 
    on:keydown={e => btnDown(e)} 
    on:keyup={e => btnUp(e)} 
/>

<span class:keyPressed={keyPressed == true}>
    SHIFT
</span>

<style>
span {
    font-family: 'VT323';
    background-color: #474747;
    border: 1px #191919 solid;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 5px 5px 0px #cecece;
    display: inline-block;
    transition: .06s;
}
.keyPressed {
    transform: translate(0.2em, 0.2em);
    box-shadow: none;
}
</style>