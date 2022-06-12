import { IL_LogoBottom, IMAGE_PATHS } from 'assets'
import Header from 'components/header'
import Image from 'next/image'

const Faq = () => {
  return (
    <div>
      <Header>What is GreenMiles?</Header>
      <div className="p-4 text-mono-light text-base pb-10">
        <div className="mb-4">
          <IL_LogoBottom className="w-full h-auto" />
        </div>
        <p className="mb-4">
          GreenMiles is a loyalty program from Grab that have a mission to encourage our users to use Grab services
          whilst keeping our earth safe by reducing carbon emission.
        </p>
        <p className="mb-6">
          Everytime you combined public transportation and Grab services in one journey, we will calculated “Miles”
          based on your reduced emission.
        </p>
        <p className="mb-4">Here is the sample combined trip that are eligible for earning Miles:</p>
        <div className="mb-3 w-full h-auto">
          <Image
            src={IMAGE_PATHS.caseA}
            alt=""
            width="100%"
            height="30%"
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
        </div>
        <p className="text-center mb-4">Case A (GrabCar and MRT trip)</p>
        <div className="mb-3 w-full h-auto">
          <Image
            src={IMAGE_PATHS.caseB}
            alt=""
            width="100%"
            height="30%"
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
        </div>
        <p className="text-center mb-4">Case B (GrabCar, Train and GrabBike)</p>
        <div className="p-4 bg-primary-dark text-center text-sm rounded-2xl mb-4">
          <p className="text-[#005426] mb-2">How emission is calculated?</p>
          <p className="text-white">Total km in trip x Estimated emission of vehicle</p>
        </div>
        <div className="p-4 bg-primary-dark text-center text-sm rounded-2xl mb-4">
          <p className="text-[#005426] mb-2">How Miles is calculated?</p>
          <p className="text-white">Actual emission - Occured Emission</p>
        </div>
        <p>
          Every 200 collected Miles, you will received a reward options that you can select according to your
          preference. The higher your level, the higher your reward amount will be received.
        </p>
      </div>
    </div>
  )
}

export default Faq
