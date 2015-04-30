function Champ(niveau){
    this.niveau=niveau;
    this.pret=false;
    this.maturite=0;
}

function Model() {
    Observable.call(this);
    this.champ1=new Champ(19);
    this.champ2=new Champ(3);
    this.champ3=new Champ(3);
    this.citerneGlobale = 20;
    this.consommation=1;

    this.finJournee = function () {
        //console.log(this);
        this.consommationChamp(this.champ1);
        this.consommationChamp(this.champ2);
        this.consommationChamp(this.champ3);
        this.notify();
    }
    
    this.consommationChamp= function(champ){
        if(champ.niveau>this.consommation){
            champ.niveau-=this.consommation;
        }else{
            champ.niveau=0;
            champ.maturite=0;
        }
        champ.maturite++;
        console.log(champ.maturite);
        if(champ.maturite>=20){
            //console.log("YOUPI");
            champ.pret=true;
        }
    }
    

    this.go = function () {
        //console.log(this);
        setInterval(
            (function () {
                //this = window avec addEventListener
                //mais this = model avec le bind
                //console.log(this);
                this.finJournee();
            }).bind(this), 1000);
    }
    this.getCiterne1 = function () {
        return this.champ1.niveau;
    };
    this.getCiterne2 = function () {
        return this.champ2.niveau;
    };
    this.getCiterne3 = function () {
        return this.champ3.niveau;
    };
    
    this.isChamp1Pret = function () {
        return this.champ1.pret;
    };
    this.isChamp2Pret = function () {
        return this.champ2.pret;
    };
    this.isChamp3Pret = function () {
        return this.champ3.pret;
    };
    
    this.getCiterneGlobale = function () {
        return this.citerneGlobale;
    };
    
    this.viderGlobale=function(){
        var retour= 0;
        if(this.citerneGlobale>1){
            this.citerneGlobale-=1;
            retour=1;
        }else{
            this.citerneGlobale=0;
            retour=this.citerneGlobale;
        }
        return retour;
    }
    
    this.irriguer1 = function () {
        this.champ1.niveau+=this.viderGlobale();
        this.notify();
    };
    
    this.irriguer2 = function () {
        this.champ2.niveau+=this.viderGlobale();
        this.notify();
    };
    
    this.irriguer3 = function () {
        this.champ3.niveau+=this.viderGlobale();
        this.notify();
    };
}
Model.prototype = Object.create(Observable.prototype);