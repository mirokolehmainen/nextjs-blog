import Layout from '../components/layout';

export default function Blog() {
    return (
      <Layout>
        <h1>Blog</h1>
        <ul>
          <li>
            <h2>Post Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam magna a commodo elementum.</p>
            <p>Published on: May 10, 2023</p>
          </li>
          <li>
            <h2>Post Title 2</h2>
            <p>Nulla sed mauris tellus. Nullam eget diam sit amet mi dapibus facilisis non ac risus.</p>
            <p>Published on: May 5, 2023</p>
          </li>
          {/* Add more blog post items as needed */}
        </ul>
      </Layout>
    );
  }
