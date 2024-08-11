<script setup>
  const popover = ref(false);

  const handle = () => {
    popover.value = false;
  };

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
      click: handle,
    },
    {
      label: 'Music',
      icon: 'i-hugeicons-music-note-03',
      to: '/music',
      click: handle,
    },
    {
      label: 'Contact',
      icon: 'i-hugeicons-message-02',
      to: '/contact',
      click: handle,
    },
    {
      label: 'About',
      icon: 'i-hugeicons-user',
      to: '/about',
      click: handle,
    },
  ];
</script>

<template>
  <UContainer class="flex justify-between items-center h-full">
    <!-- Mobile Left -->
    <UPopover v-model:open="popover" overlay>
      <UButton
        icon="i-hugeicons-menu-square"
        size="sm"
        color="black"
        square
        variant="link"
        class="lg:hidden hover:no-underline"
      />
      <template #panel>
        <div class="p-4">
          <UVerticalNavigation
            :links="links"
            :ui="{
              icon: {
                inactive: 'group-hover:text-gray-400 dark:group-hover:text-gray-500',
              },
            }"
          >
          </UVerticalNavigation>
        </div>
      </template>
    </UPopover>

    <!-- Mobile Right -->
    <UHorizontalNavigation
      :links="socials"
      class="lg:border-b w-min border-gray-200 dark:border-gray-800 lg:hidden"
      :ui="{
        base: 'px-1.5',
        icon: {
          active: 'text-gray-900',
          inactive:
            'text-gray-900 group-hover:text-gray-900 dark:text-white dark:group-hover:text-white',
        },
      }"
    />

    <!-- Desktop Left -->
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800 hidden lg:flex"
    />

    <!-- Desktop Left -->
    <UHorizontalNavigation
      :links="socials"
      class="lg:border-b w-min border-gray-200 dark:border-gray-800 hidden lg:flex"
      :ui="{
        base: 'px-1.5',
      }"
    />
  </UContainer>
</template>
