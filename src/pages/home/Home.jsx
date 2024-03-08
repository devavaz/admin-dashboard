import Navbar from "../../components/navbar/Navbar"
import Siderbar from "../../components/sidebar/Siderbar"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
        <Siderbar />
        <div className="homeContainer">
            <Navbar />
            home container
        </div>
    </div>
  )
}

export default Home