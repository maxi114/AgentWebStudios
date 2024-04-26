'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                    Website Design <br /> that works
                </div>
                <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
                    Creating, designing and developing websites that work for your business.
                </p>
            </div>

            <div className="flex justify-center items-center ">
  <div className="grid grid-cols-2 gap-4 py-10 ">
    <div className="grid justify-center items-center gap-4">
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          priority
          className="h-auto max-w-full rounded-lg"
          src="/images/realtor2.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          priority
          className="h-auto max-w-full rounded-lg"
          src="/images/realtor1.png"
          alt=""
        />
      </div>
    </div>
    <div className="grid justify-center items-center gap-4">
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          priority
          className="h-auto max-w-full rounded-lg"
          src="/images/business.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          priority
          className="h-auto max-w-full rounded-lg"
          src="/images/9.png"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

        </div>);
}

export default WebsiteDesign;