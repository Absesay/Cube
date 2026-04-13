import { spawn } from "node:child_process";

/**
 * start a process
 * stream output
 * check exit code
 * fail if command fails
 */

export function runCommand(command, args, options = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            stdio: "inherit",
            shell: false,
            ...options
        });

        child.on("error", (error) => {
            reject(new Error(`Failed to start command "${command}": ${error.message}`));
        });

        child.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Failed to start command "${command}": ${code}`));
            }
        });
    });
}