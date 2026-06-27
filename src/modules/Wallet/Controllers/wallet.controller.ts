import { WalletService } from '../Services/wallet.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateWalletDto } from '../Dto/create-wallet.dto';
import { DeductBalanceDto } from '../Dto/deduct-balance.dto';
import { AddBalanceDto } from '../Dto/add-balance.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}
  //create wallet

  @Post('createWallet')
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto);
  }
  //getallwallet
  @Get('getAll')
  getAll() {
    return this.walletService.getAll();
  }

  //getByWalletId
  @Get('getByWalletId/:walletid')
  getByWalletId(@Param('walletid', ParseIntPipe) id: number) {
    console.log('controller hit');
    return this.walletService.getById(id);
  }

  //getwalletByUserId
  @Get('user/:userId')
  getByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.walletService.getByUserId(userId);
  }

  //balance add
  @Patch('addBalance')
  addBalance(
    @Body()
    addBalanceDto: AddBalanceDto,
  ) {
    console.log('controller hit');
    return this.walletService.addBalance(
      addBalanceDto.walletId,
      addBalanceDto.amount,
    );
  }
  //deduct balance
  @Patch('deductBalance')
  deductBalance(
    @Body()
    deductBalanceDto: DeductBalanceDto,
  ) {
    return this.walletService.deductBalance(
      deductBalanceDto.walletId,
      deductBalanceDto.amount,
    );
  }
  //activate wallet
  @Patch('activate/:id')
  activate(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.walletService.activateWallet(id);
  }

  //deactive
  @Patch('deactivate/:id')
  deactivate(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.walletService.deactivateWallet(id);
  }
}
