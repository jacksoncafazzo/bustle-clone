import Ember from 'ember';


export default Ember.Component.extend({
  addNewContent: false,
  actions: {
    contentFormShow() {
      this.set('addNewContent', true);
    },
    save1() {
      var newTime = new Date();
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        type: this.get('type'),
        text: this.get('text'),
        time: newTime,
        image: this.get('image')
      };
      this.set('addNewContent', false);
      this.sendAction('save2', params);
    }
  }
});
