// @ts-ignore
import "./styles/global.css"

const cards = document.querySelectorAll(".card") as NodeListOf<HTMLDivElement>;
const app = document.querySelector(".app") as HTMLDivElement;
const deleteCard = document.querySelector("#delete") as HTMLDivElement;

var draggedCard: HTMLDivElement;

const dragStartClone = ({ target }: DragEvent) => {
  const card = target as HTMLDivElement
  draggedCard = card.cloneNode(true) as HTMLDivElement;
}

const dragstart = ({ target }: DragEvent) => {
  draggedCard = target as HTMLDivElement
}

const drageOver = (event: DragEvent) => {
  event.preventDefault()
}

const drop = ({ target }: DragEvent) => {
  const dropApp = target as HTMLDivElement
  if (dropApp.classList.contains('app')) {
    draggedCard.addEventListener('dragstart', dragstart)
    dropApp.appendChild(draggedCard)
  }
}

const dropDelete = () => {
  draggedCard.remove()
}

cards.forEach(card => {
  card.addEventListener('dragstart', dragStartClone)
});

app.addEventListener('dragover', drageOver)
app.addEventListener('drop', drop)

deleteCard.addEventListener('dragover', drageOver)
deleteCard.addEventListener('drop', dropDelete)