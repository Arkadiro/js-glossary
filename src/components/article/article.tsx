import React from 'react';
import * as Styled from './article.styles';
import Image from "@/components/image/image";
import directory from "./img/directory.svg"

const Article: React.FC = () => {

    return (

        <Styled.Article>

            <section>
                <header>
                    <h1>Раздел </h1>
                    <span>Узнай основы</span>
                    <a href="https://caniuse.com/css-grid">
                       {/*<Image image="vercel.svg"/>*/}
                       <span>Справочник</span>
                    </a>
                </header>
                <article>ARTICLE</article>
            </section>

        </Styled.Article>
    )
};

export default Article;
