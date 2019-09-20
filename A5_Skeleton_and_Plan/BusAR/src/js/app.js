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

      // Pre-Made Busses
      bus: [
        {
          buscode: '010203',
          name: 'JAM Liner',
          cap: 'Seating',
          type: 'Air-Con'
        },
        {
          buscode: '010204',
          name: 'JAM Liner - EXP',
          cap: 'Standing',
          type: 'Air-COn'
        },
        {
          buscode: '040506',
          name: 'Mayamy',
          cap: 'Standing',
          type: 'Non AC'
        },
        {
          buscode: '070809',
          name: 'Victory Liner',
          cap: 'Seating',
          type: 'Air-Con'
        }
      ],

      busstop: [
        {
          active: false,
          stopcode: 'NS0001',
          stopname: 'Cubao Terminal',
          disp: '30',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0002',
          stopname: 'Santolan',
          disp: '30',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0003',
          stopname: 'Ortigas',
          disp: '30',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0004',
          stopname: 'Shaw Blvd',
          disp: '30',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0005',
          stopname: 'Guadalupe',
          disp: '25',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0006',
          stopname: 'Buendia',
          disp: '25',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0007',
          stopname: 'Ayala',
          disp: '20',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0008',
          stopname: 'Magallanes',
          disp: '2',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0009',
          stopname: 'Pasay Terminal',
          disp: '2',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0010',
          stopname: 'Taft',
          disp: '15',
          buslist: [
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0011',
          stopname: 'MOA',
          disp: '15',
          buslist: [
            {
              buscode: '040506'
            }
          ]
        },
        {
          active: false,
          stopcode: 'NS0012',
          stopname: 'PITX',
          disp: '10',
          buslist: [
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        }
      ],

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
    }
  },
  // App routes
  routes: routes,
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Our app is running on port ${ PORT }`);
// });

// Search Bar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  on: {
    enable: function () {
      console.log('Searchbar enabled')
    },
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    },
    clear: function() {
      console.log('Cleared')
    }
  },
  searchContainer: '.list',
  searchIn: '.prodItem'
})

$$('.searchbar').on('search', function(e) {
  
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

  $$(".hidTime").each(function() {
    var id = $$(this).attr('id');
    var idSub = id.substring(8,21);
    // alert(idSub);

    $$(this).text(time);
    var hidLineID = '#hidLine-'+idSub;
    var btnLineID = '#btnLine-'+idSub;

    $$(hidLineID).text($$(btnLineID).text());
  });
});


$$('a.addBus').on('click', function() {
  var ul = $$(this).closest('ul');
  var ulID = ul.attr('id');
  var ulSub = ulID.substring(4,11);
  var id = $$(this).attr('id');
  var idSub = id.substring(4, 10);

  // List
  var list = '#list-' + ulSub;
  var listID = '#list-' + ulSub + ' li';
  var ulExist = false;

  var home = $$('#home-list');
  var counter = 0;
  $$('#home-list ul').each(function() {
    var u = $$(this).attr('id');
    var uSub = u.substring(5,11);
    // alert(uSub + ' ' + ulSub);
    if(ulSub == uSub) {
      ulExist = true;
    } 
    // counter += 1;
  });

  // if(counter == 0) {
  //   ulExist = false;
  // } 

  var liExist = false;
  $$(listID).each(function() {
    var liID = $$(this).attr('id');
    var liIDSub = liID.substring(5, 11);
    // check if bus exist in existing list
    if(idSub == liIDSub) {
      liExist = true;
    }
  });

  // Get Stop Name
  var t = '#t-'+ ulSub;
  // alert(ulSub);
  var title = $$(t).text();
  // alert(title);
  // Get Bus Name
  var busName = $$(this).text();
  // alert(busName);

  // Get Bus Type
  var typeID = '#type-' + idSub;
  var busType = $$(typeID).text();
  // alert(busType);

  // Get Bus Type
  var capID = '#cap-' + idSub;
  var busCap = $$(capID).text();
  // alert(busCap);

    // Get Bus Disp
    var dispID = '#disp-' + idSub;
    var busDisp = $$(dispID).text();
    // alert(busDisp);

    var time = Date.now();
  if(ulExist) {
    if(!liExist) {
      // alert('not exist adding..')
      $$(list).append('<li class="swipeout" id="item-'+ idSub +'"> \
      <p hidden class="hidTime" id="hidTime-'+ulSub+'-'+ idSub +'">'+time+'</p> \
      <p hidden class="hidLine" id="hidLine-'+ulSub+'-'+ idSub +'">'+busDisp+'</p> \
      <table class="main-table"> \
          <tbody> \
            <tr> \
              <td rowspan="2"> \
                <p class="main-bus-desc">'+busName+'</p> \
              </td> \
              <td class="text-align-right td-bus-label"><div class="bus-label button button-raised button-fill">'+busCap+'</div></td> \
              <td rowspan="2" class="text-align-right num-display"><a href="#" class="button button-raised button-fill color-black color-green main-button-time" id="btnLine-'+ulSub+'-'+ idSub +'">'+busDisp+'</a></td> \
            </tr> \
            <tr> \
                <td class="text-align-right td-bus-label"><div class="bus-label button button-raised button-fill">'+busType+'</div></td> \
            </tr> \
          </tbody> \
        </table> \
        <div class="swipeout-actions-right"> \
          <a href="#" class="swipeout-delete">Delete</a> \
        </div> \
      </li>');
    }
  } else
  {
    $$('#home-list').append(' \
      <p id="name-'+ulSub+'">'+title+'</p> \
      <ul id="list-'+ulSub+'"> \
      <li class="swipeout" id="item-'+ idSub +'"> \
      <p hidden class="hidTime" id="hidTime-'+ulSub+'-'+ idSub +'">'+time+'</p> \
      <p hidden class="hidLine" id="hidLine-'+ulSub+'-'+ idSub +'">'+busDisp+'</p> \
      <table class="main-table"> \
          <tbody> \
            <tr> \
              <td rowspan="2"> \
                <p class="main-bus-desc">'+busName+'</p> \
              </td> \
              <td class="text-align-right td-bus-label"><div class="bus-label button button-raised button-fill">'+busCap+'</div></td> \
              <td rowspan="2" class="text-align-right num-display"><a href="#" class="button button-raised button-fill color-black color-green main-button-time" id="btnLine-'+ulSub+'-'+ idSub +'">'+busDisp+'</a></td> \
            </tr> \
            <tr> \
                <td class="text-align-right td-bus-label"><div class="bus-label button button-raised button-fill">'+busType+'</div></td> \
            </tr> \
          </tbody> \
        </table> \
        <div class="swipeout-actions-right"> \
          <a href="#" class="swipeout-delete">Delete</a> \
        </div> \
      </li>');
    }

    $$(this).parent().remove();
});

// Catch Delete
$$('.swipeout-delete').on('click', function(){
  var ul = $$(this).closest('ul');
  var ulid = ul.attr('id');
  
  var ulidSub = ulid.substring(5, 11);
  var titid = '#name-'+ulidSub;
  // alert(titid);
  var ulidLI = '#'+ulid+' li';
  var count = 0;
  $$(ulidLI).each(function() {
    count += 1;
  });

  count -= 1;
  // alert(count);
  if(count == 0) {
    $$(this).closest('ul').remove();
    $$(titid).remove();
  }

});


// Random Number Generator
$$('.main-button-time').on('click', function () {
  var id = $$(this).attr('id');
  var idU = id.substring(8,21);
  var idText = '#hidLine-'+idU;

  var hidTimeID = '#hidTime-'+idU;

  var timeClick = Date.now();
  var timeLoad = $$(hidTimeID).text();
  var numTimeClick = parseFloat(timeClick);
  var numTimeLoad = parseFloat(timeLoad);
  var secs = ((numTimeClick - numTimeLoad) / 1000);
  var min = secs / 60;
  var round = Math.floor(min);
  
  // alert('rounded: ' + round + ' min: ' + min + ' seconds: ' + secs);

  
  var originalTime = parseInt($$(idText).text());
  var displayText = $$(this).text();

  var result = 0;
  result = originalTime - round;
  if(result == 1) {
    $$(this).text('ARR');
  } 
  else if(result == 0) {
    $$(this).text('ARV');
  } else if(result < 0) {
    $$(this).text(originalTime);
    var time = Date.now();
    $$(hidTimeID).text(time);
  } else {
    $$(this).text(result);
  }

  var al = function() {
    // alert('meow');
  }
  


  // var curTime = parseInt($$('#hidCurTime').text());
  // if(round == curTime) {
  //   $$('#hidCurTime').text(round);
  // } else {
  //   result = thisNum - round;
  // }

  // $$('#hidCurTime').text(round);
  // $$(this).text(result);
  
});