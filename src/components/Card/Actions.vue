<template>
  <div :class="{active: inActive === i}" @click="$emit('setActive', item.id); setActive(i)" v-for="(item, i) in store.state.actions" :key="item.id" class="actions-block">
    <div class="actions-content">
      <img v-if="item.img" :src="item.img" alt="icon" />
      <p class="actions-description">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import Actions from "@/components/Card/Actions.vue";
import { useStore } from "vuex";
import { ref } from '@vue/reactivity';
export default {
  components: { Actions },
  setup() {
    const store = useStore();
    const inActive = ref(9);

    const setActive = (i) => {
      inActive.value = i
    }

    return {
      store,
      inActive,
      setActive,
    };
  },
};
</script>

<style lang="scss">
.actions {
  &-block {
    background: #2d6886;
    box-shadow: 0px 0px 45px rgba(175, 175, 175, 0.25);
    border-radius: 10px;
    width: 154px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 10px;

    &.active {
      background: #4087AB;
    }
  }
  &-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    width: min-content;
  }
  @media screen and (max-width:398px) {
    .actions-block {
      height: 75px;
    }
  }
}
</style>
