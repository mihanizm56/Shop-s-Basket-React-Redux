import React from "react";
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer =  () => {
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
              <Link to='/main' className="footer-menu__logo"></Link>
              <ul className="footer-container-contacts contacts-list">
                <li className="footer__list contacts-list__number-1"><p className="footer__number-text">8 (800) 500-75-55<sup>*</sup></p></li>
                <li className="footer__list contacts-list__text-under"><p className="footer__under-text"><sup>*</sup>Бесплатный звонок по всей России</p></li>
                <li className="footer__list contacts-list__number-2"><p className="footer__number-text">8 (495) 733-96-03</p></li>
              </ul>
              <ul className="footer-container catalog-container">
                <li className="footer__list catalog-container__main-paragraph"><Link to='/catalog' className="footer__main-text">Каталог товаров</Link></li>
                <li className="footer__list catalog-container__clothes"><Link to='/clothes' className="footer__second-text">Одежда и аксессуары</Link></li>
                <li className="footer__list catalog-container__shoes"><Link to='/shoes' className="footer__second-text">Обувь</Link></li>
                <li className="footer__list catalog-container__jewelry"><Link to='/jewellery' className="footer__second-text">Украшения</Link></li>
                <li className="footer__list catalog-container__health"><Link to='/health' className="footer__second-text">Красота и здоровье</Link></li>
                <li className="footer__list catalog-container__for-house"><Link to='/household' className="footer__second-text">Товары для дома, дачи и отдыха</Link></li>
                <li className="footer__list catalog-container__for-kitchen"><Link to='/kitchen' className="footer__second-text">Товары для кухни</Link></li>
              </ul>
              <ul className="footer-container offer-container">
                <li className="footer__list offer-container__main-paragraph"><Link to='/offer' className="footer__main-text">Заказ</Link></li>
                <li className="footer__list offer-container__pay"><Link to='/trnsfer' className="footer__second-text">Оплата и доставка</Link></li>
                <li className="footer__list offer-container__return"><Link to='/return' className="footer__second-text">Возврат</Link></li>
                <li className="footer__list offer-container__help"><Link to='/help' className="footer__second-text">Помощь</Link></li>
                <li className="footer__list offer-container__charity"><Link to='/Hab' className="footer__second-text">Благотворительный Фонд Константина Хабенского</Link></li>
                <li className="footer__list offer-container__warranty"><Link to='/warranty' className="footer__second-text">Гарантия на дополнительное обслуживание товара</Link></li>
                <li className="footer__list offer-container__agreement"><Link to='/agreement' className="footer__second-text">Пользовательское соглашение</Link></li>
              </ul>
              <ul className="footer-container shop24-container">
                <li className="footer__list shop24-container__main-paragraph"><Link to='/main' className="footer__main-text">Shop24</Link></li>
                <li className="footer__list shop24-container__live"><Link to='/live' className="footer__second-text">Смотреть прямой эфир</Link></li>
                <li className="footer__list shop24-container__schedule"><Link to='/schedule' className="footer__second-text">Расписание передач</Link></li>
                <li className="footer__list shop24-container__stock"><Link to='/discount' className="footer__second-text">Акции</Link></li>
                <li className="footer__list shop24-container__cabinet"><Link to='/cabinet' className="footer__second-text">Личный кабинет</Link></li>
                <li className="footer__list shop24-container__map"><Link to='/filter' className="footer__second-text">Поиск и карта сайта</Link></li>
                <li className="footer__list shop24-container__brands"><Link to='/brands' className="footer__second-text">Карта брендов</Link></li>
                <li className="footer__list shop24-container__feedback"><Link to='/feedback' className="footer__second-text">Обратная связь</Link></li>
              </ul>
              <ul className="footer-container info-container">
                <li className="footer__list info-container__main-paragraph"><Link to='/information' className="footer__main-text">Информация</Link></li>
                <li className="footer__list info-container__about-channel"><Link to='/about' className="footer__second-text">О канале</Link></li>
                <li className="footer__list info-container__partnership"><Link to='/partnership' className="footer__second-text">Сотрудничество</Link></li>
                <li className="footer__list info-container__buy"><Link to='/withUs' className="footer__second-text">Покупайте с нами!</Link></li>
                <li className="footer__list info-container__contacts"><Link to='/contacts' className="footer__second-text">Контакты</Link></li>
              </ul>
            </div>       
          </div>
          <div className="footer-info">
            <p className="footer-info__paragraph">Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены. <br />При использовании материалов сайта ссылка на www.shop24.com обязательна. <br />115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII <br />Телефон  8 800 500-75-55</p>
          </div>
        </div>
      )
    }
