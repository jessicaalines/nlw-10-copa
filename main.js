//trazendo conteúdos do html. Foi recortado de lá e colado aqui
//isso serve para que as coisas fiquem mais dinâmicas

function createGame(player1, hour, player2) {
  return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>     
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}         
          </ul>
        </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard("21/11", "segunda", createGame("england", "10:00", "iran")) +
  createCard("21/11", "segunda", createGame("usa", "16:00", "wales")) +
  createCard(
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi arabia")
  ) +
  createCard("22/11", "terça", createGame("denmark", "10:00", "tunisia")) +
  createCard("22/11", "terça", createGame("mexico", "13:00", "poland")) +
  createCard("22/11", "terça", createGame("france", "16:00", "australia")) +
  createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia")) +
  createCard("23/11", "quarta", createGame("germany", "10:00", "japan")) +
  createCard("23/11", "quarta", createGame("spain", "13:00", "costa rica")) +
  createCard("23/11", "quarta", createGame("belgium", "16:00", "canada")) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon")
  ) +
  createCard("24/11", "quinta", createGame("uruguay", "10:00", "south korea")) +
  createCard("24/11", "quinta", createGame("portugal", "13:00", "ghana")) +
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland"))
