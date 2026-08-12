import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'ingredients',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'supplier', type: 'string', isOptional: true },
        { name: 'package_price', type: 'number' },
        { name: 'qty_per_pack', type: 'number' },
        { name: 'shipping_fee', type: 'number', isOptional: true },
        { name: 'unit', type: 'string' },
        { name: 'unit_cost', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'packaging',
      columns: [
        { name: 'item_name', type: 'string' },
        { name: 'supplier', type: 'string', isOptional: true },
        { name: 'package_price', type: 'number' },
        { name: 'qty_per_pack', type: 'number' },
        { name: 'shipping_fee', type: 'number', isOptional: true },
        { name: 'unit_cost', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'opex',
      columns: [
        { name: 'expense_name', type: 'string' },
        { name: 'amount_per_month', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'recipes',
      columns: [
        { name: 'recipe_name', type: 'string' },
        { name: 'target_margin', type: 'number' },
        { name: 'vat_percentage', type: 'number', isOptional: true },
        { name: 'forecasted_orders', type: 'number', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'recipe_ingredients',
      columns: [
        { name: 'recipe_id', type: 'string', isIndexed: true },
        { name: 'ingredient_id', type: 'string', isIndexed: true },
        { name: 'qty_needed', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'recipe_packaging',
      columns: [
        { name: 'recipe_id', type: 'string', isIndexed: true },
        { name: 'packaging_id', type: 'string', isIndexed: true },
        { name: 'qty_needed', type: 'number' },
      ],
    }),
  ],
});
