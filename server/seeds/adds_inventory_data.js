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
    {
      ItemName: ' Givi EA110B Expandable Enduro Tank Bag',
      Description: 'The Givi EA110B Expandable Enduro Tank Bag is a versatile and practical accessory for motorcycle enthusiasts. Designed with a capacity of 25 liters, it offers ample space for storing essentials, tools, or even a spare helmet. This tank bag features a transparent map holder, making it easy to keep track of your route without removing the bag. It also includes a detachable shoulder strap, allowing you to carry the bag off your bike when needed. To protect against the elements, the bag comes with a rain cover, ensuring your gear stays dry during wet conditions. The bag is compatible with a select number of bike models, making it a convenient addition to your motorcycle gear. Its expandable storage space, accessible through extra zips, allows for customization based on your needs, making it a perfect companion for both long and short trips',
      Quantity: 7,
      userId: 2
    },


  ]);
};
