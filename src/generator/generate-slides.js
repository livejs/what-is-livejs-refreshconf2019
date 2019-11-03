const fs = require('fs')
const Mustache = require('mustache')

const sourcePath = './src/slides'

// Load the template
var template = fs.readFileSync('./src/generator/template.js', 'utf8')

// Overwrite generated files
const force = false

// { title: ''},

const mySlides = [
  {title: 'LiveJS name explained'},
  {title: 'LiveJS Manifesto'},

  {title: 'Ruth John'},
  {title: 'Tim Pietrusky'},
  {title: 'Martin Schuhfuss'},
  {title: 'Matt McKegg'},
  {title: 'Sam Wray'},
  {title: 'Jan Krutisch'},
  {title: 'improjam'},
  {title: 'Single Source of Truth'},
  {title: 'JSConf Asia 2019'},
  {title: 'JSConf Budapest 2019'},
  {title: '"RefreshConf Lunch Show" explained'},
  {title: 'Jans current stack'},
  {title: 'Tims current stack'},
  {title: 'Extinction Rebellion'}
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
  slideName = slideName.replace(/[,\/?!"]/g, '')
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
