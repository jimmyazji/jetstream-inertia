<script setup>
defineProps({
    type: {
        type: String,
        default: "button",
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition slide-down"
    >
        <slot />
    </button>
</template>
<style scoped>
.slide-down {
    box-shadow: inset 0 0 0 0 #18181b;
    -webkit-transition: ease-out 0.6s;
    -moz-transition: ease-out 0.6s;
    transition: ease-out 0.6s;
}
.slide-down:hover {
    box-shadow: inset 0 100px 0 0 #18181b;
}
.slide-down:focus {
    box-shadow: inset 0 100px 0 0 #18181b;
    outline: 0px;
}
</style>