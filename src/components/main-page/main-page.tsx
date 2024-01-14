import React, { useEffect } from 'react';
import * as Styled from './main-page.styles';
import SvgComponent from '../../img/directory';
import { useSelector } from 'react-redux';
import {StateModel} from '../../redux/state.model'

const MainPage: React.FC = () => {
  const user = useSelector((store: StateModel) => store.currentUser);
  const value = {};
  const showHeader = (e: unknown) => {
    console.log(user);
    return typeof e === 'string' ? e : ''
  };
  useEffect(()=>{
    console.log(user);
  }, [user])


  return (
    <Styled.MainPage>
      {/* <div>{showHeader('New header')}</div> */}
      {/* <SvgComponent /> */}
    </Styled.MainPage>
  )
};

export default MainPage;
