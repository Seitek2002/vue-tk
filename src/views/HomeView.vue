<template>
    <div class="home-logo-bgg"></div>
    <img src="/img/home/logo-bg.svg" alt="logo" class="home-logo-bg">
    <h2 class="name">Главная</h2>
    <nav class="navbar-another navbar-for-main-page">
        <router-link class="navbar-another-logo-link" to="/">
            <img src="@/assets/logo.svg" alt="logo-icon" class="logo" />
        </router-link>
        <ul class="navbar-another__list">
            <li v-for="link in links" :key="link.url" class="navbar-another__item"
                :class="{ active: isActive === link.title }">
                <router-link @click="isActive = link.title" :to="link.url" class="navbar-another__link">
                    <img :src="link.img" :alt="link.title" class="navbar-another__icon" />
                    {{ link.title }}
                </router-link>
            </li>
        </ul>
    </nav>
    <section class="home">
        <h1 class="home-name">Что такое “Тез кабар”?</h1>
        <div class="home-wrapper home-wrapper-one">
            <div class="home-description home-description-one">
                <p class="home-text">Проект, созданный для решения и предотвращения негативных последствий в следствие
                    природных явлений или технических чрезвычайных ситуациях. В его рамках проводятся очень важные
                    исследования, основные направления которых:</p>
                <p class="home-text-another">прогноз движения поверхности Земли;</p>
                <p class="home-text-another">изучение структуры недр и процессов в них происходящих;</p>
                <p class="home-text-another">разработка методов сокращения потерь, происходящих во время землетрясений;
                </p>
                <p class="home-text-another">помощь в поиске полезных ископаемых.</p>
                <p class="home-text home-text-second">Кроме этого исследования включают визуальные наблюдения и
                    регистрацию сейсмических
                    волн с помощью приборов и данных, полученных с сейстических станций и министерства чрезвычайных
                    ситуаций</p>
            </div>
            <div class="home-absolute">
                <img src="/img/home/img.svg" alt="img" class="home-img">
            </div>
        </div>
        <h2 class="home-title">Как определяется приближающася сейсмическая активность?</h2>
        <div class="home-wrapper home-wrapper-two ">
            <img src="/img/home/first.svg" alt="img" class="home-image">
            <div class="home-description home-description-two">
                <h1 class="home-subtitle">1. Землетрясение</h1>
                <p class="home-text">Прогноз землетрясений бывает долгосрочным (несколько лет), среднесрочным (месяцы) и
                    краткосрочным (дни и часы), причем каждый вид прогноза имеет вполне определенную конкретную
                    практическую направленность. </p>
                <p class="home-text-another">Долгосрочный прогноз дает возможность планировать землепользование и
                    застройку в сейсмоопасных районах Среднесрочный позволяет привести в готовность аварийные службы,
                    пополнить запасы медикаментов, продовольствия и т.д.</p>
            </div>
        </div>
        <p class="home-text-another">Краткосрочный может быть использован для принятия чрезвычайных мер, начиная с
            остановки особо опасных производств и полной эвакуации населения.</p>
        <p class="home-text home-text-therd">При прогнозировании ЧС в настоящее время основное значение придается так
            называемым
            предвестникам. Суть дела в следующем: Для прогноза землетрясений непрерывно измеряется некоторый
            геофизический, </p>
        <div class="home-wrapper home-wrapper-three ">
            <p class="home-text home-text-fourth home-description-three">геохимический или другой параметр в некоторой
                точке. Если произошло
                землетрясение и
                было установлено, что параметр за некоторое время до начала землетрясения необычно резко изменился, то
                эту аномалию связывают с землетрясением и называют предвестником. Если связь между землетрясениями и
                аномалиями подтверждена многократно, то есть устойчива, предвестники можно использовать для предсказания
                будущих землетрясений.
                В результате широкого развертывания наблюдений в сейсмоактивных районах мира за последние 20 лет
                обнаружено немало предвестников землетрясений. К наиболее надежным и часто повторяющимся относятся так
                называемое сейсмическое затишье, резкое увеличение уровня подземных вод в скважинах, сжатие или
                расширение участков земной поверхности, а также изменение электрического и магнитного полей Земли и
                электрического сопротивления горных пород.
            </p>
            <img src="/img/home/first.svg" alt="img" class="home-image">
        </div>
        <div class="home-wrapper home-wrapper-four ">
            <img src="/img/home/lost.svg" alt="img" class="home-img">
            <div class="home-description home-description-four">
                <h1 class="home-subtitle">1. Наводнения, сели, оползни</h1>
                <p class="home-text">Для прогнозирования используется гидрологический прогноз — научно
                    обоснованное предсказание развития, характера и масштабов наводнений. В прогнозе указывают примерно
                    время наступления какого-либо элемента ожидаемого режима, например вскрытия или замерзания реки,
                    ожидаемый максимум половодья, возможную продолжительность стояния высоких уровней воды, вероятность
                    затора льда и др.
                    Прогнозы делятся на краткосрочные — до 10-12 суток — и долгосрочные — до 2-3 месяцев и более.
                </p>
            </div>
        </div>
        <p class="home-text home-text-last">Они могут быть локальными (для отдельных участков рек и водоемов) или
            территориальными,
            содержащими обобщенные для значительной территории сведения об ожидаемых размерах и сроках явления.
            Многолетний опыт показал, что материальный ущерб от наводнений существенно уменьшается при наличии прогноза,
            хорошо налаженной службы информации и оповещения, высокой организованности и обученности населения.</p>
    </section>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const isActive = ref("Главная");
        const links = [
            {
                title: "Главная",
                url: "/",
                img: "/img/navbar/main.svg"
            },
            {
                title: "Новости",
                url: "/news",
                img: "/img/navbar/new.svg"
            },
            {
                title: "Сейсмическая активность",
                url: "/actions",
                img: "/img/navbar/actions.svg"
            },
            {
                title: "Информация",
                url: "/info",
                img: "/img/navbar/info.svg"
            },
        ]

        return {
            links,
            isActive
        }
    }
};
</script>

<style lang="scss">
.home {
    &-wrapper {
        display: flex;
        align-items: flex-start;
        gap: 30px;
        justify-content: space-between;
    }

    img {
        max-width: 100%;
    }

    &-logo-bg,
    &-logo-bgg {
        display: none;
    }

    &-logo-bgg {
        width: 117px;
        height: 27px;
        background: white;
        position: absolute;
        top: 40px;
        left: 40px;
    }

    &-logo-bg {
        position: absolute;
        top: 40px;
        left: 40px;
    }

    &-description {
        &-one {
            max-width: 425px;
        }

        &-two {
            max-width: 500px;
        }

        &-three {
            max-width: 550px;
        }

        &-four {
            max-width: 550px;
        }
    }

    &-name {
        font-weight: 500;
        font-size: 32px;
        color: #000000;
        margin-bottom: 35px;
    }

    &-text,
    &-text-another {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #000000;
    }

    &-text-another {
        position: relative;
        padding-left: 25px;
        margin-top: 15px;

        &::after {
            content: "";
            position: absolute;
            top: 10px;
            left: 10px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: black;
        }
    }

    &-text {
        &:first-child {
            margin-bottom: 30px;
        }

        &-second {
            margin-top: 45px;
        }
    }

    &-title {
        margin: 80px auto 60px;
        text-align: center;
        max-width: 419px;
        font-weight: 500;
        font-size: 24px;
        color: #000000;
    }

    &-subtitle {
        margin: 0;
        margin-bottom: 35px;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
    }

    &-text-therd {
        margin-top: 45px;
    }

    &-text-fourth {
        margin-top: 15px;
    }

    &-text-last {
        margin-top: 30px;
    }

    &-absolute {
        background: #2D6886;
        border-radius: 10px;
        position: relative;
        width: 453px;
        height: 340px;

        img {
            position: absolute;
            bottom: -30px;
            left: -30px;
        }
    }
}


@media screen and (max-width:1350px) {
    .home {
        &-description {
            &-one {
                max-width: unset;
            }

            &-two {
                max-width: unset;
            }

            &-three {
                max-width: unset;
            }

            &-four {
                max-width: unset;
            }
        }

        &-wrapper {
            justify-content: center;

            &-one {
                flex-wrap: wrap-reverse;
            }

            &-two {
                flex-wrap: wrap;
            }

            &-three {
                flex-wrap: wrap-reverse;
            }

            &-four {
                flex-wrap: wrap;
            }
        }



    }
}

@media screen and (max-width:1200px) {
    .navbar-for-main-page {
        display: block;
    }

    .home {
        &-logo-bg,
        &-logo-bgg {
            display: block; 
        }
    }
}

@media screen and (max-width:885px) {
    .home {

        &-logo-bgg,
        &-logo-bg {
            position: absolute;
            top: 30px;
            left: 15px;
        }
    }
}

@media screen and (max-width:540px) {
    .home {
        &-absolute {
            width: 350px;
            height: 220px;

            img {
                max-width: 80%;
                bottom: -10px;
                left: -15px;
            }
        }

        &-name {
            font-size: 20px;
        }
    }
}

@media screen and (max-width:445px) {
    .home {

        &-logo-bg,
        &-logo-bgg {
            top: 20px;
        }
    }
}

@media screen and (max-width:390px) {
    .home {
        &-absolute {
            width: 235px;
            height: 140px;
        }
    }
}
</style>