<template>
    <h2 class="name">Информация</h2>
    
  <div class="exchange exchange_info">
    <ul class="exchange_info-list">
      <li @click="rout()" v-for="item  in store.state.exchangeInfo" :key="item.id" class="exchange_info-item"><img :src="item.img"
          alt="icon"> {{ item.text }}</li>
    </ul>
  </div>
  <section class="cards-content">
    <Info />
  </section>
</template>

<script>
import Info from "@/components/Card/Info.vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  components: { Info },
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const rout = () => {
      router.push("/infodetails")
    }

    return {
      store,
      rout,
    }
  }
}
</script>

<style lang="scss">
.cards-content {
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
}

.exchange_info {

  &-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 16px;
    color: #858585;
    cursor: pointer;
  }
}
@media screen and (max-width:1200px) {
  .exchange_info {
    
    &-list {
      flex-direction: unset;
      flex-wrap: wrap;
      align-items: center;
    }
    &-item-another {
      display: none;
    }
  }
}

</style>