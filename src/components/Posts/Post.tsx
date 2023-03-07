/* eslint-disable @typescript-eslint/no-explicit-any */

import { PhotographIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

import { myLoader } from '@/utils/all';

export default function Post({ post }: { post: any }) {
  const imageProps = post?.mainImage ? post.mainImage : null;
  const authorImageProps = post?.author?.image ? post.author.image : null;

  return (
    <div>
      <div>
        <Link href={`/post/${post.slug.current}`}>
          {imageProps ? (
            <Image
              src={imageProps.src || authorImageProps}
              loader={myLoader}
              // blurDataURL={imageProps.blurDataURL}
              alt="Thumbnail"
              className="transition-all"
              width="100"
              height="100"
              unoptimized
            />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <PhotographIcon />
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
