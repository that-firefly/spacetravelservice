module.exports = function (router) {

  // ---------------------------------------------
  // ROOT
  // ---------------------------------------------
  router.get('/', function (req, res) {
    res.render('index') // auto-rendered
  })

  // ---------------------------------------------
  // MAIN PAGES
  // ---------------------------------------------
  router.get('/dashboard', function (req, res) {
    res.render('dashboard')
  })

  router.get('/properties-list', function (req, res) {
    res.render('properties-list')
  })

  router.get('/income-expenses', function (req, res) {
    res.render('income-expenses')
  })

  // add any other top-level pages the same way

  // ---------------------------------------------
  // MTD MINI JOURNEY
  // ---------------------------------------------

  // Step 1 – Start page
  router.get('/mtd/start', function (req, res) {
    res.render('mtd/start')
  })

  // Handle form submit on the start page
  router.post('/mtd/start-answer', function (req, res) {
    res.redirect('/mtd/task-list')
  })

  // Step 2 – Task list
  router.get('/mtd/task-list', function (req, res) {
    res.render('mtd/task-list')
  })

  // Example additional MTD pages
  router.get('/mtd/property-type', function (req, res) {
    res.render('mtd/property-type')
  })

  router.post('/mtd/property-type-answer', function (req, res) {
    req.session.data['propertyType'] = req.body.propertyType
    res.redirect('/mtd/task-list')
  })

  // Add more if needed


  router.post('/mtd-example/start-answer', function (req, res) {
    res.redirect('/mtd/property-type')
  })

  router.post('/mtd-example/property-type-answer', function (req, res) {
    req.session.data.propertyType = req.body.propertyType
    res.redirect('/mtd/check-answers')
  })

  router.post('/mtd-example/submit', function (req, res) {
    res.redirect('/mtd/confirmation')
  })

  router.post('/mtd-example/start-answer', function (req, res) {
  console.log('🔥 start-answer route hit')
  res.redirect('/mtd/property-type')
})



}


