function getSum(event, field) {
  const fieldNames = [field+"01", field+"02", field+"03", field+"04", field+"05", field+"06", field+"07", field+"08", field+"09", field+"10", field+"11", field+"12"];
  return fieldNames.reduce((acc, curr) => acc + (Number(event.params.data[curr]) || 0), 0);
};
module.exports = {
  beforeCreate(event) {
    event.params.data.plays = getSum(event, 'p');
    event.params.data.viewers = getSum(event, 'v');
    event.params.data.finishes = getSum(event, 'f');
    event.params.data.mins = getSum(event, 'm');
    event.params.data.charges = getSum(event, 'c');
  },

  beforeUpdate(event) {
    event.params.data.plays = getSum(event, 'p');
    event.params.data.viewers = getSum(event, 'v');
    event.params.data.finishes = getSum(event, 'f');
    event.params.data.mins = getSum(event, 'm');
    event.params.data.charges = getSum(event, 'c');
  },
};
