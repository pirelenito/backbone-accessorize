describe("Backbone Assessorize", function() {
  it("should not break models that doesn't define the assessors attribute", function() {
    var MyModel = Backbone.Model.extend()

    expect(function () {
      new MyModel();
    }).not.toThrow();
  });

  it("should not overwrite existing attributes", function() {
    InvalidModel = Backbone.Model.extend({
      accessors: ['constructor']
    });

    expect(function () {
      new InvalidModel();
    }).toThrow();
  });

  describe("given a model defining its assessors", function() {
    var ModelWithAssessors, model;

    beforeEach(function() {
      ModelWithAssessors = Backbone.Model.extend({
        accessors: ['name']
      });

      model = new ModelWithAssessors({
        name: 'Paulo'
      });
    });

    describe("each assessor", function() {
      it("should work as a getter", function() {
        expect(model.name()).toEqual('Paulo')
      });

      it("should work as a setter", function() {
        model.name('Vitor');
        expect(model.name()).toEqual('Vitor')
      });
    });
  });
});