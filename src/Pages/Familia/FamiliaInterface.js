import React, {useContext,useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom'

import DataContext from '../../Utils/Context/Data/DataContext'

import './FamiliaInterface.scss'



const FamiliaInterface = () => {

    const { family,setSelectedPerson } = useContext(DataContext)    

    let history = useHistory();

    useEffect(() => {
    }, [])
  
    const handleClick  = (elm) =>{
        setSelectedPerson(elm)
        history.push("/palabra");
    } 

    

    return (                            
                    <div className='familia'>
                        
                            {/* Todo lo que este aqui accedera al context de familia */}
                        {
                            family.map( (el,i)=>{
                                return <div onClick={()=>handleClick(el)} key={i} className='familia__container'>
                                        <div className="item">
                                            <div className="item__img">
                                                <img src={`./Assets/img/${el.img}-bg.png`} alt={el.name} className='item__img__file' />
                                            </div>
                                            <div className="item__text">
                                                <h1 className='item__text__name'>{el.name}</h1>
                                                <div className='item__text__badge'>
                                                    <span className="badge badge-dark  ">{el.relation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            })
                        }
                            
                    </div>
                
            
        
    );
}

export default FamiliaInterface;
