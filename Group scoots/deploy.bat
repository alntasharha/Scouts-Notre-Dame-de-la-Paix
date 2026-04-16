@echo off
echo 🚀 DEPLOIEMENT SCOUTS NDP
echo ===================================
echo.

:: Verifier si Git est installe
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERREUR: Git n'est pas installe !
    echo.
    echo 📥 Etape 1: Installez Git
    echo    Allez sur: https://git-scm.com/download/win
    echo    Telechargez et installez Git avec les options par defaut
    echo.
    echo    Puis relancez ce script.
    echo.
    pause
    exit /b 1
)

echo ✅ Git est installe
echo.

:: Aller dans le dossier du projet
cd /d "%~dp0"
echo 📁 Dossier: %cd%
echo.

:: Initialiser Git
echo 🔧 Initialisation du repo Git...
git init
if errorlevel 1 (
    echo ⚠️  Repo deja initialise ou erreur
    echo.
)

:: Configurer Git
git config user.name "Scout Deploy"
git config user.email "deploy@scouts.ndp"

:: Ajouter les fichiers
echo 📦 Ajout des fichiers...
git add .

:: Commit
echo 💾 Creation du commit...
git commit -m "Initial commit - Site Scouts NDP"
if errorlevel 1 (
    echo ⚠️  Rien a committer ou deja a jour
    echo.
)

:: Demander le nom d'utilisateur GitHub
echo.
echo ===================================
echo 📋 INSTRUCTIONS GITHUB:
echo ===================================
echo 1. Allez sur https://github.com/new
echo 2. Nom du repo: scouts-ndp
echo 3. Cochez "Public"
echo 4. Cliquez "Create repository"
echo.
set /p USER="Entrez votre nom d'utilisateur GitHub: "

if "%USER%"=="" (
    echo ❌ Nom d'utilisateur requis !
    echo.
    pause
    exit /b 1
)

:: Connecter au repo distant
echo 🔗 Connexion a GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/%USER%/scouts-ndp.git

:: Pousser le code
echo ☁️  Envoi du code sur GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ ERREUR lors de l'envoi
    echo.
    echo 💡 Verifiez que:
    echo    - Le repo 'scouts-ndp' existe sur GitHub
    echo    - Vous avez les droits d'acces
    echo    - Essayez: git push -u origin main --force
    echo.
    pause
    exit /b 1
)

echo.
echo ===================================
echo ✅ SUCCES ! Code envoye sur GitHub
echo ===================================
echo.
echo 🚀 PROCHAINES ETAPES:
echo 1. Allez sur https://vercel.com
echo 2. Connectez-vous avec GitHub
echo 3. Importez le repo 'scouts-ndp'
echo 4. Cliquez sur 'Deploy'
echo.
echo 🌐 Votre site sera sur: https://scouts-ndp.vercel.app
echo.
pause
