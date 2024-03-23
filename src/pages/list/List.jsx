import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Siderbar from "../../components/sidebar/Siderbar"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Siderbar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable />
      </div>
    </div>
  )
}

export default List