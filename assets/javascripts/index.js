function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

let i = 0

const locations = [
    'Atlanta, GA',
    'Boston, MA',
    'Chicago, IL',
    'Indio, CA',
    'Toronto, ON',
    'New York',
    'San Francisco',
    'Minnesota',
    'Philadelphia',
    'Seattle, WA',
    'Detroit. MI',
    'Dallas, TX',
    'Vancouver',
    'Maryland',
    'Houston, TX',
]

const ThrottleLocations = () => {
    setInterval(() => {
     if (i == locations.length) { i = 0 }
     const str = document.createElement('p') 
     str.setAttribute('id', 'alternating-text')
     str.classList.add('block__alternating__text')
     str.style.display = 'inline-block';
     str.innerText = `${locations[i]}`
     let target = document.getElementsByClassName('block__container__main')[0];
     target.removeChild(document.getElementById('alternating-text'));
     target.appendChild(str)
    i += 1
    }, 1500)
    
}

$( document ).ready(function() {
  var speed = 55;
  var delay = $('.block__container__text__secondary').text().length * speed + speed;
  typeEffect($('.block__container__text__secondary'), speed);
  setTimeout(function(){
    $('.block__container__text__').css('display', 'inline-block');
    typeEffect($('.block__container__text__'), speed);
    setTimeout(() => {
        $('.block__alternating__text').css('display', 'inline-block')
        setTimeout(() => {
            ThrottleLocations()
        }, 300)
    }, 1600)
  }, delay);
});