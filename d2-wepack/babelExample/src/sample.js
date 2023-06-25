const sampleFn = (arr) => {
  return Array.from(arr, (i) => {
    return i * i;
  });
};

class Person {
  constructor(name, age, gender, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
  }

  hi() {
    console.log(`Hi, this is ${this.name}`);
  }
}
