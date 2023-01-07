<script>
import { event } from '$lib/store';
import { draggable } from 'svelte-drag';

const handleClick = () => $event++;
</script>

<div class="windowsPrompt" use:draggable={{
    cancel: '.cancel',
}}>
    <header>
        <div class="headline">
            Sticky Keys
        </div>
        <div class="windowBtns">
            <button class="minimize cancel" on:click={handleClick}>
                <img alt="minimize"  src="/images/underscore.svg" />
            </button>
            <button class="resize cancel" on:click={handleClick}>
                <img alt="resize" src="/images/rectangle.svg" />
            </button>
            <button class="close cancel" on:click={handleClick}>
                <img alt="close" src="/images/close.svg" />
            </button>
        </div>
    </header>
    <p class="title cancel">Do you want to turn on Sticky Keys?</p>
    <div class="inner cancel">
        <p>
            Sticky Keys lets you use the SHIFT, CTRL, ALT, or Windows Logo keys by pressing<br />
            one key at a time. The keyboard shortcut to turn on Sticky Keys is to press the<br />
            SHIFT key 5 times.
        </p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="blueText" on:click={handleClick}>Go to the Ease of Access Center to disable the keyboard shortcut</p>
    </div>
    <div class="promptBtns cancel">
        <button on:click={handleClick}>Yes</button>
        <button on:click={handleClick}>No</button>
    </div>
</div>

<style>
:root {
    --top: 220px;
    --left: 300px;
}
* {
    font-family: 'Roboto';
    color: #000000;
}
:global(.windowsPrompt) {
    position: absolute;
    top: 220px;
    left: 200px;
    width: 540px;
    height: 230px;
    background-color: #ffffff;
    border: 1px #60C1DC solid;
    font-size: 12px;
}
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.headline {
    padding: 8px;
}
.windowBtns {
    margin: 0px; 
}
.windowBtns button {
    background-color: transparent;
    border: none;
    padding: 7px 14px
}
.windowBtns button img {
    width: 10px;
    height: 10px;
    color: #000000;
}
.minimize:hover, .resize:hover{
    background-color: #e4e4e4;
}
.windowBtns .close:hover {
    background-color: rgb(219, 0, 0);
}
.title {
    padding: 20px;
    padding-bottom: 0px;
}
.inner {
    padding: 0px 40px;
}
.blueText {
    color: #3170c9;
}
.blueText:hover {
    text-decoration: underline;
    cursor: pointer;
}
.promptBtns {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    padding-top: 5px;
    margin-right: 30px;
}
.promptBtns button {
    margin: 5px;
    width: 70px;
    border: 1px #ACACAC solid;
    border-radius: 0px;
}
</style>