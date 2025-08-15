import { Product } from '../types/product';

export const lettuceProducts: Product[] = [
  {
    id: 1,
    name: "Lechuga Romana Orgánica",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop",
    description: "Lechuga romana fresca y crujiente, cultivada orgánicamente sin pesticidas.",
    category: "Orgánica",
    inStock: true,
    weight: "250g"
  },
  {
    id: 2,
    name: "Lechuga Iceberg",
    price: 1.80,
    image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400&h=300&fit=crop",
    description: "Lechuga iceberg clásica, perfecta para ensaladas y hamburguesas.",
    category: "Clásica",
    inStock: true,
    weight: "300g"
  },
  {
    id: 3,
    name: "Lechuga Mantecosa",
    price: 2.20,
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop",
    description: "Lechuga de hojas suaves y delicadas, ideal para ensaladas gourmet.",
    category: "Premium",
    inStock: true,
    weight: "200g"
  },
  {
    id: 4,
    name: "Lechuga Roja",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    description: "Lechuga de hojas rojas, rica en antioxidantes y sabor único.",
    category: "Especial",
    inStock: true,
    weight: "220g"
  },
  {
    id: 5,
    name: "Mix de Lechugas Baby",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    description: "Mezcla de lechugas baby tiernas, perfectas para ensaladas sofisticadas.",
    category: "Premium",
    inStock: true,
    weight: "150g"
  },
  {
    id: 6,
    name: "Lechuga Escarola",
    price: 2.80,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
    description: "Lechuga escarola con sabor ligeramente amargo, excelente para ensaladas mixtas.",
    category: "Clásica",
    inStock: false,
    weight: "280g"
  }
];