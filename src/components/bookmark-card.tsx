import React from 'react';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';

import { Bookmark } from '@/content/bookmarks';

export const BookmarkCard = (bookmark: Bookmark) => {
  return (
    <a
      href={bookmark.link}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border-border relative aspect-video overflow-hidden rounded-lg border">
        <Image
          src={bookmark.image}
          alt={bookmark.title}
          width={1920}
          height={1080}
          className="size-full object-cover"
        />
        <div className="from-background absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
      </div>
      <div className="mt-1">
        <div className="flex items-center gap-1">
          <h3 className="text-pretty text-sm font-medium md:text-base">
            {bookmark.title}
          </h3>
          <MoveUpRight className="size-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
        </div>
        <p className="text-muted-foreground line-clamp-2 break-all text-xs md:text-sm">
          {bookmark.description}
        </p>
      </div>
    </a>
  );
};
