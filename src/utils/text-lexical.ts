type LexicalReturn = {
  [k: string]: unknown
  root: {
    type: string
    children: {
      [k: string]: unknown
      type: string
      version: number
    }[]
    direction: 'ltr' | 'rtl' | null
    format: '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
    indent: number
    version: number
  }
}

/**
 * Convert
 * @param texts
 */
export function textToLexical(texts: string[]): LexicalReturn {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: texts.map((line) => ({
        direction: 'ltr',
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'text',
            text: line,
            format: 0,
            style: '',
            mode: 'normal',
            detail: 0,
            version: 1,
          },
        ],
      })),
      direction: 'ltr',
    },
  }
}
