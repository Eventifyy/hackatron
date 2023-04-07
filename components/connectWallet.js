// import { Web3Auth } from "@web3auth/modal";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { useEffect, useState } from 'react';

export default function ConnectWallet() {

    const [auth, setAuth] = useState()
    const [provider, setProvider] = useState()


    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID

    const Web3AuthOptions = {
        clientId,
        web3AuthNetwork: "cyan",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x13881",
          rpcTarget: "https://polygon-mumbai.infura.io/v3/eec39d04a1064883bf94ec917264ce9a",
        },
        uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["facebook", "google"],
            // appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
          },
          defaultLanguage: "en",
          modalZIndex: "99998",
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


    async function login() {
        if(!auth) {
            console.log("web3auth not initialized")
            return
        }
        const web3authProvider = await auth.connect()
        setProvider(web3authProvider)
    }

    async function logout() {
        if(!auth) {
            console.log("web3auth not initialized")
            return
        }
        const web3authProvider = await auth.logout()
        setProvider(web3authProvider)
    }



    return (
        <div>
            {provider ? <button onClick={logout}>logout</button> : <button onClick={login}>login</button>}
        </div>
    )
}