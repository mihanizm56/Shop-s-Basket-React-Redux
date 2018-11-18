import React, { Component } from "react";
import './Footer.css'

export default () => {
      return (
        <div className="footer-wrapper">
          <div className="footer-contacts">
            <p className='footer-contacts__social'>SHOP24 в социальных сетях:</p>
            <div className='footer-contacts__logo footer-contacts__logo-vk'></div>
            <div className='footer-contacts__logo footer-contacts__logo-fb'></div>
            <div className='footer-contacts__logo footer-contacts__logo-3'></div>
            <div className='footer-contacts__logo footer-contacts__logo-4'></div>
            <div className='footer-contacts__logo footer-contacts__logo-5'></div>
            <div className='footer-contacts__logo footer-contacts__logo-insta'></div>
            <div className='footer-contacts__logo footer-contacts__logo-youtube'></div>
          </div>
          <div className='footer-nav-block'>
            <div className="footer-menu">
              <a className="footer-menu__logo">.</a>
              <ul className="footer-container-contacts contacts-list">
                <li className="footer__list contacts-list__number-1"><p className="footer__number-text">8 (800) 500-75-55<sup>*</sup></p></li>
                <li className="footer__list contacts-list__text-under"><p className="footer__under-text"><sup>*</sup>Бесплатный звонок по всей России</p></li>
                <li className="footer__list contacts-list__number-2"><p className="footer__number-text">8 (495) 733-96-03</p></li>
              </ul>
              <ul className="footer-container catalog-container">
                <li className="footer__list catalog-container__main-paragraph"><a className="footer__main-text">Каталог товаров</a></li>
                <li className="footer__list catalog-container__clothes"><a className="footer__second-text">Одежда и аксессуары</a></li>
                <li className="footer__list catalog-container__shoes"><a className="footer__second-text">Обувь</a></li>
                <li className="footer__list catalog-container__jewelry"><a className="footer__second-text">Украшения</a></li>
                <li className="footer__list catalog-container__health"><a className="footer__second-text">Красота и здоровье</a></li>
                <li className="footer__list catalog-container__for-house"><a className="footer__second-text">Товары для дома, дачи и отдыха</a></li>
                <li className="footer__list catalog-container__for-kitchen"><a className="footer__second-text">Товары для кухни</a></li>
              </ul>
              <ul className="footer-container offer-container">
                <li className="footer__list offer-container__main-paragraph"><a className="footer__main-text">Заказ</a></li>
                <li className="footer__list offer-container__pay"><a className="footer__second-text">Оплата и доставка</a></li>
                <li className="footer__list offer-container__return"><a className="footer__second-text">Возврат</a></li>
                <li className="footer__list offer-container__help"><a className="footer__second-text">Помощь</a></li>
                <li className="footer__list offer-container__charity"><a className="footer__second-text">Благотворительный Фонд Константина Хабенского</a></li>
                <li className="footer__list offer-container__warranty"><a className="footer__second-text">Гарантия на дополнительное обслуживание товара</a></li>
                <li className="footer__list offer-container__agreement"><a className="footer__second-text">Пользовательское соглашение</a></li>
              </ul>
              <ul className="footer-container shop24-container">
                <li className="footer__list shop24-container__main-paragraph"><a className="footer__main-text">Shop24</a></li>
                <li className="footer__list shop24-container__live"><a className="footer__second-text">Смотреть прямой эфир</a></li>
                <li className="footer__list shop24-container__schedule"><a className="footer__second-text">Расписание передач</a></li>
                <li className="footer__list shop24-container__stock"><a className="footer__second-text">Акции</a></li>
                <li className="footer__list shop24-container__cabinet"><a className="footer__second-text">Личный кабинет</a></li>
                <li className="footer__list shop24-container__map"><a className="footer__second-text">Поиск и карта сайта</a></li>
                <li className="footer__list shop24-container__brands"><a className="footer__second-text">Карта брендов</a></li>
                <li className="footer__list shop24-container__feedback"><a className="footer__second-text">Обратная связь</a></li>
              </ul>
              <ul className="footer-container info-container">
                <li className="footer__list info-container__main-paragraph"><a className="footer__main-text">Информация</a></li>
                <li className="footer__list info-container__about-channel"><a className="footer__second-text">О канале</a></li>
                <li className="footer__list info-container__partnership"><a className="footer__second-text">Сотрудничество</a></li>
                <li className="footer__list info-container__buy"><a className="footer__second-text">Покупайте с нами!</a></li>
                <li className="footer__list info-container__contacts"><a className="footer__second-text">Контакты</a></li>
              </ul>
            </div>       
          </div>
          <div className="footer-info">
            <p className="footer-info__paragraph">Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены. <br />При использовании материалов сайта ссылка на www.shop24.com обязательна. <br />115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII <br />Телефон  8 800 500-75-55</p>
          </div>
        </div>
      )
    }
