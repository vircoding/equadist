<script setup>
  const socials = [
    {
      label: '',
      icon: 'i-fa6-brands-soundcloud',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-spotify',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-itunes-note',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-youtube',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-instagram',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-x-twitter',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-telegram',
      to: 'https://soundclound.com',
    },
    {
      label: '',
      icon: 'i-fa6-brands-tiktok',
      to: 'https://soundclound.com',
    },
  ];

  const links = [
    {
      label: 'Home',
      icon: 'i-hugeicons-home-01',
      to: '/',
    },
    {
      label: 'Music',
      icon: 'i-hugeicons-music-note-03',
      to: '/music',
    },
    {
      label: 'Contact',
      icon: 'i-hugeicons-message-02',
      to: '/contact',
    },
    {
      label: 'About',
      icon: 'i-hugeicons-user',
      to: '/about',
    },
  ];
</script>

<template>
  <UContainer class="flex justify-between items-center h-full">
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800 hidden lg:flex"
    />
    <UHorizontalNavigation
      :links="socials"
      class="border-b w-min border-gray-200 dark:border-gray-800 hidden lg:flex"
      :ui="{
        base: 'px-1.5',
      }"
    />
  </UContainer>
</template>
