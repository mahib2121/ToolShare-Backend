import { Injectable } from "@nestjs/common";
import {luser} from "../Entity/lUser.entity";
import { Role } from '../Enums/role.enum';

@Injectable()
export class UserRepository 
{
    private lusers : luser[]= [];
    private nextId=1;


    create (user : luser) : luser
    {
        user.id= this.nextId++;
        user.createdAt= new Date();
        this.lusers.push(user);
        return user;
    }

   findAll(): luser[] 
    {
        return this.lusers;
    }

  findByRole(role: Role): luser[] {

    return this.lusers.filter(user => user.roles === role);

}
}