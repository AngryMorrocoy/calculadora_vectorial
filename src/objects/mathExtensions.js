import { factory } from "mathjs";
import Vector from './Vector';

const vectorTypeFactory = factory("Vector", ["typed"], ({ typed }) => {
  typed.addType({
    name: "Vector",
    test: (x) => {
      return x && x.isVector;
    },
  });

  return Vector
});

const vectorOperationsFactoriesBuilder = () => {
  const factoryBuilder = (operationName, fun) => {
    return factory(operationName, ["typed", "Vector"], fun);
  };

  const operations = [
    [
      "add",
      ({ typed }) =>
        typed("add", {
          "Vector, Vector": (a, b) => {
            return a.add(b);
          },
        }),
    ],
    [
      "sub",
      ({ typed }) =>
        typed("sub", {
          "Vector, Vector": (a, b) => {
            return a.sub(b);
          },
        }),
    ],
    [
      "multiply",
      ({ typed, Vector }) =>
        typed("multiply", {
          "Vector, Number": (a, b) => {
            return new Vector(a.x * b, a.y * b, a.z * b);
          },
          "Number, Vector": (a, b) => {
            return new Vector(a.x * b, a.y * b, a.z * b);
          },
        }),
    ],
    [
      "dotProduct",
      ({ typed }) =>
        typed("dotProduct", {
          "Vector, Vector": (a, b) => {
            return a.dotProduct(b);
          },
        }),
    ],
    [
      "crossProduct",
      ({ typed }) =>
        typed("crossProduct", {
          "Vector, Vector": (a, b) => {
            return a.crossProduct(b);
          },
        }),
    ],
  ];

  let result = [];

  for (let [name, op] of operations) {
    result.push(factoryBuilder(name, op));
  }

  return result;
};

export { vectorTypeFactory, vectorOperationsFactoriesBuilder };
