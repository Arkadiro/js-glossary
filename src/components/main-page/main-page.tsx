import React from 'react';
import * as Styled from './main-page.styles';

const MainPage: React.FC = () => {

    return (
      <Styled.MainPage>
        <p>
          ItechApp<br />
          Get started by editing<br />
          <code className={'styles.code'}>src/pages/index.tsx</code>
        </p>
      </Styled.MainPage>
    );
};

export default MainPage;
