<template>
  <div class="justify-center items-center">
    <div class="flex my-4 justify-center items-center">
      <template v-for="n in 7" :key="n">
        <img :class="check(n-1)"  width="36" height="36" :src="`${$config.app.baseURL}` + items.default[n-1].image" />
      </template>
    </div>
    <div class="flex justify-center items-center">
      <template v-for="n in 6" :key="n">
        <img :class="check(n+6)" width="36" height="36" :src="`${$config.app.baseURL}` + items.default[n+6].image" />
      </template>
    </div>
    <div class="flex justify-center items-center">
      <div v-if="path" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <h5 class="text-center mt-6 mb-2 text-5xl font-bold tracking-tight text-gray-900">{{ name }}</h5>
        <img class="py-4 px-4 rounded-t-lg" :src="`${$config.app.baseURL}` + path" alt="" />
        <div class="p-5">
          <p class="mb-3 px-4 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const path = ref('');
const name = ref('');
const description = ref('');
const route = useRoute()
const items = await import(`~/assets/content.json`)

function check(v) {
  var value1 = localStorage.getItem('Key')
  const array = JSON.parse(value1);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == String(v)) {
      return 'px-1'
    }
  }
  return 'grey px-1'
}

if (route.query.id) {
  var value1 = localStorage.getItem('Key')
  const array = JSON.parse(value1);
  const serializedArray = JSON.stringify(array)
  const index = array.findIndex((val) => val === String(route.query.id));
  if (index == -1) {
    array[array.length] = route.query.id
    localStorage.setItem('Key', JSON.stringify(array))
  }
  path.value = items.default[route.query.id].image
  name.value = items.default[route.query.id].name
  description.value = items.default[route.query.id].description
}
</script>
<style>
.grey {
  filter: invert(50%) sepia(0%) saturate(11%) hue-rotate(143deg) brightness(150%) contrast(93%);
}
</style>
