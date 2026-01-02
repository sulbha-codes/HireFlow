const FilterBar = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 border rounded w-full"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="React">React</option>
        <option value="UI/UX">UI/UX</option>
      </select>
    </div>
  );
};

export default FilterBar;