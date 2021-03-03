
import React, {useReducer} from 'react'
//Definicion del estado
//Aqui se pondra el estado que se consumira y las funciones que alteran el estado

// useReducer -> alternativa a useState - 
import DataContext from './DataContext'
import DataReducer from './DataReducer';

const DataState = (props) =>{
    const initialState = {
        family:[
            {
                id:1,
                name:'Uli',
                img:'uli',
                mp4:'uli',
                relation:'Esposo'
            },
            {
                id:2,
                name:'Angie',
                img:'angie',
                mp4:'angie',
                relation:'Yo'
            },
            {
                id:3,
                name:'Norma',
                img:'norma',
                mp4:'norma',
                relation:'Mama'
            },
            {
                id:4,
                name:'Rigo',
                img:'rigo',
                mp4:'rigo',
                relation:'Papa'
            },
            {
                id:5,
                name:'David',
                img:'david',
                mp4:'david',
                relation:'Hermano'
            },
            {
                id:6,
                name:'Ale',
                img:'ale',
                mp4:'ale',
                relation:'Hermana'
            }
            ,
            {
                id:7,
                name:'Luigi',
                img:'luigi',
                mp4:'angie',
                relation:'Hermano'
            },
            {
                id:8,
                name:'Liz',
                img:'liz',
                mp4:'angie',
                relation:'Cuñada'
            },
            {
                id:9,
                name:'Alexis',
                img:'alexis',
                mp4:'angie',
                relation:'Cuñada'
            }
        ],
        selectedPerson:null
    }//Este es el estado

    const [state, dispatch] = useReducer(DataReducer ,initialState)

    const getFamily = () => {
        dispatch({
            type:'GET_FAMILY',
            payload:[{name:'uli'},{name:'angie'}]
        })//Usando el dispatch  se actualizara 'familia que esta en el initial state'. Es como usar el useState        
    }
    
    const setSelectedPerson = (elm) =>{
        dispatch({
            type:'SET_PERSON',
            payload:[elm]
        })
    }

    return (
        <DataContext.Provider value={ {
                family: state.family,
                selectedPerson: state.selectedPerson,
                getFamily,
                setSelectedPerson
            }}>            
            {
                props.children
            }
        </DataContext.Provider>
    )
}

export default DataState