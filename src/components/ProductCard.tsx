import React from 'react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast({
        title: "Producto no disponible",
        description: "Este producto está agotado temporalmente.",
        variant: "destructive"
      });
      return;
    }

    addItem(product);
    toast({
      title: "¡Agregado al carrito!",
      description: `${product.name} ha sido agregado a tu carrito.`,
    });
  };

  return (
    <Card className="h-full flex flex-col transition-transform hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.category === 'Orgánica' && (
            <Badge className="absolute top-2 left-2 bg-green-600">
              <Leaf className="w-3 h-3 mr-1" />
              Orgánica
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="absolute top-2 right-2 bg-red-600">
              Agotado
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 mb-3">
          {product.description}
        </CardDescription>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">{product.category}</Badge>
          <span className="text-sm text-gray-500">{product.weight}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex justify-between items-center w-full">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-green-600 hover:bg-green-700"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Agregar' : 'Agotado'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;