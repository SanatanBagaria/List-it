const API_URL = 'https://api.example.com';

// Fetch products for a specific user
export async function getUserProducts(userId) {
  const response = await fetch(`${API_URL}/users/${userId}/products`);
  if (!response.ok) throw new Error('Failed to fetch user products');
  return response.json();
}

// Other API functions remain the same

export async function getRecommendedProducts() {
  const response = await fetch(`${API_URL}/products/recommended`);
  if (!response.ok) throw new Error('Failed to fetch recommended products');
  return response.json();
}

export async function getRecommendedCommunities() {
  const response = await fetch(`${API_URL}/communities/recommended`);
  if (!response.ok) throw new Error('Failed to fetch recommended communities');
  return response.json();
}

export async function getCommunities(filter = 'all') {
  const response = await fetch(`${API_URL}/communities?filter=${filter}`);
  if (!response.ok) throw new Error('Failed to fetch communities');
  return response.json();
}

export async function createCommunity(data) {
  const response = await fetch(`${API_URL}/communities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create community');
  return response.json();
}

export async function getProductDetails(productId) {
  const response = await fetch(`${API_URL}/products/${productId}`);
  if (!response.ok) throw new Error('Failed to fetch product details');
  return response.json();
}

export async function getCommunityDetails(id) {
  const response = await fetch(`${API_URL}/communities/${id}`);
  if (!response.ok) throw new Error('Failed to fetch community details');
  return response.json();
}

export async function getCommunityProducts(communityId) {
  const response = await fetch(`${API_URL}/communities/${communityId}/products`);
  if (!response.ok) throw new Error('Failed to fetch community products');
  return response.json();
}
