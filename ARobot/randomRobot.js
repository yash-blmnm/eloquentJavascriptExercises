import { roadGraph } from "./roadGraph";

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
export { randomRobot, randomPick };
