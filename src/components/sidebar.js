export default function Sidebar({sideBarStatus, productList, onRemove, onClear}){

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
    
    