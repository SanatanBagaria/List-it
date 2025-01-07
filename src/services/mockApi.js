// src/services/mockApi.js

export const login = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.email === "test@example.com" && formData.password === "password") {
          resolve({
            id: 1,
            name: "Test User",
            email: "test@example.com",
          });
        } else {
          reject("Invalid email or password");
        }
      }, 0);
    });
  };
  
  export const createCommunity = (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Math.floor(Math.random() * 1000),
          ...formData,
          memberCount: 1,
        });
      }, 0);
    });
  };
  export const getCommunityDetails = (id) => {
    const mockCommunities = [
      { image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600", id: 1, name: "IIT(ISM) Community", description: "IIT(ISM) Community.", memberCount: 1000, type: "Location", location: "Hyper Local" },
      { image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", id: 2, name: "Music", description: "Music Community", memberCount: 500, type: "interest", location: "Global" },
      { image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600", id: 3, name: "Tech Enthusiasts", description: "Everything Tech", memberCount: 300, type: "interest", location: "National" },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        const community = mockCommunities.find((comm) => comm.id == id);
        if (community) {
          resolve(community); // Resolving the actual community details from the mock data
        } else {
          resolve(null); // Returning null if the community ID is not found
        }
      }, 0); // Simulated delay of 0ms for an instant response
    });
  };
  
  export const getCommunityProducts = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            imageUrl: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600", id: 1, name: 'Bicycle', description: 'Almost new cycle, minimal used', price: '1000',
            communityId: id,
          },
          {
            imageUrl: "https://images.pexels.com/photos/3975591/pexels-photo-3975591.jpeg?auto=compress&cs=tinysrgb&w=600", id: 2, name: 'Ukulele', description: 'Want to learn guitar, start with this', price: '750',
            communityId: id,
          },
        ]);
      }, 0);
    });
  };
  
  export const getUserProducts = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "User Product A", price: 200 },
          { id: 2, name: "User Product B", price: 250 },
        ]);
      }, 0);
    });
  };
  
  export const getUserCommunities = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Community A", memberCount: 100 },
          { id: 2, name: "Community B", memberCount: 200 },
        ]);
      }, 0);
    });
  };
  
  // src/services/mockApi.js
export const getProductDetails = (id) => {
  const mockProducts = [
    { 
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 1, 
      name: 'Bicycle', 
      description: 'Almost new cycle, minimal used', 
      price: '1000', 
      communityName: 'IIT (ISM) Dhanbad', 
      sellerName: 'Sandeep Singh', 
      sellerId: 1 
    },
    { 
      image: "https://images.pexels.com/photos/3975591/pexels-photo-3975591.jpeg?auto=compress&cs=tinysrgb&w=600",  
      id: 2, 
      name: 'Ukulele', 
      description: 'Want to learn guitar, start with this', 
      price: 750, 
      communityName: 'Music Lovers', 
      sellerName: 'A.R. Rahman', 
      sellerId: 2 
    },
    { 
      image: "https://images.pexels.com/photos/4812315/pexels-photo-4812315.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 3, 
      name: 'Power Bank', 
      description: 'Compact power bank for on-the-go charging', 
      price: 300, 
      communityName: 'Tech Enthusiasts', 
      sellerName: 'Elon Musk', 
      sellerId: 3 
    }
  ];


  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((prod) => prod.id == id);
      if (product) {
        resolve(product); // Resolving the actual product details from the mock data
      } else {
        resolve(null); // Returning null if the product ID is not found
      }
    }, 0); // Simulated delay of 0ms for an instant response
  });
};
  
  export const getCommunities = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600", id: 1, name: "IIT(ISM) Community", description: "IIT(ISM) Community.", memberCount: 1000, type: "Location", location: "Hyper Local" },
          { image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", id: 2, name: "Music", description: "Music Community", memberCount: 500, type: "interest", location: "Global" },
          { image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600", id: 3, name: "Tech Enthusiasts", description: "Everything Tech", memberCount: 300, type: "interest", location: "National" },
        ]);
      }, 0);
    });
  };
  
  // src/services/mockApi.js

export const getRecommendedProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { imageUrl: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600", id: 1, name: 'Bicycle', description: 'Almost new cycle, minimal used', price: '1000' },
          { imageUrl: "https://images.pexels.com/photos/3975591/pexels-photo-3975591.jpeg?auto=compress&cs=tinysrgb&w=600", id: 2, name: 'Ukulele', description: 'Want to learn guitar, start with this', price: '750' },
          { imageUrl: "https://images.pexels.com/photos/4812315/pexels-photo-4812315.jpeg?auto=compress&cs=tinysrgb&w=600", id: 3, name: 'Power Bank', description: 'Compact power bank for on-the-go charging', price: '300' }
        ]);
      }, 0); // Mock delay of 1.5 seconds
    });
  };
  
  export const getRecommendedCommunities = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600", id: 1, name: 'IIT(ISM) Dhanbad', description: 'IIT(ISM) Community', memberCount: 1000 },
          { image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", id: 2, name: 'Music', description: 'Music Community', memberCount: 500 },
          { image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600", id: 3, name: 'Tech Enthusiasts', description: 'Everything Tech', memberCount: 300 }
        ]);
      }, 0); // Mock delay of 1.5 seconds
    });
  };

// src/services/mockApi.js

export const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate registration process and handle any mock errors
        if (email === "test@example.com") {
          reject(new Error("This email is already taken."));
        } else {
          resolve({ message: "User registered successfully!" });
        }
      }, 0); // Simulated delay of 1.5 seconds
    });
  };

  // src/services/mockApi.js

// List a new product
export const listProduct = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Ensure that required fields are present
      if (!formData.title || !formData.price) {
        reject("Product name and price are required.");
      } else {
        // Simulate successful product creation
        const newProduct = {
          id: Math.floor(Math.random() * 1000), // Generate a random ID
          title: formData.title,
          description: formData.description || '',
          price: formData.price,
          image: formData.image || 'https://via.placeholder.com/150',
          sellerId: formData.sellerId || 1, // Assumed seller ID from logged-in user
        };

        resolve(newProduct);
      }
    }, 0); // Simulate network delay
  });
};
