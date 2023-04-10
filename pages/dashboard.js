import { useEffect, useState } from 'react';
import { PaperEmbeddedWalletSdk, UserStatus } from "@paperxyz/embedded-wallet-service-sdk";

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

    async function fetch() {
        const modal = new web3modal();
        const connection = await modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const contract = new ethers.Contract(
            address,
            abi,
            provider
        );
        const data = await contract.inventory();
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
                    host: i.host.toNumber()
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
        <div>

            <p>Dashboard</p>
            <p>email: {user?.authDetails?.email || ""}</p>
            <p>address: {user?.walletAddress || ""}</p>
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
                />
            })}
            <button onClick={click}>debug</button>
            <Dashboard/>
        </div>
    )
}