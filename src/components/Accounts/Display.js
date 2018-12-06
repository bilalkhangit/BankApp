import React, { Component } from 'react';



class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AccountNo: 0, Name: "", AccountType: "", Balance: 0,
            Registered: 0
        }

        this.bindAccounts();
    }
    bindAccounts = () => {
        const PrevAccounts = JSON.parse(localStorage.getItem("Account"));
        const AccId = this.props.match.params.id.toString();
        PrevAccounts.map((value, index) => {
            if (value.AccountNo.toString() === AccId) {
                this.state.AccountNo = value.AccountNo;
                this.state.Name = value.Name;
                this.state.AccountType = value.AccountType;
                this.state.Balance = value.Balance;
                this.state.Registered = value.Registered;
            }
        });
    }
    DeleteAccount = () => {
        debugger
        const PrevAccounts = JSON.parse(localStorage.getItem("Account"));
        PrevAccounts.map((value, index) => {
            if (value.AccountNo === this.state.AccountNo) {
                PrevAccounts.splice(index, 1);
                localStorage.setItem("Account", JSON.stringify(PrevAccounts));
                alert(`Account # ${this.state.AccountNo} has been deleted`);
                this.props.history.push(`/Accounts`);
            }
        });
    }
    render() {
        return (
            <div className="container ">
                <div className="row" >
                    <div className="col-md-9 shadow-sm mt-3 bg-white rounded mx-auto">
                        <button type="button" className="btn w-15 mb-2 mt-2 btn-View  btn-View-Plus" onClick={() => { this.props.history.push(`/Accounts`) }}><i className="fas fa-arrow-left"></i> Back to accounts</button>
                        <button type="button" className="btn w-15 mb-2 mt-5 btn-Accounts-Delete" style={{ float: "right" }} onClick={() => { this.DeleteAccount() }}> DELETE ACCOUNT</button>
                        <h5 className="mt-3">Account Details</h5>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">
                                <strong>Account #</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.AccountNo}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-2">
                                <strong> Full Name </strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.Name}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-2">
                                <strong>Registered</strong>
                            </div>
                            <div className="col-md-3">
                                {this.state.Registered}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-2">
                                <strong>Account Type</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.AccountType}
                            </div>
                        </div>
                        <hr />

                        <div className="row mb-5">
                            <div className="col-md-2">
                                <strong>Balance</strong>
                            </div>
                            <div className="col-md-2">
                                {this.state.Balance}
                            </div>
                            <div className="col-md-8">
                                <button type="button" className="btn w-15 ml-2 btn-Accounts-Deposit " style={{ float: "right" }} onClick={() => { this.props.history.push(`/Accounts/Deposit/${this.state.AccountNo}`)  }}> DEPOSIT</button>

                                <button type="button" className="btn w-15  btn-Accounts-WithDraw" style={{ float: "right" }} onClick={() => { this.props.history.push(`/Accounts/WithDraw/${this.state.AccountNo}`) }}> WITHDRAW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;