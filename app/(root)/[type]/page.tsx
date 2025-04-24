// app/[type]/page.tsx
import { getFiles } from '@/lib/actions/file.actions';
import { getFileTypesParams, convertFileSize } from '@/lib/utils';
import FileExplorer from '@/components/FileExplorer';
import Sort from '@/components/Sort';
import { Models } from 'node-appwrite';
import React, { Suspense } from 'react';
import Loading from '@/components/loading';

export const revalidate = 30; // Cache server response for 30s

const PageContent = async ({ params, searchParams }: SearchParamProps) => {
  const type = (params?.type as string) || '';
  const searchText = (searchParams?.query as string) || '';
  const sort = (searchParams?.sort as string) || '';

  const types = getFileTypesParams(type) as FileType[];
  const files = await getFiles({ types, searchText, sort });

  const totalSizeInBytes = files.documents.reduce(
    (acc: number, file: Models.Document) => acc + (file.size || 0),
    0
  );

  const totalSizeFormatted = convertFileSize(totalSizeInBytes);
  const totalCount = files.total;

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total Files: <span className="h5">{totalCount}</span> | Total Size:{' '}
            <span className="h5">{totalSizeFormatted}</span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort By:</p>
            <Sort />
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <FileExplorer files={files.documents} />
      ) : (
        <p className="empty-list">No file uploaded</p>
      )}
    </div>
  );
};

const Page = (props: SearchParamProps) => (
  <Suspense fallback={Loading()}>
    {/* Using Suspense for progressive loading */}
    <PageContent {...props} />
  </Suspense>
);

export default Page;