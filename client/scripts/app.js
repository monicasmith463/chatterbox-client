class MakeApp {
  constructor() {
    this.posts = [];
    this.users = [];
    this.rooms = [];
    this.friends = [];
    this.url = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages?order=-score';
  }

  init() {
    setInterval(() => {
      this.fetch()
    }, 10000);
    $('#send .submit').on("click", function() {
      this.handleSubmit()
    });
  }

  send(message) {
    $.ajax({
      url: this.url,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: (data) => {
        console.log('chatterbox: Message sent', data);
      },
      error: (data) => {
        console.error('chatterbox: Failed to send message', data);
      }
    })
  }

  fetch() {
    $.ajax({
      url: this.url,
      type: 'GET',
      contentType: 'application/json',
      success: (data) => { 
        this.clearMessages();
        let { results } = data;
        results.forEach((post) => {
          if (post.text && post.username) {
            this.renderMessage(post);
            
            if (post.roomname && !this.rooms.includes(post.roomname)) {
              this.rooms.push(post.roomname);
              this.renderRoom(post.roomname);
            }
          }
        };
        console.log('chatterbox: Message fetched');
      },
      error: (data) => {
        console.error('chatterbox: Failed to fetch message', data);
      }
    })

  }

  handleUsernameClick(userName) {
    $(userName).click((event) => {
      this.addFriend();
    })
  }

  handleSubmit() {
    alert( "Handler for .submit called." );

    var newMessage = {
    username: 'anon', // whatever user inputs at begining of session
    message: $('#message').val(),
    roomname: 'lobby' // ditto
    }

    this.renderMessage(newMessage);
    // event.preventDefault();
  }

  clearMessages() {
    $('div').remove('#chats');
    $('#main').append('<div id="chats"></div>');
  }

  renderMessage(message) {
    $('#chats').prepend(`<p id="${message.objectId}" class="chat ${message.username} ${message.roomname}"><b>${message.username}: </b>${message.text}<br><small>${message.updatedAt}</small></p>`);
  }

  renderRoom(roomName) {
    let room = `<option value="${roomName}">${roomName}</option>`;
    $('#roomSelect').append(room);
  }

  addFriend(username) {
    this.friends.push(username);
  }
}

var app = new MakeApp();
$(document).ready(function(){
    app.init()
});
// });