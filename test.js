const chai = require("chai");
const expect = chai.expect;
const calculator = require("./calculator.js");

describe("Calculate the bowler's score", function() {
  it("Calculate opens and last frame", function() {
    let result = calculator([
      {
        // frame 1
        first: 0,
        second: 3
      },
      {
        // frame 2
        first: 5,
        second: 2
      },
      {
        // frame 3
        first: 1,
        second: 1
      },
      {
        // frame 4
        first: 0,
        second: 0
      },
      {
        // frame 5
        first: 3,
        second: 1
      },
      {
        // frame 6
        first: 7,
        second: 2
      },
      {
        // frame 7
        first: 9,
        second: 0
      },
      {
        // frame 8
        first: 7,
        second: 0
      },
      {
        // frame 9
        first: 1,
        second: 4
      },
      {
        // frame 10
        first: 3,
        second: 0,
        third: 0
      }
    ]);
    expect(result).to.equal(49);
  });

  it("Calculate strikes", function() {
    let result = calculator([
      {
        // frame 1
        first: 10,
        second: 0
      },
      {
        // frame 2
        first: 10,
        second: 0
      },
      {
        // frame 3
        first: 10,
        second: 0
      },
      {
        // frame 4
        first: 10,
        second: 0
      },
      {
        // frame 5
        first: 10,
        second: 0
      },
      {
        // frame 6
        first: 10,
        second: 0
      },
      {
        // frame 7
        first: 10,
        second: 0
      },
      {
        // frame 8
        first: 10,
        second: 0
      },
      {
        // frame 9
        first: 10,
        second: 0
      },
      {
        // frame 10
        first: 10,
        second: 10,
        third: 10
      }
    ]);
    expect(result).to.equal(300);
  });

  it("Calculate spares", function() {
    let result = calculator([
      {
        // frame 1
        first: 9,
        second: 1
      },
      {
        // frame 2
        first: 9,
        second: 1
      },
      {
        // frame 3
        first: 9,
        second: 1
      },
      {
        // frame 4
        first: 9,
        second: 1
      },
      {
        // frame 5
        first: 9,
        second: 1
      },
      {
        // frame 6
        first: 9,
        second: 1
      },
      {
        // frame 7
        first: 9,
        second: 1
      },
      {
        // frame 8
        first: 9,
        second: 1
      },
      {
        // frame 9
        first: 9,
        second: 1
      },
      {
        // frame 10
        first: 9,
        second: 1,
        third: 10
      }
    ]);
    expect(result).to.equal(191);
  });
  it("Calculate mixture of opens, strikes, and spares", function() {
    let result = calculator([
      {
        // frame 1
        first: 6,
        second: 3
      },
      {
        // frame 2
        first: 7,
        second: 0
      },
      {
        // frame 3
        first: 10,
        second: 0
      },
      {
        // frame 4
        first: 10,
        second: 0
      },
      {
        // frame 5
        first: 10,
        second: 0
      },
      {
        // frame 6
        first: 9,
        second: 0
      },
      {
        // frame 7
        first: 3,
        second: 1
      },
      {
        // frame 8
        first: 7,
        second: 3
      },
      {
        // frame 9
        first: 9,
        second: 1
      },
      {
        // frame 10
        first: 9,
        second: 1,
        third: 10
      }
    ]);
    expect(result).to.equal(165);
  });
});
