import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Recipe from './Recipe';
import Packaging from './Packaging';

export default class RecipePackaging extends Model {
  static table = 'recipe_packaging';

  @field('qty_needed') qtyNeeded!: number;

  @relation('recipes', 'recipe_id') recipe!: Relation<Recipe>;
  @relation('packaging', 'packaging_id') packaging!: Relation<Packaging>;
}
