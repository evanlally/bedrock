/*!
 * Popover Template module.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  'popoverTemplate.directive'
], function(angular, directive) {

'use strict';

var module = angular.module('app.popoverTemplate', []);

module.directive(directive);

});
