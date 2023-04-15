
export default function Navbar() {

    const styles = {
        container: {
            backgroundColor: '#8A42D8',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around',
            padding: "2px"
        },
    };

    return (
        // <div style={styles.container}>
        //     <Link href="/"><p>Eventify</p></Link>
        //     <Link href="/host"><p>Host</p></Link>
        //     <Link href="/events"><p>Events</p></Link>
        //     <Link href="/dashboard"><p>Dashboard</p></Link>
        //     <Sign />
        // </div>
        <div style={styles.container} className="bg-[]">
            <p>I'm in beta now, things may break, please handle with care : )</p>
        </div>
    )
}