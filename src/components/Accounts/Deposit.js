import React, { Component } from 'react';



class Deposit extends Component {
    constructor(props) {
        super(props);
        this.showAcc();
    }

    showAcc = () => {
        console.log(this.props.match.params.id);
    }

    CreateTrans = (TransId, Account, TransType, Amount, Time) => {
        const Trans = {
            TransId: TransId, Amount: Amount,Account:Account,
            TransType: TransType, Time: Time
        }
        return Trans;
    }

    Deposit = () => {
            debugger
            const PrevAccounts = JSON.parse(localStorage.getItem("Account"));

            const acc = PrevAccounts.find((element) => {
                return element.AccountNo.toString() === this.props.match.params.id.toString();
              });
           
            let balance = Number(acc.Balance);
            const amt = Number(this.refs.Amount.value);
            
                balance = balance + amt;
                PrevAccounts.find((element) => {
                    if (element.AccountNo.toString() === this.props.match.params.id.toString())
                    {
                        element.Balance = balance;
                    }
                  });
                  localStorage.setItem("Account",JSON.stringify(PrevAccounts));  
                  this.Transaction(acc.AccountNo,amt);              
          
    }


    Transaction = (Account,Amount) => {
        debugger
        const PrevTrans = JSON.parse(localStorage.getItem("Transaction"));
        const Time = new Date().toLocaleTimeString();
        const random_number = Math.floor(Math.random() * 10000000000000);
        const Trans = this.CreateTrans(random_number, Account, "Credit",Amount,Time);
        const arr = [];
        if(PrevTrans != null)
        { 
            PrevTrans.push(Trans);
            localStorage.setItem("Transaction",JSON.stringify(PrevTrans));
        }
        else
        {
            arr.push(Trans);
            localStorage.setItem("Transaction",JSON.stringify(arr));
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8  mx-auto">
                        <div class="shadow-sm mt-3 bg-white rounded">
                            <h4 className="text-center FormHeader p-4">
                                Deposit into account
                            </h4>
                            <form>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label ml-2">Amount to deposit*</label>
                                    <div class="col-sm-8 col-11 ml-2">
                                        <input type="text" class="form-control" ref="Name" placeholder="Amount to deposit" ref="Amount" />
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label ml-2">Description (optional)</label>
                                    <div class="col-sm-8 col-11 ml-2">
                                        <input type="text" class="form-control" ref="Name" placeholder="Description" />
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group row">
                                    <div class="col-sm-5 col-md-5 col-lg-3  mb-4">
                                        <button type="button" className="btn btn-Accounts-WithDraw-Plus ml-2  col-11" onClick={() => { this.Deposit() }}>Deposit</button>
                                    </div>
                                    <div class="col-sm-5 col-md-5  col-lg-3 mb-4">
                                        <button type="button" className="btn btn-Accounts-WithDraw-Cancel ml-2 col-11" onClick={() => { this.props.history.push(`/Accounts/Display/${this.props.match.params.id}`) }}>  CANCEL  </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deposit;