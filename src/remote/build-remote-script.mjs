export async function buildRemoteScript(config, imageRef) {
    return `
        set -e

        docker pull ${imageRef}

        if docker ps -a --format '{{.Names}}' | grep -q '^${config.containerName}$'; then
            docker stop ${config.containerName} || true
            docker rm ${config.containerName} || true
        fi

        docker run -d \
            --name ${config.containerName} \
            --restart unless-stopped \
            -p ${config.hostPort}:${config.containerPort} \
            ${imageRef}
    `.trim();
}