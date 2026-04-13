import { runCommand } from "../lib/run-command.mjs";

export async function pushImage(fullImage) {
    await runCommand("docker", ["push", fullImage]);
}