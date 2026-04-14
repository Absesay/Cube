export function defaultConfig() {
    return {
        appName: "myapp",
        registry: "docker.io/yourdockeruser",
        imageName: "myapp",
        tag: "latest",
        sshUser: "ubuntu",
        sshHost: "203.0.113.10",
        containerName: "myapp",
        hostPort: 3000,
        containerPort: 3000
    };
}