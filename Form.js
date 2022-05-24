class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombredelproducto=createElement("h3");
        this.departamento=createElement("h3");
        this.preciodelproducto=createElement("h3");
        this.descripcion=createElement("h3");
        this.stock=createElement("h3");
        this.inputN = createInput();
        this.inputP = createInput();
        this.inputF = createInput();
        this.inputR = createInput()
        this.inputK = createInput()
        this.button = createButton("registrar");
    } 
    display(){
        this.title.html("registro de prodructo");
        this.title.position(1000,0);
        this.nombredelproducto.html("ingresa el nombre del producto");
        this.nombredelproducto.position(1025,100);
        this.inputN.position(1050,160);
        this.departamento.html("ingresa el nombre del departamento");
        this.departamento.position(1000,200);
        this.inputP.position(1050,250);
        this.preciodelproducto.html("ingresa el precio del producto");
        this.preciodelproducto.position(1030,300);
        this.inputF.position(1050,350);
        this.descripcion.html("descripcion del producto");
        this.descripcion.position(1040,400);
        this.inputR.position(1050,450);
        this.stock.html("introduce el stock");
        this.stock.position(1070,490);
        this.inputK.position(1055,555);
        this.button.position(1060,600);

        this.button.mousePressed(()=>{
            producto.nombredelproducto=this.inputN.value();
            producto.departamento=this.inputP.value();
            producto.preciodelproducto=this.inputF.value();
            producto.descripcion=this.inputR.value();
            producto.stock=this.inputK.value();
            producto.update();
        })
    }
}