import Link from 'next/link';
import type { Key } from 'react';

import Label from '@/components/ui/label';

export default function CategoryLabel({ categories }: { categories: any }) {
  return (
    <div className="flex gap-2">
      {categories?.length &&
        categories.slice(0).map((category: any, index: Key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Link href={`/category/${category}`} key={index}>
            <Label color={category.color}>{`${category.title}  `}</Label>
          </Link>
        ))}
    </div>
  );
}
