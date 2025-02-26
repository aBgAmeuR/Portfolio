import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { bookmarksCategories } from '@/content/bookmarks';

type BookmarkCategoriesProps = {
  categories: string[];
  setCategories: (categories: string[]) => void;
};

export const BookmarkCategories = ({
  categories,
  setCategories,
}: BookmarkCategoriesProps) => {
  return (
    <ToggleGroup
      type="multiple"
      variant="outline"
      size="sm"
      className="container mb-4 justify-start"
      onValueChange={setCategories}
      value={categories || []}
    >
      {bookmarksCategories.map((category) => (
        <ToggleGroupItem
          key={category}
          value={category}
          className="rounded-3xl"
        >
          {category}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
