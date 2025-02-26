import { BackBtn } from '@/components/back-btn';
import { BookmarkCard } from '@/components/bookmark-card';
import { Footer } from '@/components/footer';
import { Header, HeaderDescription, HeaderHeading } from '@/components/header';
import { bookmarks } from '@/content/bookmarks';

export default function Page() {
  return (
    <>
      <Header className="container mb-8" themeToggle>
        <BackBtn>Retour</BackBtn>
        <HeaderHeading>Mes Bookmarks</HeaderHeading>
        <HeaderDescription>
          Voici une collection de mes favoris.
        </HeaderDescription>
      </Header>
      <div className="xs:grid-cols-2 container grid grid-cols-1 gap-4">
        {bookmarks.map((bookmark, index) => (
          <BookmarkCard key={`bookmarks-${index}`} {...bookmark} />
        ))}
      </div>
      <Footer />
    </>
  );
}
