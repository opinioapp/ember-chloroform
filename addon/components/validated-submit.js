import Ember from 'ember';
import ValidatedInput from './validated-input';

export default ValidatedInput.extend({
  // layout,
  tagName: 'input',
  attributeBindings: ['type', 'disabled'],
  type: 'submit',
  disabled: Ember.computed.oneWay('model.validations.isInvalid'),
  classNames: ['button', 'validated-submit'],
  value: 'Submit'
});
