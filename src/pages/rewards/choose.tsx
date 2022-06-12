import { Button, Skeleton } from 'antd'
import { IL_TREE, IMAGE_PATHS } from 'assets'
import Header from 'components/header'
import AppIcon from 'components/icon'
import { useRewards } from 'hooks/rewards'
import Image from 'next/image'

const ChooseRewards = () => {
  const { rewards, selectedReward, setSelectedReward, loading } = useRewards()
  const { voucherId } = selectedReward || {}
  return (
    <div>
      <Header>Reward Options</Header>
      <div className="relative flex justify-center">
        <IL_TREE className="w-screen h-auto" />
        <div className="absolute top-0 h- w-full">
          <Image
            src={IMAGE_PATHS.option}
            alt=""
            width={'100%'}
            height="50%"
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
          <div className="flex flex-col justify-center">
            <p className="text-center text-base font-[600] text-primary-dark mb-[2px] mt-4">
              Here is reward for your green journey
            </p>
            <p className="text-center text-base font-[600] text-primary-dark">Please select one</p>
          </div>
        </div>
      </div>
      <div className="p-4 pb-[80px]">
        {loading && <Skeleton />}
        {rewards.map((reward: any) => (
          <div
            key={reward.voucherId}
            className={`p-4 ${
              voucherId === reward.voucherId ? 'border-2 border-primary-dark' : 'border border-[#D9D9D9]'
            } rounded-2xl relative mb-4`}
          >
            <div className="mb-4 w-full h-auto relative" onClick={() => setSelectedReward(reward)}>
              <Image
                src={IMAGE_PATHS.rewardFood}
                alt=""
                width="100%"
                height="30%"
                layout="responsive"
                objectFit="contain"
                quality={100}
              />
              <div className="w-full h-full absolute left-4 top-0 flex flex-col justify-center text-primary-dark">
                <p className="text-[18px] font-[600] mb-2">{reward.title}</p>
                <p className="text-xs">{reward.terms}</p>
              </div>
            </div>
            <div className="px-4">
              <div className="pt-2 flex justify-between items-center border-t border-[#D9D9D9] h-6">
                <p className="text-xs text-mono-light">More Detail</p>
                <AppIcon name="down" dimension={14} viewBox="0 0 14 8" />
              </div>
            </div>
            <div
              className={`absolute w-4 h-8 bottom-6 ${
                voucherId === reward.voucherId
                  ? '-left-[2px] border-2 border-primary-dark'
                  : '-left-[1px] border border-[#D9D9D9]'
              } border-l-0  bg-white`}
              style={{ borderRadius: '0 33px 33px 0' }}
            />
            <div
              className={`absolute w-4 h-8 bottom-6 ${
                voucherId === reward.voucherId
                  ? '-right-[2px] border-2 border-primary-dark'
                  : '-right-[1px] border border-[#D9D9D9]'
              } border-r-0  bg-white`}
              style={{ borderRadius: '34px 0 0 34px' }}
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-screen p-4 pb-8">
        <Button className="h-12 bg-primary-dark rounded-2xl w-full border-0 outline-none text-white font-[600]">
          Choose Reward
        </Button>
      </div>
    </div>
  )
}

export default ChooseRewards
