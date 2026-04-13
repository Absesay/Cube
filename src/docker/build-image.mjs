import { runCommand } from "../lib/run-command.mjs";

export async function buildImage(config) {
    const fullImage = `${config.registry}/${config.imageName}:${config.tag}`;

    await runCommand("docker", [
        "build",
        "-t",
        fullImage,
        "."
    ]);

    return fullImage;
}