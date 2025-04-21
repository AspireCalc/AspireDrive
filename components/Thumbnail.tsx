"use client";
import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Props {
    type: string,
    extension: string,
    url?: string,
    imageClassName?: string,
    className?: string,
}

const Thumbnail = ({ type, extension, url = '', imageClassName, className }: Props) => {
    const isPdf = extension === 'pdf';
    const isImage = type === "image" && extension !== "svg";

    const [pdfLoaded, setPdfLoaded] = useState(false);
    const fallbackIcon = getFileIcon(extension, type);

    return (
        <figure className={cn('thumbnail', className)}>
            {/* Show image */}
            {isImage && (
                <Image
                    src={url}
                    alt="thumbnail"
                    width={512}
                    height={512}
                    draggable={false}
                    className={cn('w-auto h-auto', imageClassName)}
                />
            )}

            {/* Show PDF preview */}
            {isPdf && (
                <div className="relative w-[150px] h-[150px] rounded-xl overflow-hidden bg-white">
                    {/* Fallback Icon */}
                    {!pdfLoaded && (
                        <Image
                            src={fallbackIcon}
                            alt="PDF icon"
                            fill
                            className="object-contain p-4"
                        />
                    )}

                    {/* PDF iframe */}
                    <iframe
                        src={`${url}#view=FitH`}
                        className={cn(
                            "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
                            pdfLoaded ? "opacity-100" : "opacity-0"
                        )}
                        onLoad={() => setPdfLoaded(true)}
                        title="PDF preview"
                        style={{
                            overflow: 'hidden',
                            border: 'none',
                        }}
                        scrolling="no"
                    />
                </div>
            )}

            {/* Other files (non-image, non-pdf) */}
            {!isImage && !isPdf && (
                <Image
                    src={fallbackIcon}
                    alt="file icon"
                    width={512}
                    height={512}
                    draggable={false}
                    className={cn('w-auto h-auto', imageClassName)}
                />
            )}
        </figure>
    );
};

export default Thumbnail;
