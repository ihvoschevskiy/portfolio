import { TProjectData, TProjectListData, TStyledListData } from '@tps/app.types'

export const projectsIndex: TProjectListData[] = [
  {
    title: 'Apps',
    list: [
      {
        item: 'Github Users',
        description: 'Приложение для поиска пользователей Github',
        link: 'github-users',
      },
      {
        item: 'Tasks',
        description: 'Минималистичный менеджер задач',
        link: 'tasks',
      },
    ],
  },
  {
    title: 'Cli Tools',
    list: [
      {
        item: 'Weather cli',
        description: 'Приложение для просмотра прогноза погоды',
        link: 'weather-cli',
      },
    ],
  },
]

export const education: TStyledListData[] = [
  {
    title: 'courses',
    list: [{ item: 'Курс фронтенд-разработка / karpov.courses (2023)', link: 'https://karpov.courses/dev/frontend' }],
  },
  {
    title: 'university',
    list: [
      {
        item: 'Высшее образование по специальности бухгалтерский учет, анализ и аудит / ХГУ им. Н.Ф. Катанова г. Абакан (2006)',
      },
    ],
  },
]

export const experience: TStyledListData[] = [
  {
    title: 'мебельный центр,',
    role: 'бухгалтер',
    list: [{ item: 'Организация и ведение бухгалтерского учета' }, { item: 'Автоматизация бизнес процессов' }],
  },
]

export const projects: TProjectData[] = [
  {
    index: '01',
    category: 'Apps',
    title: 'Github Users',
    slug: 'github-users',
    stack: ['typescript', 'react', 'redux', 'postcss', 'express', 'webpack', 'git'],
    description: 'Приложение для поиска информации о пользователях github',
    points: [
      'Поддерживается локализация для русского и английского языков',
      'Настроена навигация с помощью клавиатуры',
      'Улучшена доступность приложения для людей с ограниченными возможностями',
      'Поддерживается использование приложения при отсутсвии связи',
      'В целях обеспечения приватности персонального токена github используется express сервер как промежуточный слой для запросов к api github',
    ],
    next: 'tasks',
    previous: 'weather-cli',
    images: ['gh_users_0.png', 'gh_users_1.png', 'gh_users_2.png', 'gh_users_3.png'],
    github_url: 'https://github.com/ihvoschevskiy/gh-users',
    website_url: '',
  },
  {
    index: '02',
    category: 'Apps',
    title: 'Tasks',
    slug: 'tasks',
    stack: ['typescript', 'react', 'sass', 'firebase', 'webpack', 'git'],
    description: 'Минималистичный менеджер задач',
    points: [
      'Интеграция приложения с firebase',
      'Регистрация и вход с помощью почты и пароля',
      'Поддерживается вход в приложение с помощью аккаунтов google и github',
    ],
    next: 'weather-cli',
    previous: 'github-users',
    images: ['tasks_0.png', 'tasks_1.png', 'tasks_2.png', 'tasks_3.png'],
    github_url: 'https://github.com/ihvoschevskiy/tasks',
    website_url: '',
  },
  {
    index: '03',
    category: 'Cli Tools',
    title: 'Weather-cli',
    slug: 'weather-cli',
    stack: ['nodejs', 'git'],
    description: 'Консольное приложение для просмотра прогноза погоды',
    points: [
      'Поддерживается отображение прогноза погоды на текущий момент времени и на следующие 7 дней',
      'Приложение запоминает, для каких городов был запрошен прогноз погоды, упрощая в дальнейшем работу с этими городами',
      'Упрощенный доступ к прогнозу погоды для заданного по умолчанию города',
      'Для работы приложения  требуется токен к openweather api',
    ],
    next: 'github-users',
    previous: 'tasks',
    images: ['weather_0.png', 'weather_1.png', 'weather_2.png', 'weather_3.png'],
    github_url: 'https://github.com/ihvoschevskiy/weather-cli',
    website_url: 'https://www.npmjs.com/package/@ihvoschevskiy/weather-cli',
  },
]
