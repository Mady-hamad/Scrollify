async function getStyles(){
    const response = await fetch("https://slow-jewish-sapphire-unlike.trycloudflare.com/api/getStyles")
    console.log(await response.json());
}

alert()