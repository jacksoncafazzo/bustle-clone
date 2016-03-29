import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(content) {
      if(confirm("Are you sure you want to delete this wonderful content?")) {
        this.sendAction('destroyContent', content);
      }
    }
  }
});
