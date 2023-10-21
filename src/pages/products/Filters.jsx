const Filters = () => {
  return (
    <div
      id="sidebar-filters-wrapper"
      className="my-5 w-[95%] mx-auto md:pl-[20px]"
    >
      <div id="search-wrapper" className="my-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F1F5F8] border border-[#8d9096] p-2 rounded-sm  w-full"
        />
      </div>
      <div id="filter-category-wrapper" className="my-5">
        <h3>Category</h3>
        <div className="flex flex-wrap gap-3 items-center underline md:flex-col md:items-start">
          <button>All</button>
          <button>Office</button>
          <button>Living Room</button>
          <button>Kitchen</button>
          <button>Bedroom</button>
          <button>Dining </button>
          <button>Kids</button>
        </div>
      </div>
      <div id="filter-company-wrapper" className="my-5">
        <h3>Company</h3>
        <select className="bg-[#F1F5F8] border border-[#9095A0] py-1 px-3 rounded-sm">
          <option value="all">All</option>
          <option value="ikea">Ikea</option>
          <option value="marcos">Marcos</option>
          <option value="liddy">Liddy</option>
          <option value="caressa">Caressa</option>
        </select>
      </div>
      <div id="sort-wrapper">
        <select>
          <option value="lowest">sort by price (lowest)</option>
          <option value="highest">sort by price (highest)</option>
          {/* <option value="marcos">Marcos</option>
          <option value="liddy">Liddy</option>
          <option value="caressa">Caressa</option> */}
        </select>
      </div>
    </div>
  );
};
export default Filters;
