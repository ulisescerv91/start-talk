import React, { useEffect, useContext, useState } from 'react';
import ReactPlayer from 'react-player'
import {useHistory } from 'react-router-dom'

import DataContext from '../../Utils/Context/Data/DataContext'

import './PalabraInterface.scss'


const PalabraInterface = () => {
    let history = useHistory();
    const {selectedPerson  } = useContext(DataContext)
    const [muted, setMuted] = useState(false);


    useEffect(() => {
    }, [])

    const muteVideo  = () =>{
        setMuted(!muted)
    } 

    return (        
        <div className='palabra'>                        

                {
                    (selectedPerson !== null)?

                        selectedPerson.map((el, i) => {
                
                            return <div className="item" key={i}>
                                <div className="item__video">
                                    <div className="item__video__name">
                                        <h1>{el.name}</h1>
                                        <img src={`./Assets/img/${el.img}-bg.png`} alt={el.name} className='item__video__name__img' />

                                    </div>
                                    <div className="item__video__file">
                                        <ReactPlayer 
                                                    className='react-player'
                                                    playing	={true}
                                                    loop={true}
                                                    height='80vh'
                                                    width='100%'
                                                    muted = {muted}
                                                    url={require(`../../Assets/videos/familia/${el.mp4}.mp4`).default} />
                                    </div>
                                    <div className="item__video__buttons">
                                        <button onClick={muteVideo} className='item__video__buttons__mute'>Mute</button>
                                    </div>
                                </div>
                            </div>                        
                            
                        })//Map
                        :
                        history.push("/familia")

                }
            
        </div>
    );
}

export default PalabraInterface;
