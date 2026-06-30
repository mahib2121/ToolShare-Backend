import { Gender } from "../Enums/gender.enum";
import {Role} from "../Enums/role.enum"
export class luser
{
    id! : number;
    name! : string ;
    email! : string ;
    password! : string ;
    phone! : string ;
    gender! : Gender;
    roles! : Role;
    nidNumber! : string ;
    nidFrontImage! : string ;
    nidBackImage! : string ;
    profileImage! :string ;
    socialMediaLinks! : string[];
    documents!: string [];
    createdAt!: Date ;
    
}