/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var matchAccount = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      matchAccount = this.accounts[i];
    }
  }
  return matchAccount;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var j = 0; j < this.accounts.length; j++) {
    totalAssets += this.accounts[j].getBalance();
  }
  return totalAssets;
};
