$(document).ready(function(){

var $body = $('body');
$body.append('<div>hello</div>');
$body.append(app);
var $header = $('<h1>Twittler</h1></br><h3>What\'s on your mind?</h3>');
$body.append($header);


  class MakeApp {

    constructor() {
      this.posts = [];
      // this.form = //…
      // this.friends = //…
      
    //dropdown
    //form
      // $(button).click(handleSubmit ??
    //other things that will be there 
    }

    send (message) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent');
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      })
    }

    fetch() {
      $.ajax({
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message fetched');
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to fetch message', data);
        }
      })
    }

    init() {
      // $(document).ready(function() {});
      // bind function to select block
      $('#send .submit').bind(this.handleSubmit());
    }

    clearMessages() {
      $('div').remove('#chats');
      $('#main').append('<div id="chats"></div>');
    }


    renderMessage(message) {
      var userClass = message.username.split(' ').join('');
      $(userClass).bind(this.handleUsernameClick('.' + userClass));
      $('#chats').prepend('<p class="chat ' + userClass + ' ' + message.roomname + '"><b>' + message.username + ': </b>' + message.text + '</p>');
    }

    renderRoom(roomName) {
      $('#roomSelect').append('<option value="' + roomName + '">' + roomName + '</option>')
      
      // $.ajax({
      //   url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
      //   type: 'GET',
      //   data: JSON.stringify(message),
      //   contentType: 'application/json',
      //   success: function (data) {
      //     console.log('chatterbox: Message fetched');
      //   },
      //   error: function (data) {
      //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      //     console.error('chatterbox: Failed to fetch message', data);
      //   }
      // })
    }
  
    handleUsernameClick(userName) {
      $(userName).click( function(event) {
        var context = $(this);
        context.addFriend();
      })
    }

    handleSubmit() {
      $(this).submit(function(event) {
        // var context = $(this);
        // alert( "Handler for .submit() called." );
        // event.preventDefault();
      })
    }

    addFriend() {
      //friends.push($(this));
    }
    
    

  }

  var app = new MakeApp();
  app.init();
});