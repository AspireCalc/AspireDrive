'use client';

import { navItems } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Props {
    fullName: string;
    avatar: string;
    email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false); // State to track client-side mounting

    useEffect(() => {
        setIsMounted(true); // Set the component as mounted on the client
    }, []);

    useEffect(() => {
        if (isMounted) {
            setActivePath(pathname); // Update active path only after mount
        }
    }, [pathname, isMounted]);

    if (!isMounted) {
        return null; // Optionally, you can return a loading spinner or a fallback here
    }

    return (
        <aside className="sidebar">
            <Link href="/" className="flex flex-row gap-2">
                <Image
                    src="/assets/icons/logo-blue.png"
                    alt="logo"
                    width={52}
                    height={52}
                    className="h-auto block ml-2"
                />
                <p className="text-brand font-bold text-[28px] sm:hidden lg:block">AspireDrive</p>
            </Link>

            <nav className="sidebar-nav">
                <ul className="flex flex-1 flex-col gap-6">
                    {navItems.map(({ url, name, icon }) => (
                        <li
                            key={name}
                            className={cn(
                                "sidebar-nav-item",
                                activePath === url && "shad-active"
                            )}
                        >
                            <Link href={url} className="flex gap-2 items-center">
                                <Image
                                    src={icon}
                                    alt={name}
                                    width={24}
                                    height={24}
                                    className={cn(
                                        "nav-icon",
                                        activePath === url && "nav-icon-active"
                                    )}
                                />
                                <p className="hidden lg:block">{name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Image
                src="/assets/images/files-2.png"
                alt="file logo"
                width={506}
                height={418}
                className="w-full"
            />

            <div className="sidebar-user-info">
                <Image
                    src={avatar}
                    alt="avatar"
                    width={44}
                    height={44}
                    className="sidebar-user-avatar"
                />
                <div className="hidden lg:block">
                    <p className="subtitle-2 capitalize">{fullName}</p>
                    <p className="caption">{email}</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;