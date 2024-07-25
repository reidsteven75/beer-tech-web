const { createServer } = require('vite')

const start = async() => {
  const server = await createServer({
    configFile: 'vite.config.js'
  })

  console.info('starting vite dev server...')
  await server.listen()
  server.printUrls()

  console.info('')
  console.info('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.info('~= Beverage Senesors: Web App =~')
  console.info('-------------------------------')
  console.info('ENV: ' + process.env.NODE_ENV)
  console.info('URL: ' + `https://${process.env.HOST_WEB_APP}` )
  console.info('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

}

start()