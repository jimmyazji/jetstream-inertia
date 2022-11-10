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
        class="inline-flex items-center px-4 py-2 dark:bg-zinc-900 border border-mango-600 dark:border-zinc-200 font-semibold text-xs text-mango-600 dark:text-zinc-200 uppercase tracking-widest shadow-sm hover:text-white dark:hover:text-zinc-50 focus:outline-none focus:ring  active:text-zinc-800 active:bg-zinc-50 disabled:opacity-25 transition slide-down"
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
    box-shadow: inset 0 100px 0 0 #E78717;
}
.slide-down:focus {
    box-shadow: inset 0 100px 0 0 #E78717;
    outline: 0px;
}
</style>
