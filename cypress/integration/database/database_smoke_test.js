describe("Query Oracle database", () => {
    const SQL_NOT_ON_STORE_STATUS = "select ptrcaln_year, ptrcaln_payno, ptrcaln_start_date, ptrcaln_end_date, ptrcaln_check_date from ptrcaln where ptrcaln_year = 2022 ";

    it("Query the PTRCALN", () => {
        cy.task("sqlQuery", SQL_NOT_ON_STORE_STATUS).then((resolvedValue) => {
            var arr = []
            resolvedValue["rows"].forEach((item) => {
                console.log("result==>" + item);
                arr.push(item)
            });
            // console.log(resolvedValue)
            cy.expect(arr.length).to.be.greaterThan(5)
        });
    });
});