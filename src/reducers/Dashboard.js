const dashboardReducer = (state = [], action) => {
    switch (action.type) {
        default:
           return Dashboard();
    }


}

const Dashboard = (state = {
    Accounts: 0,
    Transactions: 0,
    Debit: 0,
    Credit: 0
}) => {
    const PrevAccounts = JSON.parse(localStorage.getItem("Account"));
    const PrevTrans = JSON.parse(localStorage.getItem("Transaction"));
    if (PrevAccounts != null) {
        state.Accounts = PrevAccounts.length;
    }

    let debitSum = 0;
    let CreditSum = 0;

    if (PrevTrans != null) {
        state.Transactions = PrevTrans.length;
        PrevTrans.map((value, index) => {
            if (value.TransType === "Debit") {
                debitSum = Number(debitSum) + Number(value.Amount);
            }

        });

        state.Debit = debitSum;

        PrevTrans.find((el) => {
            if (el.TransType === "Credit") {
                CreditSum = Number(CreditSum) + Number(el.Amount);
            }

        });

        state.Credit = CreditSum;

    }
    return state;
}

export default dashboardReducer;