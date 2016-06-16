import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    ////t's important that the variable names we assign these values match the rental model’s attribute names (ie: owner, city, type, image, and bedrooms; the same attributes we defined on our model in models/rental.js). If they do not, we will receive errors when assigning these new values to our rental object.
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      //Once the params are gathered, we hide the form by setting updateRentalForm back to false, and call this.sendAction('update', rental, params); to send the update() action up one level, along with the rental object we will alter, and the params we've just gathered.
      //this.sendAction(‘update, rental, params); only sends the update() action up one level. It is sent from the update-rental component to its parent component, rental-tile. As such, the rental-tile component will also have to pass the action upward in order for this action to eventually reach the appropriate route. rental-tile will need its own update action to do this:
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
