<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
    ? "flex items-center p-4 text-base font-normal text-white hover:bg-mango-600 dark:hover:bg-mango-600 bg-mango-500 dark:bg-mango-700"
    : "flex items-center p-4 text-base font-normal hover:bg-zinc-200 dark:hover:bg-zinc-700";
});
</script>

<template>
    <li>
        <Link :href="href" :class="classes">
            <slot />
        </Link>
    </li>
</template>
