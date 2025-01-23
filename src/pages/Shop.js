import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

const Shop = () => {
  const API_URL = "https://mocki.io/v1/07b92cd2-2696-4a91-9a1b-3e342441fa0f";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchProductData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(posts.length / productsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-8">
          {currentProducts.map((post) => (
            <ItemCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <p className="text-lg font-semibold">No Data Found</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mb-10 mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
