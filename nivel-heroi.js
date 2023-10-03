let herois = ["SuperMan" , "Homem de Ferro" , "Homem Aranha", "Doutor Estranho", "Hulk", "Thor", "Lanterna Verde", "Batman"];
let xps = [6500, 3000, 9200, 950, 1200, 7800, 8300, 24000];
let nomeHeroi;
let xpHeroi;
let nivelHeroi;

for(let i = 0; i < 8; i++){
    nomeHeroi = herois[i]; 
    xpHeroi = xps[i];

    if(xpHeroi < 1000){
        nivelHeroi = "FERRO";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi >= 1000 && xpHeroi <= 2000){
        nivelHeroi = "BRONZE";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi > 2000 && xpHeroi <= 5000){
        nivelHeroi = "PRATA";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi >= 6000 && xpHeroi <= 7000){
        nivelHeroi = "OURO";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi > 7000 && xpHeroi <= 8000){
        nivelHeroi = "PLATINA";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi > 8000 && xpHeroi <= 9000){
        nivelHeroi = "ASCENDENTE";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi > 9000 && xpHeroi <= 10000){
        nivelHeroi = "IMORTAL";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }else if(xpHeroi > 10000){
        nivelHeroi = "RADIANTE";
        console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    }
}