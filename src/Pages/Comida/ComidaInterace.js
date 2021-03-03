import React from 'react';
import { Link } from 'react-router-dom';

import './Comida.scss'

const ComidaInterace = () => {

    // frutas
    // verduras
    //desayuno
    //comida
    //cena
    //bebidas


    return (
        <div className='comida'>
            <h1 className='text-white '>Comidas</h1>
            <div className="comida__categories">
                <div className="comida__categories__option">
                    <div className="comida__categories__option__img">
                        <img src={'./Assets/img/comida/frutas/frutas.png'} alt="" className=""/>
                    </div>

                    <div className="comida__categories__option__name">
                       <h1>Frutas</h1>
                       <span class="badge badge-light">25 imagenes</span>
                    </div>

                    <div className="comida__categories__option__icon ">
                        +
                    </div>

                </div>

                
            </div>
        </div>
    );
}

export default ComidaInterace;
