<template>
  <div class="custom">
    <div class="custom__lang">
      <a href="#">
        <img
          src="../../assets/custombar/russia.svg"
          alt=""
          class="custom__icon"
        />
      </a>
    </div>
    <ul class="custom__list">
      <li class="custom__item">
        <a href="#" class="custom__link">
          <img
            src="../../assets/custombar/share.svg"
            alt=""
            class="custom__icon"
          />
        </a>
      </li>
      <li class="custom__item">
        <a href="#" class="custom__link">
          <img
            src="../../assets/custombar/account.svg"
            alt=""
            class="custom__icon"
          />
        </a>
      </li>
      <li class="custom__item">
        <a href="#" class="custom__link">
          <img
            src="../../assets/custombar/notification.svg"
            alt=""
            class="custom__icon"
          />
        </a>
      </li>
      <li class="custom__item">
        <a href="#" class="custom__link">
          <img
            src="../../assets/custombar/settings.svg"
            alt=""
            class="custom__icon"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.custom {
  background: #2d6886;
  border-radius: 10px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  height: 515px;

  &__list {
    margin-top: 90px;
  }

  &__item {
    margin-top: 50px;
  }
}
</style>
