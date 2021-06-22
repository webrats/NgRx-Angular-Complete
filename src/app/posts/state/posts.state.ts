import { Post } from "../model/post"
export interface PostState {
    posts : null|Post[]
}

export const intialState :PostState =  {
    posts :null
}