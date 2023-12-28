//variáveis para armazenar o nome e a quantidade de experiência (XP) de um herói:
var nome;
var xp;
var nivel;

//Atribuindo valores para testes:
nome = "Yago da Espada Sombria";
xp = 2500;

//estrutura de decisão para apresentar as mensagens:
if(xp<1000) {
    nivel="Ferro";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else if(1001<=xp<=2000){
    nivel="Bronze";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else if(2001<=xp<=5000){
    nivel="Prata";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else if(5001<=xp<=7000){
    nivel="Ouro";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else if(7001<=xp<=8000){
    nivel="Platina";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else if(8001<=xp<=9000){
    nivel="Ascendente";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else if(9001<=xp<=10000){
    nivel="Imortal";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
} else {
    nivel="Radiante";
    console.log("O Herói de nome " + nome + " está no nível " + nivel + "!")
}