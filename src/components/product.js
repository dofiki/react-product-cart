export default function Product({id,name,price,onProduct}){
    return <div className="box">
      <div className="boxImg" style={{backgroundColor:name}} ></div>
      <div className="productMeta">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
        <button className="addBtn" onClick={()=>onProduct(id)}>Add to cart</button>
      </div>
    </div>
  }