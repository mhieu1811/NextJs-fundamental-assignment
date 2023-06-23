export async function getList() {
  const res = await fetch(`https://next-js-fundamental-assignment-mhieu1811.vercel.app/api/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function getPostDetail(postId: string) {
  const res = await fetch(`https://next-js-fundamental-assignment-mhieu1811.vercel.app/api/posts/${postId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
