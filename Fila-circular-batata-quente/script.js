import { Queue } from '../Filas/Filas.js';

function hotPotato(elementsList, num) {
  const queue = new Queue(); // 1
  const elimitatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]); // 2
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // 3
    }
    elimitatedList.push(queue.dequeue()); // 4
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(), // 5
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated!`);
});
console.log(`Winner -> ${result.winner}`);
