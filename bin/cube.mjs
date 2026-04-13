#!/usr/bin/env node

import { main } from "../src/index.mjs"

/**
 * CLI entry point, it is the executeable file that the
 * the shell runs.
 */

main(process.argv).catch((error) => {
    console.log("\nDeployment failed.");
    console.error(error.message);

    if (error.stack) {
        console.error("\nStack:");
        console.error(error.stack);
    }

    process.exit(1);
})


