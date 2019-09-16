import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element

  name: 'Bus-AR', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


$$(document).on('DOMContentLoaded', function(){
  var time = Date.now();
  $$("#hidTime").text(time);

  $$('#hidLineA').text($$('#btnLineA').text());
  $$('#hidLineB').text($$('#btnLineB').text());
});

// Random Number Generator
$$('a.main-button-time').on('click', function () {
  var timeClick = Date.now();
  var timeLoad = $$("#hidTime").text();
  var numTimeClick = parseFloat(timeClick);
  var numTimeLoad = parseFloat(timeLoad);
  var secs = ((numTimeClick - numTimeLoad) / 1000);
  var min = secs / 60;
  var round = Math.floor(min);
  var id = $$(this).attr('id');
  var idU = id.substring(8,7);
  var idText = 'hidLine'+idU;
  // alert(idText);
  $$(idText).text('hello');
  var thisText = $$(this).text();
  var thisNum = parseInt(thisText);
  var result = 8;
  // alert('rounded: ' + round + ' min: ' + min + ' seconds: ' + secs);
});