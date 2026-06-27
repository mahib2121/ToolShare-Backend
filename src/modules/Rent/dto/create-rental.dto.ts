export class CreateRentalDTO {
  item_id!: number;
  item_name!: string;
  owner_name!: string;
  renter_name!: string;
  price_per_day!: number;
  start_date!: string;
  end_date!: string;
}