
function keyRemover<T>(keys:  Array<string>): (obj: T) => any {
  return (obj: T) => {
    let objClone = JSON.parse(JSON.stringify(obj));
    for (let key in objClone) {
      if (typeof objClone[key] === "object") {
        objClone[key] = removeKeys(objClone[key]);
      } else {
        keys.forEach((el) => {
          delete objClone[el];
        });
      }
    }
    return objClone;
  };
}
const removeKeys = keyRemover(["a", "b"]);
const newObj = removeKeys({ a: 1, b: 2, c: 3 }); // { c: 3 }
const newObj1 = removeKeys({ a: 1, b: 2, c: 3, d: { a: 1, b: 2, c: 3 } }); // { c: 3, d: { c: 3 } }
