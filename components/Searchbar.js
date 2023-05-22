import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}