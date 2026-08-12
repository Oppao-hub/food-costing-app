import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Packaging extends Model {
  static table = 'packaging';

  @field('item_name') itemName!: string;
  @field('supplier') supplier?: string;
  @field('package_price') packagePrice!: number;
  @field('qty_per_pack') qtyPerPack!: number;
  @field('shipping_fee') shippingFee?: number;
  @field('unit_cost') unitCost!: number;
}
