import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image"

interface Props {
    type: string,
    extension: string,
    url?: string,
    imageClassName?: string,
    className?: string,
}

const UploadingThumbnail = ({ type, extension, url = '', imageClassName, className }: Props) => {
    const isImage = type === "image" && extension !== "svg";
    const src = isImage ? url : getFileIcon(extension, type);

    return (
        <figure className={cn('uploadingThumbnail', className)}>
            <Image
                src={src}
                alt="thumbnail"
                width={512}
                height={512}
                draggable={false}
                className={cn('w-auto h-auto', imageClassName)}
            />
        </figure>
    );
};

export default UploadingThumbnail;