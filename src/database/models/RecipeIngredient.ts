import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Recipe from './Recipe';
import Ingredient from './Ingredient';

export default class RecipeIngredient extends Model {
  static table = 'recipe_ingredients';

  @field('qty_needed') qtyNeeded!: number;

  @relation('recipes', 'recipe_id') recipe!: Relation<Recipe>;
  @relation('ingredients', 'ingredient_id') ingredient!: Relation<Ingredient>;
}
