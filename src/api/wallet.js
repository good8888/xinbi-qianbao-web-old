import request from '@/utils/request'

export function getWalletBlChangeList(data) {
  return request({

    url: '/wallet/blChange',
    method: 'post',
    data
  })
}

export function getWalletRechargeList(data) {
  return request({
    url: '/wallet/recharge',
    method: 'post',
    data
  })
}

export function getWalletWithdrawList(data) {
  return request({
    url: '/wallet/withdraw',
    method: 'post',
    data
  })
}

export function getWalletTransferList(data) {
  return request({
    url: '/wallet/transfer',
    method: 'post',
    data
  })
}

export function getWalletFlashList(data) {
  return request({
    url: '/wallet/flash',
    method: 'post',
    data
  })
}

export function getWalletUserList(data) {
  return request({
    url: '/wallet/user',
    method: 'post',
    data
  })
}

export function getUserProfit(data) {
  return request({
    url: '/wallet/userProfit',
    method: 'post',
    data
  })
}


export function getWalletEnvelopeList(data) {
  return request({
    url: '/wallet/envelope',
    method: 'post',
    data
  })
}

export function getWalletEnvelopeInfoList(data) {
  return request({
    url: '/wallet/envelopeInfo',
    method: 'post',
    data
  })
}

export function getWalletMasterCardList(data) {
  return request({
    url: '/wallet/masterCard',
    method: 'post',
    data
  })
}

export function getWalletGroupList(data) {
  return request({
    url: '/wallet/group',
    method: 'post',
    data
  })
}

export function getWalletUserOverview(data) {
  return request({
    url: '/wallet/user/overview',
    method: 'post',
    data
  })
}


export function getWalletUserListOverview(data) {
  return request({
    url: '/wallet/user/list',
    method: 'post',
    data
  })
}


export function getWalletBonusRecord(data) {
  return request({
    url: '/wallet/bonusRecord',
    method: 'post',
    data
  })
}

export function getDayProfitBetAmount(data) {
  return request({
    url: '/wallet/dayProfitBetAmount',
    method: 'post',
    data
  })
}
