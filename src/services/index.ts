import { callApi } from 'services/api'

export const getProfile = () => {
  return callApi('GET', '/profile')
    .then((res) => res.data.data)
    .catch(() => [])
}

export const getRewards = () => {
  return callApi('GET', '/rewards')
    .then((res) => res.data.data)
    .catch(() => [])
}

export const getReward = (id: string) => {
  return callApi('GET', `/rewards/${id}`)
    .then((res) => res.data.data)
    .catch(() => [])
}

export const getVouchers = () => {
  return callApi('GET', '/vouchers')
    .then((res) => res.data.data)
    .catch(() => [])
}
