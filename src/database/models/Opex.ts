import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Opex extends Model {
  static table = 'opex';

  @field('expense_name') expenseName!: string;
  @field('amount_per_month') amountPerMonth!: number;
}
