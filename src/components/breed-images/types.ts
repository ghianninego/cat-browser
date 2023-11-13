export type TImageDetail = {
  id: string
  url: string
}

export type TImage = {
  list: TImageDetail[] | null
  totalCount: number
  currentCount: number
}
