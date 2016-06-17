import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});

// import Ember from 'ember';
//
// //Notice that we're using the method findRecord() instead of findAll() here. Additionally, findRecord() takes two arguments: The type of object ('rental'), and the object's specific id (params.rental_id). After retrieving the specified rental, the route will render the rental template.
// export default Ember.Route.extend({
//   model(params) {
//     return this.store.findRecord('rental', params.rental_id);
//   },
// });
