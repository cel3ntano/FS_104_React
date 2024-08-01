const SearchBar = ({ handleChangeFilter, filterValue }) => {
  return (
    <div>
      <input
        placeholder='search'
        type='search'
        onChange={e => handleChangeFilter(e.target.value)}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBar;
