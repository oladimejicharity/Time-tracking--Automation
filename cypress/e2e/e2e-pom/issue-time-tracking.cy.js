import IssuePage from "../../pages/IssuePage";
import IssueBoard from "../../pages/IssueBoard";


  describe('Time estimation functionality', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
      //open isse creation modal  
      // cy.visit(url + '?modal-issue-create=true');
      });
    });
  
    //data set with which we are adding estimation to the issue, saved as variable
    const estimationTime = '10';
    const updateEstimationTime = '20';
  
    it('Validating time add estimation functionality', () => {
      IssueBoard.viewIssue();
      IssuePage.addEstimation(estimationTime);
      IssuePage.closeIssue();
      IssueBoard.viewIssue();
      IssuePage.ensureEstimationIsAdded(estimationTime);
      IssuePage.closeIssue();
    });

    it('Updating Estimation',()=>{
      IssueBoard.viewIssue();
      IssuePage.addEstimation(updateEstimationTime);
      IssuePage.closeIssue();
      IssueBoard.viewIssue();
      IssuePage.ensureEstimationIsAdded(updateEstimationTime);
      IssuePage.closeIssue();
    })

    it('Remove Estimation',()=>{
      IssueBoard.viewIssue();
      IssuePage.removeEstimation();
      IssuePage.closeIssue();
      IssueBoard.viewIssue();
      IssuePage.ensureEstimationIsRemoved();
      IssuePage.closeIssue();
    })
  });