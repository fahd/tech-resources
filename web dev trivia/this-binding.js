var hir = 'Danny Delott';

var obj = {
  hir: 'Noah  Sluss',
  key: {
    hir: 'Tony Johnson',
    getHir: function() {
      return this.hir
    }
  }
}

var findHir = obj.key.getHir;

console.log(obj.key.getHir())
// logs Tony Johnsons
console.log(findHir());
// logs Danny Delott

