<script setup>
import { Head, useForm } from "@inertiajs/inertia-vue3";
import JetAuthenticationCard from "@/Components/AuthenticationCard.vue";
import JetAuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
import JetButton from "@/Components/Button.vue";
import JetInput from "@/Components/Input.vue";
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import AppTheme from "@/Layouts/AppTheme.vue";

defineProps({
    status: String,
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <Head title="Forgot Password" />
    <nav class="fixed right-5 top-5">
        <AppTheme />
    </nav>
    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <JetValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <JetInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    label="email"
                    placeholder="jondoe@example.com"
                    class="mt-1 block w-full"
                    required
                    autofocus
                />
            </div>

            <div class="flex items-center justify-end mt-4">
                <JetButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Email Password Reset Link
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>
