
function setup(){
  var canvas = createCanvas(2000,800);
  database=firebase.database();
  producto=new Producto();
  form= new Form();
  form.display();
  cliente=new Cliente();
  form2= new Form2();
  form2.display();

}

function draw(){
background("silver")

}
