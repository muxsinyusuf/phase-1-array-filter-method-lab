function findMatching(drivers, query) {
  return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
}
const drivers = ["yusuf", "Ahmed", "Bashir", "Amina"];
console.log(findMatching(drivers, "Ahmed")); 
console.log(findMatching(drivers, "amina")); 
function fuzzyMatch(drivers, query) {
  return drivers.filter((driver) => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Example usage:
const drivers2 = ["moha", "Aldi", "Babra", "ALis"];
console.log(fuzzyMatch(drivers, "Al"));
console.log(fuzzyMatch(drivers, "b")); 
function matchName(drivers, query) {
  return drivers.filter((driver) => driver.name.toLowerCase() === query.toLowerCase());
}

// Example usage:
const drivers3 = [
  { name: "moha", hometown: "New York" },
  { name: "Amish", hometown: "Los Angeles" },
  { name: "Boss", hometown: "Chicago" },
  { name: "Alta", hometown: "Miami" },
];

console.log(matchName(drivers, "Alta")); // Output: [{ name: "Alice", hometown: "Los Angeles" }]
console.log(matchName(drivers, "boss")); // Output: [{ name: "Bob", hometown: "Chicago" }]

