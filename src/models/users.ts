import {Schema,model,Document} from "mongoose"

export interface UserDocument extends Document{
    deviceid: string;
    p1: string
    p2: string
    p3: string
    t: string
    h:string
    w:string

}
interface User{
    deviceid: string;
    p1: string
    p2: string
    p3: string
    t: string
    h:string
    w:string
}

const userSchema  = new Schema<User>({
    deviceid:{
        type:String,
        required: true
    },
    p1:{
        type:String,
        required: true
    },
    p2:{
        type:String,
        required: true
    },p3:{
        type:String,
        required: true
    },t:{
        type:String,
        required: true
    },h:{
        type:String,
        required: true
    },w:{
        type:String,
        required: true
    },
})

const UserModel = model<User>('User',userSchema);
export default UserModel;
