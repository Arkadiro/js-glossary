import React from 'react';
import * as Styled from './error404.styles';


const Error404: React.FC = () => {

    return (

        <Styled.Error404>
            <div className="error404">
                <div className="left">
                    Image
                </div>
                <div className="right">
                    <h1>404</h1>
                    <h3>
                        Страница не найдена
                    </h3>
                    <p>
                        Страница была удалена, перенесена в другое место или никогда не существовала
                    </p>
                    <a href="http://localhost:3000">localhost:3000</a>
                </div>
            </div>
        </Styled.Error404>
    )
};
export default Error404;
