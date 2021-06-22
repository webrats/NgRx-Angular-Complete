export interface SharedState{
    status :boolean
    errorMessage :string 
}

export const intialState : SharedState= {
    status : false ,
    errorMessage :'' 
}