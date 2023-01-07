<script>
import { onMount } from 'svelte';
import { fly, fade } from 'svelte/transition';

export let text, notification = true;

let timeout;

const waitOutFade = time => {
    timeout = setTimeout(() => {
        notification = false;
    }, time);
}

onMount(() => {
    waitOutFade(10000);
});
</script>

<style>
* {
    font-family: 'Roboto';
}
aside {
    position: fixed;
    right: 0px;
    bottom: 50px;
    margin: 15px;
    padding: 10px;
    background-color: #1F1F1F;
    display: flex;
    flex-direction: row;
    min-width: 300px;
}
section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
p {
    color: gray;
    margin: 0;
}
.title {
    font-size: 1.1em;

}
img {
    height: 32px;
    margin: 5px;
    margin-right: 15px;
}
button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 15px;
}
.closeBtn {
    margin: 0;
    padding: 5px;
    height: 32px;
    width: 32px;
    cursor: pointer;
}
button img {
    height: 8px;
    margin: 0px;
}
</style>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<aside 
    in:fly={{ x: 500, duration: 320}} 
    out:fade
    on:mouseover={() => clearTimeout(timeout)}
    on:mouseleave={() => waitOutFade(4000)}
>
    <img alt="AYAYA" src="/images/AYAYA.png" />
    <section>
        <p class="title"><b>Notification</b></p>
        <p>Reminder</p>
        <p class="text">{text}</p>
    </section>
    <button class="closeBtn" on:click={() => notification = false}>
        <img alt="close" src="/images/close-gray.svg" />
    </button>
</aside>