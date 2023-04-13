import { useEffect, useState } from 'react';
import { EventifyAddress, EventfiyAbi } from "../config"
import { ethers } from "ethers";
import axios from "axios";

export default function Events() {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

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
        console.log(itemsFetched);
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

    return (
        <div>
            <p>Events</p>
            {items.map((item, i) => {
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