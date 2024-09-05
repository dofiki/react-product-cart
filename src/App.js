import { useState } from "react"

export default function App(){

  const[sideBarStatus, setSideBar] = useState(false);

  function handleSideBar(){
    setSideBar(!sideBarStatus);
  }

  return <div>
    <Banner onSideBar={handleSideBar}/>
    <Products />
    <Sidebar sideBarStatus={sideBarStatus}/>
  </div>
}

function Banner({onSideBar}){
  return <div className="banner">
    <h3 className="logo">ProductCart</h3>
    <p className="cartBar" onClick={onSideBar}>cart</p>
  </div>
}

function Products(){

  return <div className="products-w">
      <div className="productTitle">
        <h2>Products list:</h2>
      </div>
      <div className="products">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
  </div>

}

function Sidebar({sideBarStatus}){
  return <div className={sideBarStatus?"sideBarActive":"sideBar"}>
    <h2>Your Products:</h2>
  </div>
}