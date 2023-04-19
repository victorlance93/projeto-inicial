Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#user','victor_lance@hotmail.com');
    I.fillField('#password','123456');
    I.click('#btnLogin');
    I.waitForText('Login realizado',5);

}).tag('sucesso');

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#user','victor_lance@hotmail.com');
    I.click('#btnLogin');
    I.waitForText('Senha inválida.',5);

}).tag('falha-email');

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.',5);

}).tag('falha-email-senha');

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#password','123456');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.',5);

}).tag('falha-senha');

