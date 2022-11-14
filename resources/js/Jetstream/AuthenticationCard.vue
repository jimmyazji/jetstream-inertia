<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-zinc-100 dark:bg-zinc-900 transition-colors text-gray-600 dark:text-gray-300">
        <div>
            <slot name="logo" />
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-zinc-800 shadow-md overflow-hidden transition-colors text-gray-600 dark:text-gray-300">
            <slot />
        </div>
    </div>
</template>
