'use client';

import { useState } from 'react';

import { BackBtn } from '@/components/back-btn';
import { BookmarkCard } from '@/components/bookmark-card';
import { BookmarkCategories } from '@/components/bookmark-categories';
import { Footer } from '@/components/footer';
import { Header, HeaderDescription, HeaderHeading } from '@/components/header';
import { bookmarks } from '@/content/bookmarks';

export default function Page() {
  const [categories, setCategories] = useState<string[]>([]);

  const filteredBookmarks = bookmarks
    .filter((bookmark) =>
      categories.length ? categories.includes(bookmark.category) : true
    )
    .sort((a, b) => {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return 0;
    });

  return (
    <>
      <Header className="container mb-8" themeToggle>
        <BackBtn>Retour</BackBtn>
        <HeaderHeading>Mes Bookmarks</HeaderHeading>
        <HeaderDescription>
          Découvrez ma sélection de ressources et outils, regroupant des
          solutions et frameworks pour accélérer et améliorer le développement
          web.
        </HeaderDescription>
      </Header>
      <BookmarkCategories
        categories={categories}
        setCategories={setCategories}
      />
      <div className="xs:grid-cols-2 container grid grid-cols-1 gap-4">
        {filteredBookmarks.map((bookmark, index) => (
          <BookmarkCard key={`bookmarks-${index}`} {...bookmark} />
        ))}
      </div>
      {filteredBookmarks.length === 0 && (
        <div className="container text-center text-neutral-500 dark:text-neutral-400">
          Aucun bookmark trouvé.
        </div>
      )}
      <Footer />
    </>
  );
}
