<template>
  <div class="layout">
    <Sidebar />
    <div class="layout__content">
      <Header />
      <MiniNavbar />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Header from "@/components/Header.vue";
import MiniNavbar from '@/components/Sidebar/MiniNavbar.vue';
export default {
  components: { Sidebar, Header, MiniNavbar },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  gap: 30px;
  width: 100%;

  &__content {
    width: 100%;
  }
}

@media screen and (max-width:1200px) {
  .layout {
    flex-direction: column;
  }
}
</style>
