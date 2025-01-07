import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CommunityCard from '../components/CommunityCard'
import { getCommunities } from '../services/mockApi'

function Communities() {
  const [communities, setCommunities] = useState([])
  const [filter, setFilter] = useState('all') // all, interest, location
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const data = await getCommunities(filter)
        setCommunities(data)
      } catch (error) {
        console.error('Error fetching communities:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCommunities()
  }, [filter])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Communities</h1>
        <Link 
          to="/communities/create"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Create Community
        </Link>
      </div>

      <div className="mb-8">
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Communities</option>
          <option value="interest">Interest-based</option>
          <option value="location">Location-based</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map(community => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  )
}

export default Communities