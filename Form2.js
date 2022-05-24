class Form2{
    constructor(){
        this.title=createElement("h2");
        this.nombrecliente=createElement("h3");
        this.apellido=createElement("h3");
        this.id=createElement("h3");
        this.edad=createElement("h3");
        this.telefono=createElement("h3");
        this.correo=createElement("h3");
        this.tipodecliente=createElement("h3");
        this.inputI = createInput();
        this.inputA = createInput();
        this.inputN = createInput();
        this.inputE = createInput();
        this.inputT = createInput();
        this.inputC = createInput()
        this.inputZ = createInput()
        this.button = createButton("registrar");
    } 
    display(){
        this.title.html("registro de cliente");
        this.title.position(390,0);
        this.nombrecliente.html("ingresa el nombre del cliente");
        this.nombrecliente.position(130,100);
        this.inputN.position(150,150)
        this.apellido.html("ingresa tu allido");
        this.apellido.position(610,100);
        this.inputA.position(600,150)
        this.id.html("ingresa tu id");
        this.id.position(150,200);
        this.inputI.position(140,250)
        this.edad.html("ingresa la edad");
        this.edad.position(600,200);
        this.inputE.position(600,250)
        this.telefono.html("ingresa tu telefono");
        this.telefono.position(150,300);
        this.inputT.position(140,350)
        this.correo.html("ingresa tu correo");
        this.correo.position(600,300);
        this.inputC.position(600,350)
        this.tipodecliente.html("ingresa el tipo de cliente");
        this.tipodecliente.position(600,400);
        this.inputZ.position(600,450)
        this.button.position(700,500);

        this.button.mousePressed(()=>{
            cliente.nombrecliente=this.inputN.value();
            cliente.apellido=this.inputA.value();
            cliente.id=this.inputI.value();
            cliente.edad=this.inputE.value();
            cliente.telefono=this.inputT.value();
            cliente.correo=this.inputC.value();
            cliente.tipodecliente=this.inputZ.value();
            cliente.update();
        })
    }
}