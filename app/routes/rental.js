import Ember from 'ember';

//Notice that we're using the method findRecord() instead of findAll() here. Additionally, findRecord() takes two arguments: The type of object ('rental'), and the object's specific id (params.rental_id). After retrieving the specified rental, the route will render the rental template.
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
});
