Maybe = function(x) {
    this.__value = x
}

Maybe.of = x => new Maybe(x)

Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined);
}

Maybe.prototype.map = function(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}

maybe = curry(function(x, f, m) {
  return m.isNothing() ? x : f(m.__value);
});
