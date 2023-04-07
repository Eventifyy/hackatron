import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { useEffect, useState } from 'react';

export default function Dashboard() {

    const Web3AuthOptions = {
        clientId,
        web3AuthNetwork: "cyan",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x13881",
          rpcTarget: "https://polygon-mumbai.infura.io/v3/eec39d04a1064883bf94ec917264ce9a",
        },
      }

    useEffect(() => {
        const init = async () => {
            const web3auth = new Web3Auth(Web3AuthOptions).then(getUserInfo())
            setAuth(web3auth)
            await web3auth.initModal()
            setProvider(web3auth.provider)
        }
        init()
    }, [])

    const [user, setUser] = useState({})
    
    async function getUserInfo() {

        const user = await auth.getUserInfo()
        setUser(user)
        console.log(user)
    }
    
    function click() {
        console.log(provider)
    }

    return (
        <div>Dashboard</div>
    )
}