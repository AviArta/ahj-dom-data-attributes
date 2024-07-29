/**
 * @jest-environment jsdom
 */
import PlayBoard from "../PlayBoard";

test("method createBoard of class PlayBoard", () => {
  const element = document.createElement("div");
  const contentBuilder = new PlayBoard(element);
  contentBuilder.createBoard();
  let cells = element.querySelectorAll(".cell");
  expect(cells.length).toEqual(16);
});
