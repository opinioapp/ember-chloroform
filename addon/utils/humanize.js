import Ember from 'ember';

/*
  Inspired from the humanize method in ember-easyforms
  (https://github.com/DockYard/ember-easy-form/blob/5a42e7ee41d689a38bab5a33de59e427fc66ba19/packages/ember-easyForm/lib/utilities.js#L1)
 */
export default function (string) {
  return Ember.String.capitalize(Ember.String.underscore(string).split('_').join(' '));
};
