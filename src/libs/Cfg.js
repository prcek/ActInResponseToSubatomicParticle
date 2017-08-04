
class Cfg {
    constructor(scope=null) {
        this.scope = scope;
    }
    setItem(key,value) {
        localStorage.setItem(key,value);
    }
    getItem(key,def=null) {
        var v = localStorage.getItem(key);
        return (v != null)? v:def;
    }
    get lasers() {
        return this.getItem("lasers","?");
    }
    set lasers(val) {
        this.setItem("lasers",val);
    }
};


export default Cfg;