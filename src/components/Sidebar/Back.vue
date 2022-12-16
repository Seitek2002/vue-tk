<template>
    <span @click="rout">Назад</span>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter()
        const rout = () => {
            router.push("/")
        }
        return {
            rout
        }
    }
}
</script>

<style scoped>
span {
    display: none;
    font-weight: 400;
    font-size: 20px;
    color: #858585;
}
@media screen and (max-width:1200px) {
    span {
        display: block;
    }
}
</style>