<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';

defineProps({
    policy: String,
});
</script>

<template>
    <Head title="Privacy Policy" />

    <div class="font-sans dark:text-zinc-300 text-gray-900 antialiased">
        <div class="pt-4 bg-zinc-100 dark:bg-zinc-900">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <JetAuthenticationCardLogo />
                </div>

                <div class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-zinc-800 shadow-md overflow-hidden prose dark:prose-headings:text-zinc-300 dark:text-zinc-400" v-html="policy" />
            </div>
        </div>
    </div>
</template>
