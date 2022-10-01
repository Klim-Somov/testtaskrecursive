function keyRemover<T>(keys: Array<string>) {
  return (obj: T) => {
    keys.forEach((e) => {
      if (Array.isArray(e)) {
        keyRemover(e);
      }
      delete obj[e as keyof typeof obj];
    });
    console.log(obj);
  };
}

const removeKeys = keyRemover(["a", "b"]);
const newObj = removeKeys({ a: 1, b: 2, c: 3 }); // { c: 3 }
const newObj1 = removeKeys({ a: 1, b: 2, c: 3, d: { a: 1, b: 2, c: 3 } }); // { c: 3, d: { c: 3 } }
