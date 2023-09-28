
 $(window).on('load', function() {
    $('#preloader').css({
      "transform": "translateY(-100%)",
      "transition-delay": "1.2s"
    });
    $('.loader').css({
      "opacity": "0",
      "transform": "translate(-50%,-100%)",
      "transition-delay": "2.3s"
    });
  
    $('.loader_text_unit').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
  
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      1000,
     );
    });
  });
  
  function toggleClassAndRemoveClasses(classToAdd, classesToRemove) {
    $('.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune')
      .toggleClass(classToAdd)
      .removeClass(classesToRemove);
  
    $('.mercury-info, .venus-info, .earth-info, .mars-info, .jupiter-info, .saturn-info, .uranus-info, .neptune-info')
      .toggleClass(classToAdd)
      .removeClass(classesToRemove);
  
    $('.mercury-button, .venus-button, .earth-button, .mars-button, .jupiter-button, .saturn-button, .uranus-button, .neptune-button')
      .toggleClass(classToAdd)
      .removeClass(classesToRemove);
  }
  
  function startPlanet(planet) {
    var classToAdd = 'show-' + planet;
    var classesToRemove = 'show-Mercury show-Venus show-Earth show-Mars show-Jupiter show-Saturn show-Uranus show-Neptune'.replace('show-' + planet, '');
  
    toggleClassAndRemoveClasses(classToAdd, classesToRemove);
    console.log(planet);
    console.log(classesToRemove);
    console.log(classToAdd);
  }
  
  function startMercury() {
    startPlanet('Mercury');
  }
  
  function startVenus() {
    startPlanet('Venus');
  }
  
  function startEarth() {
    startPlanet('Earth');
  }
  
  function startMars() {
    startPlanet('Mars');
  }
  
  function startJupiter() {
    startPlanet('Jupiter');
  }
  
  function startSaturn() {
    startPlanet('Saturn');
  }
  
  function startUranus() {
    startPlanet('Uranus');
  }
  
  function startNeptune() {
    startPlanet('Neptune');
  }
