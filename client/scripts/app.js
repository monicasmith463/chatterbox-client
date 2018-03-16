// // YOUR CODE HERE:
// // var MakeApp = function() {
// //   this.posts = [];
// // };
//
// class MakeApp {
//
//   constructor() {
//
//     init () {
//
//     }
//
//     send () {
//
//     }
//   }
//
//
//
//
//
// MakeApp.prototype.send = function (message) {
//   $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//     type: 'POST',
//     data: JSON.stringify(message),
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message sent');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to send message', data);
//     }
//   })
// };
//
// MakeApp.prototype.fetch = function () {
//   $.ajax({
//     type: 'GET',
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message fetched');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to fetch message', data);
//     }
//   })
// };
//
// MakeApp.prototype.clearMessages = function () {
//   $.ajax({
//     url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//     type: 'DELETE',
//     data: { _method: 'delete' },
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Messages cleared');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to clear messages', data);
//     }
//   })
// };
//
// MakeApp.prototype.renderMessage = function (message) {
//   $.ajax({
//     url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//     type: 'GET',
//     data: JSON.stringify(message),
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message fetched');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to fetch message', data);
//     }
//   })
// };
//
// MakeApp.prototype.renderRoom = function (roomName) {
//   // $.ajax({
//   //   url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//   //   type: 'GET',
//   //   data: JSON.stringify(message),
//   //   contentType: 'application/json',
//   //   success: function (data) {
//   //     console.log('chatterbox: Message fetched');
//   //   },
//   //   error: function (data) {
//   //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//   //     console.error('chatterbox: Failed to fetch message', data);
//   //   }
//   // })
// };
//
// let app = new MakeApp();
