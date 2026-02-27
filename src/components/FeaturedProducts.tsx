import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Heart, X, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Chocolate Chip Cookies",
    price: "UGX 5,000",
    description: "Soft, chewy, and loaded with premium chocolate chips. A Kampala favorite.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop",
    badge: "BEST SELLER",
    ingredients: ["Wheat Flour", "Chocolate Chips", "Butter", "Sugar", "Eggs", "Vanilla"]
  },
  {
    id: 2,
    name: "Red Velvet Celebration Cake",
    price: "UGX 45,000",
    description: "Rich, moist red velvet layers with smooth cream cheese frosting. Perfect for birthdays.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324671ff6?q=80&w=1974&auto=format&fit=crop",
    badge: "POPULAR",
    ingredients: ["Cocoa Powder", "Buttermilk", "Flour", "Cream Cheese", "Sugar", "Butter"]
  },
  {
    id: 3,
    name: "Blueberry Morning Muffins",
    price: "UGX 4,000",
    description: "Bursting with fresh blueberries and topped with a light sugar crumble.",
    image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?q=80&w=1965&auto=format&fit=crop",
    badge: "FRESHLY BAKED",
    ingredients: ["Blueberries", "Flour", "Milk", "Sugar", "Baking Powder", "Eggs"]
  },
  {
    id: 4,
    name: "Belgian Style Waffles",
    price: "UGX 12,000",
    description: "Crispy on the outside, fluffy on the inside. Served with syrup and fresh fruit.",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1925&auto=format&fit=crop",
    badge: "NEW",
    ingredients: ["Flour", "Yeast", "Milk", "Butter", "Pearl Sugar", "Eggs"]
  }
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-primary font-sans font-bold tracking-[0.2em] text-xs mb-2 uppercase">Our Favorites</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Baked with Love</h3>
          </div>
          <button className="text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-slate-200 hover:border-primary pb-1">
            VIEW ALL PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-primary shadow-sm">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic could go here
                    }}
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Like logic could go here
                    }}
                  >
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-sm text-slate-500 mb-3 line-clamp-2 px-4">{product.description}</p>
                <span className="text-primary font-bold">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-900 hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {selectedProduct.badge && (
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg">
                    {selectedProduct.badge}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                  <p className="text-2xl font-bold text-primary">{selectedProduct.price}</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <Info size={16} className="text-primary" />
                      Description
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProduct.description} Our products are made fresh daily using only the finest ingredients sourced from local farmers and sustainable producers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-3">Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.ingredients.map((ingredient) => (
                        <span 
                          key={ingredient}
                          className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                      <ShoppingCart size={20} />
                      ADD TO CART — {selectedProduct.price}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      Available for pickup or delivery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
