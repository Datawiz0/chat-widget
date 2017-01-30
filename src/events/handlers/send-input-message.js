/*
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/

var state = require('../../state');
var events = require('../../events');

function sendInputMessage() {
  var current = state.get();
  if (!current.inProgress && !current.disableInput) {
    var text = current.root.querySelector('.IBMChat-chat-textbox').value.trim().replace(/(\r\n|\n|\r)/gm,"");
    events.publish('send', {
      text: text
    });
    text = '';
  }
}

module.exports = sendInputMessage;