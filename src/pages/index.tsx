import { Button, Skeleton } from 'antd'
import { IL_LogoBottom, IL_REWARD, IL_TREE, IL_Work, IMAGE_PATHS, LG_MAIN } from 'assets'
import Header from 'components/header'
import AppIcon from 'components/icon'
import AppContext from 'hooks/context'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const Home: NextPage = () => {
  const { push } = useRouter()
  const { profile, loading } = useContext(AppContext)
  return (
    <div>
      <Header>
        <LG_MAIN />
      </Header>
      <div className="relative flex justify-center">
        <IL_TREE className="w-screen h-auto" />
        <div
          className={`absolute bottom-4 w-[200px] h-[200px] rounded-full  ${profile.icon ? '' : 'bg-pepper-normal'}`}
        >
          {profile.icon && (
            <Image
              src={profile.icon}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              quality={100}
            />
          )}
        </div>
      </div>
      <div className="my-4 text-base text-mono-light flex justify-center items-center gap-4">
        <p>{profile.miles} Miles</p>
      </div>
      <div className="flex justify-center items-center gap-2 mb-4">
        {loading && <Skeleton.Input />}
        <h2 className="text-2xl font-[600]">{profile.currentLevel}</h2>
        <AppIcon name="info" />
      </div>
      <div className="flex justify-center items-center gap-2 mb-3">
        <AppIcon name="reward" dimension={22} className="h-[18px]" viewBox="0 0 22 18" />
        <p className="text-xs">Reward : {profile.milesNeedForNextReward} Miles to go</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[26px] bg-[#EEEEEE] rounded-full w-[310px] relative">
          <div className="flex justify-center items-center absolute w-full">
            <div className="w-9 h-9 bg-[#EEEEEE] rounded-full -m-[5px]" />
          </div>
          <div className="h-4 w-[184px] bg-primary-normal absolute left-[5px] top-[5px] rounded-full">
            <div className="relative w-full">
              <div className="absolute -right-[14px] -top-[14px]">
                <AppIcon name="leaf" dimension={38} viewBox="0 0 26 38" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center absolute w-full p-[2px]">
            <div className="w-[22px] h-[22px] bg-[#E1E1E1] rounded-full flex justify-center items-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <div className="w-[22px] h-[22px] bg-[#E1E1E1] rounded-full flex justify-center items-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <div className="w-[22px] h-[22px] bg-[#E1E1E1] rounded-full flex justify-center items-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="flex justify-between items-center w-[329px] text-[8px] text-mono-light text-center">
          <div>
            <p>{profile.previousLevelMiles} Miles</p>
            <p>{profile.previousLevel}</p>
          </div>
          <div className="text-[10px] text-black">
            <p>{profile.currentLevelMiles} Miles</p>
            <p>{profile.currentLevel}</p>
          </div>
          <div>
            <p>{profile.nextLevelMiles} Miles</p>
            <p>{profile.nextLevel}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-[#FAFAFA]">
        <div className="flex justify-between items-center mb1">
          <p className="text-base font-[600]">Rewards</p>
          <Button className="rounded-full" onClick={() => push('/rewards')}>
            Check All
          </Button>
        </div>
        <Image
          src={IMAGE_PATHS.reward}
          alt=""
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="contain"
          quality={100}
          onClick={() => push('/rewards/choose')}
        />
      </div>
      <div className="p-4 bg-white">
        <div className="h-[1px] w-full bg-pepper-normal" />
      </div>
      <div className="p-4 bg-[#FAFAFA]">
        <Image
          src={IMAGE_PATHS.work}
          alt=""
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="contain"
          quality={100}
          onClick={() => push('/faq')}
        />
        <IL_LogoBottom className="w-full h-auto mt-4" />
      </div>
      <div className="p-4 bg-[#FAFAFA]"></div>
    </div>
  )
}

export default Home
