class Sorter {
  constructor(element) {
    this.element = element;
    this.count = 0;
    this.arr = [];

  }

  add(element) {
    this.element = element;
    this.count++;
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

    indices.sort(this.setComparator);

    newArrWithIncludes = indices.map((el, ind, indices) => {return this.arr[el]});

    newArrWithIncludes.sort(this.setComparator);


      newArrWithIncludes.forEach((el, ind)=>{
        this.arr[indices[ind]] = el;
      });
    
    this.setComparator=this.setComparatorPlanB;
  }

  setComparator(left,right) {
    
    if (typeof left == "number" &&  typeof right == "number"){
      let x = left - right;
      return x;
    }else{
      this.setComparator = left;
    }

  }

  setComparatorPlanB(left,right){
    if (typeof left == "number" &&  typeof right == "number"){
      let x = left - right;
      return x;
    }else{
    this.setComparator = left}
  };
}

module.exports = Sorter;
