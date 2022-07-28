import fs from 'fs'
import https from 'https'
import path from 'path'
import { launch } from 'puppeteer'

const runScript = async () => {
  const tiktokUrl = 'https://ads.tiktok.com/business/creativecenter/music/pc/en'

  const browser = await launch()
  const page = await browser.newPage()

  await page.setExtraHTTPHeaders({
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    'upgrade-insecure-requests': '1',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,en;q=0.8'
  })

  await page.goto(tiktokUrl, { waitUntil: 'load' })

  const trackSelector = '.singleItem--25BEx'
  const tracks = await page.$$(trackSelector)
  // eslint-disable-next-line @remotion/deterministic-randomness
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
  const targetTrack = await randomTrack.$('.imgWrap--MN7Vz')

  await targetTrack.click()
  await page.waitForSelector('audio')

  const audio = await page.$('audio')
  const audioSrc = await (await audio.getProperty('src')).jsonValue()

  https.get(audioSrc, response => {
    const stream = fs.createWriteStream(
      path.resolve('./src/assets/music.mp3')
    )
    response.pipe(stream)

    stream.on('finish', () => stream.close())
  })

  await browser.close()
}

runScript()