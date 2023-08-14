import { TProjectListData, TStyledListData } from '@tps/app.types'

export const projectsIndex: TProjectListData[] = [
  {
    title: 'Apps',
    list: [
      {
        item: 'Github Users',
        description: 'Приложение для поиска пользователей Github',
        link: 'navigate to',
      },
      {
        item: 'Tasks',
        description: 'Минималистичный менеджер задач',
        link: 'navigate to',
      },
    ],
  },
  {
    title: 'Cli Tools',
    list: [
      {
        item: 'Weather cli',
        description: 'Приложение для просмотра прогноза погоды',
        link: 'navigate to',
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

export const projects = [
  {
    title: 'Github Users',
    stack: ['express', 'typescript', 'react', 'redux', 'postcss', 'webpack'],
    description: 'Приложение для поиска информации о пользователях github',
    points: [
      'Поддерживается локализация для русского и английского языков',
      'Настроена навигация с помощью клавиатуры',
      'Улучшена доступность приложения для людей с ограниченными возможностями',
      'Поддерживается использование приложения при отсутсвии связи',
      'В целях обеспечения приватности персонального токена github используется express сервер как промежуточный слой для запросов к api github',
    ],
    next: '',
    preveous: '',
    images: [],
    github_url: '',
    website_url: '',
  },
]
