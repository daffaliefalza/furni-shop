const Filtering = (props) => {
  const handleCategoryChange = (e) => {
    props.onCategoryChange(e.target.value);
  };

  const handleCompanyChange = (e) => {
    props.onCompanyChange(e.target.value);
  };

  const handleSearchChange = (e) => {
    props.onSearchChange(e.target.value);
  };

  const handleSortChange = (e) => {
    props.onSortChange(e.target.value);
  };

  return (
    <div className="flex flex-col flex-wrap  mb-4 ">
      <div id="search-wrapper" className="my-4">
        <input
          className="bg-[#F1F5F8]  py-2 w-full md:w-auto px-5 border border-[#9095A0] rounded"
          type="text"
          placeholder="Search products..."
          onChange={handleSearchChange}
          value={props.search}
        />
      </div>

      <div id="category-wrapper" className="my-4">
        <h3 className="text-[#2D4459] text-[22px] mb-2">Category</h3>
        <select
          onChange={handleCategoryChange}
          value={props.category}
          className="py-2 px-3 w-full md:w-56 border border-[#9095A0]"
        >
          <option value="all" defaultValue>
            All Category
          </option>
          <option value="office">Office</option>
          <option value="living room">Living Room</option>
          <option value="kitchen">Kitchen</option>
          <option value="bedroom">Bedroom</option>
          <option value="dining">Dining</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div id="company-wrapper" className="my-4">
        <h3 className="text-[#2D4459] text-[22px] mb-2">Company</h3>
        <select
          onChange={handleCompanyChange}
          value={props.company}
          className="py-2 px-3  w-full md:w-56   border border-[#9095A0]"
        >
          <option value="all" defaultValue>
            All Company
          </option>
          <option value="ikea">Ikea</option>
          <option value="marcos">Marcos</option>
          <option value="liddy">Liddy</option>
          <option value="caressa">Caressa</option>
        </select>
      </div>

      <div id="sort-wrapper">
        <h3 className="text-[#2D4459] text-[22px] mb-2">Sort Price</h3>
        <select onChange={handleSortChange} value={props.sortBy}>
          <option value="" defaultValue disabled>
            Sort by
          </option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </div>
    </div>
  );
};

export default Filtering;
