
exports.seed = function (knex) {
  const departments = [

    { name: "admin" },
    { name: "sales" },
    { name: "finance" },
  ];

  return knex("department")
  .insert(departments)
  .then(() => console.log("\n== Seed data for roles table added. ==\n"));
}
 
