# Estágio Target 2024

1) Observe o trecho de código abaixo:
```
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
```
Ao final do processamento, qual será o valor da variável SOMA?</br>
<b>Resposta = <a href="./soma.js">91 </a></b>

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código</br>
<a href="./fibonacci.js"><b>Resolução da questão 2</b></a>

3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, <b>9</b>

b) 2, 4, 8, 16, 32, 64, <b>128</b> 

c) 0, 1, 4, 9, 16, 25, 36, <b>49</b>

d) 4, 16, 36, 64, <b>100</b>

e) 1, 1, 2, 3, 5, 8, <b>13</b>

f) 2,10, 12, 16, 17, 18, 19, <b>20</b>

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
```
Na primeira ida:
- Ligo o interruptor 1 por 5 minutos e o desligo, ligo o interruptor 2 e na mesma hora vou até uma das 3 salas
- Se a lampada estiver acessa, pertence ao interruptor 2, se estiver desligada e quente pertence ao interruptor 1, se estiver desligada e fria pertence ao interruptor 3.

Na segunda ida:
- Sabendo já a qual pertence um interruptor, apenas deixo um ligado e outro desligado entre o restantes
- Vou até outra sala e descubro os outros dois.
```

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

<a href="./inverterString.js"><b>Resolução da questão 5</b></a>
