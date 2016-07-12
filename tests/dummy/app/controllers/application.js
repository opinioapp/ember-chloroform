import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';


const Validations = buildValidations({
  username: validator('presence', true),
  password: validator('presence', true)
});

export default Ember.Controller.extend(Validations, {
  actions: {
    submit() {
      window.alert('submitted');
    }
  }
});
