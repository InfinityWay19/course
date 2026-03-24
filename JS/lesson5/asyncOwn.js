const rest = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const restTime = async () => {
    console.log("You've been working for too long, go touch some grass! Blocking input for 4 sec...");
    await rest(4000);
    console.log("Bro, I'm serious. More 4 sec");
    await rest(6000);
    console.log("Yeah, that was 6 sec you nerd");
}

restTime()