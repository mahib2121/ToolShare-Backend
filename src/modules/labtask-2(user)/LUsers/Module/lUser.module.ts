import { Module } from '@nestjs/common';

import { lUserController } from "../Controllers/lUserController"
import { lUserService } from '../Services/userService'
import { UserRepository } from '../Repository/lUserRepo';
import {TestController} from '../Controllers/testcontroller'

@Module({
  controllers: [lUserController,TestController],

  providers: [
    lUserService,
    UserRepository,
  ],
})
export class lUserModule {}