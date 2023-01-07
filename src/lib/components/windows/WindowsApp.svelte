<script>
import { event } from '$lib/store';
import { draggable } from 'svelte-drag';
import { fade } from 'svelte/transition';

export let alt, src, title, enableDbClick;

let loadingMinecraft = false;
let blackScreen = false;

const defaultAlt = alt;
const defaultSrc = src;
const defaultTitle = title;

const dragOptions = {
    applyUserSelectHack: true,
    position: {x: 200, y: 500},
    grid: [120, 120]
}

const makeMinecraft = e => {
    alt = 'Minecraft';
    src = 'minecrafticon.png';
    title = 'Minecraft';
}

const reset = e => {
    alt = defaultAlt;
    src = defaultSrc;
    title = defaultTitle;
}

const startMinecraft = () => {
    if($event === 4 && enableDbClick) {
        loadingMinecraft = true;

        setTimeout(() => {
            setTimeout(() => {
                $event++;
            }, 500);

            blackScreen = true
        }, 1000);
    }
}
</script>

{#if loadingMinecraft}
    <div in:fade={{ duration: 1500 }} class="loadingMinecraft"></div>
{/if}
{#if blackScreen}
    <div class="blackScreen">. . .</div>
{/if}

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<section
    use:draggable={dragOptions} 
    on:mouseover={e => makeMinecraft(e)} 
    on:mouseout={e => reset(e)}
    on:dblclick={startMinecraft}
>
    <img {alt} src={`/images/${src}`} draggable="false" />
    <span>{title}</span>
</section>

<style>
section {
    font-family: 'Roboto';
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    width: 68px;
    height: 68px;
    cursor: pointer;
}
span {
    font-family: 'Roboto';
    text-shadow: 2px 2px 2px #000000;
}
img {
    height: 48px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.loadingMinecraft {
    z-index: 9999;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: wait;
}
.blackScreen {
    z-index: 99999;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>