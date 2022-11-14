<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
    modelValue: String,
    label: String,
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div class="relative group bg-transparent border-none">
        <input
            ref="input"
            class="w-full py-2 pl-0 text-base border-transparent border-b-zinc-500 outline-none bg-transparent group-focus-within:ring-transparent group-focus-within:border-transparent group-focus-within:border-b-mango-600 transition placeholder:opacity-0 group-focus-within:placeholder:opacity-100"
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <label
            :class="
                modelValue
                    ? '-translate-y-5 group-focus-within:text-mango-600 text-zinc-400 scale-90'
                    : 'group-focus-within:-translate-y-5 group-focus-within:text-mango-600 group-focus-within:scale-90'
            "
            class="absolute capitalize left-0 top-0 py-2 text-base pointer-events-none transition duration-200 ease-out origin-top-left group-hover:text-mango-600"
            for="input"
            >{{ label }}</label
        >
    </div>
</template>
