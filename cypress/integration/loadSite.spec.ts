describe('Site Loads', () => {
	beforeEach(() => {
		cy.clearLocalStorage();
	});
	it('Check Home page load', () => {
		cy.visit('/');
		cy.url().should('include', '/edit');
		cy.contains('History').click();
		cy.getLocalStorage('codeStore').snapshot();
	});

	it('Check Redirect from old URL', () => {
		cy.visit(
			'/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NocmlzdG1hc10gLS0-fEdldCBtb25leXwgQihHbyBzaG9wcGluZylcbiAgICBCIC0tPiBDe0xldCBtZSB0aGlua31cbiAgICBDIC0tPnxPbmV8IERbTGFwdG9wXVxuICAgIEMgLS0-fFR3b3wgRVtpUGhvbmVdXG4gICAgQyAtLT58VGhyZWV8IEZbZmE6ZmEtY2FyIENhcl0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ'
		);
		cy.url().should(
			'include',
			'/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NocmlzdG1hc10gLS0-fEdldCBtb25leXwgQihHbyBzaG9wcGluZylcbiAgICBCIC0tPiBDe0xldCBtZSB0aGlua31cbiAgICBDIC0tPnxPbmV8IERbTGFwdG9wXVxuICAgIEMgLS0-fFR3b3wgRVtpUGhvbmVdXG4gICAgQyAtLT58VGhyZWV8IEZbZmE6ZmEtY2FyIENhcl0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ'
		);

		cy.contains('History').click();
		cy.getLocalStorage('codeStore').snapshot();
	});

	it('should load sample diagrams when clicked', () => {
		cy.contains('Sample Diagrams').click();
		cy.contains('Pie Chart').click();
		cy.contains('pie title Pets adopted by volunteers');
		cy.contains('Class Diagram').click();
		cy.contains('classDiagram');
	});

	it('should load diagram from gist', () => {
		cy.visit(`/edit?gist=https://gist.github.com/sidharthv96/6268a23e673a533dcb198f241fd7012a`);
		cy.contains('Party');
		cy.getLocalStorage('codeStore').snapshot();
	});

	it('should load diagram from raw files', () => {
		cy.visit(
			`/edit?code=https://gist.github.com/sidharthv96/6268a23e673a533dcb198f241fd7012a/raw/a76fc7c6d19b6b772d86ac87fa700ed2e2117c56/code.mmd&config=https://gist.github.com/sidharthv96/6268a23e673a533dcb198f241fd7012a/raw/a76fc7c6d19b6b772d86ac87fa700ed2e2117c56/config.json`
		);
		cy.contains('Party');
		cy.getLocalStorage('codeStore').snapshot();
	});
});