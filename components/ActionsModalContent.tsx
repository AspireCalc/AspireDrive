import { Models } from 'node-appwrite'
import React from 'react'
import { convertFileSize, formatDateTime } from '@/lib/utils';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';
import UploadingThumbnail from './UploadingThumbnail';

const ImageThumbnail = ({ file }: { file: Models.Document }) => (
    <div className='file-details-thumbnail'>
        <UploadingThumbnail type={file.type} extension={file.extension} url={file.url} className='shadow-md  border border-black' />
        <span className="subtitle-2 line-clamp-1">{file.name}</span>
        
    </div>
)

const DetailRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex">
        <p className='file-details-label text-left'>{label}</p>
        <p className='file-details-value text-left'>{value}</p>
    </div>
)

export const FileDetails = ({ file }: { file: Models.Document }) => {
    return (
        <>
            <ImageThumbnail file={file} />
            <div className='space-y-4 px-2 pt-2 '>
                <DetailRow label="Format: " value={file.extension} />
                <DetailRow label="Size: " value={convertFileSize(file.size)} />
                <DetailRow label="Owner: " value={file.owner.fullName} />
                <DetailRow label="Last edit: " value={formatDateTime(file.$updatedAt)} />
            </div>
        </>
    )
}

interface Props {
    file: Models.Document,
    onInputChange: React.Dispatch<React.SetStateAction<string[]>>,
    onRemove: (email: string) => void,
    isLoading: boolean
}

export const ShareInput = ({ file, onInputChange, onRemove, isLoading }: Props) => {

    return (
        <>
            <ImageThumbnail file={file} />
            <div className='share-wrapper'>
                <p className='subtitle-2 pl-1 text-light-100'>Share file with other users</p>
            </div>
            <Input
                type='email'
                placeholder='Enter email id'
                onChange={e => onInputChange(e.target.value.trim().split(','))}
                className='share-input-field'
            />
            <div className='pt-4'>
                <div className='flex justify-between'>
                    <p className='subtitle-2 text-light-100'>Share with</p>
                    <p className='subtitle-2 text-light-200'>{file.users.length} users</p>
                </div>
                <ul className='pt-2'>
                    {file.users.map((email: string) => (
                        <li className='flex items-center justify-between gap-2' key={email}>
                            <p className='subtitle-2'>{email}</p>
                            {!isLoading && (
                                <Button onClick={() => onRemove(email)} className='share-remove-user' disabled={isLoading}>
                                    <Image src="/assets/icons/remove.svg" alt="remove" width={24} height={24} className='remove-icon' />
                                </Button>
                            )}
                            {isLoading && (
                                <Button className='bg-brand'>
                                    <Image src="/assets/icons/loader.svg" alt="remove" width={28} height={28} className='animate-spin' />
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}