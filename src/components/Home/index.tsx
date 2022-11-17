import react, { useState } from 'react';
import 'antd/dist/antd.css';
import Organization from './steps/organizacao';
import Rotas from './steps/rotas';


interface HomeProps{
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({
  setCurrentRoute
}) => {
  return (
    <div>
      <div style={{paddingTop: 50}}>
        <Organization setCurrentRoute={setCurrentRoute}/>
      </div>
      <div style={{paddingTop: 400}}>
        <Rotas setCurrentRoute={setCurrentRoute}/>
      </div>
    </div>
  )
}
export default Home;

