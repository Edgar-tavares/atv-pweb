const addForm = document.getElementById('add-form');
const accountList = document.getElementById('account-list');
const accountNameInput = document.getElementById('account-name');
const accountTypeInput = document.getElementById('account-type');
const accountItems = document.getElementById('account-items');
const totalBalance = document.getElementById('total-balance');
let accounts = [];

function showAddForm() {
    addForm.style.display = 'block';
    accountList.style.display = 'none';
    updateBalance();
}

function showBalance() {
    addForm.style.display = 'none';
    accountList.style.display = 'block';
    displayAccounts();
    updateBalance();
}

function addAccount() {
    const accountName = accountNameInput.value;
    const accountType = accountTypeInput.value;
    if (accountName.trim() === '') {
        alert('Por favor, insira um nome de conta válido.');
        return;
    }

    accounts.push({ name: accountName, type: accountType });
    accountNameInput.value = '';
    displayAccounts();
    updateBalance();
}

function displayAccounts() {
    accountItems.innerHTML = '';
    for (let i = 0; i < accounts.length; i++) {
        const listItem = document.createElement('li');
        listItem.className = 'account-item';
        listItem.innerHTML = `${accounts[i].type}: ${accounts[i].name} <button onclick="deleteAccount(${i})">Excluir</button>`;
        accountItems.appendChild(listItem);
    }
}

function deleteAccount(index) {
    accounts.splice(index, 1);
    displayAccounts();
    updateBalance();
}

function updateBalance() {
    let balance = 0;
    for (const account of accounts) {
        if (account.type === 'corrente') {
            balance -= 100;
        } else if (account.type === 'poupanca') {
            balance += 50;
        } else if (account.type === 'investimento') {
            balance += 200;
        }
    }
    totalBalance.textContent = `Saldo Total: R$ ${balance.toFixed(2)}`;
}

showAddForm(); // Inicialmente, mostrar o formulário de adicionar
