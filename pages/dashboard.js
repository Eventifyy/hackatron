import { useEffect, useState } from 'react';
import { PaperEmbeddedWalletSdk, UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import { EventifyAddress, EventfiyAbi } from "../config"
import { ethers } from "ethers";
import axios from "axios";
import DashboardComponent from '../components/DashboardComponent';

import InsightCard from '../components/InsightsCard';

export default function Dashboard() {

    const [sdk, setSdk] = useState()
    const [user, setUser] = useState({})

    const clientId = process.env.NEXT_PUBLIC_PAPER_KEY

    useEffect(() => {
        setSdk(new PaperEmbeddedWalletSdk({
            clientId: clientId,
            chain: 'Mumbai',
        }))
    }, [])


    useEffect(() => {
        getUserInfo()
    }, [sdk])

    async function getUserInfo() {
        if (sdk) {
            const result = await sdk.getUser();
            setUser(result)
        }
    }


    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch();
    }, []);

    const INFURA_ID = process.env.NEXT_PUBLIC_INFURA

    async function fetch() {
        const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
        const contract = new ethers.Contract(
            EventifyAddress,
            EventfiyAbi,
            provider
        );
        const data = await contract.unverifiedEvents();
        const itemsFetched = await Promise.all(
            data.map(async (i) => {
                const tokenUri = await contract.uri(i.tokenId.toString());
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatEther(i.price);
                let item = {
                    price,
                    name: meta.data.name,
                    cover: meta.data.cover,
                    date: meta.data.date,
                    venue: meta.data.venue,
                    theme: meta.data.theme,
                    tokenId: i.tokenId.toNumber(),
                    supply: i.supply.toNumber(),
                    remaining: i.remaining.toNumber(),
                    // host: i.host.toNumber()
                };
                return item;
            })
        );

        console.log(items);
        setItems(itemsFetched);
        setLoaded(true);
    }



    function Card(prop) {
        return (
            <div>
                {prop.tokenId}
            </div>
        )
    }

    function click() {
        console.log(user)
    }


    return (
        // <div className=''>
        //     <div className='gradient-04 z-0'/>
        //     <p>Dashboard</p>
        //     <p>email: {user?.authDetails?.email || ""}</p>
        //     <p>address: {user?.walletAddress || ""}</p>
        //     {items.map((item,i) => {
        //         <DashboardComponent
        //             key={i}
        //             price={item.price}
        //             name={item.name}
        //             cover={item.cover}
        //             date={item.date}
        //             venue={item.venue}
        //             theme={item.theme}
        //             tokenId={item.supply}
        //             supply={item.supply}
        //             remaining={item.remaining}
        //             description={item.description}


        //             host={item.host}
        //         />
        //     })}
        //     <button onClick={click}>debug</button>
            
        // </div>



        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Dashboard</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="p-10 items-center ml-11 pl-10 justify-center mb-5">
        <div class="h-full flex ml-10 mb-10 items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Rahul Kathuria</h2>
            <h2 class="title-font font-medium text-lg text-gray-900">{user?.authDetails?.email || ""}</h2>
            <h3 class="text-gray-500 mb-3">{user?.walletAddress || ""}</h3>
            <p class="mb-4">{user?.status || ""}</p>
            {/* <button onClick={click}>debug</button> */}
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start gap-4">
                {items.map((item,i) => (
                  <button className="w-[400px] flex flex-col justify-start gap-4 bg-white/5 p-3 rounded-md hover:bg-gray-200">
                              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={item.cover}/>

                  
                    <h1 className="font-semibold text-xl">
                      {item.name}

                    </h1>
                    <p>
                      {item.date}
                    </p>
                    <p>
                      {item.venue}
                    </p>
                    <p>
                      {item.description}
                    </p>
                    <button className="px-4 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Buy Now</button>

                  </button>
                ))}
              </div>

  </div>
</section>
    )
}