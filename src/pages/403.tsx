import { Button } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Error: NextPage = () => {
  // const { push } = useRouter()
  return (
    <div className="w-screen min-h-screen bg-white pb-24 flex flex-col items-center justify-center">
      <p className="mt-8 text-xl font-[600]">Something is wrong</p>
      <p className="mt-2 text-sm text-mono-light">Please try again in few minutes</p>
      {/* <div className="fixed bottom-0 left-0 w-screen p-4 pb-8 bg-white border-t-2 border-mono-lighter rounded-t-2xl gap-2">
        <Button className="w-full h-12 bg-main border-0 text-white font-[600] rounded-full" onClick={() => push('/')}>
          Back To Home
        </Button>
      </div> */}
    </div>
  )
}

export default Error
