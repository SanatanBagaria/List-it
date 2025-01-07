import React from 'react'
import { Link } from 'react-router-dom'
import { useCommunity } from '../contexts/CommunityContext'

function CommunityCard({ community }) {
  const { userCommunities, joinCommunity, leaveCommunity } = useCommunity()
  const isMember = userCommunities.includes(community.id)

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-2">
      <img 
        src={community.image} 
        alt={community.name} 
        className="w-full h-48 object-cover rounded-md" 
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{community.name}</h3>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
            {community.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{community.description}</p>
        <div className="text-sm text-gray-500 mb-4">
          <p>{community.memberCount} members</p>
          <p>{community.location}</p>
        </div>
        <div className="flex space-x-2">
          <Link
            to={`/communities/${community.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex-grow text-center"
          >
            View
          </Link>
          {isMember ? (
            <button
              onClick={() => leaveCommunity(community.id)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Leave
            </button>
          ) : (
            <button
              onClick={() => joinCommunity(community.id)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Join
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommunityCard
