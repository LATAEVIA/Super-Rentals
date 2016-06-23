import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    // We can still gather the city despite removing that field from the form, because we provided the new-rental component access to the current city object when we said city=model in the line {{new-rental save2="save3" city=model}}.
    save1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "",
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
