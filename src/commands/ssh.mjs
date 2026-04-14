import { openSSHSession } from "../remote/open-ssh.mjs";
import { loadConfig } from "../config/load-config.mjs";

export async function sshCommand() {
    const config = await loadConfig();
    await openSSHSession(config);
}