// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal data op uit de FDND API, ga pas verder als de data gedownload is
const houses = await fetchJson('https://fdnd-agency.directus.app/items/f_houses')
const favoriteList = await fetchJson('https://fdnd-agency.directus.app/items/f_list')
const housesImages = await fetchJson('https://fdnd-agency.directus.app/items/f_houses_files')

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

//Verwerken van url-gecodeerde data in POST-verzoeken
app.use(express.urlencoded({extended: true}))

// Maak een GET route voor een detailpagina met een request parameter id
app.get('/', function (request, response) {
    // Gebruik de request parameter id en haal de juiste persoon uit de WHOIS API op
    fetchJson(houses).then((apiData) => {
    // request.params.id
    // fetchJson(housesImages).then((apiData2) => {
    //     apiData2.data.f_houses_id = apiData.data.id
    // })
    // Render index.ejs uit de views map en geef de opgehaalde data mee als variable, genaamd index
    response.render('index', {houses: apiData.data})
    })
})

// Maak een POST route voor de index
app.post('/', function (request, response) {
  // Er is nog geen afhandeling van POST, redirect naar GET op /
    response.redirect(303, '/')
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})
