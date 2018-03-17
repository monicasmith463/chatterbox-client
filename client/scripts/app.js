$(document).ready(function(){

// var $body = $('body');
// $body.append('<div>hello</div>');
// $body.append(app);
// var $header = $('<h1>Twittler</h1></br><h3>What\'s on your mind?</h3>');
// $body.append($header);


  class MakeApp {

    constructor() {
      this.posts = [
        {
          username: 'Mel Brooks',
          text: 'It\'s good to be the king',
          roomname: 'lobby'
        }
      ];
      this.users = [];
      this.rooms = ['main', 'random', 'help'];
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
        url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
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
      
      // render dropdown
      /// retrieve room names
      /// push to rooms array, maybe
      // var renderRoom = this.renderRoom.bind(this);
      debugger;
      console.log(this.fetch());
      // this.rooms.forEach( function (room) {
      //   this.renderRoom(room);
      //   // room = '<option value = "' + room + '">' + room + '</option>';
      //   // $('#roomSelect').append(room);
      // })
      
      // renderMessage()

      /// room select
      // call first functions
      // renderRoom(/*default*/);
      // var handleSubmit = this.handleSubmit.bind(this);
      // var handleClick = this.handleSubmit.submit(handleSubmit())
      // bind function to select block
      let app = this;
      $('#send').on("click", function() {app.handleSubmit()} );
      // $('#send').submit((this).handleSubmit());
      // $('#send .submit').submit(this.handleSubmit());

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
      console.log(this);
      

      // var context = $(this);
      alert( "Handler for .submit called." );
      // event.preventDefault();
    }

    addFriend() {
      //friends.push($(this));
    }
    
    

  }

  var app = new MakeApp();
  app.init();
});