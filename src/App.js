import { useState } from "react";


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

function Banner({onSideBar,sideBarStatus,productList}){
  return <div className="banner">
    <h1 className="logo">ProductCart</h1>
    <p className="cartBar" 
       onClick={onSideBar}>{sideBarStatus?"close":"cart"}
       {productList.length===0?"":<span className="badge">{productList.length}</span>}</p>
  </div>
}

function Products({onProduct}){

  return <div className="products-w">
      <div className="productTitle">
        <h2>Products list:</h2>
      </div>
      <div className="products">
          {products.map((product)=>{
           return <Product 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onProduct={onProduct}
             />
          })}
      </div>
  </div>

}

function Sidebar({sideBarStatus, productList, onRemove, onClear}){

function totalAmount(){
   return productList.reduce((total, product) => total + product.price, 0);
}

  return (
    <div className={sideBarStatus ? "sideBarActive" : "sideBar"} >
      
      <h2>Your Products:</h2>
      {productList.map((pro,index) => (
        <div key={pro.id} className="sideBarItems">
          <div className="item">
            <p>{index+1}.</p>
            <h3>{pro.name}</h3>
            <p>$ {pro.price}</p>
            <button className="delItem" onClick={()=>onRemove(pro.id)}>remove</button>
            </div>
        </div> 
      ))}

     {productList.length===0? <div className="empty">empty 🛒</div>: <div className="stats">
        <h4>Total Amount: $ {totalAmount()}</h4>
        <button className="buyBtn" onClick={()=>onClear()}>Buy</button>
      </div>}
    </div>
  );
}

function Product({id,name,price,onProduct}){
  return <div className="box">
    <div className="boxImg" style={{backgroundColor:name}} ></div>
    <div className="productMeta">
      <div className="name">{name}</div>
      <div className="price">${price}</div>
      <button className="addBtn" onClick={()=>onProduct(id)}>Add to cart</button>
    </div>
  </div>
}