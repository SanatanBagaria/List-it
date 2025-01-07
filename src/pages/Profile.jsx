import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { getUserProducts, getUserCommunities } from '../services/mockApi'
import ProductCard from '../components/ProductCard'
import CommunityCard from '../components/CommunityCard'

function Profile() {
  const { user } = useAuth()
  const [products, setProducts] = useState([])
  const [communities, setCommunities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [productsData, communitiesData] = await Promise.all([
          getUserProducts(user.id),
          getUserCommunities(user.id)
        ])
        setProducts(productsData)
        setCommunities(communitiesData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchUserData()
    }
  }, [user])

  if (!user) return <div>Please login to view your profile</div>
  if (loading) return <div>Loading...</div>

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Your Products</h2>
        {products.length === 0 ? (
          <p>No products listed yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Your Communities</h2>
        {communities.length === 0 ? (
          <p>Not a member of any communities yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map(community => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Profile
