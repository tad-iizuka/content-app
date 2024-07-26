<template>
  <div class="h-screen flex justify-between flex-col">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
  onMounted(() => {
    if (localStorage.getItem("Key") == 'undefined' || localStorage.getItem("Key") == null ) {
      const value = JSON.parse(JSON.stringify([]))
      localStorage.setItem("Key", JSON.stringify(value))
    }
  })
</script>
