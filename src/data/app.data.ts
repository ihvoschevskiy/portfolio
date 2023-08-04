import { TProjectListData, TStyledListData } from '@tps/app.types'

export const projects: TProjectListData[] = [
  {
    title: 'Apps',
    list: [
      {
        item: 'Github Users',
        description: 'Приложение для поиска пользователей Github',
        link: 'navigate to',
      },
      {
        item: 'Github Users',
        description: 'Приложение для поиска пользователей Github',
        link: 'navigate to',
      },
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
      {
        item: 'SkillUp',
        description: 'Приложение для отработки навыков в написании кода',
        link: 'navigate to',
      },
    ],
  },
  {
    title: 'Web Sites',
    list: [
      {
        item: 'Web News',
        description: 'Сайт новостей',
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
