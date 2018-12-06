const initialState = JSON.parse(localStorage.getItem("Account")) || [];

const accountsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case "Add_Account":
            return [ ...state, action.payload];
        default:
            return state;
    }

}

// const ViewAccounts = (state = {
//     AccountNo: "0",
//     AccountType: "",
//     Balance: 0,
//     Name: "",
//     Registered: ""

// }) => {
    
//     if (PrevAccounts != null) {
//         PrevAccounts.map((value, index) => {
//             state.AccountNo = value.AccountNo;
//             state.AccountType = value.AccountType;
//             state.Balance = value.Balance;
//             state.Name = value.Name;
//             state.Registered = value.Registered;
//         });
//         return PrevAccounts;
//     }
//     else
//         return state;


// }




export default accountsReducer;








// const accountsReducer = (action) => {
//     debugger
//     switch (action.type) {
//         case "Add_Account":
//             return action.payload;
//         default:
//             return ViewAccounts();
//     }

// }

// const ViewAccounts = (state = { 
//     AccountNo: "0",
//     AccountType: "",
//     Balance: 0,
//     Name: "",
//     Registered: ""

// }) => {
//     const PrevAccounts = JSON.parse(localStorage.getItem("Account"));
//     PrevAccounts.map((value,index) => {
//         state.AccountNo =  value.AccountNo;
//         state.AccountType =  value.AccountType;
//         state.Balance =  value.Balance;
//         state.Name =  value.Name;
//         state.Registered =  value.Registered;
//     });
//     return PrevAccounts;
// }


// export default accountsReducer;