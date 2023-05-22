import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  // Perform search operation based on the query

  return (
    <Layout>
      <h1>Search Results</h1>
      <p>Showing search results for: {query}</p>
    </Layout>
  );
}