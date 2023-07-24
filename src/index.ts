#!/usr/bin/env node --experimental-specifier-resolution=node

import mongoose from "mongoose";
import chalk from "chalk";
import { program } from "commander";
import * as commands from "./commands";

try {
  const db = await mongoose.connect("mongodb://localhost:27017/customercli");
  console.log(chalk.green("\nConnected to db successfully\n"));
} catch (error) {
  console.error(chalk.red(`Error: ${error}`));
  process.exit(1);
}

program.version("1.0.0").description("Client Management System CLI");

// Adding commands to program
for (let command in commands) {
  const commandKey = command as keyof typeof commands;
  commands[commandKey](program);
}

program.parse(process.argv);
