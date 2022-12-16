<template>
    <div class="exchange exchange_info ">
        <ul class="exchange_info-list">
            <li v-for="item  in store.state.exchangeInfo" :key="item.id" class="exchange_info-item"><img :src="item.img"
                    alt="icon"> {{ item.text }}</li>
        </ul>
    </div>
    <section class="details">
        <div class="details-wrapper">
            <img src="/img/info/info-3.svg" alt="img" class="details-img">
            <div class="details-content">
                <div class="details-head">
                    <span class="details-number">1.</span>
                    <h4 class="details-subtitle">Зола - не просто несгораемый остаток после горения, но еще и ценное
                        микроудобрение. <span class="details-another">Oна:</span></h4>
                </div>
                <ul class="details-list">
                    <li class="details-description">улучшает качество кислой почвы;</li>
                    <li class="details-description">помогает почвенным микроорганизмам быстрее разлагать органику,</li>
                    <li class="details-description">превращая ее в доступные растениям элементы;</li>
                    <li class="details-description">способствует укоренению рассады;</li>
                    <li class="details-description">помогает эффективнее бороться со многими вредителями и заболеваниями
                    </li>
                </ul>
                <p class="details-text">Просто посыпьте золой растения и почву.</p>
            </div>
        </div>

        <div class="details-wrapper">
            <div class="details-content">
                <div class="details-head">
                    <span class="details-number">2.</span>
                    <h4 class="details-subtitle">Полив огорода в зимнее время предотвратит засушье почвы весной засчет
                        долговременнной увлажненности почвы </h4>
                </div>
                <div class="details-head">
                    <p class="details-subtitle">3. Использование детских подгузников на даче Многие дачники используют
                        обычные детские подгузники для выращивания однолетних цветов в горшках и подвесных кашпо.
                        Благодаря своему составу наполнитель подгузника способен удерживать в себе большой объем
                        жидкости. Если уложить его на дно горшка, растение будет обеспечено влагой на более долгий срок.
                        При этом корни растения не загнивают.</p>
                </div>

            </div>
            <img src="/img/info/icon-two.svg" alt="img" class="details-img">
        </div>
        <div class="details-wrapper">
            <img src="/img/info/icon-three.svg" alt="img" class="details-img">
            <div class="details-content">
                <div class="details-head">
                    <span class="details-number">4.</span>
                    <h4 class="details-subtitle">Положите в горшок с растением шарик снега. Это спобобствует
                        долговременному увлажнению почвы и предотвратит переполив</h4>
                </div>
                <div class="details-head">
                    <span class="details-number">5.</span>
                    <h4 class="details-subtitle">Для оздоровления лука используют чайную спитую заварку. Ее заранее
                        заготавливают и подсушивают. При посадке в каждую лунку добавляют немного этого удобрения.</h4>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        return {
            store,
        }
    }
}
</script>

<style lang="scss">
.details {
    &-wrapper {
        display: flex;
        gap: 40px;

        &:not(:first-child) {
            margin-top: 40px;
        }
    }

    &-another,
    &-number,
    &-description,
    &-text,
    &-subtitle {
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        max-width: 563px;
    }

    &-head {
        display: flex;
        gap: 15px;
        align-items: baseline;
    }

    &-another {
        color: #96EED7;
    }

    &-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &-description {
        padding-left: 55px;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            border-radius: 50%;
            background: #96EED7;
            width: 10px;
            height: 10px;
            top: 5px;
            left: 15px;
        }
    }

    &-text {
        margin-top: 15px;
        padding-left: 20px;
    }
}

@media screen and (max-width:1200px) {
    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width:750px) {
    .details {
        &-wrapper {
            flex-wrap: wrap;
            justify-content: center;
        }

        img {
            max-width: 100%;
        }
    }
}
</style>