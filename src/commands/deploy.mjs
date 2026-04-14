import { loadConfig } from "../config/load-config.mjs";
import { buildImage } from "../docker/build-image.mjs";
import { pushImage } from "../docker/push-image.mjs";
import { deployOverSSH } from "../remote/deploy-over-ssh.mjs";
import { makeImageRef } from "../utils/make-image-ref.mjs";

export async function deployCommand() {
    console.log("[1/4] ⚙️ Loading config...");
    const config = await loadConfig();

    const imageRef = makeImageRef(config);

    console.log(`[2/4] 📄 Building Docker image ${imageRef}...`);
    await buildImage(imageRef);

    console.log(`[3/4] 🚀 Pushing Docker image ${imageRef}...`);
    await pushImage(imageRef);

    console.log(`[4/4] 📦 Deploying to ${config.sshUser}@${config.sshHost}...`);
    await deployOverSSH(config, imageRef);

    console.log("");
    console.log("💻 Deploy complete.");
}