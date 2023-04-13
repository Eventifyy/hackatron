import { useEffect, useState } from 'react';
import { PaperEmbeddedWalletSdk, UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import CreateNFT from '../components/CreateNFT';
import HostComponent from '../components/HostComponent';
import WhatsNew from '../components/WhatsNew';
import Footer from '../components/Footer'
import Features from '../components/Features';

export default function Host() {

    const [ status, setStatus ] = useState()
    const [userAddr, setUserAddr] = useState();
    const [sdk, setSdk] = useState()

    const clientId = process.env.NEXT_PUBLIC_PAPER_KEY
    
    useEffect(()=> {
        fetchAddr()
    }, [])

    useEffect(() => {
        setSdk(new PaperEmbeddedWalletSdk({
            clientId: clientId,
            chain: 'Mumbai',
        }))
    }, [])
    
    async function fetchAddr() {
        if (sdk) {
            const result = await sdk.getUser();
            setUserAddr(result?.walletAddress)
        }
	}

    

    return (
        <div>
            <div className='bg-[#00040f] overflow-hidden z-0'>
                <HostComponent />
                <Features/>
                <WhatsNew/>
            </div>
            <CreateNFT />
            <div className='bg-[#00040f] overflow-hidden'>

            <Footer/>
            </div>
            
        </div>

    )
}