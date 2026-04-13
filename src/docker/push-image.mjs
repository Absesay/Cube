import { runCommand } from "../lib/run-command.mjs";

export async function pushImage(imageRef) {
    await runCommand("docker", ["push", imageRef]);
}