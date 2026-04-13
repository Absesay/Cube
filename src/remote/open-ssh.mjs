import { runCommand } from "../lib/run-command.mjs";

export async function openSSHSession(config) {
    const remoteHost = `${config.sshUser}@${config.sshHost}`;
    await runCommand("ssh", [remoteHost]);
}