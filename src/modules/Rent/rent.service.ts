import { Injectable } from '@nestjs/common';
import { CreateRentalDTO } from './dto/create-rental.dto';
import { ApproveRentalDTO } from './dto/approve-rental.dto';
import { HandoverDTO } from './dto/handover.dto';
import { ReturnDTO } from './dto/return.dto';
import { PaymentDTO } from './dto/payment.dto';
import { DepositDTO } from './dto/deposit.dto';
import { DisputeDTO } from './dto/dispute.dto';
import { RatingDTO } from './dto/rating.dto';

@Injectable()
export class RentService {
  // Browse tools
  getAllRentals(status: string): object {
    if (status) {
      return { message: `Rentals with status: ${status}` };
    }
    return { message: 'All rentals fetched successfully' };
  }

  // GET single rental by ID
  getRentalById(id: number): object {
    return { message: `Rental found with ID: ${id}`, id };
  }

  // Search tools
  getRentalByRenterAndItem(renter: string, item: string): object {
    return { message: 'Search result', renter, item };
  }

  // GET all rentals by owner name
  getRentalsByOwner(owner: string): object {
    return { message: `Rentals owned by: ${owner}`, owner };
  }

  // View rental history
  getRentalHistory(renter: string): object {
    return { message: `Rental history for renter: ${renter}`, renter };
  }

  //POST create a new rental request
  createRental(data: CreateRentalDTO): object {
    return { message: 'Rental request created successfully', data };
  }

  // Pay rental fees
  payRentalFee(data: PaymentDTO): object {
    return {
      message: `Payment of ${data.amount} completed for rental ID: ${data.rental_id}`,
      data,
    };
  }

  // Lock security deposits
  lockDeposit(data: DepositDTO): object {
    return {
      message: `Security deposit of ${data.amount} locked for rental ID: ${data.rental_id}`,
      data,
    };
  }

  // Submit disputes
  submitDispute(data: DisputeDTO): object {
    return {
      message: `Dispute submitted for rental ID: ${data.rental_id}`,
      data,
    };
  }

  // Rate owners
  rateOwner(data: RatingDTO): object {
    return {
      message: `Owner ${data.owner_name} rated ${data.rating}/5 by ${data.renter_name}`,
      data,
    };
  }

  // PUT approve a rental
  approveRental(data: ApproveRentalDTO): object {
    return {
      message: `Rental ID ${data.rental_id} approved by ${data.approved_by}`,
      data,
    };
  }

  // Confirm handovers
  handoverItem(data: HandoverDTO): object {
    return {
      message: `Item handover confirmed for rental ID: ${data.rental_id}`,
      data,
    };
  }

  // DELETE cancel a rental by ID
  cancelRental(id: number): object {
    return { message: `Rental with ID ${id} has been cancelled` };
  }

  // Submit return requests
  returnItem(data: ReturnDTO): object {
    return {
      message: `Return request submitted for rental ID: ${data.rental_id}`,
      data,
    };
  }
}
