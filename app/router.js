import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

//Now, when the router receives a request matching /rental/:rental_id (such as from a link within our application that contains the rental's id) it will map the URL to the rental route handler, rental.js, and send a params hash that includes the value of the :rental_id segment in the URL.
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rental', {path: '/rental/:rental_id'});
});

export default Router;
