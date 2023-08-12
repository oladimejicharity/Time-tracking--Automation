class IssuePage{
    constructor(){
        this.estimationInputField = 'input[placeholder="Number"]';
        this.commentBox = '.sc-bMVAic';
        this.closeIssueIcon = 'i[class="sc-bdVaJa fuyACr"]';
        this.estimatedLabel = '.sc-rBLzX > :nth-child(2)';
    }

    addEstimation(estimationTime){
        cy.get(this.estimationInputField).clear();
        cy.get(this.estimationInputField).type(estimationTime);
        cy.wait(4000);
        cy.get(this.commentBox).click();
        cy.wait(1000);
  }
  
  closeIssue(){
    cy.get(this.closeIssueIcon).click();
  }

  ensureEstimationIsAdded(estimationTime){
      cy.get(this.estimatedLabel).contains(estimationTime);
  }

  removeEstimation(){
    cy.wait(10000);
    cy.get(this.estimationInputField).clear();
  }

  ensureEstimationIsRemoved(){
    cy.get(this.estimationInputField).should('be.visible');
    cy.get(this.estimatedLabel).should('not.exist');
  }
}
export default new IssuePage();