<script>
import { onMount } from "svelte";


export let pepe, text = "";

$: {
    text,
    startText = false;

    setTimeout(() => {
        startText = true;
    }, 1200);
}

const pepes = {
    pepeComing: 'pepecoming.gif',
    pepeHappyLeft: 'pepehappylooksleft.png',
    pepeHappyRight: 'pepehappy.png',
    pepeThinking: 'pepethinking.png',
    pepeUpsetLeft: 'pepeupset.png',
    pepeUpsetRight: 'pepeupsetlooksright.png',
    pepeSweat: 'pepeSweat.png',
    pepeBeautiful: 'pepebeautiful.png',
    pepeKeyboard: 'pepekeyboard.gif',
    pepeLoveRight: 'pepelove.png',
    pepeLoveLeft: 'pepeloveleft.png',
    pepeRageRight: 'peperage.png',
    pepeRageLeft: 'peperagelooksleft.png'
}

let startText = false;

//this is absolutely stolen from the tutorial
function typewriter(node, { speed = 1 }) {
	const valid = (
		node.childNodes.length === 1 &&
		node.childNodes[0].nodeType === Node.TEXT_NODE
	);

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: t => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}

onMount(() => {
    setTimeout(() => {
        startText = true;
    }, 2200);
});

</script>

<style>
section {
    position: absolute;
    top: 20vh;
    right: 20vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
p {
    background-color: #1F1F1F;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    max-width: 300px;
}
</style>

<section>
    <img alt="pepe" src={`/images/${pepes[pepe]}`} />
    {#if startText && text}
    <p in:typewriter>{text}</p>
    {/if}
</section>