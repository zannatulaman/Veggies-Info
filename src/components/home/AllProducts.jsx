import { useState } from "react";
import products from "../../staticData/product";

const AllProducts = () => {
  const [productList, setProductList] = useState(products);
  const [productItem, setProductItem] = useState(productList);

  console.log('productList', productList);
  console.log('productItem', productItem);



  const handleFilter = (type) => {
    // console.log('Product', productItem);

    if (!type) {
      setProductItem(productList);
    } else {
      const filterProduct = productList.filter((item) => item.type === type);
      setProductItem(filterProduct);
      // console.log(filterProduct);
    }
  };

  return (
    <div className="all-products  mt-30 container">
      <div className="flex align-center justify-between flex-wrap">
        <div>
          <p className="paragraph">ooo FRESH FROM OUR FIRM</p>
          <h1 className="heading">Our Organic Products</h1>
        </div>
        <div>
          <button className="primary-btn" onClick={() => handleFilter()}>
            All
          </button>
          <button
            className="primary-btn"
            onClick={() => handleFilter("vegitable")}
          >
            Vegetables
          </button>
          <button className="primary-btn" onClick={() => handleFilter("fruit")}>
            Fruits
          </button>
          <button className="primary-btn">Bread</button>
        </div>
      </div>
{/*      
      <div className="grid grid-cols-2 grid-gap-25 mt-20 grid-cols-2-responsive">
            <div className="allproducts-items">
              <div className="flex align-center justify-center flex-gap-20 flex-wrap">
                <img src= "images/all-products/fruit2.png" alt= "cherry" />
                <div>
                  <div className="flex align-center justify-between">
                    <p className="paragraph">MEATS</p>
                    <button className="secondary-btn">-27</button>
                  </div>
                  <h5 className="heading5">
                    &#9733; &#9733; &#9733; &#9733;{" "}
                    <strong>&#9734; (4.0)</strong>
                  </h5>
                  <h6>Cherry</h6>
                  <p className="paragraph">$60
                    <span className="span"> $65</span>
                  </p>
                </div>
              </div>
            </div>
      </div> */}



      <div className="grid grid-cols-2 grid-gap-25 mt-20 grid-cols-2-responsive">
        {productItem?.map((item, index) => {
          // console.log('item', item);
          return (
            // Added return statement here
            <div key={index} className="allproducts-items">
              <div className="flex align-center justify-center flex-gap-20 flex-wrap">
                <img src={item?.image} alt={item?.type} />
                <div>
                  <div className="flex align-center justify-between">
                    <p className="paragraph">MEATS</p>
                    <button className="secondary-btn">{item?.discount}</button>
                  </div>
                  <h5 className="heading5">
                    &#9733; &#9733; &#9733; &#9733;{" "}
                    <strong>&#9734; (4.0)</strong>
                  </h5>
                  <h6>{item?.name}</h6>
                  <p className="paragraph">
                    {item?.currentPrice}{" "}
                    <span className="span">${item?.prevPrice}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <center>
        {" "}
        <button className="primary-btn mt-20">Subscribe &rarr;</button>
      </center>
    </div>
  );
};

export default AllProducts;
