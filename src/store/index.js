import { createStore } from 'vuex'

export default createStore({
  state: {
    exchangeActions: [
      "Прогнозы",
      "Настоящее время",
      "Прогноз погоды",
      "Прогнозы",
      "Прогнозы",
      "Прогнозы",
    ],
    exchangeNews: [
      {
        id:0,
        img:"/img/news/icon-1.svg",
        text:"Последние",
      },
      {
        id:1,
        img:"/img/news/icon-2.svg",
        text:"Образование",
      },
      {
        id:2,
        img:"/img/news/icon-3.svg",
        text:"Области",
      },
      {
        id:3,
        img:"/img/news/icon-4.svg",
        text:"Ландшафт",
      },
      {
        id:4,
        img:"/img/news/icon-5.svg",
        text:"Международные",
      },
      {
        id:5,
        img:"/img/news/icon-6.svg",
        text:"Природа",
      },
    ],
    exchangeInfo: [
      {
        id:0,
        img:"/img/info/icon-1.svg",
        text:"Первая помощь ",
      },
      {
        id:1,
        img:"/img/info/icon-2.svg",
        text:"Сборник необходимых документов при ЧП",
      },
      {
        id:2,
        img:"/img/info/icon-3.svg",
        text:"Техника безопасности",
      },
      {
        id:3,
        img:"/img/info/icon-4.svg",
        text:"Советы от экпертов",
      },
      {
        id:4,
        img:"/img/info/icon-5.svg",
        text:"Лайфхаки",
      },
      {
        id:5,
        img:"/img/info/icon-6.svg",
        text:"Ведение сельского хозяйства",
      },
      {
        id:6,
        img:"/img/info/icon-7.svg",
        text:"Пункты выдачи гумпомощи",
      },
    ],

    setMap: "",

    info: [
      {
        id:0,
        img:"/img/info/info-1.svg",
        text:"Ведение сельского хозяйства"
      },
      {
        id:1,
        img:"/img/info/info-2.svg",
        text:"Первая помощь"
      },
      {
        id:2,
        img:"/img/info/info-3.svg",
        text:"Лайфхаки"
      },
      {
        id:3,
        img:"/img/info/info-4.svg",
        text:"Техника безопасности"
      },
      {
        id:4,
        img:"/img/info/info-5.svg",
        text:"Сборник необходимых документов в случае ЧП"
      },
      {
        id:5,
        img:"/img/info/info-6.svg",
        text:"Советы от экспертов"
      },
      {
        id:6,
        img:"/img/info/info-7.svg",
        text:"Пункты выдачи гумпомощи"
      },
    ],
    actions: [
      {
        id:0,
        img: "/img/actions/actions-1.svg",
        text:"Пункты медицинской помощи",
      },
      {
        id:1,
        img: "/img/actions/actions-2.svg",
        text:"Пункты временного размещения при эвакуации ",
      },
      {
        id:2,
        img: "/img/actions/actions-3.svg",
        text:"Военные действия",
      },
      {
        id:3,
        img: "/img/actions/actions-4.svg",
        text:"Оползни",
      },
      {
        id:4,
        img: "/img/actions/actions-5.svg",
        text:"Землетрясения",
      },
      {
        id:5,
        img: "/img/actions/actions-6.svg",
        text:"Сходы снежных лавин",
      },
      {
        id:6,
        img: "/img/actions/actions-7.svg",
        text:"Строительные работы",
      },
      {
        id:7,
        img: "/img/actions/actions-8.svg",
        text:"Наводнения",
      },
      {
        id:8,
        img: "/img/actions/actions-9.svg",
        text:"Оползни",
      },
      {
        id:9,
        img: null,
        text:"Другое...",
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
