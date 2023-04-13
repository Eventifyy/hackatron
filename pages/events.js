import { useEffect, useState } from 'react';
import { EventifyAddress, EventfiyAbi } from "../config"
import { ethers } from "ethers";
import axios from "axios";

export default function Events() {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     fetch();
    // bridge();
    // }, []);

    const INFURA_ID = process.env.NEXT_PUBLIC_INFURA

    async function fetch() {
        const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
        const contract = new ethers.Contract(
            address,
            abi,
            provider
        );
        
        const data = await contract.activeEvents();
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
                    host: i.host.toNumber(),
                    buyLink: i.buyLink.toNumber(),
                };
                return item;
            })
        );

        console.log(items);
        setItems(itemsFetched);
        setLoaded(true);
    }

    async function bridge() {
        provider.on('purchased', () => {
            console.log('a tx just occurred')
        })
    } 


    function Card(prop) {
        return (
            <div>
                {prop.tokenId}
            </div>
        )
    }

    function click() { }

    return (
        <div>
            <p>Events</p>
            {items.map((item,) => {
                <Card
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
            })}
            <button onClick={click}>Debug</button>
        </div>
    )
}