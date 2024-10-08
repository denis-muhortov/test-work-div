import type { Questions } from '@/interface'

const defaultQuestions = [
  {
    id: 1,
    title: 'Что такое операционная система?',
    questions: [
      {
        id: 1,
        text: 'Это просто программа на компьютере, как и другие - Word или Chrome',
      },
      {
        id: 2,
        text: 'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный',
      },
      {
        id: 3,
        text: 'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем',
      },
      {
        id: 4,
        text: 'Нет такого понятия, есть понятие "файловая система"',
      },
    ],
    answer:
      'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем',
  },
  {
    id: 2,
    title: 'Является ли Android операционной системой?',
    questions: [
      {
        id: 1,
        text: 'Да, это такая же ОС, как и другие, просто для мобильных девайсов',
      },
      {
        id: 2,
        text: 'Нет, операционные системы бывают только для ПК',
      },
      {
        id: 3,
        text: 'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные',
      },
      {
        id: 4,
        text: 'Это домашняя страничка в настройках вашего браузера',
      },
    ],
    answer: 'Да, это такая же ОС, как и другие, просто для мобильных девайсов',
  },
  {
    id: 3,
    title: 'Что такое процессор компьютера?',
    questions: [
      {
        id: 1,
        text: 'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки',
      },
      {
        id: 2,
        text: 'Это общее название всех комплектующих компьютера',
      },
      {
        id: 3,
        text: 'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств',
      },
      {
        id: 4,
        text: 'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц',
      },
    ],
    answer:
      'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств',
  },
  {
    id: 4,
    title: 'Какие бывают разрядности у современных процессоров?',
    questions: [
      {
        id: 1,
        text: '32 и 64 бита',
      },
      {
        id: 2,
        text: '12 и 32 бита',
      },
      {
        id: 3,
        text: '15 и 32 бита',
      },
      {
        id: 4,
        text: '86 и 64 бита',
      },
    ],
    answer: '32 и 64 бита',
  },
  {
    id: 5,
    title: 'Какой тип процессора чаще всего используют мобильные девайсы?',
    questions: [
      {
        id: 1,
        text: 'iOS использует Intel, остальные используют AMD',
      },
      {
        id: 2,
        text: 'Чаще всего используют Intel',
      },
      {
        id: 3,
        text: 'Чаще всего используют AMD',
      },
      {
        id: 4,
        text: 'Чаще всего используют ARM',
      },
    ],
    answer: 'Чаще всего используют ARM',
  },
  {
    id: 6,
    title: 'Для чего компьютеру нужна RAM?',
    questions: [
      {
        id: 1,
        text: 'Для быстрого доступа к данным',
      },
      {
        id: 2,
        text: 'Для долгосрочного хранения данных',
      },
      {
        id: 3,
        text: 'Для правильной фрагментации памяти',
      },
      {
        id: 4,
        text: 'Для дефрагментации данных',
      },
    ],
    answer: 'Для быстрого доступа к данным',
  },
  {
    id: 7,
    title: 'Чем отличается HDD от SSD?',
    questions: [
      {
        id: 1,
        text: 'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее',
      },
      {
        id: 2,
        text: 'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее',
      },
      {
        id: 3,
        text: 'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее',
      },
      {
        id: 4,
        text: 'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее',
      },
    ],
    answer:
      'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее',
  },
  {
    id: 8,
    title: 'Как отличаются между собой USB?',
    questions: [
      {
        id: 1,
        text: 'Бывают только USB 2.0 и 3.2',
      },
      {
        id: 2,
        text: 'Бывают только micro-USB и mini-USB',
      },
      {
        id: 3,
        text: 'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)',
      },
      {
        id: 4,
        text: 'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)',
      },
    ],
    answer:
      'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)',
  },
  {
    id: 9,
    title: 'Какой файловой системы не существует?',
    questions: [
      {
        id: 1,
        text: 'Fat',
      },
      {
        id: 2,
        text: 'NTFS',
      },
      {
        id: 3,
        text: 'APFS',
      },
      {
        id: 4,
        text: 'BolSFS',
      },
    ],
    answer: 'BolSFS',
  },
] as Questions[]

const mixQuestions = defaultQuestions.sort(() => Math.random() - 0.5)
for (const question of mixQuestions) {
  question.questions.sort(() => Math.random() - 0.5)
}

export const questions = mixQuestions
