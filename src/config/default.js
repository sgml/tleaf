module.exports = function (config) {
  config.set({

    template: {
      // By default templates use tab for indentation
      // You can pass any string and each tab will be replaced with that string.
      // You can pass integer and it will be a number of spaces for indentation.
      indent: '\t',

      // Include "use strict" statement to the top of the generated test file
      useStrict: true
    },

    units: {

      // List the unit types which should be processed. Only the types mentioned
      // here will be parsed and asked about.
      // The order they appear can be changed by reordering these keys.
      process: [
        'controller', 'directive', 'factory', 'service',
        'filter', 'provider', 'value', 'constant'
      ]

    },

    dependencies: {

      // List the dependencies which should be processed. Only the
      // types mentioned here will be included in generated test code.
      // The order they appear can be changed by reordering these keys.
      process: ['provider', 'service', 'factory', 'value', 'constant'],

      // Exclude particular dependencies, there won't be any test code generated
      // for them.
      filter: ['$scope'],

      // Map dependency type to a respective template. Can be helpful in case
      // when one wants to stub services and factories with values.
      templateMap: {
        'provider': 'provider',
        'service': 'service',
        'factory': 'factory',
        'value': 'value',
        'constant': 'constant'
      }

    }

  });
};