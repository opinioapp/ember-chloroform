import Ember from 'ember';
import layout from '../templates/components/chloro-form';

export default Ember.Component.extend({
  layout,
  classNames: ['chloroform'],

  actions: {
    submit(event) {
      event.preventDefault();

      if (!this.get('model.validations.isInvalid')) {
        this.sendAction('action');
      }
    }
  }
});
