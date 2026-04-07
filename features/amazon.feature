Feature: Amazon Arama Testi

  Scenario: Amazon'da urun arama
    Given Kullanıcı "https://www.amazon.com.tr" adresine gider
    When Arama kutusuna "iPhone 15" yazar
    Then Sonuçlarda "iPhone 15" olduğu görülür