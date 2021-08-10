<template>
    <div class="text-center relative group">
      <div class="px-4 w-full h-full bg-black bg-opacity-50 absolute top-0 left-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <h3 class="text-lg truncate text-white font-semibold">{{name}}</h3>
      </div>
      <img class="rounded-md" :src="image" alt="">
    </div>
</template>

<script>
export default {
    props: ['name', 'image']
}
</script>
