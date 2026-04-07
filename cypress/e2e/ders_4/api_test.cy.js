describe("JSONPlaceholder API Otomasyon Testleri", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  // 1. GET
  it("Test 1: GET - Standart header ve status kodu doğrulaması", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/posts`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type").and.include("application/json");
    });
  });

  // 2. GET
  it("Test 2: GET - Özel Header (User-Agent) ile istek", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/posts/1`,
      headers: {
        "User-Agent": "CypressAutomation/1.0",
        "Custom-Auth": "SecretKey123"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // 3. GET
  it("Test 3: GET - Dinamik Query Parameter ile filtreleme", () => {
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    cy.request({
      method: "GET",
      url: `${baseUrl}/posts`,
      qs: { userId: randomUserId }
    }).then((response) => {
      expect(response.status).to.eq(200);
      response.body.forEach((post) => {
        expect(post.userId).to.eq(randomUserId);
      });
    });
  });

  // 4. POST
  it("Test 4: POST - Yeni kaynak oluşturma (Body doğrulaması)", () => {
    const postBody = {
      title: "Cypress API Testi",
      body: "Bu bir otomasyon testidir",
      userId: 5
    };
    cy.request("POST", `${baseUrl}/posts`, postBody).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(postBody);
      expect(response.body).to.have.property("id");
    });
  });

  // 5. PUT
  it("Test 5: PUT - Kaynağı tamamen güncelleme", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/posts/1`,
      body: {
        id: 1,
        title: "Güncellenmiş Başlık",
        body: "İçerik güncellendi",
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Güncellenmiş Başlık");
    });
  });

  // 6. PATCH
  it("Test 6: PATCH - Kaynağı kısmi güncelleme", () => {
    cy.request({
      method: "PATCH",
      url: `${baseUrl}/posts/1`,
      body: { title: "Sadece Başlık Değişti" }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Sadece Başlık Değişti");
    });
  });

  // 7. DELETE
  it("Test 7: DELETE - Kaynak silme doğrulaması", () => {
    cy.request("DELETE", `${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // 8. Yanıt Süresi (Response Time) Ölçümü
  it("Test 8: Performans - Yanıt süresi kontrolü", () => {
    cy.request(`${baseUrl}/users`).then((response) => {
    
      expect(response.duration).to.be.lessThan(1000);
    });
  });

  // 9. Dinamik Veri Formatı ve Tip Kontrolü
  it("Test 9: Body - Veri tiplerinin doğrulanması", () => {
    cy.request(`${baseUrl}/comments/1`).then((response) => {
      expect(response.body.id).to.be.a("number");
      expect(response.body.email).to.be.a("string");
      expect(response.body.body).to.not.be.empty;
    });
  });

  // 10. Hatalı Senaryo - Olmayan kayıt (404) kontrolü
  it("Test 10: Hata Yönetimi - 404 durumu", () => {
    cy.request({
      url: `${baseUrl}/posts/9999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});