import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import DataContext from '../../Utils/Context/Data/DataContext'


import './Comida.scss'

const ComidaInterace = () => {
    const { food } = useContext(DataContext)

    // frutas
    // verduras
    //desayuno
    //comida
    //cena
    //bebidas


    return (
        <div className='comida'>
            <h1 className='text-dark text-right'>Comidas</h1>
            {
                food.map((el,i ) => {
                    const {category, img, items} = el;
                    return <div className="comida__categories" key={i}>
                                <div className="comida__categories__option">
                                    <div className="comida__categories__option__img">
                                        <img src={`./Assets/img/comida/${category}/${img}.png`} alt="" className="" />
                                    </div>

                                    <div className="comida__categories__option__name">
                                        <h1>{category}</h1>
                                        <span className="badge badge-light">{items.length} imagenes</span>
                                    </div>

                                    <div className="comida__categories__option__icon ">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                })
            }
        </div>
    );
}

export default ComidaInterace;
