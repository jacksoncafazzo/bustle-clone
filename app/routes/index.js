import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('content');
  },

  actions: {
    save3(params) {
      var newContent = this.store.createRecord('content', params);
      newContent.save();
      this.transitionTo('index');
    },
    update(content, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          content.set(key,params[key]);
        }
      });
      content.save();
      this.transitionTo('index');
    },
    destroyContent(content) {
      content.destroyRecord();
      this.transitionTo('index');
    }
  }
});
