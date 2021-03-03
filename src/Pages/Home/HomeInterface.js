import React from 'react';
import { Link } from 'react-router-dom';
import './HomeInterface.scss'

//img
// import imgFamily from '.'

const HomeInterface = () => {
    return (
        <div className='HomeInterface'>
            <div className="categories">
                
                    <Link to="/familia" className='categories__section'>
                        <h1 className="categories__section__title">Familia</h1>
                        <img src={'./Assets/icons/family.png'} alt="Familia" className='categories__section__icon icon_family'/>
                    </Link>                                    
                    <Link to="/comida" className='categories__section bg_green' >
                        <h1 className="categories__section__title">Comida</h1>
                        <img src={'./Assets/icons/hello.png'} alt="Comida" className='categories__section__icon icon_hello'/>

                    </Link>
                    <Link to="/lugares" className='categories__section '>
                        <h1 className="categories__section__title">Lugares</h1>
                        <img src={'./Assets/icons/schedule.png'} alt="Lugares" className='categories__section__icon '/>

                    </Link>
                    <Link to="/numeros" className='categories__section bg_pink'>
                        <h1 className="categories__section__title">Numeros</h1>
                        <img src={'./Assets/icons/number.png'} alt="Familia" className='categories__section__icon'/>

                    </Link>               
            </div>
        </div>
    );
}

export default HomeInterface;
