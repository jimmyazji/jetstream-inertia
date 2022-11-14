<template>
    <nav
        class="bg-white dark:bg-zinc-800 border-b border-gray-100 dark:border-gray-600 transition-colors duration-200"
    >
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-24">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('dashboard')">
                            <JetApplicationMark
                                class="block h-16 w-auto -mt-4"
                            />
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <JetNavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            Dashboard
                        </JetNavLink>
                    </div>
                </div>

                <div class="hidden sm:flex sm:items-center sm:ml-6">
                    <AppTheme />
                    <!-- Settings Dropdown -->
                    <div class="ml-3 relative">
                        <JetDropdown align="right" width="48">
                            <template #trigger>
                                <button
                                    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none transition hover:scale-110"
                                >
                                    <span
                                        class="pr-2 group-hover:pr-4 capitalize"
                                        >{{ $page.props.user.name }}</span
                                    >
                                </button>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <div
                                    class="block px-4 py-2 text-xs text-gray-400"
                                >
                                    Manage Account
                                </div>

                                <JetDropdownLink :href="route('profile.show')">
                                    Profile
                                </JetDropdownLink>
                                <div
                                    class="border-t border-gray-100 dark:border-gray-600"
                                />
                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <JetDropdownLink as="button">
                                        Log Out
                                    </JetDropdownLink>
                                </form>
                            </template>
                        </JetDropdown>
                    </div>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden space-x-4">
                    <AppTheme />
                    <button
                        class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-zinc-100 focus:outline-none focus:bg-zinc-100 focus:text-gray-500 transition"
                        @click="
                            showingNavigationDropdown =
                                !showingNavigationDropdown
                        "
                    >
                        <svg
                            class="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                :class="{
                                    hidden: showingNavigationDropdown,
                                    'inline-flex': !showingNavigationDropdown,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                :class="{
                                    hidden: !showingNavigationDropdown,
                                    'inline-flex': showingNavigationDropdown,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
            :class="{
                block: showingNavigationDropdown,
                hidden: !showingNavigationDropdown,
            }"
            class="sm:hidden"
        >
            <div class="pt-2 pb-3 space-y-1">
                <JetResponsiveNavLink
                    :href="route('dashboard')"
                    :active="route().current('dashboard')"
                >
                    Dashboard
                </JetResponsiveNavLink>
            </div>

            <!-- Responsive Settings Options -->
            <div class="pt-4 pb-1 border-t border-gray-200">
                <div class="flex items-center px-4">
                    <div
                        v-if="$page.props.jetstream.managesProfilePhotos"
                        class="shrink-0 mr-3"
                    >
                        <img
                            class="h-10 w-10 rounded-full object-cover"
                            :src="$page.props.user.profile_photo_url"
                            :alt="$page.props.user.name"
                        />
                    </div>

                    <div>
                        <div class="font-medium text-base text-gray-800">
                            {{ $page.props.user.name }}
                        </div>
                        <div class="font-medium text-sm text-gray-500">
                            {{ $page.props.user.email }}
                        </div>
                    </div>
                </div>

                <div class="mt-3 space-y-1">
                    <JetResponsiveNavLink
                        :href="route('profile.show')"
                        :active="route().current('profile.show')"
                    >
                        Profile
                    </JetResponsiveNavLink>

                    <JetResponsiveNavLink
                        v-if="$page.props.jetstream.hasApiFeatures"
                        :href="route('api-tokens.index')"
                        :active="route().current('api-tokens.index')"
                    >
                        API Tokens
                    </JetResponsiveNavLink>

                    <!-- Authentication -->
                    <form method="POST" @submit.prevent="logout">
                        <JetResponsiveNavLink as="button">
                            Log Out
                        </JetResponsiveNavLink>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";

import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";

import JetApplicationMark from "@/Components/ApplicationMark.vue";
import JetDropdown from "@/Components/Dropdown.vue";
import JetDropdownLink from "@/Components/DropdownLink.vue";
import JetNavLink from "@/Components/NavLink.vue";
import JetResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import AppTheme from "@/Layouts/AppTheme.vue";

const showingNavigationDropdown = ref(false);

const logout = () => {
    Inertia.post(route("logout"));
};
</script>
