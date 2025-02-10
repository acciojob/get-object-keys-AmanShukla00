const student = {
  name: "John"
};

function getKeys(obj) {
  if (typeof obj !== "object" || obj === null) {
    return [];
  }
  return Object.keys(obj);
}

window.student = student;
window.getKeys = getKeys;