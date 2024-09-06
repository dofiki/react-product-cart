import Product from "./product";

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

export default function Products({onProduct}){

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