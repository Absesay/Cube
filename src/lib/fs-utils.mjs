import fs from "node:fs/promises";

export async function fileExists(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export async function writeJsonFile(path, data) {
    const json = JSON.stringify(data, null, 2) + "\n";
    await fs.writeFile(path, json, "utf8");
}