import React from "react";
import "./DiscountWrapper.css";

import CheckSum from "../../../scripts/checkSumOfItems";

export default ({ promocode, userItems, discount, checkDiscount, discountValue }) => {
  console.log(`discount = ${discount}`)
  console.log(`promocode = ${promocode}`)
  let textInput = React.createRef();
  return (
    <div className="promo-wrapper">
      <div className="promo-enter">
        <p className="promo-enter__title">Есть промокод?</p>
        <div className="input-block">
          <input
            className="input-block__input"
            onChange={() => checkDiscount(textInput.value, promocode)}
            placeholder="Введите промокод"
            type="text"
            ref={input =>textInput=input}
          />
          <button className="input-block__button" style={(discount && userItems) ? { backgroundColor: '#FF6D00'} : {}}>Применить</button>
        </div>
      </div>
      <div className="check-sum">
        <div className="sum-display">
          <div className="first-text-block">
            <span className="first-text-block-text first-text-block__sum-text">
              Сумма заказа:
            </span>
            {discount ? 
            <span className="first-text-block-text first-text-block__promo-text">
              Промокод:
            </span>
            : null}
            <span className="first-text-block-text first-text-block__result-text">
              Всего:
            </span>
          </div>
          <div className="second-text-block">
            <span className="second-text-block-text second-text-block__sum-value">
              {CheckSum(userItems)} руб.
            </span>
            <span className="second-text-block-text second-text-block__promo-value">
              {discount ? `${discountValue} руб.` : null}
            </span>
            <span className="second-text-block-text second-text-block__result-value">
              {(discount && userItems.length) ? (CheckSum(userItems) - discountValue) : CheckSum(userItems)} руб.
            </span>
          </div>
        </div>
        <button className="check-sum__button">Оформить заказ</button>
      </div>
    </div>
  );
};

