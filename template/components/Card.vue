<template>
    <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    >
        <slot />
    </div>
</template>

<script>
export default {
    props: ['id', 'draggable'],
    methods: {
        dragStart: e =>{
            const terget = e.terget;
            e.dataTransfer.setData('card_id', targer.id);

            setTimeout(()=>{
                targer.style.display = "none"
            }, 0);
        }
    }
}
</script>