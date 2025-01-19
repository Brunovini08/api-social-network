# Título: Criar Postagem
# Descrição: O usuário pode criar uma postagem com texto, imagens e hashtags.
# Ator Principal: Usuário autenticado
# Fluxo Principal:
## 1. O usuário acessa o botão "Criar Post".
## 2. Preenche o campo de texto e adiciona imagens(opcional).
## 3. CLica em "Publicar".
## 4. O post aparece no feed do usuário e dos seguidores.

# Fluxo Alternativo:  
## 1a. O usuário tenta criar um post sem estar autenticado.  
   *- O sistema exibe uma mensagem pedindo para ele fazer login.*  

## Pré-condições:  
*- O usuário deve estar autenticado.*  

## Pós-condições:  
*- O post é armazenado no banco de dados e mostrado no feed.*  