# Todagente Telemedicina - Landing Page

Landing Page para serviço de telemedicina da Todagente, criada com React, Vite, TypeScript e Chakra UI. Design moderno e totalmente responsivo.

## Tecnologias Utilizadas

- ⚛️ **React 18** - Biblioteca JavaScript para construir interfaces
- ⚡ **Vite** - Build tool extremamente rápida
- 📘 **TypeScript** - JavaScript com tipagem estática
- 🎨 **Chakra UI** - Biblioteca de componentes UI acessíveis e customizáveis
- 🔄 **React Router** - Navegação para Single Page Applications

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── pages/          # Páginas da aplicação
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── theme/          # Configuração do tema Chakra UI
│   └── index.ts
├── App.tsx         # Componente principal com rotas
└── main.tsx        # Ponto de entrada da aplicação
```

## ⚠️ Importante: Adicionar Imagens

Antes de executar o projeto, adicione as seguintes imagens na pasta `public/images/`:

- `logo-todagente.png` - Logo da Todagente Telemedicina
- `logo-norte2020.png` - Logo do Programa Norte 2020
- `logo-portugal2030.png` - Logo Portugal 2030
- `logo-uniao-europeia.png` - Logo da União Europeia
- `doctor.png` - Imagem da médica para o hero

Veja mais detalhes em [public/images/README.md](public/images/README.md)

## Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## Funcionalidades

- ✅ Design moderno e profissional
- ✅ 100% Responsivo (Mobile, Tablet, Desktop)
- ✅ Hero section com gradiente azul
- ✅ Integração com WhatsApp (botão flutuante)
- ✅ Link direto para ligação telefônica
- ✅ Animações suaves e interativas
- ✅ Otimizado para performance
- ✅ SEO friendly
- ✅ TypeScript para maior segurança no código

## Seções da Landing Page

### Header
- Logo Todagente
- Logos institucionais (Norte 2020, Portugal 2030, União Europeia)
- Botão de telefone com link direto

### Hero Section
- Título principal com destaque
- Lista de benefícios (Sem filas, Sem burocracia, Sem carência)
- Informação de preço
- Call-to-action "Quero Contratar"
- Imagem ilustrativa de médica

### WhatsApp Flutuante
- Botão fixo no canto inferior direito
- Link direto para WhatsApp
- Animação hover

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## Licença

MIT
