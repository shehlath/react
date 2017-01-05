'use strict';

angular.module('angularApp',[])
.directive('textDirective',function(){
  return{
    require: 'ngModel',
    link: function(scope,element,attr,model){
      function validation(value){
        if (value.match('^[a-zA-Z0-9]+$')){
          model.$setValidity('alphaNum',true);
        }
        else{
          model.$setValidity('alphaNum',false);
        }
        if(value.match('^.{3,15}$')){
          model.$setValidity('length',true);
        }
        else{
          model.$setValidity('length',false);
        }
        return value;
      }
      model.$parsers.push(validation);
    }
  };
})

.directive('numDirective',function(){
  return{
    require: 'ngModel',
    link: function(scope,element,attr,model){
      function validation(value){
        if (value.match('^[0-9]+$')){
          model.$setValidity('numeric',true);
        }
        else{
          model.$setValidity('numeric',false);
        }
        if(value.match('^.{5,10}$')){
          model.$setValidity('length',true);
        }
        else{
          model.$setValidity('length',false);
        }
        return value;
      }
      model.$parsers.push(validation);
    }
  };
})

.directive('emailDirective',function(){
  return{
    require: 'ngModel',
    link: function(scope,element,attr,model){
      function validation(value){
        if (value.match('^[A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')){
          model.$setValidity('email',true);
        }
        else{
          model.$setValidity('email',false);
        }
        return value;
      }
      model.$parsers.push(validation);
    }
  };
})

.directive('genderDirective',function(){
  return{
    require: 'ngModel',
    link: function(scope,element,attr,model){
      function validation(value){
        if (value){
          model.$setValidity('gender',true);
        }
        else{
          model.$setValidity('gender',false);
        }
        return value;
      }
      model.$parsers.push(validation);
    }
  };
});
