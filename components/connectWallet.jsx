import { PaperEmbeddedWalletSdk } from "@paperxyz/embedded-wallet-service-sdk";
import { useEffect, useState } from 'react';

export default function Sign() {

    const [sdk, setSdk] = useState()
    const [logged, setLogged] = useState(false)
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

    async function login() {
        await sdk.auth.loginWithPaperModal();
        setLogged(true)
    }

    async function logout() {
        await sdk.auth.logout();
        setLogged(false)
    }

    function click() {
        console.log(user.status)
    }

    return (
        <div>
            {user.status == 'Logged In, Wallet Initialized' ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
            {/* <button onClick={click}>click</button> */}
        </div>
    )
}
