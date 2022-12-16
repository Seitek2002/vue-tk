<template>
  <h2 class="name">Новости</h2>
  <div class="exchange exchange_news">
    <ul class="exchange_news-list">
      <li v-for="item in store.state.exchangeNews" :key="item.id" class="exchange_news-item"><img :src="item.img"
          alt="icon"> {{ item.text }}</li>
      <li class="exchange_news-item-another">Еще...</li>
    </ul>
  </div>
  <section class="cards-wrapper">
    <div class="cards-content">
      <News v-for="item in news" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script>
import News from "@/components/Card/News.vue";
import { useStore } from 'vuex';
export default {
  components: { News },
  setup() {
    const news = [
      {
        title: "Перестрелка на границе с Таджикистаном...",
        img: "/img/news/news-1.png",
        id: 0,
      },
      {
        title: "Осенний урожай на юге Кыргызстана...",
        img: "/img/news/news-2.png",
        id: 1,
      },
      {
        title: "В Баткене произошло землетрясение в 2 балла...",
        img: "/img/news/news-3.png",
        id: 2,
      },
      {
        title: "Отопление в Кыргызстане предстоящей зимой...",
        img: "/img/news/news-4.png",
        id: 3,
      },
      {
        title: "В Баткене прошла встреча с делегацией из Узбекистана...",
        img: "/img/news/news-5.png",
        id: 4,
      },
      {
        title: "Новобранцы МЧС дали присягу...",
        img: "/img/news/news-6.png",
        id: 5,
      },
      {
        title: "В городе Баткен водителей пассажирского транспорта призвали соблюдать ПДД...",
        img: "/img/news/news-7.png",
        id: 6,
      },
      {
        title: "В городе Раззаков асфальтируют дороги...",
        img: "/img/news/news-8.png",
        id: 7,
      },
    ];

    const store = useStore()

    return {
      news,
      store
    };
  },
};
</script>

<style lang="scss">
.cards-content {
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
}

.exchange_news {
  &-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 16px;
    color: #858585;
  }

  &-item-another {
    font-weight: 400;
    font-size: 20px;
    color: #7FCCB8;
  }
}

@media screen and (max-width:1380px) {
  .cards {
    &-wrapper {
      display: flex;
      justify-content: center;
    }
  }
}

@media screen and (max-width:1200px) {
  .exchange_news {
    
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

@media screen and (max-width:905px) {
  .cards {
    &-content {
      max-width: 66%;
    }
  }
}

@media screen and (max-width:896px) {
  .cards {
    &-content {
      max-width: 67%;
    }

    &-card {
      width: 230px;
    }


  }
}

@media screen and (max-width:885px) {
  .cards {
    &-content {
      gap: 20px;
    }
  }
}

@media screen and (max-width:813px) {
  .cards {
    &-content {
      max-width: 100%;
    }
  }
}
@media screen and (max-width:813px) {
  .cards {
    &-content {
      max-width: 100%;
      justify-content: center;
    }
  }
}
</style>
