# BIO SÍNTESE CONSULTORIA INTEGRADA

Site institucional para biosintese.com.br. Portfólio: TROPA DO RUSH, SIGCR e SETOR SEIS. Contato oficial: contato@biosintese.com.br. Não há canal de WhatsApp.

## Desenvolvimento e verificação

Requisitos: Node.js 22+ e pnpm. Instalar com `pnpm install --frozen-lockfile`; executar `pnpm dev`. Verificar com `pnpm exec tsc --noEmit` e `pnpm build`. A saída estática está em `dist/`; validar com `pnpm preview`.

A página usa React, Vite e CSS local. Não precisa de Gemini, chave de API, banco de dados ou serviço de formulário. O contato abre o aplicativo de e-mail do visitante e não simula envio. As páginas antigas permanecem no código como referência; o ponto de entrada publicado é App.tsx. URLs antigas com idioma e página redirecionam às seções em português. As versões traduzidas antigas precisam de revisão editorial antes de uma futura reativação.

## Publicação pendente de confirmação

1. Obter acesso de escrita ao repositório AGIOTAPUBG/BIO-SINTESE-TECNOLOGIA- pela integração, sem compartilhar credenciais no chat.
2. Revisar a versão com o responsável, incluindo textos e identidades dos produtos. Não foram encontrados logotipos oficiais dos produtos nesta cópia; os nomes são apresentados como texto, sem criação de novos logos.
3. Confirmar o provedor de hospedagem. Publicar apenas o conteúdo de dist, com HTTPS, e registrar a versão anterior para rollback.
4. Obter do provedor os valores exatos de DNS para o domínio raiz e www. Manter o MX existente e demais registros de e-mail. Não inventar IP ou CNAME, nem alterar servidores DNS sem conferir a zona completa.
5. Após aprovação, configurar domínio e TLS, validar raiz/www, redirecionamento HTTPS, navegação e links de e-mail. Confirmar o funcionamento da caixa contato@biosintese.com.br na conta de e-mail: o MX isoladamente não comprova que a caixa existe.

Não há implantação automática configurada nesta alteração; nenhuma mudança de produção ou DNS é feita pelo build. Para previews públicos, aplicar noindex fora da produção. O domínio canônico de produção é https://biosintese.com.br/.

## Preservação

Históricos em migrated_prompt_history têm nomes incompatíveis com Windows e ficam fora do checkout local, preservados no Git. Não os incluir em exclusões ao enviar as alterações. A cópia original utilizava dados de exemplo, números e alegações sem evidência; eles não são exibidos nesta versão.
