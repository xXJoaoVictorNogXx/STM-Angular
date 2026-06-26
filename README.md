🚀 Prova de Conceito (PoC): Modernização de UI e Estrutura de Telas
Este repositório contém uma Prova de Conceito (PoC) focada em validar uma nova arquitetura de Frontend utilizando Angular e Spartan UI (Tailwind CSS).

O objetivo principal deste projeto prático é demonstrar à gestão e à equipe técnica uma alternativa superior ao uso de bibliotecas de componentes tradicionais e engessadas, visando maior escalabilidade, fidelidade de design e facilidade de manutenção para as demandas do sistema SEMFAZ.

🎯 Por que mudar nossa estrutura de UI? (Visão Executiva)
Atualmente, o uso de bibliotecas tradicionais (com componentes em formato "caixa preta") gera gargalos no desenvolvimento, tais como conflitos de CSS global, dificuldade em aplicar a identidade visual exata aprovada pelo Design e acúmulo de dívida técnica com o uso de ::ng-deep.

Esta PoC propõe uma Arquitetura Headless, que separa a lógica do componente da sua aparência visual, trazendo os seguintes benefícios diretos para o negócio:

Propriedade Total do Código: Não somos reféns de atualizações de terceiros para mudar o layout de um botão ou tabela. O HTML e o CSS dos componentes residem no nosso projeto.

Fidelidade 100% ao Protótipo (Figma): O uso de Tailwind CSS permite que os desenvolvedores repliquem exatamente o que foi desenhado pela equipe de UX, sem gambiarras.

Performance e Bundle Reduzido: Em conjunto com o novo motor do Angular (Standalone Components), carregamos apenas o CSS e o JavaScript estritamente necessários para a tela atual, garantindo um carregamento mais rápido para o usuário final.

Acessibilidade Nativa (a11y): Todo o comportamento complexo (navegação por teclado, foco, leitores de tela) é gerenciado pelo motor do Spartan ("Brain"), garantindo que o sistema atenda às normas de acessibilidade sem esforço adicional da equipe.

🛠️ Stack Tecnológica
Framework: Angular (Standalone Components, Control Flow @if, @for)

Styling & UI: Tailwind CSS + Spartan UI (Abordagem baseada no shadcn/ui)

Ícones: @ng-icons (Lucide)

Integração Prevista: Preparado para consumir APIs RESTful fornecidas pelo nosso backend em Spring Boot.

🖥️ Destaques da Implementação
Esta PoC inclui exemplos práticos de desafios complexos de interface, totalmente resolvidos com a nova arquitetura:

Sidebar Dinâmica e Aninhada: Implementação de menus complexos e colapsáveis em múltiplos níveis (ex: Cadastro Econômico > Contribuinte > Cadastro Novo Contribuinte), com indicadores visuais de hierarquia.

Componentes Isolados: Estrutura modular que impede o vazamento de estilos entre diferentes módulos do sistema.

Gestão de Estado Visual: Transições e animações de estado (aberto/fechado) controladas puramente por atributos de dados (data-[state=open]) nativos do Tailwind, sem poluir o TypeScript com lógicas visuais.

🚀 Como Executar o Projeto Localmente
Certifique-se de ter o Node.js e o Angular CLI instalados.

Bash
# 1. Clone o repositório
git clone [URL_DO_REPOSITORIO]

# 2. Entre no diretório do projeto
cd poc-modernizacao-ui

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
ng serve
Acesse http://localhost:4200/ no seu navegador para visualizar a aplicação.

👨‍💻 Sobre o Projeto
Este repositório foi construído com o objetivo de aplicar experiência prática na resolução de gargalos de frontend, alinhando a entrega de interfaces modernas com um aprendizado contínuo focado em trazer as melhores práticas de mercado para dentro das soluções da Log Lab.
