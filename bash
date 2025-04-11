git mv índice.html index.html
git commit -m "Corrige nome do arquivo principal"
git push origin main
python3 -m http.server 8000
git add .
git commit -m "Versão premium com botões flutuantes"
git push origin main
