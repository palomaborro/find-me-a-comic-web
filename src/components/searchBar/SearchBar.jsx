import { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSubmit}) {
  const [search, setSearch] = useState("");

  return (
    <div className="SearchBar">
      <input
        value={search}
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={() => onSubmit(search)} type="submit">Search</button>
    </div>
  );
}
