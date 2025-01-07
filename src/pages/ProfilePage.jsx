// src/pages/ProfilePage.jsx
import React from 'react'
import { useAuth } from '../context/AuthContext' // Assuming AuthContext exists for user info
import { useCommunity } from '../context/CommunityContext' // Context for joined communities

function ProfilePage() {
  const { user } = useAuth() // Get user info
  const { joinedCommunities } = useCommunity() // Get joined communities list

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow rounded">
      <div className="flex items-center mb-6">
        <img
          src={user.profilePicture || '/default-pfp.png'} // Default PFP if none provided
          alt="Profile"
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.phoneNumber || 'Phone number not provided'}</p>
        </div>
      </div>
      <button className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Settings
      </button>

      <div>
        <h2 className="text-xl font-bold mb-4">Communities You've Joined</h2>
        {joinedCommunities.length > 0 ? (
          <ul className="list-disc list-inside">
            {joinedCommunities.map((community) => (
              <li key={community.id} className="text-gray-700">
                {community.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You haven't joined any communities yet.</p>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
