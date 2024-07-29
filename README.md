# Jogo de Ping Pong

## Descrição

O Jogo de Ping Pong é uma recriação clássica do popular jogo de ping pong. Ele permite que dois jogadores competem entre si para evitar que a bola passe pelas suas raquetes. O primeiro jogador a deixar 5 bolas passarem perde o jogo, e uma mensagem de vitória é exibida para o outro jogador.

## Funcionalidades

- **Tela de Entrada**: Permite que os jogadores insiram seus nomes antes de iniciar o jogo.
- **Controle de Raquetes**: As raquetes são controladas por teclas específicas para cada jogador.
- **Placar**: O placar é exibido na tela e é atualizado a cada ponto.
- **Modal de Vitória**: Exibe uma mensagem quando um jogador perde e oferece opções para reiniciar o jogo ou voltar à tela de entrada.
- **Controle do Jogo**: O jogo é reiniciado completamente, sem guardar estatísticas ou resultados anteriores, quando reiniciado.

## Tecnologias Usadas

- **HTML**: Estrutura do jogo e da tela de entrada.
- **CSS**: Estilização do jogo e do modal.
- **JavaScript**: Lógica do jogo, controle das raquetes, movimentação da bola e gerenciamento do estado do jogo.

## Controles do Jogo

- **Player 1**:
  - `W`: Move a raquete para cima.
  - `Z`: Move a raquete para baixo.

- **Player 2**:
  - `8`: Move a raquete para cima.
  - `2`: Move a raquete para baixo.

## Como Jogar

1. **Insira os Nomes**: Digite os nomes dos jogadores na tela de entrada e clique em "Start Game" para começar.
2. **Controle as Raquetes**: Use as teclas apropriadas para mover sua raquete e evitar que a bola passe.
3. **Objetivo**: O objetivo é não deixar a bola passar pela sua raquete. O primeiro jogador a deixar 5 bolas passarem perde o jogo.
4. **Modal de Vitória**: Quando um jogador perde, uma mensagem será exibida com a opção de jogar novamente ou voltar à tela de entrada.

## Instruções para Desenvolvimento

1. Clone o repositório:
   ```bash
   git@github.com:claudioares/ping-pong.git
