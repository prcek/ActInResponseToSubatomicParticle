


class DBTest {
    constructor() {
        this.timeout = 1000;
        this.cb = null;
        this.tm = null;
    }
    tmHandler() {
        console.log("tick",this.timeout);
        if (this.cb) {
            this.cb();
        }
    }

    setCallback(cb) {
        this.cb = cb;
    }
    start() {
        if (this.tm) return;
        this.tm = setInterval(()=>this.tmHandler(),this.timeout);
    }
    stop() {
        if (this.tm) clearInterval(this.tm);
        this.tm = null;
    }
};


export default DBTest;