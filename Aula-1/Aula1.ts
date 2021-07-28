

// nomeDaVariavel:TipoDaVariavel

interface Usuario{
    nome: string, email: string, telefone?: string
}

function enviarEmail({email, telefone, nome}: Usuario){

    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
    //
    //
    //
    
}

enviarEmail({
    email: "Dani.leao89@gmail.com",
    nome: "Dani",
    telefone: "1222121212121"
});