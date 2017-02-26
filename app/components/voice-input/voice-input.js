'use strict';

angular.module('myApp.voiceInput', [])

.directive('appVoiceInput', ['$window', function($window) {
    return{
      template: "<button class='btn btn-default' ng-click='start()'>Start Audio</button>",
      link: function(scope, elm, attrs) {
          scope.start = function (){
            recognition.start();
          }
          if (!('webkitSpeechRecognition' in window)) {
              alert("No browser support");
          } else {
              var recognition = new webkitSpeechRecognition();
          }
          recognition.onresult = function(event) {
              var final_transcript = ""
              //var final_span = document.getElementById("final_span")
            //  var interim_span = document.getElementById("interim_span")
              var interim_transcript = '';
              for (var i = event.resultIndex; i < event.results.length; ++i) {
                  if (event.results[i].isFinal) {
                      final_transcript += event.results[i][0].transcript;
                  } else {
                      interim_transcript += event.results[i][0].transcript;
                  }
                  // if(event.results[i][0].transcript == 'men'){
                  //   $window.location.href="#/men";
                  // }

              }
              recognitionCommand(final_transcript);
          };
          function recognitionCommand(final_transcript){
            var command = final_transcript.split(" ");
            switch(command[0].toLowerCase()){
              case "men":
                $window.location.href="#/men";
                if(command.slice(1).length > 0){
                  recognitionCommand(command.slice(1))
                }
                break;
              case "women":
                $window.location.href="#/women";
                break;
              case "checkout":
                $window.location.href="#/checkout"+scope.$state.current.name+"/"+command[0];
                break;
            }
          }
      }
    }
}]);
