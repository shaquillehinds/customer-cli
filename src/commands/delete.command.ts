import { Command } from "commander";
import { deleteCustomer } from "../database/queries";

export default function deleteCommand(program: Command) {
  program
    .command("delete <id>")
    .alias("d")
    .description("Delete customer by id")
    .action(async (id) => {
      await deleteCustomer(id);
      process.exit(0);
    });
}
