/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'contentful'
import Project from '../models/project'

interface Entry<T> {
  fields: T
}

const client = createClient({
  accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN),
  space: String(process.env.CONTENTFUL_SPACE_ID),
})

async function getProjects(): Promise<Project[]> {
  const entries = (await client.getEntries({ content_type: 'project' })) as any
  return entries.items.map((item: Entry<Project>) => item.fields) as Project[]
}

export default { getProjects }
