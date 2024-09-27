import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FoodStore = () => {
  return (
    <div className="foodStore mt-30 container">
      <div className="flex-left grid grid-cols-2  grid-cols-2-responsive">
        <div className="grid grid-cols-2  grid-cols-2-responsive">
          <div className="foodStore-items">
            <img src="images/food-store/store-1.png" alt="store1" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="foodStore-items mt-30">
            <img src="images/food-store/store-2.png" alt="store2" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="foodStore-items">
            <img src="images/food-store/store-3.png" alt="store4" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="foodStore-items mt-30">
            <img src="images/food-store/store-4.png" alt="store5" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="flex-right">
          <p className="paragraph">ooo FRESH FROM OUR FIRM</p>
          <h1 className="heading">
            Trusted Organic Food <br /> Store Conscious
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            non obcaecati earum, quis placeat consequuntur consequatur ullam,
            quos debitis est voluptatibus rem dolore voluptate, eius similique
            eaque magni reprehenderit nostrum?
          </p>

          <div className="flex align-center flex-gap-10 flex-wrap">
            <div className="price-tag">
             <p><FontAwesomeIcon icon={faTag} /></p>
             <p><FontAwesomeIcon icon={faTag} /></p>
             <p><FontAwesomeIcon icon={faTag} /></p>
             <p><FontAwesomeIcon icon={faTag} /></p>
             <p><FontAwesomeIcon icon={faTag} /></p>
            </div>
            <div>
              <p>Fruits</p>
              <p>Vegetables</p>
              <p>Juices</p>
              <p>Dried</p>
              <p>Breads</p>
            </div>
            <div>
              <img src="images/food-store/fruit3.png" alt="Orange" />
            </div>
          </div>
          <button className="primary-btn">Subscribe &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default FoodStore;
