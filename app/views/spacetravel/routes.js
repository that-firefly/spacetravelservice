module.exports = function (router) {

  // ---------------------------------------------
  // Space travel service
  // ---------------------------------------------


  // Destination choice / /spacetravel/choose-destination-questions

  router.get('/spacetravel/choose-destination-questions', function (req, res) {
    res.render('/spacetravel/choose-destination-questions')
  })

  router.post('/spacetravel/personal-details', function (req, res) {
    const destination = req.session.data.destination

    if (destination === 'Moon') {
      return res.redirect('/spacetravel/personal-details')
    }

    if (destination === 'Mars') {
      return res.redirect('/spacetravel/personal-details')
    }

    res.redirect('/spacetravel/destination')
  })

  router.post('/spacetravel/personal-details', function (req, res) {
    res.redirect('/spacetravel/check-answers')
  })

  router.post('/spacetravel/confirmation', function (req, res) {
    res.redirect('/spacetravel/confirmation')
  })



  // Personal details

  router.get('/spacetravel/personal-details', function (req, res) {
    res.render('/spacetravel/personal-details')
  })

  router.post('/spacetravel/check-answers', function (req, res) {
    const destination = req.session.data.destination

    if (destination === 'fullName') {
      return res.redirect('/spacetravel/check-answers')
    }

    if (destination === 'addressLine1') {
      return res.redirect('/spacetravel/check-answers')
    }

       if (destination === 'townCity') {
      return res.redirect('/spacetravel/check-answers')
    }

          if (destination === 'postcode') {
      return res.redirect('/spacetravel/check-answers')
    }

    res.redirect('/spacetravel/check-answers')
  })

  router.post('/spacetravel/personal-details', function (req, res) {
    res.redirect('/spacetravel/check-answers')
  })

  router.post('/spacetravel/confirmation', function (req, res) {
    res.redirect('/spacetravel/confirmation')
  })


}



