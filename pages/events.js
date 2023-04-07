import { useEffect, useState } from 'react';
import { PaperEmbeddedWalletSdk, UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import { ethers } from "ethers";

export default function Events() {

    const [sdk, setSdk] = useState()

    const clientId = process.env.NEXT_PUBLIC_PAPER_KEY

    useEffect(() => {
        setSdk(new PaperEmbeddedWalletSdk({
            clientId: clientId,
            chain: 'Mumbai',
        }))
    }, [])

    async function callContract() { }



    function click() {}

    return (
        <div>
            <p>Events</p>
            <button onClick={click}>Debug</button>
        </div>
    )
}