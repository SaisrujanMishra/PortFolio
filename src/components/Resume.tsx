import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Set worker URL for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Using a publicly accessible PDF for demonstration
const RESUME_URL = './SaisrujanResume.pdf';
const GOOGLE_DRIVE_URL = 'https://drive.google.com/file/d/1oyGj6ecMIAS7Hxczmc2vZ3KE65H-luZL/view?usp=sharing';

export default function Resume() {
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  React.useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) { // sm breakpoint
        setScale(0.6);
      } else if (width < 768) { // md breakpoint
        setScale(0.8);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  function onDocumentLoadSuccess() {
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    setError('Failed to load PDF. Please try again later.');
    console.error('PDF load error:', error);
  }

  // Base A4 dimensions
  const baseWidth = 500;
  const a4Ratio = 297 / 210;
  const pdfWidth = baseWidth * scale;
  const pdfHeight = pdfWidth * a4Ratio;

  return (
    <section className="py-20 bg-nightsky dark:bg-glacial">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-glacial dark:text-nightsky">
          Resume
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg flex justify-center gap-4 mb-8">
            <motion.a
              href={RESUME_URL}
              download="resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </motion.a>
            <motion.a
              href={GOOGLE_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors border border-purple-500/50 shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View on Drive</span>
            </motion.a>
          </div>

          {error ? (
            <div className="w-full max-w-lg bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-500 text-center">
              {error}
            </div>
          ) : (
            <div 
              className="bg-white rounded-lg shadow-xl overflow-hidden mx-auto"
              style={{ 
                width: `${pdfWidth}px`, 
                height: `${pdfHeight}px`,
                maxWidth: '100vw',
                transform: `scale(${scale})`,
                transformOrigin: 'top center'
              }}
            >
              <Document
                file={RESUME_URL}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nightsky dark:border-glacial"></div>
                  </div>
                }
              >
                <Page
                  pageNumber={1}
                  width={pdfWidth}
                  height={pdfHeight}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={
                    <div className="flex justify-center items-center h-full">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nightsky dark:border-glacial"></div>
                    </div>
                  }
                />
              </Document>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}