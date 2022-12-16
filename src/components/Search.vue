<template>
  <label class="search" for="search">
    <input class="search__input" id="search" type="text" placeholder="Регион" />
    <img
      class="search__icon"
      src="../assets/search/search-icon.svg"
      alt="search-icon"
    />
  </label>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search {
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  &__input {
    border: none;
    width: 100%;
    outline: none;
  }
}
@media screen and (max-width:445px) {
  .search {
    width: 130px;
    padding: 2px 5px;
  }
  .burger {
    margin-left: 5px !important;
  }
}
</style>
