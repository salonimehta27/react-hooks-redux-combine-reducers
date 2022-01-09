import { combineReducers } from "redux";
import authorReducer from "./features/authors/authorSlice";
import bookReducer from "./features/books/booksSlice";


const rootReducer=combineReducers({
    authors:authorReducer,
    books:bookReducer
})

export default rootReducer