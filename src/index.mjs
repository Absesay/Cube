import { deployCommand } from "./commands/deploy.mjs";

export async function main(argv) {
    const command = argv[2];

    if (!command) {
        console.log("Usage: cube <command>");
        console.log("Commands:");
        console.log(" deploy");
        process.exit(1);
    }

    if (command === "deploy") {
        await deployCommand();
        return;
    }

    console.error(`Unknown command: ${command}`);
    process.exit(1);
}