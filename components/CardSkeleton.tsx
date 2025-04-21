import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="file-card shimmer rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex flex-row justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3 w-full">
                    <div className="h-4 rounded w-2/3 bg-shimmer" />
                    <div className="h-4 rounded w-10 bg-shimmer" />
                </div>
                <div className="h-6 w-6 rounded-[8px] bg-shimmer" />
            </div>
            <div className="flex items-center justify-center h-[150px] rounded-xl mt-2 px-4 pb-4">
                <div className="w-full h-full rounded-xl bg-shimmer" />
            </div>
        </div>
    );
};

export default CardSkeleton;