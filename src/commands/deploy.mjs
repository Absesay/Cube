import { loadConfig } from "../config/load-config.mjs";
import { buildImage } from "../docker/build-image.mjs";
import { pushImage } from "../docker/push-image.mjs";
import { deployOverSsh } from "../remote/deploy-over-ssh.mjs";

export async function deployCommand() {
    console.log("[1/4] Loading config...");
    const config = await loadConfig();

    console.log("[2/4] Building Docker image...");
    const fullImage = await buildImage(config);

    console.log("[3/4 Pushing Docker image...");
    await pushImage(fullImage);

    console.log("[4/4 Deploying on remote VM...");
    await deployOverSsh(config, fullImage);
}