export interface IUser {
    name: String,
    email: String,
    contactno: String,
    bankaccno: String,
    bankaccname: String,
    bankcode: String,
    bankname: String,  
    username: String,
    password: String,
    usertype: String,  
    status: String,  
    balance: Number,
    balance_idx: Number,
    verified_no: String,
    verified_email: String,
    lastlogin: Date,
    photopath: String,
    photoname: String
}

export interface IUserList {
    _id: String;
    name: String;
}