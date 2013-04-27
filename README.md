# Backbone Assessorize #

Simple BackboneJS plugin to automagically create attribute assessors for your model attributes:

    model.name() // getter for name
    model.name('Paulo') // setter for name

## Usage ##

To make it work, define the attribute assessors inside the model definition:

    var FancyModel = Backbone.Model.extends({
      assessors: ['name']
    });

It doesn't break the original interface, so you still can do:

    model.get('name');
    model.set('name', 'Paulo');

## Advatages ##

- **Better documentation**: a Model source file teels what attributes it has;
- **Explicit interface**: by using these assessors, you can better garatee integration. If a refactoring changes an attribute name, it will break the code/tests instead of saving a wrong attribute in the model.

Don't agree? Please let me know!

## Instalation ##

Download the single src/backbone-assessorize.js file and load it just before BackboneJS.

It is important that you load this pluggin before any other, because it works by Monkey Patching the Backbone.Model implementation.