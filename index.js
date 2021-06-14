const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')


const app = express()

//localhost:4500/scripts/12 örneğindeki gibi film isminin url'e yazılarak senaryosunun çekilmesi
app.get('/scripts/:movie', (req, res) => {
    var result = [];
    //url'e girilen parametrenin alınması
    var movie = req.params.movie
    //alınan parametrenin url'e eklenmesi
    var url = `https://imsdb.com/scripts/${movie}.html`
    console.log(url)
    //url adresinden axios kullanılarak pre tagından senaryoların çekilmesi
    axios.get(url).then(response => {
        //cheerio çekilen verileri kaydetmeye yarıyor
        const $ = cheerio.load(response.data)

        let scripts = [];

        $('.scrtext pre').each(function (i, e) {
            scripts[i] = $(this).text();
        });

        //status bilgisi eklenerek verler 4500 portundan yayınlanıyor
        res.status(200)
        res.json({ scripts: scripts.join() })

        //Herhangi bir problem yaşanırsa hata mesajı veriliyor
    }).catch(err => {
        res.status(404).json({
            message: "Error"
        })
    })
})


//Türlere göre çağrılma işlemi
//localhost:4500/genre/War örneğindeki gibi tür isminin url'e yazılarak o türe sahip filmlerin çekilmesi
app.get('/genre/:genre', (req, res) => {
    var result = [];
    // backslashten sonra girilen parametrenin okunması
    var genre = req.params.genre
    //parametrenin url'e eklenmesi
    var url = `https://imsdb.com/genre/${genre}`
    console.log(url)
    //axios ile urlden Table ın içindeki p ler alınması ardından her bir p taginin içindeki a ların alınması
    axios.get(url).then(response => {
        //cheerionun verileri kaydetmek için kullanılması
        const $ = cheerio.load(response.data)
        const statsTable = $('table p');
        statsTable.each(function () {
            let genres = $(this).find('a').text();
            result.push(genres)
        })
        var responseData = {};
        //status bilgisi eklenerek verler 4500 portundan yayınlanıyor
        responseData['status'] = 200;
        responseData['movies'] = result

        res.contentType('application/json')
        res.json(responseData)

        //Herhangi bir problem yaşanırsa hata mesajı veriliyor
    }).catch(err => {
        res.status(404).json({
            message: "Error"
        })
    })
})


//localhost:4500/getall örneğindeki gibi yazılarak tüm filmler çağrılıyor
app.get('/getall', (req, res) => {
    const moviesUrl = "https://imsdb.com/all-scripts.html";
    var result = [];
    axios.get(moviesUrl).then(response => {
        const $ = cheerio.load(response.data)
        //Table'ın içindeki p ler alınıyor
        const statsTable = $('table p');
        statsTable.each(function () {
            //p taginin içindeki a'lar alınıyor
            let movies = $(this).find('a').text();
            result.push(movies)
        })
        var responseData = {};
        responseData['status'] = 200;
        responseData['movies'] = result

        //status bilgisi eklenerek verler 4500 portundan yayınlanıyor
        res.contentType('application/json')
        res.json(responseData)

        //Herhangi bir problem yaşanırsa hata mesajı veriliyor
    }).catch(err => {
        res.status(404).json({
            message: "Error"
        })
    })
})

app.listen(4500, () => {
    console.log("running on port 4500")
})