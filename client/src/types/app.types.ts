export type TStyledListData = { title: string; role?: string; list: { item: string; link?: string }[] }
export type TProjectListData = { title: string; list: { item: string; description: string; link: string }[] }
export type TProjectData = {
  index: string
  title: string
  slug: string
  stack: string[]
  description: string
  points: string[]
  next: string
  previous: string
  images: string[]
  github_url: string
  website_url: string
}
