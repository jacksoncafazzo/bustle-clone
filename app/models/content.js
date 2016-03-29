import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  type: DS.attr(),
  text: DS.attr(),
  time: DS.attr(),
  image: DS.attr()
});
