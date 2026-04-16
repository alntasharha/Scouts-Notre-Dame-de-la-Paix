@echo off
echo 🚀 ENVOI DES MODIFICATIONS SUR GITHUB
echo.
cd /d "C:\Users\Dell\OneDrive\Documents\Mes projets\Group scoots"
echo.
echo 📦 Ajout des nouveaux fichiers...
git add .
echo.
echo 💾 Creation du commit...
git commit -m "Mise a jour: Navigation optimisee, responsive mobile, design modernise"
echo.
echo ☁️  Envoi sur GitHub...
git push origin main
echo.
echo ✅ Modifications envoyees !
echo.
echo 🚀 ETAPES SUIVANTES :
echo 1. Allez sur https://vercel.com
echo 2. Connectez-vous avec GitHub
echo 3. Importez le repo 'scouts-ndp'
echo 4. Cliquez sur 'Deploy'
echo.
pause
