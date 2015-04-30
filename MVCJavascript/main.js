var anonyme1 = {};
anonyme1.attribut1 = 'valeur1';
var anonyme2 = {
    attribut2: 'valeur2'
};
console.log(anonyme1.attribut1);
console.log(anonyme2.attribut2);

function ObjectConstructor(valeurInit) {
    var attribut1 = valeurInit;
    this.getAttribut1 = function () {
        return attribut1;
    };
}

//var tabObj=[];
//for(var i=0;i<4;i++){
//    var obj = new Object(i);
//    tabObj.push(obj);
//}
//for(var keyObj in tabObj){
//    var obj= tabObj[keyObj];
//    console.log(obj.getAttribut1());
//}

var obj1 = new ObjectConstructor('valeur3');
console.log(obj1.getAttribut1());

ObjectConstructor.prototype.function2 = function () {
    console.log('function2');
};
obj1.function2();
obj1.constructor.prototype.function1 = function () {
    console.log('function1');
};
obj1.function1();

function function3(arg1) {
    console.log('function3 argument:', arg1, ' attribut : ', this.getAttribut1());
}
function3.call(obj1, 'valeur argument');

var bindedFunction3 = function3.bind(obj1);
bindedFunction3('valeur argument 2');
bindedFunction3('valeur argument 3');

//Héritage
function ObjetHerite(valeurInitAttr1, valeurInitAttr2) {
    ObjectConstructor.call(this, valeurInitAttr1);
    var attribut2 = valeurInitAttr2;
    this.getAttribut2 = function () {
        return attribut2;
    };
}

//Depreceted
//ObjetHerite.prototype = new ObjectConstructor();
//var obj2 = new ObjetHerite('valeur1', 'valeur2');
//console.log(obj2.getAttribut1());
//console.log(obj2.getAttribut2());
//console.log(obj2);


ObjetHerite.prototype = Object.create(ObjectConstructor.prototype);
var obj2 = new ObjetHerite('valeur1', 'valeur2');
console.log(obj2.getAttribut1());
console.log(obj2.getAttribut2());
console.log(obj2);

