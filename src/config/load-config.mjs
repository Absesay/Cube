import fs from "node:fs/promises";
import path from "node:path";

export async function loadConfig() {
    const configPath = path.resolve(process.cwd(), "cube.config.json");
    const raw = await fs.readFile(configPath, "utf8");
    const config = JSON.parse(raw);

    validateConfig(config);

    return config;
}

function validateConfig(config) {
    const required = [
        "appName",
        "registry",
        "imageName",
        "tag",
        "sshUser",
        "sshHost",
        "containerName",
        "containerPort",
        "hostPort"
    ];

    for (const key of required) {
        if (!config[key]) {
            throw new Error(`Missing required config key: ${key}`);
        }
    }
}