function Vue(model) {
        //super
        Observer.call(this);
        Observable.call(this);
        //affectation du param de constructeur comme attribut
        this.model = model;

        this.refresh = function () {
            $('#citerne1').text(this.model.getCiterne1());
            if (this.model.isChamp1Pret()) {
                $('#buttonRecolter1').addClass("pret");
            } else {
                $('#buttonRecolter1').removeClass("pret");
            }
            $('#citerne2').text(this.model.getCiterne2());
            if (this.model.isChamp2Pret()) {
                $('#buttonRecolter2').addClass("pret");
            } else {
                $('#buttonRecolter2').removeClass("pret");
            }
            $('#citerne3').text(this.model.getCiterne3());
            if (this.model.isChamp3Pret()) {
                $('#buttonRecolter3').addClass("pret");
            } else {
                $('#buttonRecolter3').removeClass("pret");
            }

            $('#citerneGlobale').text(this.model.getCiterneGlobale());

        }

        //update de Observer
        this.update = function (source, param) {
            // console.log(source, param);
            this.refresh();
        };
        //création de l'IHM
        var buttonGO = $('<button id="goButton">GO</button>');
        $('body').append(buttonGO);
        var citerneGlobale = $('<span id="citerneGlobale">');
        $('body').append(citerneGlobale);

        var tableCiterne = $('<table>' + '<tr><td><button id="buttonIrriguer1">irriguer</button></td><td><button id="buttonIrriguer2">irriguer</button></td><td><button id="buttonIrriguer3">irriguer</button></td></tr>' + '<tr><td> <span id = "citerne1"> </td><td><span id="citerne2"></td> <td> <span id = "citerne3"> </td> </tr>' + '<tr> <td> <button id = "buttonRecolter1"> récolter </button></td> <td> <button id = "buttonRecolter2"> récolter </button></td> <td> <button id ="buttonRecolter3"> récolter </button></td></tr>' + '</table> ');
        $('body').append(tableCiterne);


        //abonnement au click
        buttonGO.on('click', (function (e) {
            //this = currentTarget avec addEventListener
            //mais this = vue avec le bind
            //this.model.go();
            this.notify('go');
            //goActionBinded();

        }).bind(this));

        tableCiterne.find('#buttonIrriguer1').on('click', (function (e) {
            this.notify('irriguer1');
        }).bind(this));

        tableCiterne.find('#buttonIrriguer2').on('click', (function (e) {
            this.notify('irriguer2');
        }).bind(this));

        tableCiterne.find('#buttonIrriguer3').on('click', (function (e) {
            this.notify('irriguer3');
        }).bind(this));


        this.refresh();

    }
    //héritage
var observerProto = Object.create(Observer.prototype);
var observableProto = Object.create(Observable.prototype)
Vue.prototype = {
    update: observerProto.update,
    notify: observableProto.notify,
    attach: observableProto.attach,
    detach: observableProto.detach
}