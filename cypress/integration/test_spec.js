describe('test demo', () => {
  context('검색', () => {
    it('메인홈에서 검색 후 결과를 클릭하면 작품홈으로 이동한다.', () => {
      const contentTitle = '나 혼자만 레벨업';

      // 방문 > 검색창 찾기 > 검색어 입력 > 검색버튼 클릭
      cy.visit('https://page.kakao.com/')
        .get('input.searchTextField')
        .type(contentTitle)
        .get('img[alt="검색 버튼"]')
        .click();

      // 검색 페이지 확인 > 웹툰/만화 탭 클릭
      cy.location('pathname').should('equal', '/search');
      cy.contains('웹툰/만화').click();

      // 결과 클릭 > 작품홈 이동 확인
      const regex = new RegExp(`^${contentTitle}$`);
      cy.contains(regex).click().location('pathname').should('equal', '/home');
    });
  });
});
