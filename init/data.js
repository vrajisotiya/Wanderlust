const sampleListings = [
  {
    title: "Secluded Island Villa",
    description:
      "A private villa on a serene island with breathtaking ocean views.",
    image: {
      url: "https://images.pexels.com/photos/8516812/pexels-photo-8516812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 25000,
    location: "Lakshadweep",
    country: "India",
    category: "Island",
    geometry: {
      type: "Point",
      coordinates: [72.628, 10.5669],
    },
  },
  {
    title: "Luxury Beachfront Bungalow",
    description:
      "Stay in a stylish bungalow with direct beach access and stunning sunsets.",
    image: {
      url: "https://images.pexels.com/photos/12431670/pexels-photo-12431670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 18000,
    location: "Andaman and Nicobar Islands",
    country: "India",
    category: "Island",
    geometry: {
      type: "Point",
      coordinates: [92.6586, 11.7401],
    },
  },
  {
    title: "Tropical Paradise Retreat",
    description:
      "An exclusive tropical retreat with luxurious amenities and privacy.",
    image: {
      url: "https://images.pexels.com/photos/29766360/pexels-photo-29766360/free-photo-of-tropical-beach-resort-at-sunset-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 32000,
    location: "Goa",
    country: "India",
    category: "Island",
    geometry: {
      type: "Point",
      coordinates: [74.124, 15.2993],
    },
  },
  {
    title: "Cozy Studio Room",
    description: "A comfortable and affordable room in the city center.",
    image: {
      url: "https://images.pexels.com/photos/6588596/pexels-photo-6588596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 4000,
    location: "Mumbai",
    country: "India",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },
  {
    title: "Deluxe Room with Balcony",
    description: "Modern room with a balcony offering cityscape views.",
    image: {
      url: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 7000,
    location: "Bangalore",
    country: "India",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "Heritage Style Suite",
    description:
      "Luxurious room in a heritage hotel, blending tradition and comfort.",
    image: {
      url: "https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050932.jpg?t=st=1734498587~exp=1734502187~hmac=a368b31e77fcaa120c71b3399b133bc2f82fb8444930a9e1ebcaf5a589866a1f&w=1060",
    },
    price: 10000,
    location: "Jaipur",
    country: "India",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },
  {
    title: "Parisian Apartment",
    description:
      "Experience the charm of Paris with a cozy apartment in the heart of the city.",
    image: {
      url: "https://images.pexels.com/photos/2227838/pexels-photo-2227838.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 15000,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },
  {
    title: "New York Loft",
    description: "Stylish loft in the iconic streets of Manhattan, New York.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1673014201324-54bab699c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 22000,
    location: "New York City",
    country: "USA",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },
  {
    title: "Tokyo Skyline Apartment",
    description:
      "Enjoy the bustling Tokyo skyline from this high-rise apartment.",
    image: {
      url: "https://images.pexels.com/photos/9851586/pexels-photo-9851586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 20000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },
  {
    title: "Hilltop Cabin Retreat",
    description:
      "Charming wooden cabin nestled in the mountains with panoramic views.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432],
    },
  },
  {
    title: "Alpine Ski Lodge",
    description:
      "Cozy lodge in the Alps, perfect for skiing and winter adventures.",
    image: {
      url: "https://images.pexels.com/photos/774281/pexels-photo-774281.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 18000,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
  },
  {
    title: "Misty Mountain Cottage",
    description:
      "Peaceful mountain cottage surrounded by lush greenery and misty skies.",
    image: {
      url: "https://images.pexels.com/photos/13008664/pexels-photo-13008664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 10000,
    location: "Munnar",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
  },
  {
    title: "Enchanting Castle Stay",
    description:
      "Live like royalty in a beautifully preserved medieval castle.",
    image: {
      url: "https://images.pexels.com/photos/3358880/pexels-photo-3358880.png?auto=compress&cs=tinysrgb&w=600",
    },
    price: 30000,
    location: "Edinburgh",
    country: "Scotland",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
  },
  {
    title: "Luxury Fortress Getaway",
    description:
      "Experience grandeur and history in a fortified luxury retreat.",
    image: {
      url: "https://images.pexels.com/photos/29368152/pexels-photo-29368152/free-photo-of-majestic-architecture-of-jaipur-fort.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 45000,
    location: "Rajasthan",
    country: "India",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [74.2179, 27.0238],
    },
  },
  {
    title: "French Chateau Stay",
    description:
      "A romantic stay in an elegant French chateau surrounded by vineyards.",
    image: {
      url: "https://images.pexels.com/photos/28530086/pexels-photo-28530086/free-photo-of-historic-chateau-azay-le-rideau-reflection.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 50000,
    location: "Loire Valley",
    country: "France",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [0.6848, 47.3499],
    },
  },
  {
    title: "Villa with Infinity Pool",
    description:
      "Stylish villa featuring an infinity pool with breathtaking views.",
    image: {
      url: "https://images.pexels.com/photos/7942030/pexels-photo-7942030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 40000,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [115.092, -8.3405],
    },
  },
  {
    title: "Luxury Poolside Haven",
    description: "Relax by a stunning poolside in a tranquil setting.",
    image: {
      url: "https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 35000,
    location: "Kerala",
    country: "India",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [76.2711, 10.8505],
    },
  },
  {
    title: "Modern Pool Villa",
    description: "A spacious villa with a private pool and modern amenities.",
    image: {
      url: "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 28000,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [98.3923, 7.8804],
    },
  },
  {
    title: "Scenic Camping Spot",
    description: "Pitch your tent and enjoy nature at its finest.",
    image: {
      url: "https://images.pexels.com/photos/7293712/pexels-photo-7293712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 1500,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },
  {
    title: "Luxury Safari Tent",
    description:
      "Stay in a comfortable safari tent with stunning wildlife views.",
    image: {
      url: "https://images.pexels.com/photos/9497617/pexels-photo-9497617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 8000,
    location: "Masai Mara",
    country: "Kenya",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [35.1426, -1.4061],
    },
  },
  {
    title: "Mountain Camping Retreat",
    description: "Sleep under the stars in the tranquility of the Himalayas.",
    image: {
      url: "https://images.pexels.com/photos/29800057/pexels-photo-29800057/free-photo-of-scenic-mountain-campground-with-reflective-lake-view.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 5000,
    location: "Leh-Ladakh",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526],
    },
  },
  {
    title: "Desert Camp Oasis",
    description: "Experience the vastness of the desert in a luxury camp.",
    image: {
      url: "https://images.pexels.com/photos/18767559/pexels-photo-18767559/free-photo-of-remote-desert-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 10000,
    location: "Jaisalmer",
    country: "India",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
  },
  {
    title: "Sahara Dunes Stay",
    description: "Stay amidst the iconic sand dunes of the Sahara Desert.",
    image: {
      url: "https://images.pexels.com/photos/18671249/pexels-photo-18671249/free-photo-of-luxurious-tent-camp-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 15000,
    location: "Merzouga",
    country: "Morocco",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [-4.0105, 31.0805],
    },
  },
  {
    title: "Desert Luxury Tent",
    description:
      "Indulge in the beauty of the Thar Desert with a luxurious tent stay.",
    image: {
      url: "https://images.pexels.com/photos/9497612/pexels-photo-9497612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 12000,
    location: "Rajasthan",
    country: "India",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [74.2179, 27.0238],
    },
  },
  {
    title: "Arctic Glass Igloo",
    description: "Enjoy the northern lights in a cozy glass igloo.",
    image: {
      url: "https://images.pexels.com/photos/15303762/pexels-photo-15303762/free-photo-of-a-modern-hotel-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 50000,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [26.6685, 67.9222],
    },
  },
  {
    title: "Snowy Ice Hotel",
    description: "Stay in a stunning ice hotel with intricate ice sculptures.",
    image: {
      url: "https://images.pexels.com/photos/1977342/pexels-photo-1977342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 60000,
    location: "Jukkasjärvi",
    country: "Sweden",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [20.6167, 67.85],
    },
  },
  {
    title: "Polar Adventure Lodge",
    description: "Discover the arctic wilderness from a cozy, warm lodge.",
    image: {
      url: "https://images.pexels.com/photos/19727183/pexels-photo-19727183/free-photo-of-a-house-in-the-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 45000,
    location: "Greenland",
    country: "Greenland",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [-42.6043, 71.7069],
    },
  },
];

module.exports = { data: sampleListings };
