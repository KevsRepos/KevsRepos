<script>
import { event } from "$lib/store";
import { scale } from 'svelte/transition';
import { onMount } from "svelte";
import PepeSpeaks from "$lib/components/PepeSpeaks.svelte";
import WindowsApp from "$lib/components/windows/WindowsApp.svelte";
import WindowsNotification from "$lib/components/windows/WindowsNotification.svelte";
import WindowsTaskBar from "$lib/components/windows/WindowsTaskBar.svelte";
import WindowsStickyKeys from "$lib/components/windows/WindowsStickyKeys.svelte";

export let props;

let state = props.state;

let currEvent = $event;

$: console.log('curr: ' + currEvent);

const apps = [
    {
        icon: 'wowicon.svg.png',
        title: 'WoW'
    },
    {
        icon: 'minecrafticon.png',
        title: 'Minecraft'
    },
    {
        icon: 'battlefield3icon.jpg',
        title: 'Battlefield'
    },
    {
        icon: 'pornhubicon.jpg',
        title: 'Pornhub'
    }
];

const pepe = [
    [
        'Ahh!... What a wonderful day!',
        'pepeComing'
    ],
    [
        'Lets play something on my Windows 10 PC!',
        'pepeHappyLeft'
    ],
    [
        'The best operating system for gaming!',
        'pepeHappyRight'
    ],
    [
        'Hmm... But what should I play?',
        'pepeThinking'
    ],
    [
        'Ah! Lets play my absolute favorite game! To start it, I just need to double-click on the icon of the game. So easy on Windows!',
        'pepeHappyLeft'
    ],
    [
        'Now lets do it!',
        'pepeHappyRight'
    ],
    [
        'I really should start the best game in the world now!',
        'pepeHappyLeft'
    ],
    [
        'Dont waste time anymore, lets start this unbelivable great game!',
        'pepeUpsetRight'
    ],
    [
        'I should not wait anymore and instantly start the ultimate game for real MEN',
        'pepeUpsetLeft'
    ]
];

let notification = false;
let pepeCounter = 0;
let enableDbClick = false;

$: if(pepeCounter >= 4) enableDbClick = true;

onMount(() => {
    setTimeout(() => {
        notification = true;
    }, 4000);
});

const btnUp = e => {
    if(e.keyCode === 16) {
        setTimeout(() => {
            if(pepeCounter >= 0 && pepeCounter <= 7) {
                pepeCounter++;
            }
        }, 230);
    }
}
</script>

<svelte:window on:keyup={e => btnUp(e)} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="windows" on:click={e => false} in:scale>
    {#each apps as object}
        <WindowsApp alt={object.title} src={object.icon} title={object.title} {enableDbClick} />
    {/each}

    <WindowsTaskBar />
</div>

{#if state === 1}
    <PepeSpeaks pepe={pepe[pepeCounter][1]} text={pepe[pepeCounter][0]} />

    {#if notification}
        <WindowsNotification text="Press SHIFT to continue" bind:notification />
    {/if}

{:else if currEvent === $event}
    <WindowsStickyKeys />

    <!-- {#if notification}
        <WindowsNotification text="SHIFT = proceed" bind:notification />
    {/if} -->
{:else if currEvent === $event - 1}
    <PepeSpeaks pepe="pepeRageLeft" />
{/if}

<style>
div {
    background-image: url('/images/wallpaper.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    margin: 0;
}
</style>