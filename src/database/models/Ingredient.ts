import { Model } from '@nozbe/watermelondb';
import { field, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Ingredient extends Model {
  static table = 'ingredients';

  @field('name') name!: string;
  @field('supplier') supplier?: string;
  @field('package_price') packagePrice!: number;
  @field('qty_per_pack') qtyPerPack!: number;
  @field('shipping_fee') shippingFee?: number;
  @field('unit') unit!: string;
  @field('unit_cost') unitCost!: number;
}
