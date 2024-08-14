<script setup>
  import { tracks } from '~/db/tracks.json';
</script>

<template>
  <ol class="w-full gap-4 grid grid-cols-2 sm:flex flex-wrap justify-center">
    <li v-for="track in tracks" :key="track.id">
      <UCard class="overflow-hidden" :ui="{ body: { padding: 'px-0 py-0 sm:p-0' } }">
        <CardsTrack class="w-1/2" :title="track.title" :art-url="track.artUrl" />
      </UCard>
    </li>
  </ol>
</template>
