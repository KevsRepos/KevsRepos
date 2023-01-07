<script>
import { event } from "$lib/store";
import { onMount } from "svelte";


onMount(() => {
    setTimeout(() => {
        $event++;
    }, 3700);
});
</script>

<img alt="windows price" src="/images/windowsprice.png" />

<style>
img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: grow;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}

@keyframes grow {
    from {
        width: 50vw;
    }

    to {
        width: 80vw;
        transform: translateX(-80%);
    }
}
</style>