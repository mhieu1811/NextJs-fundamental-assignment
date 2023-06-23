import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import Layout from '../../lib/components/layout';

type PostDetail = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  content: string;
};

interface DetailPageProps {
  postDetail: PostDetail;
}
const Post: NextPage<DetailPageProps> = ({ postDetail }) => {
  console.log(postDetail);
  return (
    <Layout
      backgroundImage={postDetail.backgroundImage}
      title={postDetail.title}
      subTitle={postDetail.subTitle}
      post={true}
    >
      <article>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"
              dangerouslySetInnerHTML={{ __html: postDetail.content }}
            ></div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<DetailPageProps> = async ({
  params,
}) => {
  const postId = params?.id as string | undefined;
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`);
  const postDetail = await res.json();
  // console.log(postDetail);
  return { props: { postDetail: postDetail[0] } };
};

export default Post;
