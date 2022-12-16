<template>
  <div class="main">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      return route.meta.layout + "-layout";
    });

    return {
      layout,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.main {
  padding: 30px 50px;
  box-sizing: border-box;
  width: 100%;
}

body {
  margin: 0;
  font-family: "Roboto";
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
}

.name {
  font-weight: 600;
  font-size: 20px;
  display: none;
  color: #2D6886;
}

.exchange {
  position: absolute;
  left: 170px;
  top: 570px;
  max-width: 266px;
  margin-top: 30px;
  background: #FFFFFF;
  box-shadow: 0px 0px 45px rgba(175, 175, 175, 0.25);
  border-radius: 10px;
  padding: 40px 37px;
  box-sizing: border-box;
}



@media screen and (max-width:1200px) {
  .exchange {
    position: unset;
    width: 100%;
    max-width: unset;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    background: #2D6886;

    li {
      color: #96EED7;
    }

    img {
      display: none;
    }
  }

  .name {
    display: block;
  }
}

@media screen and (max-width:911px) {
  .exchange {
    ul {
      justify-content: center;
    }
  }
}

@media screen and (max-width:885px) {
  .main {
    padding: 20px;
  }
}

@media screen and (max-width:380px) {
  .exchange {
    ul {
      max-width: 130px;
      text-align: center;

      li {
        width: min-content;
      }
    }
  }
}
</style>
