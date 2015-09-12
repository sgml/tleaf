{{>useStrict}}
describe('Service: {{name}}', function () {

	var {{name}}{{and arg.deps}};

	beforeEach(function () {

		module('{{module}}');

		module(function ($provide) {
			{{#each deps}}
			{{> (this.partial) this}}
			{{/each}}
		});

		inject(function (_{{name}}_{{and arg._deps_}}) {
			{{name}} = _{{name}}_;
			{{#each deps}}
			{{this.name}} = _{{this.name}}_;
			{{/each}}
		});
	});

	// Specs here

});