function tseamAccount(array) {
  let commands = array.toString().split(",");
  let games = commands[0].split(" ");
  let index = 1;
  let currentComand = commands[index];
  while (currentComand !== "Play!") {
    let commandArray = currentComand.split(" ");
    let action = commandArray[0];
    let game = commandArray[1];
    if (action === "Install") {
      if (!games.includes(game)) {
        games.push(game);
      }
    } else if (action === "Uninstall") {
      if (games.includes(game)) {
        let indexUninstall = games.indexOf(game);
        games.splice(indexUninstall, 1);
      }
    } else if (action === "Update") {
      if (games.includes(game)) {
        let indexUpdate = games.indexOf(game);
        games.splice(indexUpdate, 1);
        games.push(game);
      }
    } else if (action === "Expansion") {
      let expansion = game.split("-");
      let currentGame = expansion[0];
      if (games.includes(currentGame)) {
        let indexGame = games.indexOf(currentGame);
        games.splice(indexGame + 1, 0, `${currentGame}:${expansion[1]}`);
      }
    }
    index++;
    currentComand = commands[index];
  }
  console.log(games.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
