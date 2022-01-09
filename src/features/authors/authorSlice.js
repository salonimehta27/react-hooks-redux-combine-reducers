import { v4 as uuid } from 'uuid';
export function addAuthor(author){
    return{
        type:"authors/add",
        payload:author
    }
}

export function removeAuthor(id){
    return{
        type:"authors/remove",
        payload:id
    }
}

const intialState=[]

export default function authorReducer(state=intialState,action){

    switch(action.type){
        case "authors/add":
            return [...state, action.payload]
        case "authors/remove":
            return state.filter((author)=>author.id!==action.payload)
        case "books/add":
            const existingAuthor=state.find((author)=>author.authorName===action.payload.authorName)
            if(existingAuthor){
                return state
            }
            else{
                return [...state,{authorName:action.payload.authorName,id:uuid()}]
            }
        default: 
            return state
    }



}