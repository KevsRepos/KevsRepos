import PressShiftIntro from "$lib/components/PressShiftIntro.svelte";
import WindowsStickyKeys from "$lib/components/windows/WindowsStickyKeys.svelte";
import WindowsBlueScreen from "$lib/components/windows/WindowsBlueScreen.svelte";
import WindowsKekw from "$lib/components/emotes/WindowsKekw.svelte";
import WindowsDE from "$lib/components/windows/WindowsDE.svelte";
import Minecraft from "$lib/components/Minecraft.svelte";
import MultipleKekw from "$lib/components/emotes/MultipleKekw.svelte";
import PriceBashing from "$lib/components/PriceBashing.svelte";

const stateComponents = [
    [PressShiftIntro, ''],
    [WindowsStickyKeys, ''],
    [WindowsBlueScreen, ''],
    [WindowsKekw, ''],
    [WindowsDE, {state: 1}],
    [Minecraft, {state: 1}],
    [WindowsDE, {state: 2}],
    [WindowsDE, {state: 3}],
    [Minecraft, {state: 2}],
    [MultipleKekw, {state: 2}],
    [PriceBashing, '']
];

export default stateComponents;