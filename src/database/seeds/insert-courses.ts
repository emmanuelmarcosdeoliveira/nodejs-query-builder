import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex("courses").insert([
    { name: "HTML" },
    { name: "CSS" },
    { name: "REACT.JS" },
    { name: "NEXT.JS" },
    { name: "NODE.JS" },
    { name: "SQL" },
    { name: "SASS" },
  ]);
}
