import { useEffect, useState } from 'react'
import { getVouchers } from 'services'

export const useVoucher = () => {
  const [vouchers, setVouchers] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    const res = await getVouchers()
    console.log(res)
    setVouchers(res || [])
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    vouchers,
    loading,
  }
}
