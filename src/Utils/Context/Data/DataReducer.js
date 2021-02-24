import {GET_FAMILY,SET_PERSON} from '../Types'

export default (state,action) => {
    //Payload -> Son los datos que me estan pasando en esta funcion (Es otro nombre con el que se conoce al DATA)
    const {payload, type} = action;

    switch(type){
        case GET_FAMILY:{
            return{
                ...state,
                family:payload
            }
        }
        case SET_PERSON:{
            return{
                ...state,
                selectedPerson:payload
            }
        }
        default:{
            return state;
        }
    }
}