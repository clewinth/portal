
'use strict';
var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
  MyApp.addButtons($newLi);
}

MyApp.initiateButtons = function($thingList) {
  $thingList.find('li').each(function() {
    MyApp.addButtons($(this));
  });
}

MyApp.addButtons = function($item) {
  var completeBtn = ' <a href="#" class="complete">Complete</a>';
  $item.append(completeBtn);

  var deleteBtn = ' <a href="#" class="delete">Delete</a>';
  $item.append(deleteBtn);
}

$(function() {
  // var yourName = prompt('What is your name?');

  $('#name').html("World");

  var $thingList = $('#fav-list');

  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });


  $thingList.on('mouseenter mouseleave', 'li', function(event) {
       if (event.type == 'mouseenter') {
         $(this).removeClass('inactive');
         $(this).siblings().addClass('inactive');
      } else if (event.type == 'mouseleave') {
          $(this).siblings().removeClass('inactive');
      }
  });

  $thingList.on('click', 'a.complete', function(e) {
    e.preventDefault();
    var listItem = $(this).parent('li');

    listItem.toggleClass('completed');
  });

  $thingList.on('click', 'a.delete', function(e) {
    e.preventDefault();
    $(this).parent('li').remove();
  });

  MyApp.initiateButtons($thingList);


   $('form').submit(function (e){
     e.preventDefault();
     var $searchField = $('#search');
     var $submitButton = $('#submit');

     //disable search field and button while search is underway
     $searchField.prop("disabled", true);
     $submitButton.attr("disabled", true).val("searching...");

   // the AJAX part
     var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
     var searchTerm = $searchField.val();
     var flickrOptions = {
       tags: searchTerm ,
       format: "json"
     };
     function displayPhotos(data) {
       var photoHTML = '<ul>';
       $.each(data.items,function(i,photo) {
         photoHTML += '<li="grid-10 tablet-grid-50">';
         photoHTML += '<a href="' + photo.link + '" class="image">';
         photoHTML += '<img src="' + photo.media.m + '"></a></li>';
       }); // end each
       photoHTML += '</ul>';
       $('#photos').html(photoHTML);
       $searchField.prop("disabled", false);
       $submitButton.attr("disabled", false).val("Search");
     }
     $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });

});
