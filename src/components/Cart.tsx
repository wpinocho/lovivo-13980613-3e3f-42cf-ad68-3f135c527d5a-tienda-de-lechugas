import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (state.items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega algunos productos antes de proceder al pago.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Pedido procesado!",
      description: `Tu pedido por $${state.total.toFixed(2)} ha sido enviado.`,
    });
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Tu Carrito
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Tu carrito está vacío</p>
            <p className="text-sm text-gray-400 mt-2">
              Agrega algunas lechugas frescas para comenzar
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Tu Carrito
          </span>
          <Badge variant="secondary">
            {state.items.reduce((count, item) => count + item.quantity, 0)} items
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">{item.name}</h4>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)} c/u</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="w-8 h-8 p-0"
              >
                <Minus className="w-3 h-3" />
              </Button>
              
              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="w-8 h-8 p-0"
              >
                <Plus className="w-3 h-3" />
              </Button>
              
              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeItem(item.id)}
                className="w-8 h-8 p-0"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ${state.total.toFixed(2)}
            </span>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Proceder al Pago
            </Button>
            
            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full"
            >
              Vaciar Carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;