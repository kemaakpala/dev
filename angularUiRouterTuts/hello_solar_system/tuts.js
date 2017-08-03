var myApp = angular.module('hellosolarsystem', ['ui.router']);

myApp.config(function ($stateProvider) {
    var states = [
        {
            name: 'hello',
            url: '/hello',
            component: 'hello'
        },

        /*Resolve Data*/
        {
            name: 'people',
            url: '/people',
            component: 'people',
            resolve: {
                /*
                ** when fetching data use services which return promises
                ** data needed is specified here. ui.router will fetch required data b4 activating the state.
                ** once data has been resolved it passes it to the people component's people: binding.
                ** it inserts the people Component into the <ui-view> viewport.
                */
                people: function (PeopleService) {
                    return PeopleService.getAllPeople();
                }
            }
        },
        
        /*State Parameters*/
        {
            name: 'person',
            url: '/people/{personId}',
            component: 'person',
            resolve: {
                //data needed is specified here. ui.router will fetch required data b4 activating the state.
                person: function (PeopleService, $transitions$) {
                    return PeopleService.getPerson($transitions$.params().personId);
                }
            }
        }
    ];
    
    // Loop over the state definitions and register them
    states.forEach(function (state) {
        $stateProvider.state(state);
    });
});

// Show state tree
myApp.run(function($uiRouter) {
  var StateTree = window['ui-router-visualizer'].StateTree;
  var el = StateTree.create($uiRouter, null, { height: 100, width: 300 });
  el.className = 'statevis';
});