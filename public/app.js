define(['knockout', 'jquery'], function(ko, jquery){
  var Language = function(name, shortName, color){
    this.name = name;
    this.url = '#/' + name.toLowerCase();
    this.shortName = shortName;
    this.color = color;
    return this;
  };

  var viewModel = {
      languages: [
        new Language('JavaScript', 'JS', '#EDCB5C'),
        new Language('Ruby', 'rb', '#ff6161'),
        new Language('Python', 'py', '#99A0FF')
        ],
      repositories: ko.observableArray([]),
      activeLanguage: ko.observable(null),
      activateLanguage: function(name){
        if (name !== undefined){
          this.activeLanguage(this.languages.filter(function(language){
            return language.name.toLowerCase() === name;
          })[0]);
        }
        return this.activeLanguage();
      }
  };

  var init = function(){
    ko.applyBindings(viewModel);
  };

  return {init: init, Language: Language, viewModel: viewModel};
});

