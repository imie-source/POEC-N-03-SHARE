var model = new Model();
var vue = new Vue(model);
var controller = new Controller(model,vue);
model.attach(vue);
vue.attach(controller);
//model.go();