import { Injectable } from "@nestjs/common";
import { lCreateAdminDto } from "../DTO/create-admin.dto";
import { luser } from "../Entity/lUser.entity";
import {UserRepository} from "../Repository/lUserRepo"
import { Role } from "../Enums/role.enum";
import {lCreateModeratorDto} from "../DTO/create-moderator.dto"
import { lCreateRenterDto } from "../DTO/create-renter.dto";
import {lCreateVendorDto} from "../DTO/create-vendor.dto"

@Injectable()
export class lUserService 
{
    constructor(private readonly userRepository :UserRepository)

    {

    }
    createAdmin(createAdmin: lCreateAdminDto): luser {

    const luser1 = new luser();

    luser1.name = createAdmin.name;
    luser1.email = createAdmin.email;
    luser1.nidNumber = createAdmin.nidNumber;

    luser1.roles = Role.Admin;

    luser1.nidFrontImage = createAdmin.nidFrontImage;
    luser1.nidBackImage = createAdmin.nidBackImage;

    return this.userRepository.create(luser1);
}
getAdmins(): luser[] {

    return this.userRepository.findByRole(Role.Admin);

}
//task2 
createModerator(createModerator: lCreateModeratorDto): luser {

        const user = new luser();

        user.email = createModerator.email;
        user.password = createModerator.password;
        user.gender = createModerator.gender;
        user.phone = createModerator.phone;

        user.roles = Role.Moderator;

        return this.userRepository.create(user);

    }

    getModerators(): luser[] {

        return this.userRepository.findByRole(Role.Moderator);

    }

    //task3 
    createRenter(createRenter: lCreateRenterDto): luser {

    const user = new luser();

    user.name = createRenter.name;
    user.password = createRenter.password;
    user.phone = createRenter.phone;

    user.roles = Role.Renter;

    user.documents = [createRenter.document];

    return this.userRepository.create(user);

}

//getallReneter 
  getRenters(): luser[] 
  {

        return this.userRepository.findByRole(Role.Renter);

    }

    //task4 

    createVendor(createVendor: lCreateVendorDto): luser
     {

    const user = new luser();

    user.name = createVendor.name;
    user.password = createVendor.password;

    user.roles = Role.Vendor;

    user.createdAt = new Date(createVendor.date);

    user.socialMediaLinks = [createVendor.socialMediaLink];

    return this.userRepository.create(user);

}
getVendors(): luser[] {

    return this.userRepository.findByRole(Role.Vendor);

}
}