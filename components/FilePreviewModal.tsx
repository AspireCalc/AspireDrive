'use client'

import React from 'react'
import { Models } from 'node-appwrite'
import { X } from 'lucide-react'

interface FilePreviewModalProps {
  file: Models.Document
  onClose: () => void
}

const FilePreviewModal = ({ file, onClose }: FilePreviewModalProps) => {
  const extension = file.name?.split('.').pop()?.toLowerCase() || ''
  const mimeType = file.mimeType || ''

  // Check from mimeType
  const isImage = mimeType.startsWith('image') || ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(extension)
  const isPDF = mimeType === 'application/pdf' || extension === 'pdf'
  const isVideo = mimeType.startsWith('video') || ['mp4', 'webm', 'mov'].includes(extension);

  // Close modal if overlay is clicked
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const previewArea = document.getElementById('previewArea');
    if (previewArea && !previewArea.contains(e.target as Node)) {
      onClose();
    }
  };

  const openCustomContext = (e: any) => {
    e.preventDefault();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
      onClick={handleOverlayClick}
    >
      <div id='overlay' className="relative bg-transparent rounded-2xl shadow-xl w-full h-full max-h-full max-w-full flex items-center justify-center">
        {/* Close Button - Top Left */}
        <button
          className="absolute top-3 left-3 text-white flex flex-row items-center gap-3"
        >
          <X onClick={onClose} className="w-6 h-6 hover:opacity-70 transition" />
          <span className='subtitle-1 line-clamp-1'>{file.name}</span>
        </button>

        {/* Preview Area - Centered */}
        <div className="p-4 overflow-auto h-full flex items-center justify-center bg-transparent" id='previewArea'>
          {isImage ? (
            <img
              src={file.url}
              alt={file.name}
              className="w-[500px] h-[500px] object-contain rounded-xl shadow select-none"
              draggable={false}
              style={{
                backgroundImage: `
               linear-gradient(45deg, #ccc 25%, transparent 25%), 
               linear-gradient(-45deg, #ccc 25%, transparent 25%), 
               linear-gradient(45deg, transparent 75%, #ccc 75%), 
               linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                backgroundColor: '#eee',
              }}
              onContextMenu={(e) => openCustomContext(e)}
            />
          ) : isPDF ? (
            <iframe
              src={file.url}
              className="w-[900px] h-[700px] rounded-lg border"
              title="PDF Preview"
            />
          ) : isVideo ? (
            <video
              src={file.url}
              controls
              preload='true'
              className="w-[1200px] aspect-video shadow-lg"
            />
          ) : (
            <p className="text-gray-500 text-center">No preview available for this file type.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FilePreviewModal