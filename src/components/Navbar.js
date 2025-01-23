import React from "react";

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-white shadow-md">
    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <img src="../Meubel House_Logos-05.png" alt="Logo" className="h-8 w-10" />
      <h1 className="text-xl lg:text-4xl font-bold">Furniro</h1>
    </div>

    {/* Menu Items */}
    <ul className="hidden md:flex space-x-8 font-medium text-sm lg:text-base">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">Shop</li>
      <li className="cursor-pointer">About</li>
      <li className="cursor-pointer">Contact</li>
    </ul>

    {/* Icons */}
    <ul className="flex space-x-4">
      <li>
        <img src="../mdi_account-alert-outline.png" alt="Account" className="h-6 w-6" />
      </li>
      <li>
        <img src="../akar-icons_search.png" alt="Search" className="h-6 w-6" />
      </li>
      <li>
        <img src="../akar-icons_heart.png" alt="Wishlist" className="h-6 w-6" />
      </li>
      <li>
        <img src="../ant-design_shopping-cart-outlined.png" alt="Cart" className="h-6 w-6" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
