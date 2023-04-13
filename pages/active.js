// import Insights from "../components/Insights"
import { motion } from 'framer-motion';
import styles from '../styles/style';
import { staggerContainer } from '../utils/motion';
import InsightCard from '../components/InsightsCard';
import { TypingText, TitleText } from '../components/CustomTexts';


import { useEffect, useState } from 'react';
import { EventifyAddress, EventfiyAbi } from "../config"
import { ethers } from "ethers";
import axios from "axios";

const Active = () => {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    console.log(items,"items loaded")
    useEffect(() => {
        fetch();
    }, []);

    const INFURA_ID = process.env.NEXT_PUBLIC_INFURA

    const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
        
    provider.once('purchased', () => {
        console.log('a tx just occurred')
        // bridge(host, owner, tokenUri)
    })

    async function fetch() {
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
                    description: meta.data.description,
                    date: meta.data.date,
                    venue: meta.data.venue,
                    supply: i.supply.toNumber(),
                    tokenId: i.tokenId.toNumber(),
                    remaining: i.remaining.toNumber(),
                    host: i.host,
                    buyLink: i.buyLink.toString(),
                };
                return item;
            })
        );

        setItems(itemsFetched);
        // console.log(itemsFetched);
        setLoaded(true);
    }

    async function bridge(host, owner, tokenUri) {

    }


    function Card(prop) {
        return (
            <div>
                {prop.tokenId}
            </div>
        )
    }

    function click() { }


    return(
        // <div className="bg-[#151c25]">

        //     <Insights/>
        // </div>

        <section className={`sm:p-16 xs:p-8 px-10 py-12 relative z-10 bg-[#151c25] `}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
                      <div className="gradient-04 z-0" />

          <TypingText title="| Insight" textStyles="text-center" />
          <TitleText title={<>Insight about events</>} textStyles="text-center" />
          <div className="mt-[50px] flex flex-col gap-[30px]">


            {items.map((item,i) =>{
                return(
                    
                    <InsightCard 
                    key={i}
                    price={item.price}
                    name={item.name}
                    cover={item.cover}
                    date={item.date}
                    venue={item.venue}
                    theme={item.theme}
                    tokenId={item.supply}
                    supply={item.supply}
                    remaining={item.remaining}
                    host={item.host}
                    buyLink={item.buyLink}
                    />
                )
            })}
          </div>
        </motion.div>
      </section>
    )
}

export default Active