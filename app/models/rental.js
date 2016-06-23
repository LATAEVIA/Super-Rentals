import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

// The DS in this file stands for "data store". .attr() stands for 'attribute'. This is a list of object attributes we want to save to our store for each rental we add. When a DS.Model is exported, as we see in the line export default DS.Model.extend({ ... it is added to the data store. That is, it's being saved to our database.

//The { async: true } property means that if the related model data isn't already loaded, an additional request should be made to Firebase in order to retrieve it.
export default DS.Model.extend({
    owner: DS.attr(),
    city: DS.belongsTo('city', { async: true }),
    type: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr()
});
