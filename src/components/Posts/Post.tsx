/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Post({ post }: { post: any }) {
  // const imageProps = post?.mainImage ? post.mainImage : null;
  // const authorImageProps = post?.author?.image ? post.author.image : null;

  console.log(post);

  return <div>Post</div>;
}
