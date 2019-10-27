const fs = require('fs')
const Mustache = require('mustache')

const sourcePath = './src/slides'

// Load the template
var template = fs.readFileSync('./src/generator/template.js', 'utf8')

// Overwrite generated files
const force = false

const mySlides = [
  {title: 'Introduce Tim & Jan'},
  {title: 'History of LiveJS'},
  {title: 'Shows around the World'},
  {title: 'Technology needed to run a show'},
  {title: 'Music by Jan'},
  {title: 'Visuals & Lights by Tim'},
  {title: 'This is really cool, but'},
  {title: 'CO2 wasted by LiveJS since the beginning'},
  {title: 'CO2 per person / year in Groningen'},
  {title: 'Do you want to party after a long day of talks?'},
  {title: 'Play in empty rooms'},
  {title: 'What can we do about this?'},
  {title: 'We as LiveJS'},
  {title: 'What is Jan doing?'},
  {title: 'What is Tim doing?'},
  {title: 'What can you do?'},
  {title: 'Art is giving back positive energy into the community'}
]

const fileExists = path => file => fs.existsSync(`${path}/${file}`)

const writeToPath = path => (file, content) => {
  const filePath = `${path}/${file}`

  if (!force && checkFileExists(file)) {
    console.log(filePath, 'already exists')
  } else {
    fs.writeFile(filePath, content, err => {
      if (err) throw err
      console.log('Created file: ', filePath)
      return true
    })
  }
}

const writeFile = writeToPath(sourcePath)
const checkFileExists = fileExists(sourcePath)

// Generate the slides
for (let i = 0; i < mySlides.length; i++) {
  const {title} = mySlides[i]

  let slideName = title.toLowerCase().replace(/ /g, '-')
  slideName = slideName.replace(/&/g, 'and')
  slideName = slideName.replace(/[,\/?]/g, '')
  slideName = slideName.replace(/--/g, '-')

  console.log(`'${slideName}',`)

  // Render the template
  var output = Mustache.render(template, {title})

  // Create the slide.js
  writeFile(`${slideName}.js`, output)
}

// Transform the first letter into uppercase, use a space to seperate the words
function letterCase(string) {
  return `${string.charAt(0).toUpperCase() + string.slice(1)} `
}
