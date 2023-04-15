import MainHeader from '../components/MainHeader'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar/>

      <MainHeader />
      <div className="absolute z-[0] w-[40%] h-[35%] top-[20] pink__gradient" />
      <Component {...pageProps} />
      </div>
  )
}
