import React from 'react';
import * as Styled from './article.styles';

const Article: React.FC = () => {

    return (

        <Styled.Article>

            <section>
                <header>
                    <h1>Раздел 2</h1>
                    <span>Узнай основы</span>
                    <a href="https://caniuse.com/css-grid">
                        Справочник
                    </a>
                </header>
                <article>ARTICLE 44</article>
            </section>

        </Styled.Article>
    )
};

export default Article;
