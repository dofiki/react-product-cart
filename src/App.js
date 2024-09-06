import { useState } from "react";
import Banner from "./components/banner";
import Products from "./components/products";
import Sidebar from "./components/sidebar";

const products=[
{id:1, name:"Red", price:8},
{id:2, name:"blue", price:5},
{id:3, name:"green", price:2},
{id:4, name:"yellow", price:15},
{id:5, name:"orange", price:3},
{id:6, name:"aqua", price:1},
{id:7, name:"beige", price:7},
{id:8, name:"Red", price:6},
{id:9, name:"brown", price:45},
{id:10, name:"blueviolet", price:9},
{id:11, name:"lightgreen", price:33},
{id:12, name:"grey", price:86},
]

export default function App(){

  const[sideBarStatus, setSideBar] = useState(false);
  const[productList, setProductList] = useState([]);

  function handleProductList(id){
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd && !productList.some((product) => product.id === id)) {
      setProductList([...productList, productToAdd]);
    }

  }
  
  function handleSideBar(){
    setSideBar(!sideBarStatus);
  }

  function handleRemove(id){
    setProductList(productList.filter((product) => product.id !== id))
  }
  //this is what buy btn does for right now
  function handleClear(){
    setSideBar(false);
    setProductList([]);
  }

  return <div>
    <Banner onSideBar={handleSideBar} sideBarStatus={sideBarStatus} productList={productList}/>
    <Products onSideBar={handleSideBar} onProduct={handleProductList}/>
    <Sidebar sideBarStatus={sideBarStatus} productList={productList} 
             onRemove={handleRemove} onClear={handleClear}/>
  </div>
}