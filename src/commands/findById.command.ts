import { Command } from "commander";
import { findCustomerById } from "../database/queries";

export default function findByIdCommand(program: Command) {
  program
    .command("id <id>")
    .alias("i")
    .description("Find customer by id")
    .action(async (id) => {
      await findCustomerById(id);
      process.exit(0);
    });
}
