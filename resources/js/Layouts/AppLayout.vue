<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import JetBanner from "@/Components/Banner.vue";
import MainNavigation from "@/Components/MainNavigation.vue";
import Footer from "@/Components/Footer.vue"
defineProps({
    title: String,
});
</script>

<template>
    <div class="text-zinc-700 dark:text-zinc-300">
        <MainNavigation />
        <Head :title="title" />

        <JetBanner />

        <div
            class="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-200"
        >
            <!-- Page Heading -->
            <header
                v-if="$slots.header"
                class="bg-white dark:bg-zinc-800 shadow transition-colors duration-200"
            >
                <div
                    class="xl:max-w-6xl lg:max-w-4xl max-w-sm flex sm:block justify-center mx-auto py-9 px-4 sm:px-6 lg:px-8"
                >
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>
