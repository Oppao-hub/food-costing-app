import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';

import Ingredient from './models/Ingredient';
import Packaging from './models/Packaging';
import Opex from './models/Opex';
import Recipe from './models/Recipe';
import RecipeIngredient from './models/RecipeIngredient';
import RecipePackaging from './models/RecipePackaging';

const adapter = new SQLiteAdapter({
  schema,
  jsi: true, /* Enable JSI for faster operations */
  onSetUpError: error => {
    console.error('Database setup error', error);
  }
});

export const database = new Database({
  adapter,
  modelClasses: [
    Ingredient,
    Packaging,
    Opex,
    Recipe,
    RecipeIngredient,
    RecipePackaging,
  ],
});
