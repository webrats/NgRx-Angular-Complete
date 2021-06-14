import { Post } from "../model/post"
export interface PostState {
    posts : Post[]
}

export const intialState :PostState =  {
    posts :[
    {"id":1,"title":"Sample Title 1","desc":"Sample Description 1"},
    {"id":2,"title":"Sample Title 2","desc":"Sample Description 2"}
    ]
}