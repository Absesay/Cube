/**
 * Onboarding command that creates the configuration file
 * throws if a file already exists.
 */

import path from "node:path";
import { defaultConfig } from "../config/default-config.mjs";
import { fileExists, writeJsonFile } from "../lib/fs-utils.mjs";

export async function initCommand() {
    const configPath = path.resolve(process.cwd(), "cube.config.json");

    if (await fileExists(configPath)) {
        // throw new Error(`📄 Config already exists at ${configPath}`);
        console.log(`📄 Config already exists at ${configPath}`);
        console.log("...Edit this file, then run: cube deploy");
    } else {
        await writeJsonFile(configPath, defaultConfig());

        console.log(`📄 Created ${configPath}`);
        console.log("Edit this file, then run: cube deploy");
    }
} 