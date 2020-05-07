
//Once everything is loaded.
$(document).ready(() => {

  //When elemtn about-button is clicked
  $('.about-button').on('click', () => {

    //Have body element scroll to "about" jumbotron
    $('body').scrollTo('.about', 1000);
  });

        //When elemtn about-button is clicked
  $('.projects-button').on('click', () => {
    //Have body element scroll to "about" jumbotron
    $('body').scrollTo('.projects', 1000);
  });


      //When elemtn about-button is clicked
  $('.quality-button').on('click', () => {

    //Have body element scroll to "about" jumbotron
    $('body').scrollTo('.quality', 1000);
  });
    
  $('.experience-button').on('click', () => {

    //Have body element scroll to "about" jumbotron
    $('body').scrollTo('.experience', 1000);
  });

  //Grab any element with ID="button" and store it in a variable
var btn = $('#button');

  //Hide the element immediately.
btn.hide();

  //Scroll function
  $(window).scroll(function() {

    //If window is scrolled below a certain limit
    if ($(window).scrollTop() > 80) {

      //Fade in the btn element slowly.
      btn.fadeIn(300);

      //Above code but reverse, also im a dipshit and want to fucking die ig
    } else if ($(window).scrollTop() < 100) {

      //Fade out instead, same time.
      btn.fadeOut(300);
    }
});

//When btn is clicked
btn.on('click', function(e) {
  e.preventDefault();

  //Scroll page to body element
  $('body').scrollTo('.topper', 1000);
});


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar1 = new ProgressBar.Circle(container1, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar1.text.style.fontSize = '2rem';
$('#pb').on('inview', function(event, isInView) {
if (isInView) {
bar1.animate(0.89);
}
});

var bar2 = new ProgressBar.Circle(container2, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar2.text.style.fontSize = '2rem';

$('#pb').on('inview', function(event, isInView) {
if (isInView) {
bar2.animate(0.78);
}
});


var bar3 = new ProgressBar.Circle(container3, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar3.text.style.fontSize = '2rem';

$('#pb').on('inview', function(event, isInView) {
if (isInView) {
bar3.animate(0.72);
}
});



var bar4 = new ProgressBar.Circle(container4, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar4.text.style.fontSize = '2rem';

$('#pb').on('inview', function(event, isInView) {
if (isInView) {
bar4.animate(0.86);
}
});



});