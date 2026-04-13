import { runCommand } from "../lib/run-command.mjs";

export async function deployOverSsh(config, fullImage) {
    const remoteHost = `${config.sshUser}@${config.sshHost}`;

    const remoteScript = `
        set -e

        docker pull ${fullImage}

        if docker ps -a --format '{{.Names}}' | grep -q '^${config.containerName}$'; then
            docker stop ${config.containerName} || true
            docker rm ${config.containerName} || true
        fi

        docker run -d \
            --name ${config.containerName} \
            -p ${config.hostPort}:${config.containerPort} \
            ${fullImage}
    `;

    await runCommand("ssh", [remoteHost, remoteScript]);
}