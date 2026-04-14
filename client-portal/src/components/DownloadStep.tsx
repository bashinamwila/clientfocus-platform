import { Loader2, ChevronLeft, ChevronRight, Download, Monitor, HardDrive, Wifi } from 'lucide-react'

interface DownloadStepProps {
  url: string
  platform?: string
  size?: string
  onNext: () => void
  onBack: () => void
  isSubmitting: boolean
  showBack?: boolean
}

export default function DownloadStep({ url, platform, size, onNext, onBack, isSubmitting, showBack = true }: DownloadStepProps) {
  const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5050'
  const downloadUrl = url && url.startsWith('/') ? `${apiBase}${url}` : (url || `${apiBase}/downloads/Financials-Studio-Setup.exe`)

  return (
    <div>
      <div className="text-center">
        <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center">
          <Download size={32} className="text-brand-navy" />
        </div>

        <h2 className="font-display font-bold text-xl text-brand-navy mb-2">Download Financials Studio</h2>
        <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
          Install the desktop app to start generating financial statements.
        </p>

        <a
          href={downloadUrl}
          className="inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors mb-3"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
          </svg>
          Download for Windows
        </a>
        <p className="text-xs text-gray-400 mb-8">
          {platform || 'Windows 10 or later'} &middot; {size || '~120 MB'}
        </p>

        <div className="bg-brand-bg rounded-lg p-4 text-left max-w-sm mx-auto mb-6">
          <p className="text-xs font-semibold text-brand-charcoal mb-2">System requirements</p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2">
              <Monitor size={14} className="text-brand-cyan flex-shrink-0" />
              <span className="text-xs text-gray-500">Windows 10 or later (64-bit)</span>
            </li>
            <li className="flex items-center gap-2">
              <HardDrive size={14} className="text-brand-cyan flex-shrink-0" />
              <span className="text-xs text-gray-500">4 GB RAM &middot; 500 MB disk space</span>
            </li>
            <li className="flex items-center gap-2">
              <Wifi size={14} className="text-brand-cyan flex-shrink-0" />
              <span className="text-xs text-gray-500">Internet connection required</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        {showBack ? (
          <button
            onClick={onBack}
            disabled={isSubmitting}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors disabled:opacity-50"
          >
            <ChevronLeft size={16} /> Back
          </button>
        ) : <div />}
        <button
          onClick={onNext}
          disabled={isSubmitting}
          className="flex items-center gap-2 bg-brand-navy text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>Finish setup <ChevronRight size={16} /></>
          )}
        </button>
      </div>
    </div>
  )
}
