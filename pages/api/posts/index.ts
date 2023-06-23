// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  backgroundImage: string;
  title: string;
  subTitle: string;
  meta: string;
  content: string;
};

const data = [
  {
    id: '1',
    backgroundImage: '/img/post-bg.jpg',
    title: 'Post 1',
    subTitle: 'post ne`',
    meta: 'Day la post ne`',
    content: '<h1 style="text-align: center"> There is no content </h1>',
  },
  {
    id: '2',
    backgroundImage: '/img/post-bg.jpg',
    title: 'Post 1',
    subTitle: 'post ne`',
    meta: 'Day la post ne`',
    content: '<h1 style="text-align: center"> There is no content </h1>',
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(data);
}
