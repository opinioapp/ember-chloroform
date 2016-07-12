/**
 * Copied from
 * https://github.com/offirgolan/ember-cp-validations/blob/master/tests/dummy/app/components/validated-input.js
 * @licence https://github.com/offirgolan/ember-cp-validations/blob/master/LICENSE.md
 */

import Ember from 'ember';
import layout from '../templates/components/validated-input';
import humanize from '../utils/humanize';
const {
  isEmpty,
  computed,
  defineProperty,
} = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['validated-input'],
  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
  model: null,
  value: null,
  type: 'text',
  valuePath: '',
  placeholder: '',
  autofocus: '',
  validation: null,
  isTyping: false,

  init() {
    this._super(...arguments);
    var valuePath = this.get('valuePath');
    defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`));

    if (!this.get('label')) {
      this.set('label', humanize(valuePath));
    }
  },

  notValidating: computed.not('validation.isValidating'),
  didValidate: computed.oneWay('targetObject.didValidate'),
  hasContent: computed.notEmpty('value'),
  isValid: computed.and('hasContent', 'validation.isValid', 'notValidating'),
  isInvalid: computed.oneWay('validation.isInvalid'),
  showErrorClass: computed.and('notValidating', 'showMessage', 'hasContent', 'validation'),
  showErrorMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function () {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
  }),

  showWarningMessage: computed('validation.isDirty', 'validation.warnings.[]', 'isValid', 'didValidate', function () {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !isEmpty(this.get('validation.warnings'));
  })
});
