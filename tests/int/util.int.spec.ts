import { describe, it, beforeAll, expect } from 'vitest'
import { LyricExtractor } from '@/utils/lyric-extractor'
import { join } from 'pathe'

let extractor: LyricExtractor

describe('Utils.Extractor', () => {
  beforeAll(async () => {
    extractor = new LyricExtractor()
  })

  it('parse from path', async () => {
    const path = await extractor.parseFromPath(
      join(
        __dirname,
        '../..',
        'public/zikr/lyrics/nouhaDarHaal/Safar e karbala/Abbas jo zinda hai',
        // 'public/zikr/lyrics/marsias/2-5-6-7-9-10th(Imaam)/Momino qaana e zehra me qayamat hai aaj',
      ),
    )
    expect(path).toBeDefined()
  })
})
