const {assert} = console;

class Entity{
    constructor(path_to_object){
        assert(path_to_object, "must have a path to load a object");
        this.path_to_obj = path_to_object;    
    }


    load(){throw Error('must implement load()');}

    tick(delta) {throw Error('must implement tick(delta): '+ delta);}

}

export default Entity;
