import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import ProductFilters from '../components/ProductFilters';
import { lettuceProducts } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  console.log('Rendering Index page with products:', lettuceProducts);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(lettuceProducts.map(product => product.category))];
    console.log('Available categories:', uniqueCategories);
    return uniqueCategories;
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return lettuceProducts;
    }
    const filtered = lettuceProducts.filter(product => product.category === selectedCategory);
    console.log('Filtered products for category', selectedCategory, ':', filtered);
    return filtered;
  }, [selectedCategory]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Lechugas Frescas y Orgánicas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de lechugas frescas, cultivadas con amor y cuidado. 
              Desde variedades clásicas hasta opciones orgánicas premium.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar con filtros y carrito */}
            <div className="lg:col-span-1 space-y-6">
              <ProductFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                categories={categories}
              />
              <Cart />
            </div>

            {/* Grid de productos */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedCategory === 'Todas' 
                    ? `Todos los Productos (${filteredProducts.length})`
                    : `${selectedCategory} (${filteredProducts.length})`
                  }
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No hay productos disponibles en esta categoría.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="bg-green-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-2">FreshLettuce</h3>
            <p className="text-green-200">
              Tu tienda de confianza para lechugas frescas y orgánicas
            </p>
            <p className="text-green-300 text-sm mt-4">
              © 2024 FreshLettuce. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;