import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation : Ember.computed('city.name', 'city.country', function(){
    return this.get('city.name') + ', ' + this.get('city.country');
  }),
  // First two ember computed parameters are to be observed and to auto update function when they change
  actions: {
    destroyCity(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
