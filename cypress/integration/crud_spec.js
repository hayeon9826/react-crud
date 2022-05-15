/// <reference types="cypress" />

context('React CRUD', () => {
  let url = Cypress.config().baseUrl;

  beforeEach(() => {
    cy.viewport('macbook-11');
    cy.visit(url);
  });

  it('접속 및 후기 목록 불러오기', () => {
    cy.intercept(`${url}/posts`);
  });

  it('request', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/post',
      form: true,
      followRedirect: false,
      body: {
        user: '김핀다2',
        title: '후기입니다2',
        body: '비대면으로 쉽게 대출 받을 수 있어서 너무나 기분이 좋았습니다~~~^^2',
        date: '2022-05-16'
      }
    });
  });

  it('후기 작성하기', () => {
    cy.get('#postNewBtn').click();
    cy.get('#userInput').type('김핀다2{enter}');
    cy.get('#titleInput').type('후기입니다2{enter}');
    cy.get('#bodyInput').type(
      '비대면으로 쉽게 대출 받을 수 있어서 너무나 기분이 좋았습니다~~~^^2{enter}'
    );
    cy.get('button').click();
    // 리스트 첫번째 후기가 방금 생성한 후기여야 함
  });

  it('상세 페이지 접속', () => {
    cy.get('.postShowBtn').first().click({ force: true });
  });

  //   it('후기 수정하기', () => {});

  //   it('후기 삭제하기', () => {});
});
