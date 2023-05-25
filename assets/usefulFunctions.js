function generateID () {
    const time = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000000001);

    const uniqueID = time + "_" + randomNumber;

    return uniqueID
}

export { generateID };
