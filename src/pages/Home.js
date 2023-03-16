import React, {useState, createElement} from 'react';

import '../styles/Home.css'

const Home = () => {

    return <>
        <body>
    
            <a href="#" class="scrolltop" id="scroll-top">
                <i class='bx bx-chevron-up scrolltop__icon'></i>
                      </a>
    
            <header class="l-header" id="header">
                <nav class="nav bd-container">
                    <a href="cocobot" class="nav__logo">CocoBot</a>
    
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="#home" class="nav__link active-link">მთავარი</a></li>
                            <li class="nav__item"><a href="#about" class="nav__link">პროექტის შესაბ</a></li>
                            <li class="nav__item"><a href="#contact" class="nav__link">ჩვენს შესახებ</a></li>
    
                            <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
                        </ul>
                    </div>
    
                    <div class="nav__toggle" id="nav-toggle">
                        <i class='bx bx-menu'></i>
                    </div>
                </nav>
            </header>
    
            <main class="l-main">
                <section class="home" id="home">
                    <div class="home__container bd-container bd-grid">
                        <div class="home__data">
                            <h1 class="home__title">კოკო</h1>
                            <h2 class="home__subtitle">კოკო არის ჩატბოტი, რომელიც მოგაწვდით ინფორმაციას ინტერნეტის შესახებ.</h2>
                            <a href="cocobot" class="button">ჩატბოტი</a>
                        </div>
        
                        <img src="assets/img/home.png" alt="" class="home__img" />
                    </div>
                </section>
                

                <section class="about section bd-container" id="about">
                    <div class="about__container  bd-grid">
                        <div class="about__data">
                            <span class="section-subtitle about__initial">პროექტი</span>
                            <h2 class="section-title about__initial">პროექტი შმოექტი</h2>
                            <p class="about__description">აქ დაიწერება ინფორმაცია პროექტის შესახებ</p>
                            <a href="https://mediatsigniereba.ge/" class="button">გაიგეთ მეტი</a>
                        </div>
    
                        <img src="assets/img/about.jpg" alt="" class="about__img" />
                    </div>
                </section>
    
                <section class="contact section bd-container" id="contact">
                    <div class="contact__container bd-grid">
                        <div class="contact__data">
                            <span class="section-subtitle contact__initial">ჩვენს შესახებ</span>
                            <h2 class="section-title contact__initial">Liontech</h2>
                            <p class="contact__description">აქ დაიწერება ინფორმაცია გუნდზე</p>
                        </div>
    
                    </div>
                </section>
            </main>
    
            <footer class="footer section bd-container">
                <div class="footer__container bd-grid">
                    <div class="footer__content">
                        <a href="#" class="footer__logo">პროექტი</a>
                        <span class="footer__description">მთავარი</span>
                        <div>
                            <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                            <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                            <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                        </div>
                    </div>
    
                    <div class="footer__content">
                        <h3 class="footer__title">კოდი</h3>
                        <ul>
                            <li><a href="https://github.com/Luka287/CocoBot" class="footer__link">GitHub</a></li>
                        </ul>
                    </div>
    
                    <div class="footer__content">
                        <h3 class="footer__title">ინფორმაცია</h3>
                        <ul>
                            <li><a href="https://m.facebook.com/profile.php?id=100090420322050&mibextid=ZbWKwL" class="footer__link">Facebook</a></li>
                        </ul>
                    </div>
    
                </div>
            </footer>


            <script src="https://unpkg.com/scrollreveal"></script>
    

            <script src="assets/js/main.js"></script>
        </body>
    </>
}


export default Home;