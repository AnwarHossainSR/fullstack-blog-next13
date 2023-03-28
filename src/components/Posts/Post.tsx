/* eslint-disable @typescript-eslint/no-explicit-any */

import { PhotographIcon } from '@heroicons/react/outline';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { cx, myLoader } from '@/utils/all';

import CategoryLabel from './Category';

export default function Post({ post }: { post: any }) {
  const imageProps = post?.mainImage ? post.mainImage : null;

  return (
    <div className="cursor-pointer link-effect group">
      <div
        className={cx(
          'relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105'
        )}
      >
        <Link href={`/post/${post.slug}`}>
          {imageProps ? (
            <Image
              src={imageProps}
              loader={myLoader}
              // blurDataURL={imageProps.blurDataURL}
              alt="Thumbnail"
              className="transition-all"
              width="350"
              height="300"
              unoptimized
            />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <PhotographIcon />
            </span>
          )}
        </Link>
      </div>
      <CategoryLabel categories={post.categories} />
      <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
        <Link href={`/post/${post.slug}`}>
          <span className="link-underline link-underline-blue">
            {post.title}
          </span>
        </Link>
      </h2>
      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-5 h-5">
            {post.author.image && (
              <Image
                src={post.author.image}
                alt={post?.author?.name}
                className="rounded-full"
                width="20"
                height="20"
                loader={myLoader}
                unoptimized
              />
            )}
          </div>
          <span className="text-sm">{post.author.name}</span>
        </div>
        <span className="text-xs text-gray-300 dark:text-gray-600">&bull;</span>
        <time className="text-sm" dateTime={post.createdAt}>
          {format(new Date(post.createdAt), 'MMMM dd, yyyy')}
        </time>
      </div>
    </div>
  );
}
