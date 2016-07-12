# Ember-chloroform

[Live Demo](https://opinioapp.github.io/ember-chloroform)

Easy forms for EmberJS apps. Validations included. (Ember 2.x)

## Features
 - uses `ember-cp-validations` for implementing validations support.
 - contextual components for input fields including submit buttons
 - Label for input can passed as label property (optional). If label
 is not passed, it is inferred from valuePath property.
 
## Installation
  This is an ember-cli addon, so all you need is an ember install. 
  
    ember install ember-chloroform
      
  Compatible with Ember 2.x
  
## Usage
* Template:
    ```handlebars
    {{#chloro-form model=model action='submit' as |f|}}
        {{f.input valuePath='username' placeholder='your username' label='Username'}}
        {{f.input valuePath='password' type='password' placeholder='password goes here'}}
        {{f.submit value="Login" class='button'}}
    {{/chloro-form}}
    ```
    
    - **`model` is required**. It's value is equal to the object on which the
      form fields are defined. For example, if `username` and `password` 
      are defined on the template's controller, then `model = this`.
    - `label` property is optional.
 
* Controller/Component:
  - Declare Validations (optional):
      ```javascript
      import { validator, buildValidations } from 'ember-cp-validations';
      
      
      const Validations = buildValidations({
        username: validator('presence', true),
        password: validator('presence', true)
      });
      
      export default Ember.Controller.extend(Validations, {});
      
      //or if using in a Component's template
      export default Ember.Component.extend(Validations, {});
      ```
      
  - Handle the action declared in the template:
      ```javascript
      ...
      export default Ember.Controller.extend(Validations, {
        ...
        
        actions: {
          submit () {
            //handle here
          }
        }
      });
      ```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
