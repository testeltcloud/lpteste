# 📋 Instruções - Landing Page Todagente

## ✅ O que foi implementado

### 1. Header Completo
- Logo da Todagente (lado esquerdo)
- Logos institucionais no centro (Norte 2020, Portugal 2030, União Europeia)
- Botão de telefone clicável (lado direito)
- Totalmente responsivo

### 2. Hero Section
- Título principal destacado
- Lista de benefícios com ícones personalizados:
  - Sem filas
  - Sem burocracia
  - Sem carência
- Informação de preço (€6,99/mês)
- Botão CTA "Quero Contratar" com animação
- Imagem da médica (lado direito - apenas desktop)
- Gradiente azul de fundo

### 3. Botão WhatsApp Flutuante
- Fixo no canto inferior direito
- Link direto para WhatsApp: +351 937097574
- Animação ao passar o mouse
- Visível em todas as telas

## 🎨 Design e Responsividade

### Breakpoints
- **Mobile** (< 768px): Layout em coluna única, elementos empilhados
- **Tablet** (768px - 1024px): Layout intermediário
- **Desktop** (> 1024px): Layout completo com 2 colunas

### Cores (ATUALIZADAS - Idênticas ao design)
- Azul escuro: `#3d5a9c`
- Azul claro: `#5b88d6`
- Roxo botão: `#6574bc`
- Cor texto botão: `#4d5d9e`
- Verde WhatsApp: `#25D366`
- Branco: `#ffffff`

## 🖼️ Como Configurar a Imagem de Fundo do Hero

### Adicionar Imagem de Fundo Grande (Opcional)

Se você quiser adicionar uma imagem de fundo que cubra toda a seção Hero (como na imagem de referência):

1. **Adicione sua imagem** na pasta `/public/images/`
   - Exemplo: `hero-background.jpg`
   - Tamanho recomendado: 1920x1080px ou maior
   - Formatos aceitos: JPG, PNG, WebP

2. **Configure o caminho** em [src/pages/Home.tsx](src/pages/Home.tsx):
   ```typescript
   // Linha 5
   const backgroundImage = '/images/hero-background.jpg'
   ```

3. **Como funciona:**
   - Se `backgroundImage` estiver vazio: mostra apenas o gradiente azul
   - Se tiver um caminho: mostra a imagem com overlay de gradiente azul semi-transparente

**IMPORTANTE:** A imagem de fundo é configurável diretamente no código. Basta editar a linha 5 do arquivo [src/pages/Home.tsx](src/pages/Home.tsx).

---

## 🖼️ Como Substituir as Imagens Placeholder dos Logos

Atualmente o site está usando SVGs placeholder. Para usar as imagens reais:

### Passo 1: Prepare suas imagens
Certifique-se de ter as seguintes imagens em formato PNG com fundo transparente:
- `logo-todagente.png`
- `logo-norte2020.png`
- `logo-portugal2030.png`
- `logo-uniao-europeia.png`
- `doctor.png`

### Passo 2: Adicione à pasta correta
Copie todas as imagens para:
```
/public/images/
```

### Passo 3: Renomeie ou ajuste o código
**Opção A:** Renomeie suas imagens PNG para `.svg` (não recomendado)

**Opção B (Recomendado):** Substitua os SVGs pelos PNGs reais:

Em [src/components/Header.tsx](src/components/Header.tsx):
- Linha 22: `logo-todagente.svg` → `logo-todagente.png`
- Linha 40: `logo-norte2020.svg` → `logo-norte2020.png`
- Linha 46: `logo-portugal2030.svg` → `logo-portugal2030.png`
- Linha 52: `logo-uniao-europeia.svg` → `logo-uniao-europeia.png`

Em [src/pages/Home.tsx](src/pages/Home.tsx):
- Linha 147: `doctor.svg` → `doctor.png`

### Passo 4: Teste
O servidor Vite irá recarregar automaticamente. Verifique se as imagens aparecem corretamente.

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências (se ainda não instalou)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# O site estará disponível em:
# http://localhost:5173/
```

## 📱 Como Testar a Responsividade

### No navegador:
1. Abra o site em [http://localhost:5173/](http://localhost:5173/)
2. Pressione `F12` para abrir o DevTools
3. Clique no ícone de dispositivo móvel (ou pressione `Ctrl+Shift+M`)
4. Teste diferentes tamanhos:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

## 🔗 Links Funcionais

### Telefone
- Clicar no botão no header liga diretamente para: **+351 937097574**

### WhatsApp
- Clicar no botão flutuante abre o WhatsApp com o número: **+351 937097574**
- Funciona em desktop e mobile

### Botão CTA
- Atualmente sem link (adicione a URL da página de contratação se necessário)

## 🎯 Próximos Passos Sugeridos

1. **Adicionar mais seções:**
   - Como funciona
   - Planos e preços
   - Depoimentos
   - FAQ
   - Footer

2. **Melhorias:**
   - Adicionar analytics (Google Analytics)
   - Implementar formulário de contato
   - Adicionar chat ao vivo
   - Otimizar SEO (meta tags, Open Graph)

3. **Animações:**
   - Usar Framer Motion para animações mais elaboradas
   - Scroll animations
   - Loading states

## 🆘 Troubleshooting

### As imagens não aparecem
- Verifique se as imagens estão na pasta `/public/images/`
- Confirme que os nomes dos arquivos estão corretos
- Verifique o console do navegador (F12) para erros

### Layout quebrado no mobile
- Limpe o cache do navegador
- Recarregue a página com `Ctrl+F5`
- Verifique se todas as dependências estão instaladas

### Servidor não inicia
```bash
# Remova node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📞 Contatos

- **Telefone:** +351 937097574
- **WhatsApp:** +351 937097574

---

**Desenvolvido com React + TypeScript + Chakra UI + Vite**
