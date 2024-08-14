<template>
  <div class="overflow-x-hidden w-screen">
    <header class="absolute h-16 lg:h-24 w-full">
      <Header />
    </header>
    <UContainer class="py-16 lg:pt-24 min-h-screen flex flex-col justify-center">
      <slot />
    </UContainer>
  </div>
</template>
