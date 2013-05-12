(function (Backbone) {
  var oldConstructor = Backbone.Model.prototype.constructor;

  Backbone.Model = Backbone.Model.extend({
    constructor: function () {
      accessorize(this);
      oldConstructor.apply(this, arguments);
    }
  })

  function accessorize(model) {
    _(model.accessors).each(defineAccessor, model);
  }

  function defineAccessor (accessor) {
    preventOverwrite(this, accessor)
    this[accessor] = createAccessorFunction(this, accessor);
  }

  function preventOverwrite (model, accessor) {
    if (!_(model[accessor]).isUndefined()) {
      throw "can't overwrite '"+accessor+"' property"
    }
  }

  function createAccessorFunction (model, accessor) {
    return function () {
      if (arguments.length > 0) {
        return model.set(accessor, arguments[0])
      }
      return model.get(accessor);
    };
  }
})(Backbone);