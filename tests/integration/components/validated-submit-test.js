import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('validated-submit', 'Integration | Component | validated submit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{validated-submit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#validated-submit}}
      template block text
    {{/validated-submit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
