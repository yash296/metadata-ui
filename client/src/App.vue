<template>
  <nav
    class="fixed top-0 left-0 w-full flex justify-center space-x-4 bg-gradient-to-r from-pink-500 to-orange-400  items-center  text-white p-3 z-50 shadow-md">
    <RouterLink v-for="(route, index) in routes" :key="index"
      class="text-white hover:text-orange-800 font-medium p-2 rounded transition duration-300" :to="route.path">
      {{ route.name }}
    </RouterLink>
  </nav>
  <div class="mt-16 ">
    <router-view />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      routes: [{
        name: 'Home',
        path: '/'
      }, {
        name: 'About',
        path: '/about'
      }]
    }
  }
}
</script>

<style></style>
