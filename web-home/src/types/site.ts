export interface Site {
  id: number
  name: string
  url: string
  innerUrl?: string
  memo?: string
  favicon?: string
  bgColor?: string
}
export interface Group {
  id: number
  name: string
  siteList: Site[]
}
export interface Category {
  id: number
  name: string
  groupList: Group[]
}
