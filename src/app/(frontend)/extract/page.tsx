"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function OCROnlyPdf() {
  const [pages, setPages] = useState<{ page: number; text: string | null; file: File | null }[]>([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // For OCR-only, each "page" is the PDF itself
    setPages([{ page: 1, text: null, file }]);
    setSelectedPage(1);
  }

  async function runOCR(pageNumber: number) {
    const pageData = pages.find((p) => p.page === pageNumber);
    if (!pageData || !pageData.file || pageData.text !== null) return;

    setLoading(true);
    setOcrProgress(0);

    try {
      const fileArrayBuffer = await pageData.file.arrayBuffer();
      const blob = new Blob([fileArrayBuffer], { type: "application/pdf" });

      const ocrResult = await Tesseract.recognize(blob, "eng", {
        logger: (m) => {
          if (m.status === "recognizing text" && m.progress) {
            setOcrProgress(Math.round(m.progress * 100));
          }
        },
      });

      setPages((prev) =>
        prev.map((p) =>
          p.page === pageNumber ? { ...p, text: ocrResult.data.text.trim() } : p
        )
      );
    } catch (err) {
      console.error(err);
      alert("OCR failed for page " + pageNumber);
    } finally {
      setLoading(false);
      setOcrProgress(0);
    }
  }

  function downloadPageText(pageNumber: number) {
    const pageData = pages.find((p) => p.page === pageNumber);
    if (!pageData || !pageData.text) return;

    const blob = new Blob([pageData.text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `page-${pageNumber}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function downloadAllPages() {
    const combinedText = pages
      .map((p) => `--- Page ${p.page} ---\n${p.text || "[No text]"}\n`)
      .join("\n");

    const blob = new Blob([combinedText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pdf-extracted-text.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-black">
      <h1 className="text-2xl font-bold mb-4">OCR-Only PDF → Text</h1>

      <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={loading} />

      {loading && <p className="mt-2">{ocrProgress > 0 ? `OCR: ${ocrProgress}%` : "Processing..."}</p>}

      {pages.length > 0 && (
        <div className="mt-6 space-y-4">
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => downloadAllPages()}
          >
            Download All Pages
          </button>

          {pages.map((p) => (
            <div
              key={p.page}
              className="p-4 border rounded bg-gray-50 cursor-pointer"
              onClick={() => runOCR(p.page)}
            >
              <div className="flex justify-between items-center mb-2">
                <strong>Page {p.page}</strong>
                {p.text && (
                  <button
                    className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPageText(p.page);
                    }}
                  >
                    Download
                  </button>
                )}
              </div>
              <div className="whitespace-pre-wrap">
                {p.text ? p.text : "Click to run OCR…"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
