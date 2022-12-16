<template>
  <nav class="navbar">
    <router-link class="navbar-logo-link" to="/">
      <img src="../../assets/logo.svg" alt="logo-icon" class="logo" />
    </router-link>
    <ul class="navbar__list">
      <li v-for="link in links" :key="link.url" class="navbar__item" :class="{active: isActive === link.title}">
        <router-link @click="isActive = link.title" :to="link.url" class="navbar__link">
          <img :src="link.img" :alt="link.title" class="navbar__icon" />
          {{link.title}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const isActive = ref("Главная");
    const links = [
      {
        title: "Главная",
        url: "/",
        img: "/img/navbar/main.svg"
      },
      {
        title: "Новости",
        url: "/news",
        img: "/img/navbar/new.svg"
      },
      {
        title: "Сейсмическая активность",
        url: "/actions",
        img: "/img/navbar/actions.svg"
      },
      {
        title: "Информация",
        url: "/info",
        img: "/img/navbar/info.svg"
      },
    ]

    return {
      links,
      isActive
    }
  }
};
</script>

<style lang="scss">
.navbar {
  background: #2d6886;
  border-radius: 10px;
  padding: 20px;
  width: 265px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__list {
    margin-top: 140px;
  }
  &__link {
    display: flex;
    align-items: center;
    color: #6da7b5;
    font-size: 16px;
  }
  &__item {
    margin-top: 20px;
    padding: 11px 13px;
    &.active {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 10px;
    }
  }
  &__icon {
    margin-right: 24px;
  }
}

@media screen and (max-width:1200px) {
  .navbar {
    display: none;
    &-logo-link {
      display: none;
    }
    &__list {
      margin: 0;
    }
  }
}
</style>
