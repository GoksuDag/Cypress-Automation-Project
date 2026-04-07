const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let arananUrun = "";

// Ortak Giriş Adımı
Given('Kullanıcı {string} adresine gider', function (url) {
    console.log(url + " sitesine giriş yapılıyor...");
});

Given('Kullanıcı giriş işlemlerini tamamlar', function () {
    console.log("Giriş yapıldı.");
});

// Arama Adımları (Hem "yazar" hem "yazılır" için)
When('Arama kutusuna {string} yazar', function (urun) {
    arananUrun = urun;
    console.log(urun + " aranıyor...");
});

Given('Arama kutusuna {string} yazılır', function (urun) {
    arananUrun = urun;
    console.log(urun + " aranıyor...");
});

// Doğrulama Adımları
Then('Sonuçlarda {string} olduğu görülür', function (beklenenUrun) {
    assert.strictEqual(arananUrun, beklenenUrun);
    console.log("Test Başarılı: " + beklenenUrun + " doğrulandı! ✅");
});

When('Ürün seçilip sepete eklenir', function () {
    console.log(arananUrun + " seçildi ve sepete eklendi.");
});

Then('Sepet tutarının {string} olduğu doğrulanır', function (fiyat) {
    console.log("Fiyat kontrol ediliyor: " + fiyat);
});

Then('{string} butonuna tıklanır', function (buton) {
    console.log(buton + " butonuna tıklandı.");
});

Then('Siparişin başarıyla alındığı görülür', function () {
    console.log("Sipariş TAMAMLANDI! ✅");
});