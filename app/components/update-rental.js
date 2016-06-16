import Ember from 'ember';

//t's important that the variable names we assign these values match the rental model’s attribute names (ie: owner, city, type, image, and bedrooms; the same attributes we defined on our model in models/rental.js). If they do not, we will receive errors when assigning these new values to our rental object.
export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
