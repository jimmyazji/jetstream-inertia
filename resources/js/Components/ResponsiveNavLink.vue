<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    active: Boolean,
    href: String,
    as: String,
});

const classes = computed(() => {
    return props.active
        ? 'block pl-3 pr-4 py-2 border-l-4 border-mango-700 text-base font-medium text-gray-800 dark:text-gray-200 bg-zinc-200 dark:bg-zinc-600 focus:outline-none focus:text-mango-800 focus:bg-mango-100 focus:border-mango-700 transition'
        : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-200 hover:text-gray-800 hover:bg-zinc-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-zinc-50 focus:border-gray-300 transition';
});
</script>

<template>
    <div>
        <button v-if="as == 'button'" :class="classes" class="w-full text-left">
            <slot />
        </button>

        <Link v-else :href="href" :class="classes">
            <slot />
        </Link>
    </div>
</template>
