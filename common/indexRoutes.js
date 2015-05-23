Router.configure({
	layoutTemplate: 'publicLayoutTemplate',
	loadingTemplate: 'loadingTemplate',
	notFoundTemplate: 'publicPageNotFoundTemplate',

	// waitOn: function() {
	// return Meteor.subscribe('recordSetThatYouNeedNoMatterWhat');
	// }
});

Router.route('/', {
	name: 'home.blog',
	path: '/',
	template: 'blogTemplate',
	after: function() {
		document.title = "Danielito\'s Blog";
  	}
});