export const delay = (delayInMs: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayInMs);
    });
};
