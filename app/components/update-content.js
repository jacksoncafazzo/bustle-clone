import Ember from 'ember';

export default Ember.Component.extend({
  updateContentForm: false,
  actions: {
    updateContentForm() {
      this.set('updateContentForm', true);
    },
    update(content) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        type: this.get('type'),
        text: this.get('text'),
        time: this.get('time'),
        image: this.get('image'),
      };
      this.set('updateContentForm', false);
      this.sendAction('update', content, params);
    }
  }
});
