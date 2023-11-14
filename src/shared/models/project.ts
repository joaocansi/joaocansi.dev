import { Asset } from 'contentful'

type Project = {
  title: string
  image: Asset
  github: string
  website: string
  description: string
}

export default Project
