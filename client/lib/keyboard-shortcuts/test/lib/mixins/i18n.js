/**
 * Stub i18n
 */

var Emitter = require( 'lib/mixins/emitter' );

function I18n() {
}

I18n.prototype.translate = function( string ) {
  return string;
};

Emitter( I18n.prototype );

module.exports = new I18n();
