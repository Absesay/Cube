export function makeImageRef(config) {
    return `${config.registry}/${config.imageName}:${config.tag}`;
}