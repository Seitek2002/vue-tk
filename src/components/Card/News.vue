<template>
  <div class="news-card">
    <img :src="item.img" alt="news-img" class="news-card__img" />
    <div class="news-card__info">
      <div class="news-card__top">
        <a href="#" class="news-card__category">Новости</a>
        <span class="news-card__date">2ч назад</span>
      </div>
      <h2 class="news-card__title">
        {{ item.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss">
.news-card {
  width: 265px;
  background: #ffffff;
  box-shadow: 0px 0px 44px rgba(64, 64, 64, 0.25);
  border-radius: 10px;
  overflow: hidden;

  &__img {
    width: 100%;
    height: 164px;
  }

  &__info {
    padding: 10px;
    box-sizing: border-box;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__category {
    font-size: 14px;
    color: #455a64;
  }

  &__date {
    font-size: 12px;
    color: #b7b7b7;
  }

  &__title {
    font-size: 16px;
    color: #455a64;
    font-weight: 400;
  }
}

@media screen and (max-width:1380px) {
  .news {
    &-card {
      width: 245px;
    }
  }
}

@media screen and (max-width:824px) {
  .news {
    &-content {
      gap: 25px;
    }
  }
}

@media screen and (max-width:813px) {
  .news {
    &-card {
      width: 190px;
      height: 208px;
    }

    &-card__img {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
