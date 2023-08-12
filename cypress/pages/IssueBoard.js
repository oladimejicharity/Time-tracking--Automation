class IssueBoard {
    constructor() {
    this.issue = '[data-testid="list-issue"]';
    
}
viewIssue(){
    cy.get(this.issue).first().click();
}



}

export default new IssueBoard();