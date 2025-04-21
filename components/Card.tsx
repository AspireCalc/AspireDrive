import Link from 'next/link'
import { Models } from 'node-appwrite'
import React from 'react'
import Thumbnail from './Thumbnail'
import ActionDropdown from './ActionDropdown'

const Card = ({ file }: { file: Models.Document }) => {
    return (
        <Link href={file.url} target='_blank' className='file-card'>
            <div className="flex flex-row justify-between items-center px-4">
                <div className="max-w-[70%] overflow-hidden whitespace-nowrap text-ellipsis flex items-center">
                    <span className="truncate">{file.name.replace(/\.[^/.]+$/, '')}</span>
                    <span className="flex-shrink-0">{'.' + file.name.split('.').pop()}</span>
                </div>
                <ActionDropdown file={file} />
            </div>
            <div className='flex items-center justify-center bg-white h-[150px] rounded-x text-blue'>
                <div className="w-full h-full object-contain flex items-center justify-center">
                    <Thumbnail
                        type={file.type}
                        extension={file.extension}
                        url={file.url}
                        className='select-none bg-transparent'
                        imageClassName='max-h-[150px] max-w-full object-contain rounded-xl'
                    />
                </div>
            </div>
        </Link>
    )
}

export default Card