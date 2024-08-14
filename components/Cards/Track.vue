<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    artUrl: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="flex w-full flex-col sm:w-60">
    <div class="aspect-1 bg-blue-600">
      <img :src="props.artUrl" />
    </div>
    <div
      class="h-16 px-1.5 dark:bg-gray-800 bg-gray-900 sm:hidden flex justify-center items-center"
    >
      <span class="text-center text-white">{{ props.title }}</span>
    </div>
  </div>
</template>
