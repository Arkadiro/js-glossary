import React from 'react';
import * as Styled from './nav.styles';

const Nav: React.FC = () => {

    return (

        <Styled.Nav>

                <Styled.NavHeader></Styled.NavHeader>

                    <nav>
                        <a href="https://caniuse.com/css-grid">ОБУЧЕНИЕ</a>
                    </nav>
                    <nav>
                        <a href="https://caniuse.com/css-grid">РЕЙТИНГИ</a>
                    </nav>
                    <nav>
                        <a href="https://caniuse.com/css-grid">ПРОФИЛЬ</a>
                    </nav>

        </Styled.Nav>
    )
};

export default Nav;
