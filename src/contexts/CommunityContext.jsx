
import React, { createContext, useState, useContext } from 'react'

const CommunityContext = createContext()

export function CommunityProvider({ children }) {
  const [userCommunities, setUserCommunities] = useState([])
  const [recommendedCommunities, setRecommendedCommunities] = useState([])

  const joinCommunity = (communityId) => {
    // API call would go here
    setUserCommunities(prev => [...prev, communityId])
  }

  const leaveCommunity = (communityId) => {
    // API call would go here
    setUserCommunities(prev => prev.filter(id => id !== communityId))
  }

  return (
    <CommunityContext.Provider value={{
      userCommunities,
      recommendedCommunities,
      joinCommunity,
      leaveCommunity
    }}>
      {children}
    </CommunityContext.Provider>
  )
}

export const useCommunity = () => useContext(CommunityContext)
