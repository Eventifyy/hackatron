import { useEffect, useState } from 'react';
import { address, abi } from "../config"
import web3modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";

export default function Events() {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch();
    }, []);

    async function fetch() {
        const modal = new web3modal();
        const connection = await modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
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
                    date: meta.data.date,
                    venue: meta.data.venue,
                    theme: meta.data.theme,
                    tokenId: i.tokenId.toNumber(),
                    supply: i.supply.toNumber(),
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