<script>
import { fly } from 'svelte/transition';
import ShiftBtn from "$lib/components/ShiftBtn.svelte";
</script>

<section in:fly={{ y: 200, duration: 250 }}>
    press <ShiftBtn /> again
</section>