(function() {
  'use strict';

  angular
    .module('myAngularApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
