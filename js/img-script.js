$( document ).ready(function(){






  // without animation
  /*
  $("#close-btn").click(function(){
     $(".small-image").removeClass('active');
    $("#show_image_popup").hide();
  })


  $(".small-image").click(function(){
     // add active class
     $(this).addClass('active');
    var image_path = $(this).attr('src'); 
    $("#show_image_popup").hide();
    // now st this path to our popup image src
    $("#show_image_popup").show();
    $("#large-image").attr('src',image_path);

  })
*/

  // with animation  

    $("#close-btn").click(function(){
       // remove active class from all images
      $(".small-image").removeClass('active');
      $("#show_image_popup").slideUp();
    })

    $(".small-image").click(function(){
        // remove active class from all images
       $(".small-image").removeClass('active');
      // add active class
       $(this).addClass('active');

      var image_path = $(imgs).attr('src'); 
      $("#show_image_popup").fadeOut();
      // now st this path to our popup image src
      $("#show_image_popup").fadeIn();
      $("cover_0-web.png").attr('src',image_path);

    })

})


// javascript

// var small_images  = document.getElementsByClassName("small-image");
// var show_image_popup  = document.getElementById("show_image_popup");
// var large_image  = document.getElementById("large-image");
// var close_btn = document.getElementById("close-btn");

// for(var i=0; i< small_images.length; i++){

//   small_images[i].addEventListener("click", function(){
//     // remove active class from every images
//     for(var j=0; j< small_images.length; j++){
//       small_images[j].classList.remove('active');
//     }
//     // end
 
//     this.classList.add('active'); // add active class to this image
    
//     var src_val = this.src;
//     large_image.src = src_val;
//     showModal();
//   });
// }


// function showModal(){
//   show_image_popup.style.display = 'block';
// }

// close_btn.addEventListener("click", function(){
//   // before colose the modal we need to remove active class
//   for(var i=0; i< small_images.length; i++){
//     small_images[i].classList.remove('active');
//   }
//   // end
//   closeModal();
// });

// function closeModal(){
//   show_image_popup.style.display = 'none';
// }

