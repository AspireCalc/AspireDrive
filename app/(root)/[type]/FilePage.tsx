'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Sort from '@/components/Sort';
import { getFiles } from '@/lib/actions/file.actions';
import { getFileTypesParams } from '@/lib/utils';
import { Models } from 'node-appwrite';
import CardSkeleton from '@/components/CardSkeleton';

const FilePage = async ({ params }: SearchParamProps) => {
    const type = (await params)?.type as string || '';
    const types = getFileTypesParams(type) as FileType[];

    const [files, setFiles] = useState<Models.DocumentList<Models.Document> | null>(null);
    const [loadingCount, setLoadingCount] = useState<number>(4);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchFiles = async () => {
            setIsLoading(true);
            const result = await getFiles({ types });

            if (result?.total) {
                setFiles(result);
                setLoadingCount(Math.max(4, result.total));
            }
            setIsLoading(false);
        };

        fetchFiles();
    }, [type]);

    return (
        <div className="page-container">
            <section className="w-full">
                <h1 className="h1 capitalize">{type}</h1>
                <div className="total-size-section">
                    <p className="body-1">
                        Total: <span className="h5">{"0 MB"}</span>
                    </p>
                    <div className="sort-container">
                        <p className="body-1 hidden sm:block text-light-200">Sort By:</p>
                        <Sort />
                    </div>
                </div>
            </section>

            {isLoading ? (
                <section className="file-list">
                    {[...Array(loadingCount)].map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </section>
            ) : (
                files && files.total > 0 ? (
                    <section className="file-list">
                        {files.documents.map((file) => (
                            <Card key={file.$id} file={file} />
                        ))}
                    </section>
                ) : (
                    <section>
                        <p className="empty-list">No file uploaded</p>
                    </section>
                )
            )}
        </div>
    );
};

export default FilePage;