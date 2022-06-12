import AppContext from 'hooks/context'
import { useContext, useEffect, useState } from 'react'
import { getReward, getRewards } from 'services'

export const useRewards = () => {
  const app = useContext(AppContext)
  const [rewards, setRewards] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [selectedReward, setSelectedReward] = useState<any>({})

  const getData = async () => {
    setLoading(true)
    const id = app.rewards && app.rewards.length ? app.rewards[0].rewardId?.toString() : null
    const res = id ? await getReward(id) : []
    setRewards(res || [])
    setLoading(false)
  }

  useEffect(() => {
    app.rewards && app.rewards.length && getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.rewards])

  return {
    rewards,
    loading,
    selectedReward,
    setSelectedReward,
  }
}
