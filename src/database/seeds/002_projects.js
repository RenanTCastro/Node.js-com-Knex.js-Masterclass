
exports.seed = async function(knex) {
  await knex('projects').del()
  await knex('projects').insert([
    {
      user_id: "1",
      title: "Meu Projetinho"
    },
  ]);
};
