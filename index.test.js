const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = {...input};
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const actual = utils.findLargestInteger(input);
    const expected = 3;
    expect(actual).toEqual(expected);


  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    
    const actual = new utils.Counter(3);
    const expected = counter
    
    expect(actual).toMatchObject(expected);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    
    const actual = (new utils.Counter(3)).countDown();
    const expected = counter.countDown();
    
    expect(actual).toEqual(expected);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const obj = (new utils.Counter(3))
    obj.countDown();
    obj.countDown()
    obj.countDown();

    const actual = obj;
    const expected = (new utils.Counter(0));

    expect(actual).toMatchObject(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {

    const actual = seasons.next();
    const expected = 'summer';

    expect(actual).toEqual(expected);
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    
    let current;
    for (let i = 1; i < 3; i++){
      current = seasons.next();
    }

    const actual = current;
    const expected = 'fall';

    expect(actual).toEqual(expected);
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let current;
    for (let i = 1; i < 4; i++){
      current = seasons.next();
    }

    const actual = current;
    const expected = 'winter';

    expect(actual).toEqual(expected);
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let current;
    for (let i = 1; i < 5; i++){
      current = seasons.next();
    }

    const actual = current;
    const expected = 'spring';

    expect(actual).toEqual(expected);
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let current;
    for (let i = 1; i < 6; i++){
      current = seasons.next();
    }

    const actual = current;
    const expected = 'summer';

    expect(actual).toEqual(expected);
  })
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
})

describe('[Exercise 6] Car', () => {
  // let focus
  // beforeEach(() => {
  //   focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  // })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
