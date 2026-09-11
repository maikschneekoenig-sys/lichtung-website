<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <span class="nature-icon" aria-hidden="true">
    <img :src="`/icons/${name}.svg`" alt="" width="26" height="26" />
  </span>
</template>
