export default function Banner({onSideBar,sideBarStatus,productList}){
    return <div className="banner">
      <h1 className="logo">ProductCart</h1>
      <p className="cartBar" 
         onClick={onSideBar}>{sideBarStatus?"close":"cart"}
         {productList.length===0?"":<span className="badge">{productList.length}</span>}</p>
    </div>
  }