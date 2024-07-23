import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './item.css';

const Item = () => {
    const { id } = useParams();
    const userId = localStorage.getItem("userId"); 

    const products = [
        {
          title: 'Embroidered Net Gown',
          brand: 'Manyavar',
          price: 62990,
          id: 1,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png',
          rating: '4.5' // assuming you want to include ratings as well
        },
        {
          title: 'Front Load Machine',
          brand: 'Samsung',
          price: 22490,
          id: 2,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png',
          rating: '4.4'
        },
        {
          title: "Collider Black Dial Men's Watch",
          brand: 'Fossil',
          price: 14995,
          id: 3,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png',
          rating: '4.3'
        },
        {
          title: 'True Wireless Earbuds',
          brand: 'LG',
          price: 13499,
          id: 4,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png',
          rating: '4.2'
        },
        {
          title: "Maritime Men's Watch",
          brand: 'Titan',
          price: 11999,
          id: 5,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png',
          rating: '4.3'
        },
        {
          title: "Neutra Analog Men's Watch",
          brand: 'Fossil',
          price: 10995,
          id: 6,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png',
          rating: '4.1'
        },
        {
          title: 'Monsters Charm Toy',
          brand: 'Trendytap',
          price: 8600,
          id: 7,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png',
          rating: '4.6'
        },
        {
          title: 'Privateer Quartz Watch',
          brand: 'Fossil',
          price: 8122,
          id: 8,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-black-watch.png',
          rating: '4.4'
        },
        {
          title: 'Chronograph black Watch',
          brand: 'Fossil',
          price: 6395,
          id: 9,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png',
          rating: '4.3'
        },
        {
          title: 'Podcast Microphone',
          brand: 'MAONO',
          price: 5555,
          id: 10,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png',
          rating: '4.5'
        },
        {
          title: 'Virgin Avocado Oil',
          brand: 'ProV',
          price: 4144,
          id: 11,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png',
          rating: '4.2'
        },
        {
          title: 'Wrap Dress',
          brand: 'Vero Moda',
          price: 3039,
          id: 12,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png',
          rating: '4.3'
        },
        {
          title: 'Warm Up Jacket',
          brand: 'Monte Carlo',
          price: 2796,
          id: 13,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png',
          rating: '4.4'
        },
        {
          title: 'Slim Fit Blazer',
          brand: 'LEVIS',
          price: 2599,
          id: 14,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png',
          rating: '4.5'
        },
        {
          title: "Men's Waistcoat",
          brand: 'LEVIS',
          price: 2500,
          id: 15,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png',
          rating: '4.4'
        },
        {
          title: 'Sheer Anarkali',
          brand: 'Saadgi',
          price: 2172,
          id: 16,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-white-punjabi.png',
          rating: '4.5'
        },
        {
          title: 'SilverBullet Mixer Grinder',
          brand: 'COOKWELL',
          price: 1899,
          id: 17,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png',
          rating: '4.3'
        },
        {
          title: 'Zari Design Kurta',
          brand: 'Libas',
          price: 1869,
          id: 18,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png',
          rating: '4.2'
        },
        {
          title: "Analog Men's Watch",
          brand: 'Fastrack',
          price: 1850,
          id: 19,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png',
          rating: '4.3'
        },
        {
          title: 'Embellished Maxi Dress',
          brand: 'STREET 9',
          price: 1799,
          id: 20,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-blue-fork.png',
          rating: '4.4'
        },
        {
          title: 'PS5 Controller Charger',
          brand: 'New World',
          price: 1749,
          id: 21,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png',
          rating: '4.5'
        },
        {
          title: 'Mixer Grinder',
          brand: 'Lifelong',
          price: 1699,
          id: 22,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png',
          rating: '4.2'
        },
        {
          title: 'Dynamic Microphone',
          brand: 'JTS Store',
          price: 1699,
          id: 23,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-solo-mike.png',
          rating: '4.3'
        },
        {
          title: 'Tea Kettle Pot',
          brand: 'Indian Art Villa',
          price: 1685,
          id: 24,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png',
          rating: '4.4'
        },
        {
          title: 'Non-Toxic Robot Toys',
          brand: 'FunBlast',
          price: 1545,
          id: 25,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-short-green-robot.png',
          rating: '4.2'
        },
        {
          title: 'Slim Fit Jeans',
          brand: 'LEVIS',
          price: 1469,
          id: 26,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png',
          rating: '4.5'
        },
        {
          title: 'Panda Baby Product',
          brand: 'Panda',
          price: 1399,
          id: 27,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png',
          rating: '4.3'
        },
        {
          title: 'Handheld Full Body Massager',
          brand: 'AGARO REGAL',
          price: 1299,
          id: 28,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png',
          rating: '4.2'
        },
        {
          title: 'Turmeric Powder',
          brand: 'Patanjali',
          price: 1234,
          id: 29,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-turmeric.png',
          rating: '4.4'
        },
        {
          title: 'Nova SuperGroom Multi-kit',
          brand: 'Nova',
          price: 1199,
          id: 30,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nover-v2-trimmer.png',
          rating: '4.2'
        },
        {
          title: 'Animal Printed Shirt',
          brand: 'Mufti',
          price: 1017,
          id: 31,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png',
          rating: '4.4'
      },
      {
          title: 'Knit Cream Sweater',
          brand: 'MansiCollections',
          price: 996,
          id: 32,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png',
          rating: '4.3'
      },
      {
          title: 'Miss Chase Bodycon Dress',
          brand: 'LEVIS',
          price: 974,
          id: 33,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png',
          rating: '4.5'
      },
      {
          title: 'Chilli Extract Sauce',
          brand: 'Everin',
          price: 788,
          id: 34,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png',
          rating: '4.2'
      },
      {
          title: 'Batman Batmobile',
          brand: 'Funskool',
          price: 745,
          id: 35,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png',
          rating: '4.5'
      },
      {
          title: 'Knitted Rabbit',
          brand: 'Ira',
          price: 620,
          id: 36,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png',
          rating: '4.3'
      },
      {
          title: 'Kids Toy Train',
          brand: 'FIONA',
          price: 599,
          id: 37,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-red-train.png',
          rating: '4.2'
      },
      {
          title: 'Honey Teddy Bear',
          brand: 'Honey',
          price: 599,
          id: 38,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png',
          rating: '4.4'
      },
      {
          title: 'Cotton Hoodie',
          brand: 'Scott International',
          price: 498,
          id: 39,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png',
          rating: '4.3'
      },
      {
          title: 'Nexa Yellow Car',
          brand: 'Quinergys',
          price: 490,
          id: 40,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-yellow-car.png',
          rating: '4.2'
      },
      {
          title: 'Polyester Saree',
          brand: 'Ahalyaa',
          price: 419,
          id: 41,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-side-sareee.png',
          rating: '4.4'
      },
      {
          title: 'Aluminium 4 Cup Tea Kettle',
          brand: 'Kitchen Expert',
          price: 399,
          id: 42,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png',
          rating: '4.3'
      },
      {
          title: 'Beard Trimmer',
          brand: 'Nova',
          price: 398,
          id: 43,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nova-trimmer.png',
          rating: '4.2'
      },
      {
          title: 'Plain Round Neck T-shirt',
          brand: 'Huetrap',
          price: 395,
          id: 44,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png',
          rating: '4.5'
      },
      {
          title: 'Tripod Stand',
          brand: 'Sketchfab',
          price: 390,
          id: 45,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png',
          rating: '4.3'
      },
      {
          title: 'Bot Robot Toy',
          brand: 'WireScorts',
          price: 355,
          id: 46,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-robot.png',
          rating: '4.2'
      },
      {
          title: 'Wide Bowknot Hat',
          brand: 'MAJIK',
          price: 288,
          id: 47,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png',
          rating: '4.4'
      },
      {
          title: 'Crystal Sugar',
          brand: 'NatureVit',
          price: 278,
          id: 48,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-sugar-cubes.png',
          rating: '4.3'
      },
      {
          title: 'Basmati Rice',
          brand: 'Fortune',
          price: 244,
          id: 49,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-rice.png',
          rating: '4.2'
      },
      {
          title: 'Flour Unbleached',
          brand: 'TWF Store',
          price: 200,
          id: 50,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png',
          rating: '4.4'
      },
      {
          title: 'Maroon Kumkum ',
          brand: 'Amazon',
          price: 200,
          id: 51,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--kumkum.png',
          rating: '4.3'
      },
      {
          title: 'Eggs',
          brand: 'Naturoz',
          price: 60,
          id: 52,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png',
          rating: '4.5'
      },
      {
          title: 'Fresh Lemon, 100g',
          brand: 'Amazon',
          price: 50,
          id: 53,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-lemons.png',
          rating: '4.2'
      },
      {
          title: 'Fresh Produce Green Chilli',
          brand: 'Amazon',
          price: 30,
          id: 54,
          image_url: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png',
          rating: '4.2'
      }
    ]

    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem(`cart_${userId}`)) || []);

    const product = products.find(item => item.id === parseInt(id));

    const handleAddToCart = () => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart)); // Store cart with user-specific key
        alert(`${product.title} added to cart!`);
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="product-container">
            <h2>{product.title}</h2>
            <img src={product.image_url} alt={product.title} className="product-image"/>
            <p>Brand: {product.brand}</p>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Item;