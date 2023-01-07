<script>
import { shiftPressed, event } from "$lib/store";
import { fade } from 'svelte/transition';
import PepeSpeaks from "$lib/components/PepeSpeaks.svelte";

export let props;

const pepe = [
    [
        'What a time to be alive!',
        'pepeKeyboard'
    ],
    [
        'Nothing could stop me from being happy!',
        'pepeLoveRight'
    ],
    [
        'I love my World, and I will play the whole night and build my perfect house...',
        'pepeLoveLeft'
    ],
    [
        'I can only imagine what great house I will build! It will be an enormous castle!',
        'pepeBeautiful'
    ],
    [
        'Gah, I am just so happy! I am so excited that I want to go in sneak mode several times in a row!',
        'pepeHappyLeft'
    ]
];

let 
shiftMessage = false,
pepeCounter = 0,
backgroundImage = props.state === 1 ? "url('/images/minecraft.png')" : "url('/images/minecraftdead.png')",
pepeAngry = false,
countShifts = false,
internalShiftCounter = 0;

const btnDown = e => {
    if(e.keyCode === 16 && $event === 5) {
        backgroundImage = "url('/images/minecraftsneak.png')";
    }
}

const btnUp = e => {
    if(props.state === 2) {
        if(!pepeAngry) {
            pepeAngry = true;
        }else {
            $event++;
        }
    }
    if($event === 8) return;
    
    if(e.keyCode === 16) {
        $shiftPressed++;

        if(countShifts) {
            internalShiftCounter++;

            if(internalShiftCounter >= 5) {
                $event++;
            }
        }

        setTimeout(() => {
            backgroundImage = "url('/images/minecraft.png')";

            if(pepeCounter >= 0 && pepeCounter <= 3) {
                pepeCounter++;
            }
        }, 230);
    }
}

$: if(pepeCounter === 0) {
    setTimeout(() => {
        shiftMessage = true;
    }, 1200);
}else if(pepeCounter === 1) {
    shiftMessage = false;
}else if(pepeCounter === pepe.length - 1) {
    countShifts = true;
}
</script>

<svelte:window on:keydown={e => btnDown(e)} on:keyup={e => btnUp(e)} />

<div in:fade={{ duration: 5000 }} style={`--backgroundImage: ${backgroundImage}`}>
    {#if shiftMessage}
        <aside>
            {#if props.state === 2}
                <p transition:fade={{ duration: 1000 }}>{`<World>`} Pepe was blown up by Creeper</p>
            {/if}
            <p transition:fade={{ duration: 1000, delay: 2500 }}>{`<World>`} Press "SHIFT" to continue</p>
        </aside>
    {/if}
</div>

{#if props.state === 1}
    <PepeSpeaks pepe={pepe[pepeCounter][1]} text={pepe[pepeCounter][0]} />
{/if}

{#if pepeAngry}
    <PepeSpeaks pepe="pepeRageLeft" />
{/if}

<style>
div {
    background-image: var(--backgroundImage);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
}
aside {
    width: 40vw;
    position: fixed;
    left: 0px;
    bottom: 170px;
}
aside p {
    word-spacing: 7px;
    font-family: 'Minecraft';
    padding: 2px;
    padding-left: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    margin: 0;
}
</style>
    