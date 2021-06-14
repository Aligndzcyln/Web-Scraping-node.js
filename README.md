# Web-Scraping-node.js

## Yapılmak istenen

https://imsdb.com/ web sitesinde çeşitli filmlerin konuşma metinleri (Senaryo)’ları 
bulunmaktadır. Site’nin kendine ait bir web servisi bulunmamaktadır. Rest servisi oluşturularak bu servisin “tüm film listesini”, “belirli film türlerine göre 
film listesini” ve “istenen bir filmin senaryo metnini” getirir.

## Kullanılan araçlar

Axios, cheerio ve express kütüphanelerini kullandım. Node.js kullanma sebebim rest api uygulamalarının node.js ile daha rahat yapılabilmesidir.

## Uygulamanın işleyiş aşamaları aşağıdaki gibidir:

•	Senaryoları çekebilmek için parametreler alınır.
•	Alınan parametreler url linkine eklenir
•	Gereken veriler axios ve cheerio kütüphaneleri ile gerekli tagler kullanılarak çekilir.
•	Alınan veriler express.js kütüphanesi kullanılarak localhosttan servis edilir.

•	Tüm filmlerin çekilmesi için imsbd/allscrips.html adresine gidilir
•	Gereken veriler axios ve cheerio kütüphaneleri ile gerekli tagler kullanılarak çekilir.
•	Alınan veriler express.js kütüphanesi kullanılarak localhosttan servis edilir.

•	Film Türlerini çekebilmek için parametreler alınır.
•	Alınan parametreler url linkine eklenir
•	Gereken veriler axios ve cheerio kütüphaneleri ile gerekli tagler kullanılarak çekilir.
•	Alınan veriler express.js kütüphanesi kullanılarak localhosttan servis edilir.
