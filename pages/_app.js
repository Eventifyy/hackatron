import MainHeader from '../components/MainHeader'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <MainHeader />
      <Component {...pageProps} />
    </div>
  )
}
