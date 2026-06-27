import { Injectable } from '@nestjs/common';
import { ApproveRentalDTO } from '../dto/approve-rental.dto';
import { HandoverDTO } from '../dto/handover.dto';
import { DepositDTO } from '../dto/deposit.dto';
import { RatingDTO } from '../dto/rating.dto';
import { CreateRentalDTO } from '../dto/create-rental.dto'

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

  createRental(data: CreateRentalDTO): object {
    return {
      message: 'Rental request created successfully',
      data,
    };
  }

  lockDeposit(data: DepositDTO): object {
    return {
      message: `Security deposit of ${data.amount} locked for rental ID: ${data.rental_id}`,
      data,
    };
  }

  rateOwner(data: RatingDTO): object {
    return {
      message: `Owner ${data.owner_name} rated ${data.rating}/5 by ${data.renter_name}`,
      data,
    };
  }
}
