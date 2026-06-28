import { Injectable } from '@nestjs/common';
import { ApproveRentalDTO } from '../dto/approve-rental.dto';
import { HandoverDTO } from '../dto/handover.dto';
import { DepositDTO } from '../dto/deposit.dto';
import { CancelRentalDTO } from '../dto/cancel-Rental.dto';

@Injectable()
export class ProductOwnerService {
  getRentalsByOwner(owner: string): object {
    return { message: `Rentals owned by: ${owner}`, owner };
  }

  approveRental(data: ApproveRentalDTO): object {
    return {
      message: `Rental ID ${data.rental_id} approved by ${data.approved_by}`,
      data,
    };
  }

  handoverItem(data: HandoverDTO): object {
    return {
      message: `Item handover confirmed for rental ID: ${data.rental_id}`,
      data,
    };
  }

  lockDeposit(data: DepositDTO): object {
    return {
      message: `Security deposit of ${data.amount} locked for rental ID: ${data.rental_id}`,
      data,
    };
  }

  releaseDeposit(data: DepositDTO): object {
    return {
      message: `Security deposit of ${data.amount} released for rental ID: ${data.rental_id}`,
      data,
    };
  }
  
  cancelRental(data: CancelRentalDTO): object {
    return {
      message: `Rental ID ${data.rental_id} cancelled by ${data.cancelled_by}`,
      data,
    };
  }
}
