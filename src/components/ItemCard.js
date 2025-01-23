const ItemCard = ({ post }) => {
  return (
    <div
      className="relative flex flex-col justify-start 
      hover:scale-105 transition-transform duration-300 ease-in-out 
      p-4 rounded-xl 
      w-[260px] h-auto 
      sm:w-[300px] sm:p-5 
      lg:w-[320px] lg:p-6"
    >
      {/* Product Image */}
      <img
        src={post.image || "https://via.placeholder.com/260x290"}
        alt={post.title || "Product"}
        className="h-[290px] w-[260px] object-cover rounded-lg 
        sm:h-[320px] sm:w-[300px] 
        lg:h-[340px] lg:w-[320px]"
      />

      {/* Product Title */}
      <p
        className="text-xl leading-7 font-semibold mx-4 text-gray-800 
        sm:text-2xl sm:leading-8 
        lg:text-2xl lg:leading-8"
      >
        {post.title || "No Title"}
      </p>

      {/* Product Description */}
      <p
        className="font-medium text-base mx-4 opacity-60 text-gray-600 
        sm:text-lg sm:leading-6 
        lg:text-lg lg:leading-6"
      >
        {post.description || "No Description"}
      </p>

      {/* Percentage Discount */}
      {post.percentage && (
        <p
          className="absolute bg-orange-500 text-white rounded-full px-2 py-1 text-xs font-medium 
          top-4 right-4 
          sm:top-5 sm:right-5 
          lg:top-6 lg:right-6"
        >
          {post.percentage}
        </p>
      )}

      {/* Price and Discount */}
      <div className="flex mx-4 gap-2 mt-2">
        <p
          className="font-semibold text-lg leading-6 text-gray-800 
          sm:text-xl sm:leading-7 
          lg:text-xl lg:leading-7"
        >
          {post.price || "No Price"}
        </p>
        {post.discount && (
          <p
            className="text-sm font-normal leading-6 text-gray-400 line-through 
            sm:text-base sm:leading-6 
            lg:text-base lg:leading-6"
          >
            {post.discount}
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
