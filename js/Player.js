class Player {
  constructor(){
    this.index = null;
    this.distance1 = 0;
    this.distance2 = 0;
    this.name = null;
    this.rank = null;
    this.info = null;
  }


  update(){
  database.ref("/").update({
      name:this.name,
      lattitude:this.distance1,
      logitude: this.distance2,
      vaccinated:this.info,
    });
  }

  
}
