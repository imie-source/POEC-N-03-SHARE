function Controller(model, vue) {
        //super
        Observer.call(this);
        this.model = model;
        this.vue = vue;

        //update de Observer
        this.update = function (source, param) {
            //console.log('controller update source :', source, ' param:', param);
            switch (param) {
            case 'go':
                this.model.go();
                break;
            case 'irriguer1':
                this.model.irriguer1();
                break;
            case 'irriguer2':
                this.model.irriguer2();
                break;
            case 'irriguer3':
                this.model.irriguer3();
                break;
            }
        };
    }
    //héritage
Controller.prototype = Object.create(Observer.prototype);