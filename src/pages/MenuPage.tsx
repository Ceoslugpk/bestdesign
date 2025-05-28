import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const MenuPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Classic Caesar Salad',
      description: 'Crisp romaine, parmesan, croutons, house-made dressing',
      price: 12.99,
      category: 'starters'
    },
    {
      id: '2',
      name: 'Bruschetta',
      description: 'Toasted baguette, fresh tomatoes, garlic, basil',
      price: 9.99,
      category: 'starters'
    },
    {
      id: '3',
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon, lemon herb butter, seasonal vegetables',
      price: 28.99,
      category: 'mains'
    },
    {
      id: '4',
      name: 'Filet Mignon',
      description: '8oz center cut, garlic mashed potatoes, asparagus',
      price: 34.99,
      category: 'mains'
    },
    {
      id: '5',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake, vanilla ice cream, berry compote',
      price: 9.99,
      category: 'desserts'
    },
    {
      id: '6',
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean custard, caramelized sugar',
      price: 8.99,
      category: 'desserts'
    }
  ];

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.id !== itemId);
    });
  };

  const getItemQuantity = (itemId: string) => {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h1>

          {/* Categories */}
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid gap-6 mb-8">
            {menuItems
              .filter(item => item.category === activeCategory)
              .map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                      <p className="text-blue-600 font-medium mt-2">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getItemQuantity(item.id) > 0 && (
                        <>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Minus className="h-5 w-5 text-gray-600" />
                          </button>
                          <span className="font-medium text-gray-900">
                            {getItemQuantity(item.id)}
                          </span>
                        </>
                      )}
                      <button
                        onClick={() => addToCart(item)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 safe-area-bottom">
              <div className="max-w-4xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">{cart.reduce((total, item) => total + item.quantity, 0)} items</p>
                    <p className="text-lg font-bold text-gray-900">${calculateTotal().toFixed(2)}</p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;