export function createGateElement(type: string): HTMLDivElement {
  const el = document.createElement("div");
  el.classList.add("gate", type);
  el.draggable = true;
  el.innerText = type.toUpperCase();

  el.addEventListener("dragstart", (e) => {
    e.dataTransfer?.setData("text/plain", type);
  });

  return el;
}