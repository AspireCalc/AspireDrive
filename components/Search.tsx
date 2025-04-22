"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import Thumbnail from "@/components/Thumbnail";
import FormattedDateTime from "@/components/FormattedDateTime";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [results, setResults] = useState<Models.Document[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const [debouncedQuery] = useDebounce(query, 300);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else if (window.innerWidth > 640) {
        setIsMobile(false);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const fetchFiles = async () => {
      if (debouncedQuery.length === 0) {
        setResults([]);
        setOpen(false);
        return router.push(path.replace(searchParams.toString(), ""));
      }

      const files = await getFiles({ types: [], searchText: debouncedQuery });
      setResults(files.documents);
      setOpen(true);
    };

    fetchFiles();
  }, [debouncedQuery]);

  useEffect(() => {
    if (!searchQuery) {
      setQuery("");
    }
  }, [searchQuery]);

  const handleClickItem = (file: Models.Document) => {
    setOpen(false);
    setResults([]);

    router.push(
      `/${file.type === "video" || file.type === "audio" ? "media" : file.type + "s"}?query=${query}`,
    );
  };

  const handleClickDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 || prev === -1 ? results.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleClickItem(results[selectedIndex]);
      }
    }
  };

  return (
    <div className="search">
      <div className={isMobile ? "mobile-search-wrapper" : "search-input-wrapper"}>
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="Search..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => handleClickDown(e)}
        />

        {open && (
          <ul className="search-result">
            {results.length > 0 ? (
              results.map((file, index) => (
                <li
                  className={`flex items-center justify-between p-3 hover:bg-light-200/30 cursor-pointer rounded-2xl ${index === selectedIndex ? "bg-light-200/30" : ""
                    }`}
                  key={file.$id}
                  onClick={() => handleClickItem(file)}
                >
                  <div className="flex cursor-pointer items-center gap-4">
                    <Thumbnail
                      type={file.type}
                      extension={file.extension}
                      url={file.url}
                      className="size-9 min-w-9"
                    />
                    <p
                      className="subtitle-2 text-light-100 truncate max-w-[100%]"
                      title={file.name + '.' + file.extension} // optional tooltip
                    >
                      {file.name.length + file.extension.length + 1 > 30
                        ? `${file.name.slice(0, 25)}...${file.extension}`
                        : `${file.name}.${file.extension}`}
                    </p>
                  </div>

                  <FormattedDateTime
                    date={file.$createdAt}
                    className="caption line-clamp-1 text-light-200"
                  />
                </li>
              ))
            ) : (
              <p className="empty-result">No files found</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;