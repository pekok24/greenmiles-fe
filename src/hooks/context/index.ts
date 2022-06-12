import { createContext, useEffect, useState } from 'react'
import { getProfile, getRewards } from 'services'

export const useAppContext = () => {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)
  const [rewards, setRewards] = useState<any>([])

  const getData = async () => {
    setLoading(true)
    const res = await getProfile()
    setProfile(res)
    const resRewards = await getRewards()
    setRewards(resRewards)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    profile,
    loading,
    rewards,
  }
}

export const AppContext = createContext<any>({})

export default AppContext
