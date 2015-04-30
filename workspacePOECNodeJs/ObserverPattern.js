function Observable() {
    var observers = [];
    this.attach = function (observer) {
        observers.push(observer);
    };

    this.detach = function (observer) {
        observers.splice(observers.indexOf(observer), 1);
    };
    this.notify = function (param) {
        for (var keyObserver in observers) {
            var observer = observers[keyObserver];
            observer.update(this, param);
        }
    };
}

function Observer() {
    this.update = function (source, param) {
        //console.log(param);
        throw new Error('abstract');
    }
}
