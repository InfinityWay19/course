const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms));

const startServer = async () => {
    console.log("1. Server launch...");
    await wait(2000);
    console.log("2. Connecting to Data Base");
    await wait(1000);
    console.log("3. We are ready");
}

startServer();