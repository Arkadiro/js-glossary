import React from 'react';
import * as Styled from './main-page.styles';
import Article from "@/components/article/article";
import Nav from "@/components/nav/nav";

const MainPage: React.FC = () => {
return (
    <Styled.MainPage>

       {/*
            <section>
                <header>
                <h1>Раздел 1</h1>
                <span>Узнай основы</span>
                <a href="https://caniuse.com/css-grid">
                    <span>Справочник</span>
                </a>
                </header>
                <article>ARTICLE 1</article>
                <article>ARTICLE 2</article>
                <article>ARTICLE 3</article>
                <article>ARTICLE $</article>

            </section>*/}
            <Article></Article>
            <Nav></Nav>
            {/*<section>
                <article>
                    <ul data-test="footer-links">
                        <li>
                            <a href="https://caniuse.com/css-grid">О Itech</a>
                        </li>
                        <li>
                           <a href="https://caniuse.com/css-grid">Правила</a>
                        </li>
                        <li>
                            <a href="https://caniuse.com/css-grid">Условия</a>
                        </li>
                        <li>
                            <a href="https://caniuse.com/css-grid">Конфиденциальность</a>
                        </li>
                    </ul>
                </article>
            </section>


        */}

    </Styled.MainPage>)
};

export default MainPage;
