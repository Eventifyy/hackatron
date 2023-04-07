import Link from "next/link";
import Sign from "./connectWallet";

export default function Navbar() {

    const styles = {
        container: {
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around'
        },
    };

    return (
        <div style={styles.container}>
            <Link href="/"><p>Eventify</p></Link>
            <Link href="/host"><p>Host</p></Link>
            <Link href="/events"><p>Events</p></Link>
            <Link href="/dashboard"><p>Dashboard</p></Link>
            <Sign />
        </div>
    )
}