<template>
  <div @click="setRouter()" v-for="item in store.state.info" :key="item.id" class="info-card">
    <img :src="item.img" alt="info-icon" />
    <h2 class="info-card__title">{{item.text}}</h2>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const setRouter = () => {
      router.push("/infodetails")
    }
    return {
      store,
      setRouter
    }
  }
};
</script>

<style lang="scss">
.info-card {
  cursor: pointer;
  position: relative;
  width: 288px;
  height: 260px;
  &__title {
    background: url("../../assets/info/blur-container.png") center;
    width: 100%;
    padding: 20px 0;
    margin: 0;
    font-size: 16px;
    text-align: center;
    color: #000000;
    position: absolute;
    bottom: 0;
  }
}

@media screen and (max-width:1035px) {
  .cards {
    &-content {
      justify-content: center;
    }
  }
}
</style>
