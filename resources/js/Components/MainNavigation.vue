<template>
    <div
        @click="closeNav"
        v-show="showNav"
        class="fixed w-full h-full z-30 transition duration-500"
        :class="{ 'bg-black bg-opacity-20': showNav }"
    ></div>
    <nav
        class="absolute top-0 left-0 z-50 w-full flex justify-between items-center"
    >
        <div
            @click="toggleNav"
            class="flex justify-center items-center py-3.5 pl-2.5 pr-4 mt-6 ml-6 rounded-xl cursor-pointer select-none max-w-max dark:hover:bg-zinc-500 hover:bg-mango-500 group transition duration-300"
            :class="{ 'pr-5 pl-2 pt-4': !showNav }"
        >
            <div class="relative w-[22px] h-[17.3px]">
                <span
                    class="block bg-zinc-500 dark:bg-zinc-200 absolute h-0.5 w-full rounded-lg top-0 left-1.5 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-300 transition duration-300"
                    :class="{ 'rotate-45 origin-left': showNav }"
                ></span>
                <span
                    class="block bg-zinc-500 dark:bg-zinc-200 absolute h-0.5 w-full rounded-lg top-1.5 left-1.5 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-300 transition duration-300"
                    :class="{ 'opacity-0': showNav }"
                ></span>
                <span
                    class="block bg-zinc-500 dark:bg-zinc-200 absolute h-0.5 w-full rounded-lg top-3 left-1.5 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-300 transition duration-300"
                    :class="{ '-rotate-45 origin-left top-4': showNav }"
                ></span>
            </div>
        </div>
        <div class="mt-6 mr-6 space-x-4">
            <AuthSettings />
            <AppTheme />
        </div>
    </nav>
    <aside
        :class="showNav ? '-translate-x-0' : '-translate-x-full'"
        class="w-full sm:w-64 fixed z-40 transition-transform duration-300 ease-in-out"
        aria-label="Sidebar"
    >
        <div
            class="overflow-y-auto py-4 px-3 bg-zinc-50 dark:bg-zinc-800 border-r border-zinc-500 border-opacity-50 h-screen pt-24"
        >
            <a href="#" @click="closeNav" class="flex items-center px-3 mb-5">
                <img
                    src="/images/logoBlack.png"
                    class="w-full"
                    alt="Levant Center"
                />
            </a>
            <ul class="space-y-2" @click="closeNav">
                <NavLink
                    :href="route('dashboard')"
                    :active="route().current('dashboard')"
                    >Dashboard
                </NavLink>
            </ul>
        </div>
    </aside>
</template>
<script setup>
import { ref } from "vue";
import NavLink from "@/Components/NavLink.vue";
import AppTheme from "@/Layouts/AppTheme.vue";
import AuthSettings from "./AuthSettings.vue";
const showNav = ref(false);
const toggleNav = () => {
    showNav.value = !showNav.value;
};
const closeNav = () => {
    showNav.value = false;
};
</script>
