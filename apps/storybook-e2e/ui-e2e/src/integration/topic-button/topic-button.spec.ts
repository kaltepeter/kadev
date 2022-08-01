describe('shared-ui: TopicButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topicbutton--primary&args=topicName:React;onClick;'));

    it('should render the topic name', () => {
      cy.get('[data-testid=topicName]').should('contain', 'React');
    });

    it(`should correctly pass the topic name to the click event`, () => {
      cy.get('[data-testid=topic-button]').click();
      cy.get('[data-testid=click-result]').should('contain', 'React')
    })
});
