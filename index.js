const keyRemover = (keys) => {
    return (obj) => {
      keys.forEach((e) => {
        if (Array.isArray(e)) {
          keyRemover(e, obj);
        }
        delete obj[e];
      });
      console.log(obj);
    };
  };
  
  const removeKeys = keyRemover(["a", "b"]);
  const newObj = removeKeys({ a: 1, b: 2, c: 3 }); // { c: 3 }
  const newObj1 = removeKeys({ a: 1, b: 2, c: 3, d: { a: 1, b: 2, c: 3 } }); // { c: 3, d: { c: 3 } }
  