<template>
  <div class="overflow-x-hidden">
    <header class="absolute h-16 lg:h-24 w-screen">
      <Header />
    </header>
    <UContainer class="pt-16 lg:pt-24">
      <slot />
    </UContainer>
  </div>
</template>
