# Notas de Estudo - Encantos Literários

## 1. Estabilidade de UI em Estados de Hover

Evitei deslocamentos inesperados de layout (layout shifts) ao lidar com ícones sociais que ganham fundo e preenchimento ao passar o mouse.

- **Conceito:** Dimensões físicas não devem mudar no hover para não "empurrar" elementos vizinhos.
- **Aplicação:** Defini `width`, `height` e `padding` no estado base. O uso de `box-sizing: border-box` garantiu que o preenchimento fosse calculado dentro da caixa de 40px, mantendo o ícone centralizado e estável.

## 2. Refinamento de Tipografia e Shorthands

O uso do atalho `font` requer cautela, pois reseta propriedades não declaradas.

- **Desafio:** Ao definir `font: .../normal ...`, o `line-height` foi resetado para o padrão, o que encolheu visualmente o espaço entre os links.
- **Solução:** Reajustei o valor do `line-height` diretamente no shorthand (ex: `/2.0`) para preservar o ritmo vertical e a legibilidade.

## 3. Animações e Microinterações Suaves

Implementei transições para tornar a interface mais fluida e menos "seca" durante a navegação.

- **Transições de Cor:** Apliquei `transition: color 0.5s, background-color 0.3s` nos links e ícones. Isso cria um efeito de fade suave que melhora a percepção de qualidade do site.
- **Feedback Visual:** A mudança coordenada do `fill` do SVG e do fundo no hover oferece um feedback imediato e elegante para as ações do usuário.

## 4. Background e Luz Ambiente (Radial Gradient)

Trabalhei a profundidade visual da seção de assinaturas através de iluminação simulada com CSS.

- **Ellipse Gradient:** Utilizei `radial-gradient(ellipse, ...)` para criar um brilho atmosférico. A forma elíptica foi essencial para que a luz se espalhasse lateralmente atrás dos cards sem criar um "corte" abrupto ou vazar excessivamente para as seções de topo e rodapé.

> [!NOTE]
> Estas notas são um resumo técnico. O processo detalhado com todos os desafios resolvidos está documentado nos meus arquivos pessoais de estudo.
> [Veja as anotações de estudo deste projeto aqui](https://docs.google.com/document/d/1An09xk7iZ8VsztqTOxqcPC_Q7v2_qisxz_Ljss7xa2Y/edit?usp=sharing)
