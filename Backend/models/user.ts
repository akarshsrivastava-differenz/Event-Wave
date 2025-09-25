export interface IUser{
    id:String,
    name:String,
    email:String,
    age:number
}

export const userData : IUser[]= [
    {
        name:"Fin Jones",
        email:"finjones@example.com",
        age:24,
        id:"102"
    },
    {
        name:"Adam Jes",
        email:"adam@example.com",
        age:21,
        id:"101"
    },
]

export default userData;


 