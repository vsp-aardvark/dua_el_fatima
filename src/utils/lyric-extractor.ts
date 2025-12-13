import * as cheerio from 'cheerio'
import * as fs from 'node:fs'

/**
 * Lyrics Extractor
 */
export class LyricExtractor {
  public async parseFromPath(path: string) {
    if (!fs.existsSync(path)) {
      return undefined
    }

    const content = fs.readFileSync(path, 'utf8')

    content.replaceAll('<br>', '\n')
    content.replaceAll('<p>', '')
    content.replaceAll('</p>', '\n')

    const $ = cheerio.load(content)
    $('#urduTextPath').remove()
    $('h3').remove()

    const data = $('body').contents().text().trim()

    return data.split('\n')
    //
  }
}
