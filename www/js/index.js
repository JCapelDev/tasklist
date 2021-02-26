/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
   // document.getElementById('deviceready').classList.add('ready');
}

let list = $("ul")[0];

//var myNodelist = $("li");
var i;
for (i = 0; i < list.children.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list.children[i].appendChild(span);
}


$(".close").click(function(){
  $(this).parent().remove()
  $("ul")[0].listview("refresh");
});



// Create a new list item when clicking on the "Add" button
function newElement() {
    // let li = document.createElement("li");
    // let li = $("<li></li>");
    
    let inputValue = $("#myInput")[0].value;
    // let t = document.createTextNode(inputValue);
    // li.appendChild(t);
    // let t = $(inputValue).text;
    // li.append(inputValue.value);
    if (inputValue === '') {
      alert("Necessites ecriure algo!");
    } else {
      // let span = document.createElement("SPAN");
      // var txt = document.createTextNode("\u00D7");
      // span.className = "close";
      // span.appendChild(txt);
      // li.append(span);
      // // li.className = "ui-li-static ui-body-inherit ui-last-child";
      // list.appendChild(li);
      $("ul").append('<li>'+inputValue+'<span class="close">X</span></li>');
      $("ul").listview("refresh");
    }
    
  
    

   
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

 

  $("#addButton").click(newElement);
