@amazon-kitchen
Feature: Amazon Mutfak Robotu Alisverisi

  Background: Giris Yapma
    Given Kullanıcı "https://www.amazon.com.tr" adresine gider
    And Kullanıcı giriş işlemlerini tamamlar

  Scenario Outline: Mutfak robotu arama ve sepet dogrulama
    Given Arama kutusuna "<robot_modeli>" yazılır
    When Ürün seçilip sepete eklenir
    Then Sepet tutarının "<fiyat>" olduğu doğrulanır
    And "Alışverişi Tamamla" butonuna tıklanır
    Then Siparişin başarıyla alındığı görülür

    Examples:
      | robot_modeli         | fiyat     |
      | Bosch Mum Serisi     | 12500 TL  |
      | KitchenAid Artisan   | 25900 TL  |