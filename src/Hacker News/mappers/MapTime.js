export const mapTime = timeStamp => {
    const seconds = Math.floor((new Date() - timeStamp * 1000) / 1000);

    return `${seconds / 3600} hours ago`
}