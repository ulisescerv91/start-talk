import React from 'react';
import './Preguntas.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
const Preguntas = () => {

    const hablar = (texto) =>{

    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.rate = 1;
    utterance.lang = 'es-MX';
    speechSynthesis.speak(utterance)

  }


    return (
        <div className='preguntas'>
            <div className="preguntas__data bg-green" onClick={ () => hablar('Si') }>
                <span className='preguntas__data__text '>SI</span>
                <span>
                    <CheckCircleIcon  style={{ fontSize: 40 }}/>
                </span>
            </div>
            <div className="preguntas__data bg-red" onClick={ () => hablar('No') }>
                <span className='preguntas__data__text '>NO</span>
                <span>
                    <CancelIcon   style={{ fontSize: 40 }}/>
                </span>
            </div>

        </div>
    );
}

export default Preguntas;
