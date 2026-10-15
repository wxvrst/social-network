<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue';
import Header from '@/components/layout/Header.vue';
import LeftSideBar from '@/components/layout/LeftSideBar.vue';
import RightSideBar from '@/components/layout/RightSideBar.vue';

</script>
<template>
  <Header />
  <div class="flex w-full justify-center overflow-hidden">
    <LeftSideBar class="w-16/100"/>
    <main class="min-w-0 w-6/10 px-4">
      <router-view />
    </main>
    <!-- <RightSideBar /> -->
  </div>
  <Footer />
</template>