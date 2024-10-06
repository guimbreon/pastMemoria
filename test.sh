git init
git add *
read -p "Enter your commit message: " commitMSG
git commit -m "$commitMSG"
git branch -M main
git remote add origin https://github.com/guimbreon/[ALTERAR AQUI].git
git push -u origin main