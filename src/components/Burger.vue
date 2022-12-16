<template>
    <div class="burger">
        <div class="burger-menu" :class="burger ? ' active' : ''" @click="setBurger()">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </div>
        <div class="burger-wrapper" :class="burger ? ' active' : ''">
            <ul class="burger-list">
                <li class="burger-item"><img src="@/assets/custombar/account.svg" alt="account"> Аккаунт</li>
                <li class="burger-item"><img src="@/assets/custombar/russia.svg" alt="russia"> Сменить язык</li>
                <li class="burger-item"><img src="@/assets/custombar/notification.svg" alt="notification"> Уведомления
                </li>
                <li class="burger-item"><img src="@/assets/custombar/settings.svg" alt="settings"> Настройки</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const burger = ref(false)

        const setBurger = () => {
            burger.value = !burger.value;
            if (burger.value) {
                document.querySelector("body").style.overflow = "hidden"
            } else {
                document.querySelector("body").style.overflow = "unset"
            }
        }

        return {
            burger,
            setBurger
        }
    }
}
</script>

<style lang="scss">
.burger {
    display: none;
    margin-left: 20px;

    &-line {
        width: 18px;
        height: 2px;
        background: #2D6886;
        margin: 2px 0;
        border-radius: 2px;
        transition: .3s;
        top: 52px;
    }

    &-menu {
        cursor: pointer;

        &.active .burger-line {
            background: white;
            position: fixed;
            top: 40px;
            z-index: 3;
            margin: 0;

            &:nth-child(1) {
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                position: unset;
            }

            &:nth-child(3) {
                transform: rotate(-45deg);
            }
        }
    }

    &-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 0;
        background: #2D6886;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: .3s;
        z-index: 2;

        &.active {
            height: 100vh;
        }
    }

    &-list {
        display: flex;
        flex-direction: column;
        gap: 35px;
        align-items: center;
    }

    &-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 400;
        font-size: 20px;
        color: #96EED7;
    }
}

@media screen and (max-width:1200px) {
    .burger {
        display: block;
    }
}
</style>