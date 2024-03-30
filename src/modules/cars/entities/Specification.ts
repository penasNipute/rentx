import {v4 as uuidV4} from 'uuid'



class Specification{
  id:string;
  name:string;
  description:string;
  car_id:string;

  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }
}

export { Specification }