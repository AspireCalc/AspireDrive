"use client";
import { Models } from 'node-appwrite'
import React, { useState } from 'react'
import Card from './Card';
import FilePreviewModal from './FilePreviewModal';

const FileExplorer = ({ files }: { files: Models.Document[] }) => {
    const [selectedFile, setSelectedFile] = useState<Models.Document | null>(null);

    return (
        <>
            <section className='file-list'>
                {files.map((file) => (
                    <Card key={file.$id} file={file} onPreview={() => setSelectedFile(file)} />
                ))}
            </section>

            {selectedFile && (
                <FilePreviewModal file={selectedFile} onClose={() => setSelectedFile(null)} />
            )}
        </>
    )
}

export default FileExplorer