let playerScore = 0;
let computerScore = 0;

/*
    <button onclick="play('0')">
    ROCK = 0 / PAPER = 1 / SCISSORS = 2
    WIN     = [02, 10, 21]
    LOOSE   = [01, 12, 20]
    TIE     = [00, 11, 22]
*/
// if ( result == '02' || result == '10' || result == '21' ) {

/***
 * 
    const figures = ['rock','paper','scissors'];
    let playerOneIndex = figures.findIndex(element => element === playerOne);
    let playerTwoIndex = figures.findIndex(element => element === playerTwo);
    let match = playerOneIndex - playerTwoIndex;
    Table logique: d = defait, v = victoire, n = nul
            player one index
                ┌───┬───┬───┐
                │ 0 │ 1 │ 2 │
            ┌───┼───┼───┼───┤
     player │ 0 │ 0n│ 1d│ 2v│
     two    ├───┼───┼───┼───┤
     index  │ 1 │-1v│ 0n│ 1d│
            ├───┼───┼───┼───┤
            │ 2 │-2d│-1v│ 0n│
            └───┴───┴───┴───┘
            // switch (match) {
            //     case 0:
            //         addLog("C'est une égalité");
            //         break;
            //     case -1:
            //     case 2:
            //         addLog("Vous gagnez");
            //         break
            //     default:
            //         addLog("Vous perdez");
            //         break;
            // }
 */

function getWinner(player, computer) {
	if (player == computer) {
		return null;
	}

	winTable = ["paper", "rock", "scissors"];
	loseTable = ["rock", "scissors", "paper"];

	indexPlayer = winTable.indexOf(player);
	indexComputer = loseTable.indexOf(computer);

	if (indexPlayer == indexComputer) {
		playerScore++;
		return "player";
	} else {
		computerScore++;
		return "computer";
	}
}
function computerPlay() {
	let figures = ["rock", "scissors", "paper"];
	let choice = Math.floor(Math.random() * figures.length);
	return figures[choice];
}

function createMsg(winner) {
	const messageElt = document.createElement("p");
	let message = "";

	if (!winner) {
		message = "Match Nul";
		messageElt.textContent = message;
		messageElt.classList.add("null");
		return messageElt;
	}

	let isPlayer = winner == "player";
	let number = isPlayer ? "one" : "two";
	let name = document.querySelector(`#name-player-${number}`).textContent;
	let score = document.querySelector(`#score-player-${number}`);

	let classe = isPlayer ? "player-win" : "computer-win";

	score.textContent = playerScore;
	messageElt.textContent = `${name} gagne`;
	messageElt.classList.add(classe);
	return messageElt;
}

function play(figure) {
	const computerFigure = computerPlay();
	const winner = getWinner(figure, computerFigure);
	const logsDiv = document.getElementById("logs");
	let messageElt = createMsg(winner);

	logsDiv.appendChild(messageElt);
	// https://developer.mozilla.org/fr/docs/Web/API/Element/scrollTop
	// https://developer.mozilla.org/fr/docs/Web/API/Element/scrollHeight
	logsDiv.scrollTop = logsDiv.scrollHeight;

	// logsDiv.insertAdjacentElement("afterbegin", messageElt);

	// https://developer.mozilla.org/fr/docs/Web/API/ParentNode/prepend
	// logsDiv.prepend(msgElt)
}
