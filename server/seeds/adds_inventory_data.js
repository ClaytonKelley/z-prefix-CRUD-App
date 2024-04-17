/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('inventory').del()
  await knex('inventory').insert([
    {
      ItemName: 'Impossible Burger',
      Description: 'A vegan burger, made from plants',
      Quantity: 10,
      userId: 2
    },
    {
      ItemName: 'TestItem 1',
      Description: 'A desecription of Test Item 1',
      Quantity: 15,
      userId: 2
    },
    {
      ItemName: 'TestItem 2',
      Description: 'A desecription of Test Item 2',
      Quantity: 52,
      userId: 2
    },
    {
      ItemName: 'TestItem 3',
      Description: 'A desecription of Test Item 3',
      Quantity: 60,
      userId: 2
    },
    {
      ItemName: 'other user item 1',
      Description: 'A desecription of other user Item 1',
      Quantity: 60,
      userId: 1
    },
    {
      ItemName: 'other user item 2',
      Description: 'A desecription of other user Item 2',
      Quantity: 60,
      userId: 1
    },
    {
      ItemName: 'other user item 2',
      Description: 'A desecription of other user Item 2',
      Quantity: 60,
      userId: 1
    },
    {
      ItemName: 'other user item 2',
      Description: 'A desecription of other user Item 2',
      Quantity: 60,
      userId: 1
    },


  ]);
};
