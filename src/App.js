import { useState } from "react"

export default function App(){

  const[sideBarStatus, setSideBar] = useState(false);

  function handleSideBar(){
    setSideBar(!sideBarStatus);
  }

  return <div>
    <Banner onSideBar={handleSideBar} sideBarStatus={sideBarStatus}/>
    <Products onSideBar={handleSideBar} />
    <Sidebar sideBarStatus={sideBarStatus}/>
  </div>
}

function Banner({onSideBar,sideBarStatus}){
  return <div className="banner">
    <h1 className="logo">ProductCart</h1>
    <p className="cartBar" 
       onClick={onSideBar}>{sideBarStatus?"close":"cart"}<span className="badge">0</span></p>
  </div>
}

function Products({onSideBar}){

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