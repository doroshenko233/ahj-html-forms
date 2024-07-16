import Popover from "../js/Popover";

test("создает", () => {
  const HTML = document.createElement("div");
  HTML.innerHTML =
    '<button class="pop_button" data-popover-title="Text title" data-popover-content="Text Result">Click to toggle popover</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector(".pop_button"));
  popButton.initPopover();
  const title = popButton.popContainer.querySelector(".pop_title");
  const text = popButton.popContainer.querySelector(".pop_text");
  expect(title.innerText).toBe("Text title");
  expect(text.innerText).toBe("Text Result");
});

test("Показать всплывающее окно", () => {
  const HTML = document.createElement("div");
  HTML.innerHTML =
    '<button class="pop_button" data-popover-title="Text title" data-popover-content="Text Result">Click to toggle popover</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector(".pop_button"));
  popButton.initPopover();
  const button = document.querySelector("button.pop_button");
  button.click();

  const title = document.querySelector(".pop_title");
  const text = document.querySelector(".pop_text");
  expect(title.innerText).toBe("Text title");
  expect(text.innerText).toBe("Text Result");
});

test("закрыть всплывающее окно", () => {
  const HTML = document.createElement("div");
  HTML.innerHTML =
    '<button class="pop_button" data-popover-title="Text title" data-popover-content="Text Result">Click to toggle popover</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector(".pop_button"));
  popButton.initPopover();
  const button = document.querySelector("button.pop_button");
  button.click();
  expect(document.contains(popButton.popContainer)).toBeTruthy();
  button.click();
  expect(document.contains(popButton.popContainer)).toBeFalsy();
});
