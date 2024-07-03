<script setup>
const props = defineProps({ btnTitle: String, })
</script>
<template>
    <button class="btn">{{ btnTitle }}</button>
</template>

<style scoped>
.btn {
    background-color: var(--clr-accent);
    color: var(--clr-light);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover {
    background-color: var(--clr-accent-hover);
}
</style>