import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import World from "../components/World";
import styles from "../styles/style";
export default function Home() {

  return (
    <div className="bg-[#00040f] w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          {/* <MainHeader/> */}
          {/* <Navbar /> */}
        </div>
      </div>

      <div className={`bg-[#00040f] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div >
        <Explore className="gradient-03 z-0" />
        <World />
      </div>

      <div>
        <Footer />
      </div>



    </div>
  )
}