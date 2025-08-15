import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">FreshLettuce</h1>
              <p className="text-green-100 text-sm">Lechugas frescas y orgánicas</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                  {itemCount}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;