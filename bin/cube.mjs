#!/usr/bin/env node

import { main } from "../src/index.mjs";

/**
 * CLI entry point, it is the executeable file that the
 * the shell runs.
 */

main(process.argv).catch((error) => {
    console.error("");
    console.error("Command failed.");
    console.error(error.message);

    process.exit(1);
});


