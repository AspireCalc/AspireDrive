"use client";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { actionsDropdownItems } from "@/constants";
import { constructDownloadUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Models } from "node-appwrite";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { deleteFile, renameFile, updatedFileUsers } from "@/lib/actions/file.actions";
import { usePathname } from "next/navigation";
import { FileDetails, ShareInput } from "./ActionsModalContent";
import { Separator } from "./ui/separator";

const ActionDropdown = ({ file }: { file: Models.Document }) => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [action, setAction] = useState<ActionType | null>(null);
    const [name, setName] = useState(file.name);
    const [isLoading, setIsLoading] = useState(false);
    const path = usePathname();
    const [emails, setEmails] = useState<string[]>([]);
    const [loadingTrue, setloadingTrue] = useState(false);

    const closeAllModels = () => {
        setIsModelOpen(false);
        setIsDropdownOpen(false);
        setAction(null);
        setName(file.name);
        //setEmail([]);
    };

    const handleAction = async () => {
        if (!action) return;
        setIsLoading(true);
        let success = false;

        const actions = {
            rename: () => renameFile({ fileId: file.$id, name, extension: file.extension, path }),
            share: () => updatedFileUsers({ fileId: file.$id, emails, path }),
            delete: () => deleteFile({ fileId: file.$id, path, bucketFileId: file.bucketFileId })
        };

        success = await actions[action.value as keyof typeof actions]();
        if (success) {
            closeAllModels();
            setIsLoading(false);
        };
    }

    const handleRemoveUser = async (email: string) => {
        setloadingTrue(true)
        const updatedEmails = emails.filter((e) => e !== email);
        const success = await updatedFileUsers({
            fileId: file.$id,
            emails: updatedEmails,
            path,
        });
        if (success) setEmails(updatedEmails);
        setloadingTrue(false);
    }

    const renderDialogContent = () => {
        if (!action) return null;
        const { value, label } = action;

        return (
            <DialogContent className="shad-dialog button">
                <DialogHeader className="flex flex-col gap-3">
                    <DialogTitle className="text-center text-light-100">{label}</DialogTitle>
                    {value === "rename" && (
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    )}
                    {value === "details" && (
                        <FileDetails file={file} />
                    )}
                    {value === "share" && (
                        <ShareInput file={file} onInputChange={setEmails} onRemove={handleRemoveUser} isLoading={loadingTrue} />
                    )}
                    {value === "delete" && (
                        <p className="delete-confirmation">
                            Are you sure you want to delete {' '}
                            <span className="delete-file-name">{file.name}?</span>
                        </p>
                    )}
                </DialogHeader>
                {['rename', 'delete', 'share'].includes(value) && (
                    <DialogFooter className="flex flex-col gap-3 md:flex-row">
                        <Button onClick={closeAllModels} className="cancel-button">
                            Cancel
                        </Button>
                        <Button onClick={handleAction} className="submit-button">
                            <p className="capitalize">{value}</p>
                            {isLoading && (
                                <Image src="/assets/icons/loader.svg" alt="loader" width={24} height={24} className="animate-spin" />
                            )}
                        </Button>
                    </DialogFooter>
                )}
            </DialogContent>
        )
    }

    return (
        <Dialog open={isModelOpen} onOpenChange={setIsModelOpen}>
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger className="shad-no-focus">
                    <Image src="/assets/icons/dots.svg" alt="dots" width={34} height={34} className="hover:bg-light-200/30 rounded-[8px] p-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[260px] px-0 py-3 absolute left-[-230]">
                    {actionsDropdownItems.map((actionItem) => {
                        const isOpenWith = actionItem.value === "openWith";
                        const isRename = actionItem.value === "rename";
                        const isInfo = actionItem.value === "details";

                        return (
                            <div key={actionItem.value}>
                                <DropdownMenuItem
                                    className="p-2 px-1"
                                    onClick={() => {
                                        setAction(actionItem);
                                        if (['rename', 'share', 'delete', 'details'].includes(actionItem.value)) {
                                            setIsModelOpen(true);
                                        }
                                    }}
                                >
                                    
                                    {actionItem.value === "download" ? (
                                        <Link
                                            href={constructDownloadUrl(file.bucketFileId)}
                                            download={file.name}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <Image src={actionItem.icon} alt={actionItem.label} width={20} height={20} className="ml-2.5" />
                                            <span className="text-black font-normal px-2">{actionItem.label}</span>
                                        </Link>
                                    ) : isOpenWith ? (
                                        <div className="w-full flex items-center justify-between cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                <Image src={actionItem.icon} alt={actionItem.label} width={20} height={20} className="ml-2.5" />
                                                <span className="text-black font-normal px-2">{actionItem.label}</span>
                                            </div>
                                            <Image src="/assets/icons/openWith.svg" alt={actionItem.label} width={20} height={20} className="ml-2.5 mr-2.5" />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <Image src={actionItem.icon} alt={actionItem.label} width={20} height={20} className="ml-2.5" />
                                            <span className="text-black font-normal px-2">{actionItem.label}</span>
                                        </div>
                                    )}
                                </DropdownMenuItem>
                                {isOpenWith && <DropdownMenuSeparator className="bg-gray-300" />}
                                {isInfo && <DropdownMenuSeparator className="bg-gray-300" />}
                                {isRename && <DropdownMenuSeparator className="bg-gray-300" />}
                            </div>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
            {renderDialogContent()}
        </Dialog>
    )
}

export default ActionDropdown