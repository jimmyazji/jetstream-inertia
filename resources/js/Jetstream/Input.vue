<script setup>
import { onMounted, ref } from "vue";

defineProps({
  modelValue: String,
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
  <input
    ref="input"
    class="border-mango-600 focus:border-mango-600 focus:ring focus:ring-mango-200 focus:ring-opacity-50 shadow-sm dark:bg-zinc-800 dark:text-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-500 dark:disabled:bg-zinc-700"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
