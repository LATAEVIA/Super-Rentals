import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

// The save1 action collects all of the data that was entered in the input fields and sets them as values in a hash of keys with the same names. So, this.get('owner') collects the value entered in the owner input field and assigns it to the variable key owner. After each field's value is collected, the form is hidden again by setting the addNewRental property to false.
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
