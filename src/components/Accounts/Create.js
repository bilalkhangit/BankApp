import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {AddAccount} from '../../actions/Accounts';
import { connect } from 'react-redux'

class Create extends Component {
    constructor(props) {
        super(props);
    }


    CreateAccount = (AccountNo, Name, AccountType, Balance, Registered) => {
        const Account = {
            AccountNo: AccountNo, Name: Name, AccountType: AccountType, Balance: Balance,
            AccountType: AccountType, Registered: Registered
        }
        return Account;
    }

    // Save Accounts 
    SaveAccount = () => {
        const Name = this.refs.Name.value;
        const Type = this.refs.AccountType.value;
        const Deposit = this.refs.InputAmount.value;
        const random_number = Math.floor(Math.random() * 10000000000000);
        const RegisteredDate = new Date().toLocaleDateString();
        const RegisteredTime = new Date().toLocaleTimeString();
        const Account = this.CreateAccount(random_number, Name, Type, Deposit,
            `${RegisteredDate +' '+ RegisteredTime}`);
        const GetAccount = localStorage.getItem("Account");
        const Acc = [];
        if (GetAccount != null) {
            const PrevAccounts = JSON.parse(localStorage.getItem("Account"));
            PrevAccounts.push(Account);
            localStorage.setItem("Account", JSON.stringify(PrevAccounts));
            this.props.dispatch(AddAccount(PrevAccounts));
        }
        else {
            Acc.push(Account);
            localStorage.setItem("Account", JSON.stringify(Acc));
            this.props.dispatch(AddAccount(Acc));
        }
        alert(`Account # ${Account.AccountNo} has been created and Rs. ${Account.Balance} has been successfully deposited`);
         this.props.history.push(`./Display/${random_number}`)

    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10  mx-auto">
                        <div class="shadow-sm mt-3 bg-white rounded">
                            <h4 className="text-center FormHeader p-4">
                                Enter account details below
                            </h4>
                            <form>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label ml-2">Full Name*</label>
                                    <div class="col-sm-8 col-11 ml-2">
                                        <input type="text" class="form-control" ref="Name" placeholder="Enter Full Name Here" />
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label ml-2 ">Account Type*</label>
                                    <div class="col-sm-8 col-11 ml-2">
                                        <select class="form-control " id="AccountType" ref="AccountType">
                                            <option>Select Account Type</option>
                                            <option>Current</option>
                                            <option>Saving</option>
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label ml-2">Initial Deposit in Rs.*</label>
                                    <div class="col-sm-8 col-11 ml-2">
                                        <input type="text" class="form-control w-100" id="InputAmount" ref="InputAmount" />
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group row">
                                    <div class="col-sm-4 col-11  ml-2 mb-4">
                                        <button type="button" className="btn w-100 btn-Create" onClick={() => { this.SaveAccount() }}>CREATE ACCOUNT</button>
                                    </div>
                                    <div class="col-sm-4 col-11 ml-2 mb-4">
                                        <button type="button" className="btn w-100  btn-View" onClick={() => {  this.props.history.push(`/Accounts`) }}>VIEW ALL ACCOUNTS</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

const mapStateToProps = (store) => {
    return {
        Accounts: store.accountsReducer , 
        dashboard: store.dashboardReducer
    }
}


export default connect(mapStateToProps)(Create);