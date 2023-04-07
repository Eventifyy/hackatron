import { useEffect, useState } from 'react';
import { PaperEmbeddedWalletSdk, UserStatus } from "@paperxyz/embedded-wallet-service-sdk";

export default function Host() {

    const [sdk, setSdk] = useState()

    const clientId = process.env.NEXT_PUBLIC_PAPER_KEY

    useEffect(() => {
        setSdk(new PaperEmbeddedWalletSdk({
            clientId: clientId,
            chain: 'Mumbai',
        }))
    }, [])

    async function callContract() {
        const { user } = await sdk.auth.loginWithPaperModal();
        const signer = await user.wallet.getEthersJsSigner();

        const params = {
            contractAddress: "0xb2369209b4eb1e76a43fAd914B1d29f6508c8aae",
            methodInterface: "function claimTo(address _to, uint256 _tokenId, uint256 _quantity) external",
            methodArgs: [user.walletAddress, 1, 1],
        };
        const { transactionHash } = await user.wallet.gasless.callContract(params);
    }

    function click() {
        callContract()
    }

    return (
        <div>
            <p>Host</p>
            <button onClick={click}>Debug</button>
        </div>
    )
}