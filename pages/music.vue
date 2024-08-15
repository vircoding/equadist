<script setup>
  import { tracks } from '~/db/tracks.json';

  const modal = ref(false);

  const modalTrack = ref({
    title: '',
    artUrl: '',
    urls: [],
  });

  const openModal = (index) => {
    modalTrack.value = tracks[index];
    modal.value = true;
  };
</script>

<template>
  <ol class="w-full gap-4 grid grid-cols-2 sm:flex flex-wrap justify-center">
    <li v-for="(track, index) in tracks" :key="track.id">
      <UCard class="overflow-hidden" :ui="{ body: { padding: 'px-0 py-0 sm:p-0' } }">
        <CardsTrack
          class="w-1/2"
          :title="track.title"
          :year="track.year"
          :duration="track.duration"
          :art-url="track.artUrl"
          :urls="track.urls"
        />
      </UCard>
    </li>
  </ol>
</template>
