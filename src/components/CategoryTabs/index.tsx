// libraries
import { type FC, useState } from 'react';
// store
import { useGetCategoriesQuery } from 'store/services/category/categoryApi';

type CategoryTabsProps = {
  onSelect: (id: string) => void;
};

const CategoryTabs: FC<CategoryTabsProps> = ({ onSelect }) => {
  const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();
  const [activeId, setActiveId] = useState<string | null>('c1af01bc-2123-4d55-b5e2-4d02c8c9bc33');

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки категорий</div>;

  const handleClick = (id: string) => {
    setActiveId(id);
    onSelect(id);
  };

  return (
    <div className="container category-tabs">
      {categories.map((category) => (
        <button
          className={`category-btn ${activeId === category.uuid ? 'category-btn-active' : ''}`}
          key={category.uuid}
          onClick={() => handleClick(category.uuid)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
