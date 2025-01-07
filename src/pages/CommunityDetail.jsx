import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getCommunityDetails, getCommunityProducts } from '../services/mockApi'
import { useCommunity } from '../contexts/CommunityContext'

function CommunityDetail() {
  const { id } = useParams()
  const [community, setCommunity] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { userCommunities, joinCommunity, leaveCommunity } = useCommunity()

  const isMember = userCommunities.includes(parseInt(id))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [communityData, productsData] = await Promise.all([
          getCommunityDetails(id),
          getCommunityProducts(id)
        ])
        setCommunity(communityData)
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching community details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (!community) return <div>Community not found</div>

  return (
    <div >
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8 bg-cover bg-center" style={{ backgroundImage: `url(${community.image})` }}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">{community.name}</h1>
            <p className="text-white">{community.description}</p>
          </div>
          {isMember ? (
            <button
              onClick={() => leaveCommunity(parseInt(id))}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Leave Community
            </button>
          ) : (
            <button
              onClick={() => joinCommunity(parseInt(id))}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Join Community
            </button>
          )}
        </div>
        <div className="flex space-x-4 text-sm text-white">
          <span>{community.memberCount} members</span>
          <span>•</span>
          <span>{community.type}</span>
          <span>•</span>
          <span>{community.location}</span>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Available Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default CommunityDetail
