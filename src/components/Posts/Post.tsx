/* eslint-disable @typescript-eslint/no-explicit-any */

import { PhotographIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ post, aspect }: { post: any; aspect: string }) {
  const imageProps = post?.mainImage ? post.mainImage : null;
  const authorImageProps = post?.author?.image ? post.author.image : null;

  console.log(authorImageProps);
  console.log(aspect);

  return (
    <div>
      <div>
        <Link href={`/post/${post.slug.current}`}>
          {imageProps ? (
            <Image
              src={imageProps.src}
              // loader={imageProps.loader}
              // blurDataURL={imageProps.blurDataURL}
              alt={post.mainImage.alt || 'Thumbnail'}
              className="transition-all"
            />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <PhotographIcon />
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
