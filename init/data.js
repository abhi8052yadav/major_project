const sampleListings = [
  {
    title: "Luxury Apartment in Mumbai",
    description: "2 BHK luxury apartment with sea view.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 85000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Beach House in Goa",
    description: "Modern beach house near Baga Beach.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Villa in Bangalore",
    description: "Spacious 4 BHK villa with private garden.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 145000,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Studio Apartment in Delhi",
    description: "Compact and affordable studio apartment.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Penthouse in Hyderabad",
    description: "Luxury penthouse with skyline view.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200000,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Cottage in Manali",
    description: "Peaceful wooden cottage in the mountains.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 60000,
    location: "Manali",
    country: "India"
  },
  {
    title: "Farmhouse in Punjab",
    description: "Spacious farmhouse surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95000,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Apartment in Kolkata",
    description: "3 BHK apartment near Howrah Bridge.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 78000,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Luxury Condo in Pune",
    description: "High-rise condo with modern amenities.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 110000,
    location: "Pune",
    country: "India"
  },
  {
    title: "Heritage House in Jaipur",
    description: "Traditional Rajasthani house with courtyard.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Lake View Apartment in Udaipur",
    description: "Beautiful apartment with a lake view.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Resort Villa in Kerala",
    description: "Beachside resort villa with pool.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 135000,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Smart Home in Gurgaon",
    description: "Modern smart home with full automation.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 150000,
    location: "Gurgaon",
    country: "India"
  },
  {
    title: "Duplex House in Lucknow",
    description: "Spacious duplex near Gomti Nagar.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 88000,
    location: "Lucknow",
    country: "India"
  },
  {
    title: "Row House in Nagpur",
    description: "Affordable row house in residential colony.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 67000,
    location: "Nagpur",
    country: "India"
  },
  {
    title: "Flat in Ahmedabad",
    description: "2 BHK flat near city center.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 72000,
    location: "Ahmedabad",
    country: "India"
  },
  {
    title: "Hillside Villa in Ooty",
    description: "Scenic hillside villa with garden.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 105000,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Studio in Chandigarh",
    description: "Affordable studio flat for students.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50000,
    location: "Chandigarh",
    country: "India"
  },
  {
    title: "Bungalow in Indore",
    description: "Beautiful bungalow with backyard.",
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 93000,
    location: "Indore",
    country: "India"
  }
];

module.exports = {data: sampleListings};