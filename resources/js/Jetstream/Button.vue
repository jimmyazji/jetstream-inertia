<script setup>
defineProps({
    type: {
        type: String,
        default: "submit",
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 bg-mango-500 border border-transparent font-semibold text-xs text-white dark:text-gray-900 uppercase tracking-widest hover:bg-zinc-700 active:bg-zinc-900 focus:outline-none focus:border-gray-900 disabled:opacity-25 transition dark:hover:text-zinc-50 dark:focus:text-zinc-50 slide-down"
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
