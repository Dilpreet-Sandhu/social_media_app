import { model, Model, models, Schema } from "mongoose";


export interface userInterface {
    username : string;
    email : string;
    password : string;
    avatar : string;
    followers : string[];
    following : string[];
    blockedUsers : string[];
}

const userSchema : Schema<userInterface> = new Schema<userInterface>({
    username : {
        type : String,
        required : [true,"username is required"]
    },
    email : {
        type : String,
        required : [true,"email is required"]
    },
    password : {
        type : String,
        required : [true,"password is required"]
    },
    avatar : {
        type : String,
        required : [true,"avatar is required"]
    },
    followers : [
        {
            type : Schema.Types.ObjectId,

        }
    ],
    following : [
        {
            type : Schema.Types.ObjectId
        }
    ],
    blockedUsers : [
        {
            type : Schema.Types.ObjectId
        }
    ]
});

export const User = (models.User as Model<userInterface>) || model<userInterface>("User",userSchema);