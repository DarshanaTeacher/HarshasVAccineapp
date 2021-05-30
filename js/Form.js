class Form {

  constructor() {
    this.input = createInput("");
    this.selany = createSelect("");
    this.button = createButton("OK");
    this.title = createElement("h1");
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("People Vaccinated");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 200);
    this.button.position(displayWidth/2 - 20 , displayHeight/2);
    this.selany.position(displayWidth/2 - 20 , displayHeight/2 - 100);
    this.selany.option("yes");
    this.selany.option("no");
     player.name = this.input.value();
      player.info = this.selany.value();
      
      player.update();
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     
    });

    
   

  }
}
