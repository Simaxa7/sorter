class Sorter {
  constructor(element) {
    this.count = 0;
    this.arr = [];
    this.comparator = (a, b) => a - b
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index]
  }

  get length() {
    return this.arr.length 
  }

  toArray() {
    return this.arr
  }


  sort(indices) {

    let newArrWithIncludes = [];
    let maybeArr=[]; 
    let count=0;

    indices.sort(this.comparator);
    newArrWithIncludes = indices.map((el, ind, indices) => {return this.arr[el]});
    newArrWithIncludes.sort(this.comparator);

    this.arr.map((el, ind)=> {
      if(indices.includes(ind) ){ 
          let num = newArrWithIncludes[count];
          count++;
          maybeArr.push(num);
      }else {maybeArr.push(el)}
    });

    this.arr=[...maybeArr]

    return this.arr
  }

  setComparator(compareFunction) {
    return this.comparator = compareFunction;
  }

  setComparatorPlanB(left,right){
  };
}

module.exports = Sorter;
