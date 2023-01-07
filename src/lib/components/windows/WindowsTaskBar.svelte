<script>
import { event } from "$lib/store";
import WindowsSearchbar from "$lib/components/windows/WindowsSearchbar.svelte";
import WindowsTaskTools from "$lib/components/windows/WindowsTaskTools.svelte";

</script>

<style>
nav {
    background-color: #000914;
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 50px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
section {
    display: flex;
}
button {
    height: 50px;
    width: 60px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    transition: 0.2s;
}
button:hover {
    background-color: rgba(128, 128, 128, 0.2);
}
button img {
    height: 15px;
}
.cortana {
    height: 25px;
}

.openedApps button {
    border-bottom: 2px #86B6D6 solid;
}
.openedApps button img {
    height: 28px;
}
.openedApps button:hover {
    border-bottom: 2px gray solid;
}
</style>

<nav>
    <section>
        <button>
            <img alt="Windows" src="/images/windowsIcon.svg" />
        </button>

        <WindowsSearchbar />

        <button>
            <img class="cortana" alt="Cortana" src="/images/cortana.svg" />
        </button>

        {#if $event >= 6}
            <section class="openedApps">
                <button on:click={() => $event++}>
                    <img alt="minecraft" src="/images/minecrafticon.png" />
                </button>
            </section>
        {/if}
    </section>

    <section>
        <WindowsTaskTools />
    </section>
</nav>
