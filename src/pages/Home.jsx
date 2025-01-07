import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import CommunityCard from '../components/CommunityCard'
import { getRecommendedProducts, getRecommendedCommunities } from '../services/mockApi'

function Home() {
  const [products, setProducts] = useState([])
  const [communities, setCommunities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, communitiesData] = await Promise.all([
          getRecommendedProducts(),
          getRecommendedCommunities()
        ])
        setProducts(productsData)
        setCommunities(communitiesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Communities You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home