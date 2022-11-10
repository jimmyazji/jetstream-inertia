<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";

defineProps({
    terms: String,
});
</script>

<template>
    <Head title="Terms of Service" />

    <div class="font-sans text-zinc-900 dark:text-zinc-300 antialiased">
        <div class="pt-4 bg-zinc-100 dark:bg-zinc-900">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <JetAuthenticationCardLogo />
                </div>

                <div
                    class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-zinc-800 shadow-md overflow-hidden prose dark:prose-headings:text-zinc-300 dark:text-zinc-400"
                    v-html="terms"
                />
            </div>
        </div>
    </div>
</template>
