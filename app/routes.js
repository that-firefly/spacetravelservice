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

  // Step 2 – Task list
  router.get('/mtd/task-list', function (req, res) {
    res.render('mtd/task-list')
  })

  // ---------------------------------------------
  // MTD MINI JOURNEY
  // ---------------------------------------------

  // Step 1 – Start page
  router.get('/mtd-old/start', function (req, res) {
    res.render('mtd-old/start')
  })

  // Handle form submit on the start page
  router.post('/mtd-old/start', function (req, res) {
    res.redirect('/mtd-old/task-list')
  })

  // Step 2 – Task list
  router.get('/mtd-old/task-list', function (req, res) {
    res.render('mtd-old/step1-property-type')
  })

  // Example additional MTD pages
  router.get('/mtd/property-type', function (req, res) {
    res.render('mtd/property-type')
  })

  router.post('/mtd/property-type-answer', function (req, res) {
    req.session.data['propertyType'] = req.body.propertyType
    res.redirect('/mtd/task-list')
  })

}


