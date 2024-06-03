<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = ref([
  { label: 'День 1', link: '/day-1', isActive: false },
  { label: 'День 2', link: '/day-2', isActive: false },
  { label: 'День 3', link: '/day-3', isActive: false },
  { label: 'День 4', link: '/day-4', isActive: false },
  { label: 'День 5', link: '/day-5', isActive: false },
  { label: 'День 6', link: '/day-6', isActive: false },
  { label: 'День 7', link: '/day-7', isActive: false },
]);

watch(
  () => route.path,
  (currentPath) => {
    menuItems.value.forEach((item) => {
      item.isActive = item.link === currentPath;
    });
  }
);
</script>

<template>
  <header class="">
    <RouterLink class="hover:bg-slate-200" to="/">
      <div class="flex items-center justify-start p-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-16 w-16 fill-purple-500 stroke-none"
          >
            <path
              d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"
            />
            <path
              d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"
            />
            <path
              d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"
            />
          </svg>
        </div>
        <div class="ml-6 text-3xl font-bold text-purple-500">Отчет 7-дневного интенсива</div>
      </div>
    </RouterLink>
    <nav class="flex justify-center pb-7">
      <div v-for="menuItem in menuItems" :key="menuItem.link">
        <RouterLink :class="{ 'activeItem': menuItem.isActive }" class="menuitem" :to="menuItem.link" >{{ menuItem.label }}</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>



<style>
body {
  font-family: 'Roboto';
  @apply bg-gradient-to-r from-purple-100 to-violet-100 m-5

}

.menuitem {
  @apply mx-2 rounded p-2 hover:bg-purple-400 hover:text-slate-50 active:bg-purple-600 font-medium text-xl;
}

.activeItem {
  @apply bg-purple-600 text-slate-50
}

.router-link-active {
  @apply bg-purple-600 text-slate-50
}

</style>
