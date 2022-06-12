import { IL_LogoBottom, IL_RewardBike, IMAGE_PATHS } from 'assets'
import Header from 'components/header'
import AppIcon from 'components/icon'
import { useVoucher } from 'hooks/rewards/voucher'
import Image from 'next/image'
import React from 'react'

const Rewards = () => {
  const { vouchers } = useVoucher()
  return (
    <div>
      <Header>Rewards Earned</Header>
      <div className="p-4">
        {vouchers.map((voucher: any) => (
          <div key={voucher.voucherId} className="p-4 border border-[#D9D9D9] rounded-2xl relative mb-4">
            <div className="mb-4 w-full h-auto relative">
              {(voucher.thumbnail || voucher.thumnnail) && (
                <Image
                  src={voucher.thumbnail || voucher.thumnnail}
                  alt=""
                  width="100%"
                  height="30%"
                  layout="responsive"
                  objectFit="contain"
                  quality={100}
                />
              )}
              <div className="w-full h-full absolute left-4 top-0 flex flex-col justify-center text-primary-dark">
                <p
                  className={`text-[18px] font-[600] mb-2 ${
                    voucher.status === 'Used' ? 'text-pepper-normal' : 'text-primary-dark'
                  }`}
                >
                  {voucher.title}
                </p>
                <p className="text-xs">{voucher.status}</p>
              </div>
            </div>
            <div className="px-4">
              <div className="pt-2 flex justify-between items-center border-t border-[#D9D9D9] h-6">
                <p className="text-xs text-mono-light">More Detail</p>
                <AppIcon name="down" dimension={14} viewBox="0 0 14 8" />
              </div>
            </div>
            <div
              className="absolute w-4 h-8 bottom-6 -left-[1px] border border-l-0 border-[#D9D9D9] bg-white"
              style={{ borderRadius: '0 33px 33px 0' }}
            />
            <div
              className="absolute w-4 h-8 bottom-6 -right-[1px] border border-r-0 border-[#D9D9D9] bg-white"
              style={{ borderRadius: '33px 0 0 33px' }}
            />
          </div>
        ))}
      </div>
      <div className="p-4">
        <IL_LogoBottom className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Rewards
