'use client'

import { useState, useRef } from 'react'
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import Tesseract from 'tesseract.js'

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

export default function ScrollablePdfText() {
  const [pages, setPages] = useState<{ page: number; text: string | null }[]>([])
  const [loading, setLoading] = useState(false)
  const [ocrProgress, setOcrProgress] = useState(0)
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)
    setPages([])
    setOcrProgress(0)

    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
      setPdfDoc(pdf)

      const numPages = pdf.numPages
      const initialPages = Array.from({ length: numPages }, (_, i) => ({
        page: i + 1,
        text: null,
      }))

      // Extract native text for all pages
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i)
        const textContent = await page.getTextContent()
        const text = textContent.items
          .map((item: any) => item.str)
          .join(' ')
          .trim()
        initialPages[i - 1].text = text || null
      }

      setPages(initialPages)
    } catch (err) {
      console.error(err)
      alert('Failed to load PDF')
    } finally {
      setLoading(false)
    }
  }

  async function runOCR(pageNumber: number) {
    const pageData = pages.find((p) => p.page === pageNumber)
    if (!pageData || pageData.text !== null || !pdfDoc) return

    setLoading(true)
    setOcrProgress(0)

    try {
      const page = await pdfDoc.getPage(pageNumber)
      const viewport = page.getViewport({ scale: 2 })

      const canvas = document.createElement('canvas')
      canvas.width = viewport.width
      canvas.height = viewport.height
      const ctx = canvas.getContext('2d')

      await page.render({ canvasContext: ctx!, viewport }).promise

      const ocrResult = await Tesseract.recognize(canvas, 'eng', {
        logger: (m) => {
          if (m.status === 'recognizing text' && m.progress) {
            setOcrProgress(Math.round(m.progress * 100))
          }
        },
      })

      setPages((prev) =>
        prev.map((p) => (p.page === pageNumber ? { ...p, text: ocrResult.data.text.trim() } : p)),
      )
    } catch (err) {
      console.error(err)
      alert(`OCR failed for page ${pageNumber}`)
    } finally {
      setLoading(false)
      setOcrProgress(0)
    }
  }

  function downloadPageText(pageNumber: number) {
    const pageData = pages.find((p) => p.page === pageNumber)
    if (!pageData || !pageData.text) {
      alert('No text to download for this page.')
      return
    }
    const blob = new Blob([pageData.text], { type: 'text/plain;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `page-${pageNumber}.txt`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">PDF → Text (Scroll + Download)</h1>

      <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={loading} />

      {loading && <p className="mt-2">Processing… {ocrProgress > 0 && `${ocrProgress}% OCR`}</p>}

      <div
        ref={containerRef}
        className="mt-6 border rounded max-h-[500px] overflow-auto p-2 space-y-4"
      >
        {pages.map((p) => (
          <div
            key={p.page}
            className="p-4 border rounded bg-gray-50"
            onClick={() => runOCR(p.page)}
          >
            <div className="flex justify-between items-center mb-2">
              <strong>Page {p.page}</strong>
              {p.text !== null && (
                <button
                  className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    downloadPageText(p.page)
                  }}
                >
                  Download
                </button>
              )}
            </div>
            <div className="whitespace-pre-wrap">
              {p.text !== null ? p.text : 'Click to run OCR for this page…'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
