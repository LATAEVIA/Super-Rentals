import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

//This is a list of object attributes we want to save to our store for each rental we add. When a DS.Model is exported, as we see in the line export default DS.Model.extend({ ... it is added to the data store. That is, it's being saved to our database.
export default DS.Model.extend({
    owner: DS.attr(),
    city: DS.attr(),
    type: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr()
});

export default DS.Model.extend({

});
