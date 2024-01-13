




// function headMenuList() {
// 	var menuBox = document.getElementById('head_menu_list');

// 	if (menuBox.style.display == "none") {
// 		menuBox.style.display = "block";
// 	} else {
// 		menuBox.style.display = "none";
// 	}
// }



// function search() {
// 	var menuBox = document.getElementById('search');

// 	if (menuBox.style.display == "none") {
// 		menuBox.style.display = "block";
// 	} else {
// 		menuBox.style.display = "none";
// 	}
// }


// function camera() {
// 	var menuBox = document.getElementById('camera');

// 	if (menuBox.style.display == "none") {
// 		menuBox.style.display = "block";
// 	} else {
// 		menuBox.style.display = "none";
// 	}
// }




// $("#toggle").on("click", function() {
// 	$(".istoggable").toggle();
// });


const $menu = $('.head11')

const onMouseUp = e => {
 if (!$menu.is(e.target) // If the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... or a descendant of the container.
   {
     $menu.removeClass('is-active')
  }
}

//
$('.toggle').on('click', () => {
	$menu.toggleClass('is-active').promise().done(() => {
	  if ($menu.hasClass('is-active')) {
		$(document).on('mouseup', onMouseUp) // Only listen for mouseup when menu is active...
	  } else {
		$(document).off('mouseup', onMouseUp) // else remove listener.
	  }
	})
  })
//


//
$('.toggle2').on('click', () => {
	$menu.toggleClass('is-active').promise().done(() => {
	  if ($menu.hasClass('is-active')) {
		$(document).on('mouseup', onMouseUp) // Only listen for mouseup when menu is active...
	  } else {
		$(document).off('mouseup', onMouseUp) // else remove listener.
	  }
	})
  })
//


$('.toggle3').on('click', () => {
  $menu.toggleClass('is-active').promise().done(() => {
    if ($menu.hasClass('is-active')) {
      $(document).on('mouseup', onMouseUp) // Only listen for mouseup when menu is active...
    } else {
      $(document).off('mouseup', onMouseUp) // else remove listener.
    }
  })
})




// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function headMenuList() {
//   document.getElementById("head_menu_list").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it

// window.onclick = function(event) {
//   if (!event.target.matches('.fa_ellipsis')) {
//     var dropdowns = document.getElementsByClassName("head_menu_list");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
// openDropdown.classList.remove('show');
//       }
//     }
//   }
// }



