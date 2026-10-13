// Demo seat status and package prices from the current Equipment & prices table.
// Update these values if the published price table changes.
const roomPackages = {
  standard: [
    ["1 hour", 900], ["2 hours", 2100], ["3 hours", 2800],
    ["Night", 3000], ["Day", 1500]
  ],
  duo: [
    ["1 hour", 1000], ["2 hours", 2300], ["3 hours", 3300],
    ["Night", 4000]
  ],
  vip: [
    ["1 hour", 1500], ["2 hours", 3500], ["3 hours", 4500],
    ["Night", 5000]
  ]
};

const pricePreview = document.createElement("div");
pricePreview.id = "seat-price-preview";
pricePreview.className = "pixel-seat-preview";
pricePreview.setAttribute("role", "tooltip");
pricePreview.hidden = true;
document.body.append(pricePreview);

let activeSeat = null;
let pinnedSeat = null;

function hidePrices() {
  if (activeSeat) activeSeat.removeAttribute("aria-describedby");
  activeSeat = null;
  pricePreview.hidden = true;
}

function positionPrices(seat) {
  const seatBox = seat.getBoundingClientRect();
  const gap = 10;
  const edge = 12;
  const left = Math.max(edge, Math.min(
    seatBox.left + seatBox.width / 2 - pricePreview.offsetWidth / 2,
    window.innerWidth - pricePreview.offsetWidth - edge
  ));
  const below = seatBox.bottom + gap;
  const top = below + pricePreview.offsetHeight <= window.innerHeight - edge
    ? below
    : Math.max(edge, seatBox.top - pricePreview.offsetHeight - gap);

  pricePreview.style.left = `${left}px`;
  pricePreview.style.top = `${top}px`;
}

function showPrices(seat) {
  const room = seat.closest("section").id.replace("room-", "");
  const packages = roomPackages[room];
  if (!packages) return;

  if (activeSeat) activeSeat.removeAttribute("aria-describedby");
  activeSeat = seat;
  pricePreview.replaceChildren();

  const heading = document.createElement("strong");
  heading.className = "pixel-seat-preview-title";
  heading.textContent = `${seat.dataset.seatName} · ${room.toUpperCase()}`;
  pricePreview.append(heading);

  const list = document.createElement("dl");
  list.className = "pixel-seat-prices";
  for (const [label, amount] of packages) {
    const term = document.createElement("dt");
    term.textContent = label;
    const value = document.createElement("dd");
    value.textContent = `${amount.toLocaleString("en-US")} KZT`;
    list.append(term, value);
  }
  pricePreview.append(list);

  const note = document.createElement("span");
  note.className = "pixel-seat-preview-note";
  note.textContent = "Demo status · availability not live";
  pricePreview.append(note);

  pricePreview.hidden = false;
  seat.setAttribute("aria-describedby", pricePreview.id);
  positionPrices(seat);
}

for (const seat of document.querySelectorAll(".pixel-seat")) {
  const seatName = seat.textContent.trim();
  seat.dataset.seatName = seatName;
  seat.setAttribute("role", "button");
  seat.setAttribute("tabindex", "0");
  seat.setAttribute("aria-label", `${seatName}, free in this demo. Show package prices`);

  const status = document.createElement("span");
  status.className = "pixel-seat-status";
  status.textContent = "Free · demo";
  status.setAttribute("aria-hidden", "true");
  seat.append(status);

  seat.addEventListener("pointerenter", () => {
    if (pinnedSeat !== seat) pinnedSeat = null;
    showPrices(seat);
  });
  seat.addEventListener("pointerleave", () => {
    if (pinnedSeat !== seat && document.activeElement !== seat) hidePrices();
  });
  seat.addEventListener("focus", () => {
    if (pinnedSeat !== seat) pinnedSeat = null;
    showPrices(seat);
  });
  seat.addEventListener("blur", () => {
    if (pinnedSeat !== seat) hidePrices();
  });
  seat.addEventListener("click", () => {
    if (pinnedSeat === seat) {
      pinnedSeat = null;
      hidePrices();
    } else {
      pinnedSeat = seat;
      showPrices(seat);
    }
  });
  seat.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      seat.click();
    }
  });
}

document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".pixel-seat")) {
    pinnedSeat = null;
    hidePrices();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    pinnedSeat = null;
    hidePrices();
  }
});
window.addEventListener("scroll", () => {
  if (activeSeat) positionPrices(activeSeat);
}, { passive: true });
window.addEventListener("resize", () => {
  if (activeSeat) positionPrices(activeSeat);
});
