import { initCommand } from "./commands/init.mjs";
import { sshCommand } from "./commands/ssh.mjs";
import { deployCommand } from "./commands/deploy.mjs";

export async function main(argv) {
    const command = argv[2];

    switch (command) {
        case "init":
            await initCommand();
            return;
        case "ssh":
            await sshCommand();
            return;
        case "deploy":
            await deployCommand();
            return;
        default:
            printHelp();
            process.exit(command ? 1 : 0);
    }
}

function printHelp() {
    console.log("Cube 🧊: An infrastructure tool that enables you to simplify the process");
    console.log(".........of deploying and running containers on Linux VMs.\n");
    console.log("Usage: cube <command>");
    console.log("");
    console.log("Commands:");
    console.log("  init    ⚙️  Create starter config");
    console.log("  ssh     🔗 SSH into the configured VM");
    console.log("  deploy  📦 Build, push, and deploy container");
}