import {Request, Response} from 'express';
import UserModel from '../models/users';
import {createUser,findAndUpdate,findUser,deleteUser} from "../services/users.service"


const homeDetail = async (req:Request,resp:Response) =>{



// create
    // const user = await createUser({deviceid:'12345678', p1:'1', p2:'2', pe:'3'})
// update
    // const user = await findAndUpdate({deviceid:'12345678'},{p2:'4'},{new:true});
// find
    // const user = await findUser({deviceid:'123456789'})
// delete
// const user = await deleteUser({deviceid:'123456789'})


    // let myData = await UserModel.find()
    let ob = {x:12,y:30}
    let data =sumData(ob);
    resp.json({
        message:"Home page",
        data:data,
        myData:myData
    })
}

interface params{
    x:number;
    y:number;
}

type sumCheck = (x:params) => number

const sumData:sumCheck = (ob:params)=>{
    return ob.x+ob.y;
}
export{
    homeDetail
}