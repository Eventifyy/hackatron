import MainHeader from '../components/MainHeader'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <MainHeader />
      <Component {...pageProps} />
    </div>
  )
}
