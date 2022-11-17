import React from 'react';
import react, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as S from './style';

interface OrganizationProps{
    setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
}

const Organization: React.FC<OrganizationProps> = ({
    setCurrentRoute,
}) => {
    return (
        <div>
            <S.Itens>
                <S.Routes>
                    <S.Title>Organização</S.Title>
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
                                onClick={()=>{setCurrentRoute('2'); }}>
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
export default Organization;

