/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      FirstName: 'Mark',
      LastName: "walburg",
      UserName: 'walburger',
      Password: 'impossibleburger'
    }

  ]);
};
