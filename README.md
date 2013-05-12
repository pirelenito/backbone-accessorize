# Backbone Accessorize [![Build Status](https://secure.travis-ci.org/pirelenito/backbone-accessorize.png)](https://travis-ci.org/pirelenito/backbone-accessorize) #

https://api.travis-ci.org/pirelenito/backbone-accessorize.png

Simple BackboneJS plugin to automagically create attribute accessors for your model attributes:

```javascript
model.myAttribute() // getter for myAttribute
model.myAttribute('Paulo') // setter for myAttribute
```

## Usage ##

To make it work, define the attribute accessors inside the model definition:

```javascript
var FancyModel = Backbone.Model.extends({
  accessors: ['myAttribute']
});
```

Once the model is instantiated, it will provide the accessors for the *myAttribute* attribute:

```javascript
var model = new FancyModel()
model.myAttribute('Paulo')
model.myAttribute() // Paulo
```

It doesn't break the original interface, so you still can do:

```javascript
model.get('myAttribute');
model.set('myAttribute', 'Paulo');
```

## Advatages ##

- **Better documentation**: a Model source file teels what attributes it has;
- **Explicit interface**: by using these accessors, you can better garatee integration. If a refactoring changes an attribute name, it will break the code/tests instead of saving a wrong attribute in the model.

Don't agree? Please let me know!

## Instalation ##

Download the single [src/backbone-accessorize.js](https://raw.github.com/pirelenito/backbone-accessorize/master/src/backbone-accessorize.js) file and load it just after BackboneJS.

It is important that you load this plugin before any other, because it works by Monkey Patching the Backbone.Model implementation.