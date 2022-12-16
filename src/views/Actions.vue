<template>
  <h2 class="name">Сейсмическая активность</h2>
  <div class="exchange exchange_actions">
    <ul class="exchange_actions-list">
      <li v-for="item in store.state.exchangeActions" :key="item" class="exchange_actions-item">{{ item }}</li>
    </ul>
  </div>
  <ul class="actions-nav">
    <li class="actions-item-link"><a href="#"><img src="/img/actions-nav/compass.svg" alt="img-link"></a></li>
    <li class="actions-item-link"><a href="#"><img src="/img/actions-nav/geo.svg" alt="img-link"></a></li>
    <li class="actions-item-link"><a href="#"><img src="/img/actions-nav/phone.svg" alt="img-link"></a></li>
    <li class="actions-item-link"><a href="#"><img src="/img/actions-nav/share.svg" alt="img-link"></a></li>
  </ul>
  <section class="actions">

    <div v-if="mapBolean" class="actions-img-wrapper">
      
      <img @click="(mapBolean = !mapBolean)" src="/img/actions/map.svg" alt="icon" class="actions-svg">
      <img v-if="(isActive === 9)" src="/img/actions/main.png" alt="mapImage" class="actions-image" />
      <img v-if="(isActive === 0)" src="/img/actions/help.png" alt="mapImage" class="actions-image" />
      <img v-if="(isActive === 4)" src="/img/actions/arthqak.png" alt="mapImage" class="actions-image" />

    </div>
    <div v-else class="actions-img-wrapper">
      <img @click="mapBolean = !mapBolean" src="/img/actions/map-white.svg" alt="icon" class="actions-svg">
      <img v-if="(isActive === 9)" src="/img/actions/main-white.png" alt="mapImage" class="actions-image" />
      <img v-if="(isActive === 0)" src="/img/actions/help-white.png" alt="mapImage" class="actions-image" />
      <img v-if="(isActive === 4)" src="/img/actions/arthqak-white.png" alt="mapImage" class="actions-image" />
    </div>
    <div class="actions-wrapper">
      <Actions @setActive="setActive" />
    </div>
  </section>
</template>

<script>
import Actions from "@/components/Card/Actions.vue";
import { useStore } from "vuex";
import { ref } from '@vue/reactivity';
export default {
  components: { Actions },
  setup() {
    const store = useStore();
    const setmap = ref("")
    const isActive = ref(9)
    const mapBolean = ref(true)
    setmap.value = store.state.setmap

    const setActive = (id) => {
      isActive.value = id
      console.log(isActive.value);
    }

    return {
      store,
      setmap,
      setActive,
      isActive,
      mapBolean,
    };
  },
};
</script>

<style lang="scss">
.actions {
  &-wrapper {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &-nav {
    display: none;
    padding: 30px 48px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background: #2D6886;
  }

  &-img-wrapper {
    border: 1px solid #000000;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 925px;
    max-height: 604px;
    overflow: hidden;
  }

  &-svg {
    position: absolute;
    top: 30.5px;
    left: 31.33px;
    cursor: pointer;
  }

  &-image {
    max-width: 100%;
  }
}

.exchange_actions {

  &-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  &-item {
    background: #96EED7;
    border-radius: 10px;
    width: 190px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;
  }
}

@media screen and (max-width:1200px) {
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-wrapper {
      justify-content: center;
    }

    &-nav {
      display: flex;
    }
  }

  .exchange_actions {
    display: none;
  }
}

@media screen and (max-width:550px) {
  .actions {
    &-image {
      max-width: unset;
      width: 150%;
    }
    &-nav {
      padding: 25px 10px;
    }
  }
}

@media screen and (max-width:398px) {
  .actions {
    &-image {
      max-width: unset;
      width: 200%;
    }

    &-block {
      width: 100%;
    }

    &-content {
      width: 100%;
      justify-content: center;
    }

    &-description {
      width: unset;
    }
  }
}
</style>
