import styles from "../styles/style";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { setAlert, setGlobalState, useGlobalState } from '../store'
// import { payToMint } from '../Adulam'

const HostComponent = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../public/92144-content-app.json'),
    });

    return () => {
      animationRef.current.destroy();
    };
  }, []);

  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    
    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }


  return (
    // <div
    //   className="host
    //     bg-no-repeat bg-cover"
    // >
    //   <div className="flex flex-col justify-center items-center mx-auto py-10">
    //     <div className="flex flex-col justify-center items-center">
    //       <h1 className="text-white text-5xl font-bold text-center">
    //         Host <br />
    //         <span className="text-gradient">NFTs</span> Events
    //       </h1>

    //       <p className="text-white font-semibold text-sm mt-3">
    //         Mint and collect the hottest NFTs around.
    //       </p>

    //       <button
    //         className="shadow-xl shadow-black text-white
    //         bg-[#e32970] hover:bg-[#bd255f] p-2
    //         rounded-full cursor-pointer my-4"
    //         onClick={onCreatedNFT}
    //       >
    //         Host Now
    //       </button>

    //       <a
    //         href="https://daltonic.github.io/"
    //         className="flex flex-row justify-center space-x-2 items-center
    //         bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
    //       >
           
    //         <Image src={avatar} className="w-11 h-11 object-contain rounded-full"/>

    //         <div className="flex flex-col font-semibold">
    //           <span className="text-white text-sm">0xf55...146a</span>
    //           <span className="text-[#e32970] text-xs">Ansh</span>
    //         </div>
    //       </a>

    //       <p className="text-white text-sm font-medium text-center">
    //         Gospel Darlington kick-started his journey as a software engineer in
    //         2016. <br /> Over the years, he has grown full-blown skills in
    //         JavaScript stacks such as <br /> React, ReactNative, VueJs, and now
    //         blockchain.
    //       </p>

    //       <ul className="flex flex-row justify-center space-x-2 items-center my-4">
    //         <a
    //           className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    //           href="https://github.com/Daltonic"
    //         >
    //             <Image src={github} className="w-7 h-7"/>
    //         </a>
    //         <a
    //           className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    //           href="https://www.linkedin.com/in/darlington-gospel-aa626b125"
    //         >
    //             <Image src={linkedin} className="w-7 h-7"/>
    //         </a>
    //         <a
    //           className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    //           href="https://fb.com/darlington.gospel01"
    //         >
    //           <Image src={facebook} className="w-7 h-7"/>
    //         </a>
    //         <a
    //           className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    //           href="https://twitter.com/idaltonic"
    //         >
    //             <Image src={twitter} className="w-7 h-7"/>
    //         </a>
    //         <a
    //           className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    //           href="https://darlingtongospel.medium.com/"
    //         >
    //             <Image src={medium} className="w-7 h-7"/>
    //         </a>
    //       </ul>

    //       <div
    //         className="shadow-xl shadow-black flex flex-row
    //         justify-center items-center w-10 h-10 rounded-full
    //       bg-white cursor-pointer p-3 ml-4 text-black 
    //         hover:bg-[#bd255f] hover:text-white transition-all
    //         duration-75 delay-100"
    //       >
    //         <span className="text-xs font-bold">{nfts.length}/99</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section class="text-gray-600 body-font p-4">

  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="font-semibold lg:text-[42px] text-[26px] text-white">Host An Event</h1>
      <p class="mt-[10px] font-normal lg:text-[20px] text-[14px] text-secondary-white">Individuals can host their own events on the platform for a nominal hosting fee.These NFTs can also be used to verify users and provide access not only to offline events but also to online token-gated meetings.

</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          {/* <label for="hero-field" class="leading-7 text-sm text-white mt-[10px]">Placeholder</label> */}
          <input type="text" id="hero-field" name="hero-field" class="w-full blue-glassmorphism rounded mt-4 border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-[#8A42D8] font-normal border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg" onClick={onCreatedNFT}>Host Now</button>
      </div>
      {/* <p class="text-sm mt-2 text-gray-200 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
      <div class="flex lg:flex-row md:flex-col mt-7">
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span class="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Download on the</span>
            <span class="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <div className="absolute z-[0] w-[40%] h-[35%] top-[20] pink__gradient" />
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} ref={containerRef}/>



    </div>
  </div>
</section>
  )
}

export default HostComponent
