// @ts-ignore
import "./styles/global.css"

const cards = document.querySelectorAll(".card") as NodeListOf<HTMLDivElement>;
const app = document.querySelector(".app") as HTMLDivElement;

var draggedCard: HTMLDivElement;

function createGhost() {
  const ghost = document.createElement("div");
  ghost.style.width = "0px";
  ghost.style.height = "0px";
  ghost.style.opacity = "0";
  document.body.appendChild(ghost);
  return ghost;
}

function removeGhost(event: DragEvent) {
  const ghost = createGhost()
  event.dataTransfer?.setDragImage(ghost, 0, 0);
  setTimeout(() => ghost.remove(), 0);
}

function dblclick( { target }: MouseEvent ) {
  const card = target as HTMLElement;
  if (card.classList.contains('card')) {
    card.remove()
  }
}

function clickbtn( { target }: MouseEvent ) {
  const element = target as HTMLButtonElement;
  if (element.classList.contains('btn-input')) {
  }
}

const dragStartClone = (event: DragEvent) => {
  const card = event.target as HTMLDivElement
  draggedCard = card.cloneNode(true) as HTMLDivElement;
    if (app.classList.contains('app')) {
    draggedCard.addEventListener('dragstart', dragstart)
    draggedCard.addEventListener('drag', drag)
    draggedCard.addEventListener('dblclick', dblclick)
    draggedCard.addEventListener('click', clickbtn)
    app.appendChild(draggedCard)
  }
  removeGhost(event)
}

const dragstart = (event: DragEvent) => {
  draggedCard = event.target as HTMLDivElement
  removeGhost(event)
}

const drageOver = (event: DragEvent) => {
  event.preventDefault()
}

const drag = (event: MouseEvent) => {
  const position_x = event.clientX;
  const position_y = event.clientY;
  
  draggedCard.style.top = (position_y - 75) + "px"
  draggedCard.style.left = (position_x - 25) + "px"
}

cards.forEach(card => {
  card.addEventListener('dragstart', dragStartClone)
  card.addEventListener('drag', drag)
});

app.addEventListener('dragover', drageOver)