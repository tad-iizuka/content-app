<template>
  <div class="flex justify-center items-center">
    <div v-if="path" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <h5 class="text-center mt-6 mb-2 text-5xl font-bold tracking-tight text-gray-900">{{ name }}</h5>
      <img class="py-4 px-4 rounded-t-lg" :src="`${$config.app.baseURL}` + path" alt="" />
      <div class="p-5">
        <p class="mb-3 px-4 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const path = ref('');
const name = ref('');
const description = ref('');
const route = useRoute()

if (route.query.id) {
  const users = await import(`~/assets/content.json`)
  path.value = users.default[route.query.id].image
  name.value = users.default[route.query.id].name
  description.value = users.default[route.query.id].description
}
</script>
