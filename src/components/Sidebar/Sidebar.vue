<template>
  <div class="sidebar">
    <Custom />
    <div class="sidebar__nav">
        <Navbar />
        <Exchangebar />
    </div>
  </div>
</template>

<script>
import Custom from "./Custom.vue"
import Navbar from "./Navbar.vue"
import Exchangebar from "./Exchangebar.vue"
export default {
    components: { Custom, Navbar, Exchangebar }

}
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    gap: 30px;
  }

  @media screen and (max-width:1200px) {
    .sidebar {
      display: none;
    }
  }
</style>