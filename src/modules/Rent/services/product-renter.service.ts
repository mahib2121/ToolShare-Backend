import { Injectable } from '@nestjs/common';
import { CreateRentalDTO } from '../dto/create-rental.dto';
import { ReturnDTO } from '../dto/return.dto';
import { PaymentDTO } from '../dto/payment.dto';
import { DisputeDTO } from '../dto/dispute.dto';
import { RatingDTO } from '../dto/rating.dto';
import { CancelRentalDTO } from '../dto/cancel-Rental.dto';

@Injectable()
export class ProductRenterService {
  getAllRentals(status: string): object {
    if (status) {
      return { message: `Rentals with status: ${status}` };
    }
    return { message: 'All rentals fetched successfully' };
  }

  getRentalByRenterAndItem(renter: string, item: string): object {
    return { message: 'Search result', renter, item };
  }

  getRentalHistory(renter: string): object {
    return { message: `Rental history for renter: ${renter}`, renter };
  }

  createRental(data: CreateRentalDTO): object {
    return { message: 'Rental request created successfully', data };
  }

  payRentalFee(data: PaymentDTO): object {
    return {
      message: `Payment of ${data.amount} completed for rental ID: ${data.rental_id}`,
      data,
    };
  }

  submitDispute(data: DisputeDTO): object {
    return {
      message: `Dispute submitted for rental ID: ${data.rental_id}`,
      data,
    };
  }

  returnItem(data: ReturnDTO): object {
    return {
      message: `Return request submitted for rental ID: ${data.rental_id}`,
      data,
    };
  }

  rateOwner(data: RatingDTO): object {
    return {
      message: `Owner ${data.owner_name} rated ${data.rating}/5 by ${data.renter_name}`,
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
