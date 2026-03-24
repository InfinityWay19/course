const sleep = (ms) => new Promise (resolve => setTimeout(resolve, ms));

const cookDinner = async () => {
    try {
        const isGasOn = false
        if (!isGasOn) throw new Error("No gas, pal");
        console.log("Lighting up the furnace");
        await sleep(1000);
        console.log("Cutting vegies");
        await sleep(2000);
        console.log("Cooking the dish");
        await sleep(3000);
        console.log("Dinner's ready!");
    } catch (err) {
        console.log("Error:", err.message)
    }
    
}

cookDinner()