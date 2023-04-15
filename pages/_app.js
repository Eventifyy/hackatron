import MainHeader from '../components/MainHeader'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar/>
      <MainHeader />
      <Component {...pageProps} />
      </div>
  )
}
