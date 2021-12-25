
export interface AboutDatasource {
  image: string
  title: string
  info: string
}

export interface RoadmapDatasource {
  year: string
  month: string
  info: string
  top: number
  complete?: boolean
}

export interface CommunityDatasource {
  name: string
  title: string
  link: string
}
