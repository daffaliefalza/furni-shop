import { useState } from "react";

const url = "https://course-api.com/react-store-products";

// const ProductsData = [
//   {
//     id: "recZkNf2kwmdBcqd0",
//     name: "accent chair",
//     price: 25999,
//     image: "https://www.course-api.com/images/store/product-1.jpeg",
//     colors: ["#ff0000", "#00ff00", "#0000ff"],
//     company: "marcos",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//     shipping: true,
//   },
//   {
//     id: "recEHmzvupvT8ZONH",
//     name: "albany sectional",
//     price: 109999,
//     image: "https://www.course-api.com/images/store/product-2.jpeg",
//     colors: ["#000", "#ffb900"],
//     company: "liddy",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//   },
//   {
//     id: "rec5NBwZ5zCD9nfF0",
//     name: "albany table",
//     price: 309999,
//     image: "https://www.course-api.com/images/store/product-3.jpeg",
//     colors: ["#ffb900", "#0000ff"],
//     company: "liddy",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "kitchen",
//   },
//   {
//     id: "recd1jIVIEChmiwhe",
//     name: "armchair",
//     price: 12599,
//     image: "https://www.course-api.com/images/store/product-4.jpeg",
//     colors: ["#000", "#00ff00", "#0000ff"],
//     company: "marcos",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "bedroom",
//     shipping: true,
//   },
//   {
//     id: "recotY5Nh00DQFdkm",
//     name: "dining table",
//     price: 42999,
//     image: "https://www.course-api.com/images/store/product-5.jpeg",
//     colors: ["#00ff00", "#0000ff", "#ff0000"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "dining",
//     shipping: true,
//   },
//   {
//     id: "rec1Ntk7siEEW9ha1",
//     name: "emperor bed",
//     price: 23999,
//     image: "https://www.course-api.com/images/store/product-6.jpeg",
//     colors: ["#0000ff", "#000"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "bedroom",
//     shipping: true,
//   },
//   {
//     id: "recNZ0koOqEmilmoz",
//     name: "entertainment center",
//     price: 59999,
//     image: "https://www.course-api.com/images/store/product-7.jpeg",
//     featured: true,
//     colors: ["#000", "#ff0000"],
//     company: "caressa",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//     shipping: true,
//   },
//   {
//     id: "recrfxv3EwpvJwvjq",
//     name: "high-back bench",
//     price: 39999,
//     image: "https://www.course-api.com/images/store/product-8.jpeg",
//     featured: true,
//     colors: ["#000", "#00ff00"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//     shipping: true,
//   },
//   {
//     id: "recoW8ecgjtKx2Sj2",
//     name: "leather chair",
//     price: 20099,
//     image: "https://www.course-api.com/images/store/product-9.jpeg",
//     colors: ["#ff0000", "#ffb900", "#00ff00"],
//     company: "caressa",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "bedroom",
//   },
//   {
//     id: "recEOA6qtDag1hRbU",
//     name: "leather sofa",
//     price: 99999,
//     image: "https://www.course-api.com/images/store/product-10.jpeg",
//     colors: ["#00ff00", "#0000ff"],
//     company: "caressa",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//   },
//   {
//     id: "recoAJYUCuEKxcPSr",
//     name: "modern bookshelf",
//     price: 31999,
//     image: "https://www.course-api.com/images/store/product-11.jpeg",
//     featured: true,
//     colors: ["#ffb900", "#ff0000", "#00ff00"],
//     company: "caressa",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "kids",
//   },
//   {
//     id: "recQ0fMd8T0Vk211E",
//     name: "modern poster",
//     price: 3099,
//     image: "https://www.course-api.com/images/store/product-12.jpeg",
//     colors: ["#000"],
//     company: "liddy",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//     shipping: true,
//   },
//   {
//     id: "rec7CjDWKRgNQtrKe",
//     name: "shelf",
//     price: 30999,
//     image: "https://www.course-api.com/images/store/product-13.jpeg",
//     colors: ["#00ff00"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//   },
//   {
//     id: "recF0KpwlkF7e8kXO",
//     name: "simple chair",
//     price: 109999,
//     image: "https://www.course-api.com/images/store/product-14.jpeg",
//     colors: ["#0000ff"],
//     company: "liddy",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//     shipping: true,
//   },
//   {
//     id: "recs5BSVU3qQrOj4E",
//     name: "sofa set",
//     price: 129999,
//     image: "https://www.course-api.com/images/store/product-15.jpeg",
//     colors: ["#00ff00", "#ffb900"],
//     company: "marcos",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//     shipping: true,
//   },
//   {
//     id: "recroK1VD8qVdMP5H",
//     name: "suede armchair",
//     price: 15999,
//     image: "https://www.course-api.com/images/store/product-16.jpeg",
//     colors: ["#ffb900"],
//     company: "caressa",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//   },
//   {
//     id: "rec7JInsuCEHgmaGe",
//     name: "utopia sofa",
//     price: 79999,
//     image: "https://www.course-api.com/images/store/product-17.jpeg",
//     featured: true,
//     colors: ["#ff0000", "#00ff00"],
//     company: "liddy",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "living room",
//   },
//   {
//     id: "rec3jeKnhInKHJuz2",
//     name: "vase table",
//     price: 120999,
//     image: "https://www.course-api.com/images/store/product-18.jpeg",
//     featured: true,
//     colors: ["#ff0000"],
//     company: "marcos",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//   },
//   {
//     id: "recv2ohxljlK2FZO7",
//     name: "wooden bed",
//     price: 250099,
//     image: "https://www.course-api.com/images/store/product-19.jpeg",
//     colors: ["#000", "#ffb900"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "bedroom",
//   },
//   {
//     id: "recJIjREF3dlFi3sR",
//     name: "wooden desk",
//     price: 150999,
//     image: "https://www.course-api.com/images/store/product-20.jpeg",
//     colors: ["#000"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//     shipping: true,
//   },
//   {
//     id: "recm7wC8TBVdU9oEL",
//     name: "wooden desk",
//     price: 40099,
//     image: "https://www.course-api.com/images/store/product-21.jpeg",
//     colors: ["#0000ff", "#00ff00"],
//     company: "ikea",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "office",
//   },
//   {
//     id: "rectfNsySwAJeWDN2",
//     name: "wooden table",
//     price: 234999,
//     image: "https://www.course-api.com/images/store/product-22.jpeg",
//     featured: true,
//     colors: ["#ffb900", "#ff0000"],
//     company: "caressa",
//     description:
//       "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     category: "kitchen",
//     shipping: true,
//   },
// ];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = ProductsData.filter((product) => {
    // fitur filter berdasarkan category
    const isCategoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;

    // fitur filter berdasarkan company
    const isCompanyMatch =
      selectedCompany === "all" || product.company === selectedCompany;

    // fitur searching
    const isSearchMatch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isCompanyMatch && isSearchMatch;
  });

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="mb-4 flex items-center">
          <label htmlFor="category" className="text-gray-600 mr-2">
            Filter by Category:
          </label>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "all" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Categories
          </button>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "office" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("office")}
          >
            Office
          </button>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "living room" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("living room")}
          >
            Living Room
          </button>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "kitchen" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "bedroom" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("bedroom")}
          >
            Bedroom
          </button>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "dining" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("dining")}
          >
            Dining
          </button>
          <button
            className={`border rounded p-2 ${
              selectedCategory === "kids" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryChange("kids")}
          >
            Kids
          </button>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="company" className="text-gray-600 mr-2">
            Filter by Company:
          </label>
          <select
            id="company"
            className="border rounded p-2"
            value={selectedCompany}
            onChange={handleCompanyChange}
          >
            <option value="all">All Companies</option>
            <option value="marcos">Marcos</option>
            <option value="liddy">Liddy</option>
            <option value="ikea">IKEA</option>
            <option value="caressa">Caressa</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="search" className="text-gray-600 mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="border rounded p-2"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 h-max">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 mb-6 "
            >
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 rounded-lg shadow-md"
              />
              {/* <p className="text-gray-700 mb-2">{product.description}</p> */}
              <div className="flex items-center mb-2">
                <span className="text-gray-600 mr-2">Price:</span>
                <span className="text-green-500 font-semibold">
                  ${product.price / 100}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-2">Category:</span>
                <span className="text-blue-500 font-semibold">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-2">Company:</span>
                <span className="text-purple-500 font-semibold">
                  {product.company}
                </span>
              </div>

              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
