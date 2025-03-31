const ContaCorrente = require("./classes/ContaCorrente")

test('Deve criar duas contas correspondentes', () => { 
    
    const contaMaria = new ContaCorrente("Maria", 200);
    const contaJose = new ContaCorrente("José", 100);

    expect(contaMaria).not.toBeNull()
    expect(contaJose).not.toBeNull()

});

test("Os saltos das contas criadas devem ser diferentes", () => {

    const contaMaria = new ContaCorrente("Maria", 200);
    const contaJose =  new ContaCorrente("José", 100);

    expect(contaMaria.balanco).not.toBe(contaJose.balanco);


});

test("Ao realizar um saque de R$100 na conta de Maria, o saldo deve ser igual ao saldo de José", () =>{

    const contaMaria = new ContaCorrente("Maria", 200);
    const contaJose =  new ContaCorrente("José", 100);

    contaMaria.sacar(100)

    expect(contaMaria.balanco).toBe(contaJose.balanco);
});

test("Após depositar R$50 na conta de josé, seu saldo será R$50 a menos que o saldo de Maria", () =>{

    const contaMaria = new ContaCorrente("Maria", 200);
    const contaJose =  new ContaCorrente("José", 100);

    contaJose.depositar(50);

    expect(contaJose.balanco).toBe(contaMaria.balanco - 50)
});

test("Ao tentar sacar um valor acima do disponível em conta deverá retornar False.", () =>{

    const contaJose =  new ContaCorrente("José", 100);

    const resultado = contaJose.sacar(150)

    expect(resultado).toBe(false)
});

test("Ao tentar sacar um valor disponível, retornar True", () => {

    const contaMaria = new ContaCorrente("Maria", 200)

    const realizado = contaMaria.sacar(50)

    expect(realizado).toBe(true)
});
