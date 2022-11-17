import react, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as S from './style';

interface RotasProps{
    setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
}

const Rotas: React.FC<RotasProps> = ({
    setCurrentRoute,
})=>{
    return (
        <div>
            <S.Itens>
                <S.Routes>
                    <S.Title>Rotas</S.Title>
                    <div style={{display: 'flex'}}>
                        <S.RoutesName>
                            <Link to="/CheckList" 
                                style={{color: '#4B5C6B', }}
                                onClick={()=>{setCurrentRoute('1');}}>
                                Rota <br/>
                                Madalena
                            </Link>
                        </S.RoutesName>
                        <S.RoutesName>
                            <Link to="/CheckList" 
                                style={{color: '#4B5C6B', }}
                                onClick={()=>{setCurrentRoute('2');}}>
                                Rota <br/>
                                Caxangá
                            </Link>
                        </S.RoutesName>
                    </div>
                </S.Routes>
            </S.Itens>
            <Outlet />
        </div>
    )
}
export default Rotas;

