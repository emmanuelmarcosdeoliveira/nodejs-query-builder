import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course_modules", (table) => {
    table.increments("id").primary(),
      table.text("name").notNullable(),
      // Abaixo estamos criando a chave estrangeira e ela tem que ter o mesmo tipo do id (integer) da tabela de cursos
      table
        .integer("course_id")
        .notNullable()
        .references("id")
        .inTable("courses");
  });
}
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("course_modules");
}
