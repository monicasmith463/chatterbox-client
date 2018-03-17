// YOUR CODE HERE:
// var MakeApp = function() {
//   this.posts = [];
// };

  class MakeApp {

    constructor() {}

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
    }

    clearMessages() {
      $('div').remove('#chats');
      $('#main').append('<div id="chats"></div>');
    }


    renderMessage(message) {
      var userClass = message.username.split(' ').join('');
      $('#chats').prepend('<p class"' + userClass + ' ' + message.roomname + '"><b>' + message.username + ': </b>' + message.text + '</p>');
    }

    renderRoom(roomName) {
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

  }

  var app = new MakeApp();
