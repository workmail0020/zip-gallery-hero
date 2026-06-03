"use client";

import { Search, ShoppingBag, Check } from "lucide-react";

export default function FinestMartPage() {
  const navLinks = ["Home", "Categories", "Sales", "FAQ", "About", "Contact"];

  const features = [
    "Fresh Vegetables",
    "100% Guarantee",
    "Cash on Delivery",
    "Fast Delivery",
  ];

  const categories = [
    {
      icon: "🧀",
      title: "Dairy Products",
      description: "Fresh, nutritious, creamy, natural dairy",
    },
    {
      icon: "🥕",
      title: "Vegetables & Fruits",
      description: "Fresh vegetables and fruits nourish bodies naturally.",
    },
    {
      icon: "🧂",
      title: "Spices & Seasonings",
      description: "Bold flavors crafted from pure, natural spices.",
    },
    {
      icon: "🍯",
      title: "Honey",
      description: "Pure golden sweetness, naturally nourishing, timelessly delicious.",
    },
    {
      icon: "🌾",
      title: "Flour",
      description: "Flour: finely ground grains, essential for baking.",
    },
  ];

  const products = [
    {
      name: "Fresh Spinach",
      price: "$12.00",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
    },
    {
      name: "Fresh Carrot",
      price: "$9.00",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-16">
        <div className="text-2xl font-bold text-[#e07850]">FinestMart</div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors ${
                index === 0
                  ? "text-[#e07850] border-b-2 border-[#e07850] pb-1"
                  : "text-gray-600 hover:text-[#e07850]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-[#e07850] transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#e07850] rounded-full" />
          </button>
          <a
            href="#"
            className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#e07850] transition-colors"
          >
            Sign In
          </a>
          <button className="px-6 py-2.5 text-sm font-medium text-white bg-[#e07850] rounded-full hover:bg-[#d06840] transition-colors">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative px-6 lg:px-16 py-8 lg:py-12 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Let your <span className="text-[#e07850]">groceries</span>
              <br />
              come to you
            </h1>

            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              Get fresh groceries online without stepping out to make delicious
              food with the freshest ingredients
            </p>

            {/* Search Bar */}
            <div className="flex items-center max-w-md">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full px-4 py-3.5 text-sm bg-white border border-gray-200 rounded-l-lg focus:outline-none focus:border-[#e07850] transition-colors"
                />
              </div>
              <button className="px-5 py-3.5 bg-[#e07850] text-white rounded-r-lg hover:bg-[#d06840] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-3 max-w-md">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-sm text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image Area */}
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
            {/* Decorative curved line */}
            <svg
              className="absolute w-[600px] h-[600px] -top-10 right-0 pointer-events-none"
              viewBox="0 0 500 500"
              fill="none"
            >
              <path
                d="M 380 30 Q 480 120 440 280 Q 400 440 280 500"
                stroke="#e07850"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
            </svg>

            {/* Main delivery person image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500&h=600&fit=crop&crop=top"
                alt="Delivery person with groceries"
                className="w-[280px] md:w-[350px] lg:w-[400px] h-auto object-cover rounded-b-[40%]"
              />
            </div>

            {/* Product Cards */}
            <div className="absolute right-0 lg:right-8 top-4 lg:top-8 space-y-4 z-20">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl p-3 shadow-lg w-32 lg:w-36"
                >
                  <div className="w-full h-16 lg:h-20 bg-gray-50 rounded-xl mb-2 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xs lg:text-sm font-semibold text-gray-800 text-center">
                    {product.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-[#e07850] font-medium text-center mt-1">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="mt-16 lg:mt-20 border-t border-gray-100 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="text-left space-y-3">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="font-semibold text-gray-800">{category.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
