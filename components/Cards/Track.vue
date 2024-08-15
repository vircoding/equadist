<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    artUrl: {
      type: String,
      required: true,
    },
    urls: {
      type: Object,
      required: true,
    },
  });

  const modal = ref(false);
</script>

<template>
  <button @click="modal = true" class="flex w-full flex-col sm:w-60">
    <div class="aspect-1">
      <img :src="props.artUrl" />
    </div>
    <div
      class="h-16 w-full px-1.5 text-center text-white dark:bg-gray-800 bg-gray-900 sm:hidden flex justify-center items-center"
    >
      <span>{{ props.title }}</span>
    </div>
    <UModal v-model="modal" :ui="{ container: 'items-center' }">
      <UCard>
        <div class="flex gap-4 items-center">
          <!-- ArtCover -->
          <div class="w-1/2">
            <img :src="props.artUrl" />
          </div>

          <!-- Details -->
          <div class="grow shrink-0 basis-0 gap-3 flex flex-col text-gray-900 dark:text-white">
            <h3 class="font-bold">{{ props.title }}</h3>
            <!-- Metas -->
            <div class="flex flex-col">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-400"
                >Year: <span class="font-normal italic text-xs">{{ props.year }}</span></span
              >
              <span class="text-sm font-bold text-gray-600 dark:text-gray-400"
                >Duration:
                <span class="font-normal italic text-xs">{{ props.duration }}</span></span
              >
            </div>

            <!-- Links -->
            <div class="flex gap-2 mt-1">
              <UButton
                v-if="props.urls.soundclound"
                icon="i-fa6-brands-soundcloud"
                size="sm"
                color="black"
                square
                variant="solid"
              />
              <UButton
                v-if="props.urls.youtube"
                icon="i-fa6-brands-youtube"
                size="sm"
                color="black"
                square
                variant="solid"
              />
              <UButton
                v-if="props.urls.spotify"
                icon="i-fa6-brands-spotify"
                size="sm"
                color="black"
                square
                variant="solid"
              />
              <UButton
                v-if="props.urls.telegram"
                icon="i-fa6-brands-telegram"
                size="sm"
                color="black"
                square
                variant="solid"
              />
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </button>
</template>
