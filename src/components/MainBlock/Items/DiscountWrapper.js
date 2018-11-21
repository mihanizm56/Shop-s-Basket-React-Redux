import React from "react";
import "./DiscountWrapper.css";

import CheckSum from "../../../scripts/checkSumOfItems";

export default ({ promocode, userItems,discount }) => {
  console.log(`discount = ${discount}`)
  console.log(`promocode = ${promocode}`)
  return (
    <div className="promo-wrapper">
      <div className="promo-enter">
        <p className="promo-enter__title">Есть промокод?</p>
        <div className="input-block">
          <input
            className="input-block__input"
            // onChange={() => checkDiscount(promocode)}
            placeholder="Введите промокод"
            type="text"
          />
          <button className="input-block__button">Применить</button>
        </div>
      </div>
      <div className="check-sum">
        <div className="sum-display">
          <div className="first-text-block">
            <span className="first-text-block-text first-text-block__sum-text">
              Сумма заказа:
            </span>
            <span className="first-text-block-text first-text-block__promo-text">
              Промокод:
            </span>
            <span className="first-text-block-text first-text-block__result-text">
              Всего:
            </span>
          </div>
          <div className="second-text-block">
            <span className="second-text-block-text second-text-block__sum-value">
              {CheckSum(userItems)} руб.
            </span>
            <span className="second-text-block-text second-text-block__promo-value">
              -1800 руб.
            </span>
            <span className="second-text-block-text second-text-block__result-value">
              {/* {checkDiscount(promocode)} */}
            </span>
          </div>
        </div>
        <button className="check-sum__button">Оформить заказ</button>
      </div>
    </div>
  );
};

// const checkDiscount = (promocode,listOfItems) => {
//   const input = document.querySelector(".input-block__input").value;
//   const button = document.querySelector(".input-block__button");
//   const discountString = document.querySelector(".first-text-block__promo-text");
//   const discountValue = document.querySelector(".second-text-block__promo-value");
//   const stringSum = document.querySelector('.second-text-block__result-value');

//   if (input == promocode) {
//     button.classList.add("input-block__button--active");
//     discountString.style.opacity = "1";
//     discountValue.style.opacity = "1";
//     button.disabled = false;
//     stringSum.textContent = CheckSum(listOfItems) - 1800;
//     //return true;
//   } else {
//     button.classList.remove("input-block__button--active");
//     button.disabled = true;
//     discountString.style.opacity = "0";
//     discountValue.style.opacity = "0";
//     stringSum.textContent = CheckSum(listOfItems)
//     //return false;
//   }
// };
