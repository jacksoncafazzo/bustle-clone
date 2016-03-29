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

    destroyContent(content) {
      content.destroyRecord();
      this.transitionTo('index');
    }
  }
});
