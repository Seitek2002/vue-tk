<template>
    <div class="header-wrapper">
        <Back />
        <header class="header">
            <Search />
            <Burger />
            <ul class="header__list">
                <li class="header__item">
                    <a href="#" class="header__link">
                        <img src="../assets/header/geo.svg" alt="" class="header__icon">
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" class="header__link">
                        <img src="../assets/header/compass.svg" alt="" class="header__icon">
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" class="header__link">
                        <img src="../assets/header/phone.svg" alt="" class="header__icon">
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" class="header__link">
                        <img src="../assets/header/share.svg" alt="" class="header__icon">
                    </a>
                </li>
            </ul>
        </header>
    </div>

</template>

<script>
import Search from '@/components/Search.vue'
import Burger from '@/components/Burger.vue'
import Back from './Sidebar/Back.vue'
export default {
    components: { Search, Burger, Back },

}
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__list {
        display: flex;
        gap: 30px;
    }
}

@media screen and (max-width:1300px) {
    .header {
        &__list {
            gap: 15px;
        }
    }
}

@media screen and (max-width:1200px) {
    .header {
        justify-content: unset;
        align-items: center;

        &__list {
            display: none;
        }

        &-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }
    }
}
</style>