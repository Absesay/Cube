import { runCommand } from "../lib/run-command.mjs";

export async function buildImage(imageRef) {
    await runCommand("docker", ["build", "-t", imageRef, "."]);
}