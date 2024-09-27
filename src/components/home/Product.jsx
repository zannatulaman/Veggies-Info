import { useState } from "react";
import products from "../../staticData/product";


const Product = () => {
    const [productItem , setProductItem] = useState(products);
    const [viewItem, setViewItem]= useState(4);
   
   const handleClick = () => {
      setViewItem(viewItem=== 4? productItem.length : 4);
      // setViewItem(productItem.length)
   }

   console.log('productItem', productItem.length);

  return (
    <div className="product mt-30 container">
      <div className="flex align-center justify-between flex-wrap">
        <div>
          <p className="paragraph">ooo FRESH FROM OUR FIRM</p>
          <h1 className="heading">Good Organic Products</h1>
        </div>
        <div>
          <button className="primary-btn" onClick={handleClick}>
                {viewItem === 4 ? "View More": "View Less"} &rarr;
          </button>
        </div>
      </div>
      <div className="flex align-center mt-20 flex-wrap">
        {/* <div className="product-items">
          <div className="flex align-center justify-between">
            <p className="paragraph">MEATS</p>
            <button className="secondary-btn">-27%</button>
          </div>
          <img src="images/product/tomato.png" alt="tomato-picture" />
          <h5 className="heading5"> &#9733; &#9733; &#9733; &#9733; <strong>&#9734; (4.0)</strong></h5>
          <h6>Organic Cabbage</h6>
          <p className="paragraph">$50 <span className="span">$60.00</span></p>
        </div> */}
             {
              productItem.slice(0, viewItem).map((item, index) => {
                    return(
                      <div key={index} className="product-items">
                      <div className="flex align-center justify-between">
                         <p className="paragraph">MEATS</p>
                         <button className="secondary-btn">{item?.discount}</button>
                      </div>

                      <img src= {item?.image} />
                    <h5 className="heading5"> &#9733; &#9733; &#9733; &#9733; <strong>&#9734; (4.0)</strong></h5>
                    <h6>{item?.name}</h6>
                    <p className="paragraph">${item?.prevPrice} <span className="span">${item.currentPrice}</span></p>

                  </div>
                )
               })
              }
      </div>
    </div>
  );
};

export default Product;
