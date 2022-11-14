<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Components/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import JetButton from '@/Components/Button.vue';
import JetInput from '@/Components/Input.vue';
import JetValidationErrors from '@/Components/ValidationErrors.vue';
import AppTheme from "@/Layouts/AppTheme.vue";


const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Reset Password" />
    <nav class="fixed right-5 top-5">
        <AppTheme />
    </nav>
    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <JetValidationErrors class="mb-4" />

        <form class="py-6 space-y-6" @submit.prevent="submit">
            <div>
                <JetInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    label="email"
                    placeholder="jondoe@example.com"
                    class="mt-1 block w-full"
                    required
                    disabled
                />
            </div>

            <div class="mt-4">
                <JetInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    label="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="new-password"
                />
            </div>

            <div class="mt-4">
                <JetInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    label="confirm password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
            </div>

            <div class="flex items-center justify-end mt-4">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Reset Password
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>
