import { runCommand } from "../lib/run-command.mjs";
import { buildRemoteScript } from "./build-remote-script.mjs";

export async function deployOverSSH(config, imageRef) {
    const remoteHost = `${config.sshUser}@${config.sshHost}`;
    const remoteScript = buildRemoteScript(config, imageRef);

    await runCommand("ssh", [remoteHost, remoteScript]);
}