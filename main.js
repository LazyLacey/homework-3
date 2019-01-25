function printWindowValues(){
  console.log(window)
}
printWindowValues()

function expTen(a){
  var b=a
  for(var i = 1; i < 10; i++){
    a = b*a

  }
  console.log(a)
}
expTen(2)


function getFuncRes(method,value){
   method(value)
}

getFuncRes(console.log,"hello world");
