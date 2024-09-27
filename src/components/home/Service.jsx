import React from "react";

const Service = () => {
  return (
    <section className="service mt-30 container">
      <div className="service-flex flex align-center justify-around  flex-wrap">
        <div className="service-items">
          <div className="details">
          <img src="images/service-icon/delivery.png" alt="delivery" />
          <p>
            <strong>Free Delivery</strong>
          </p>
          <p>from $50</p>
          </div>
        </div>
        <div className="service-items">
           <div className="details">
           <img src="images/service-icon/customer.png" alt="" />
          <p>
            <strong>99% Customer</strong>
          </p>
          <p>Feedbacks</p>
           </div>
        </div>
        <div className="service-items">
           <div className="details">
           <img src="images/service-icon/days.png" alt="" />
          <p>
            <strong>365 Days</strong>
          </p>
          <p>for free return</p>
           </div>
        </div>
        <div className="service-items">
             <div className="details">
             <img src="images/service-icon/payment.png" alt="" />
          <p>
            <strong>Payment</strong>
          </p>
          <p>Secure System</p>
             </div>
        </div>
        <div className="service-items">
             <div className="details">
             <img src="images/service-icon/best.png" alt="" />
          <p>
            <strong>Only Best</strong>
          </p>
          <p>Brands</p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
