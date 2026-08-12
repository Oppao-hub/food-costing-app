import { Model } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';
import RecipeIngredient from './RecipeIngredient';
import RecipePackaging from './RecipePackaging';

export default class Recipe extends Model {
  static table = 'recipes';

  @field('recipe_name') recipeName!: string;
  @field('target_margin') targetMargin!: number;
  @field('vat_percentage') vatPercentage?: number;
  @field('forecasted_orders') forecastedOrders?: number;

  @children('recipe_ingredients') ingredients!: any;
  @children('recipe_packaging') packaging!: any;
}
