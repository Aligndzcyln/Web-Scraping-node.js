# Web-Scraping-node.js

## Yapılmak istenen

https://imsdb.com/ web sitesinde çeşitli filmlerin konuşma metinleri (Senaryo)’ları 
bulunmaktadır. Site’nin kendine ait bir web servisi bulunmamaktadır. Rest servisi oluşturularak bu servisin “tüm film listesini”, “belirli film türlerine göre 
film listesini” ve “istenen bir filmin senaryo metnini” getirir.

## Kullanılan araçlar

Axios, cheerio ve express kütüphanelerini kullandım. Node.js kullanma sebebim rest api uygulamalarının node.js ile daha rahat yapılabilmesidir.

## Uygulamanın işleyiş aşamaları aşağıdaki gibidir:


<ul>
  <li>Senaryoları çekebilmek için parametreler alınır.</li>
  <li>Alınan parametreler url linkine eklenir</li>
  <li>Gereken veriler axios ve cheerio kütüphaneleri ile gerekli tagler kullanılarak çekilir.</li>
  <li>Alınan veriler express.js kütüphanesi kullanılarak localhosttan servis edilir.</li>
  <li>Tüm filmlerin çekilmesi için imsbd/allscrips.html adresine gidilir</li>
  <li>Gereken veriler axios ve cheerio kütüphaneleri ile gerekli tagler kullanılarak çekilir.</li>
  <li>Alınan veriler express.js kütüphanesi kullanılarak localhosttan servis edilir.</li>
  <li>Film Türlerini çekebilmek için parametreler alınır.</li>
  <li>Alınan parametreler url linkine eklenir</li>
  <li>Gereken veriler axios ve cheerio kütüphaneleri ile gerekli tagler kullanılarak çekilir.</li>
  <li>Alınan veriler express.js kütüphanesi kullanılarak localhosttan servis edilir.</li>
</ul>

