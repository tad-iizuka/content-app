<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="m-auto">
      <div class="text-center mb-4 text-5xl leading-none text-gray-900">すぎのこ農園</div>
      <img class="h-auto max-w-full" :src="`${ $config.app.baseURL }` + '/img/index.png'" alt="image description">
      <div class="text-center mb-4 text-base leading-none dark:text-gray-400">Proof of Concept</div>
    </div>
  </div>
  <footer class="flex justify-center items-center">
    <div class="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://ubunifu.co/"
          class="hover:underline">UBUNIFU™</a>. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>
