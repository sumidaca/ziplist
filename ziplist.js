const testList1 = ['a', 'b', 'c', 'd'];
const testList2 = [1, 2, 3, 4];

function zipList(list1, list2) {
  const newList = [];
  let i = 0;
  while (i < list1.length) {
    newList.push(list1[i]);
    newList.push(list2[i]);
    i++;
  }
  return newList;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));
