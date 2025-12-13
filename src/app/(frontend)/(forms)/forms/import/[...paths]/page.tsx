import { join } from 'pathe'
import * as fs from 'node:fs'
import { notFound } from 'next/navigation'
import ImportClientForm from '@/app/(frontend)/(forms)/forms/import/[...paths]/ImportClientForm'
import { appConfig } from '@/utils/app-config'

/**
 * Import Service Form
 * @param params
 * @constructor
 */
export default async function Page({ params }: { params: Promise<{ paths: string[] }> }) {
  const { paths } = await params
  const ROOT_PATH = appConfig.ROOT_PATH
  const dir_path = join(
    ROOT_PATH,
    'public/zikr/lyrics',
    paths.map((e) => decodeURIComponent(e)).join('/'),
  )

  if (!fs.existsSync(dir_path)) {
    console.error('No such directory', dir_path)
    return notFound()
  }

  const folders = fs.readdirSync(dir_path)

  return <ImportClientForm folders={folders} path={paths} />
}
