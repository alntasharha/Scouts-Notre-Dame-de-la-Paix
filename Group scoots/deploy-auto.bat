@echo off
chcp 65001 >nul
cls
echo ==========================================
echo    🚀 DEPLOIEMENT AUTOMATIQUE NETLIFY
echo ==========================================
echo.

:: Vérifier si netlify-cli est installé
echo [1/5] Verification de Netlify CLI...
where npx >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ NPX non trouve. Installation de Node.js necessaire.
    echo.
    echo Telechargez Node.js ici : https://nodejs.org/
    echo Puis relancez ce script.
    pause
    exit /b 1
)

echo ✅ NPX trouve

:: Vérifier connexion Netlify
echo.
echo [2/5] Verification connexion Netlify...
npx netlify status >nul 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  Vous n'etes pas connecte a Netlify
    echo.
    echo Connectez-vous avec :
    echo npx netlify login
    echo.
    echo Puis relancez ce script.
    pause
    exit /b 1
)

echo ✅ Connecte a Netlify

:: Lister les sites
echo.
echo [3/5] Recherche du site "scouts-ndp"...
echo.
for /f "tokens=*" %%a in ('npx netlify sites:list --json ^| findstr "scouts-ndp gorgeous-puppy"') do (
    echo Site trouve : %%a
)

echo.
echo ------------------------------------------
echo Que voulez-vous faire ?
echo ------------------------------------------
echo 1. 🚀 Deployer sur le site existant
echo 2. 📋 Voir la liste de tous vos sites
echo 3. ❌ Annuler
echo.
set /p choix="Votre choix (1-3) : "

if "%choix%"=="1" goto deploy
if "%choix%"=="2" goto list_sites
if "%choix%"=="3" goto cancel

goto end

:deploy
echo.
echo [4/5] Deploiement en cours...
echo Cela peut prendre 1-2 minutes...
echo.
npx netlify deploy --prod --dir=. --message="Mise a jour automatique %date% %time%"
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erreur lors du deploiement
    echo Essayez manuellement :
    echo npx netlify deploy --prod --dir=.
    pause
    exit /b 1
)
echo.
echo ✅ Deploiement reussi !
goto finish

:list_sites
echo.
echo [4/5] Liste de vos sites :
echo.
npx netlify sites:list
echo.
echo ------------------------------------------
echo Pour deployer sur un site specifique :
echo npx netlify deploy --prod --dir=. --site=ID_DU_SITE
echo.
pause
goto end

:cancel
echo.
echo ❌ Deploiement annule
goto end

:finish
echo.
echo [5/5] Configuration CMS...
echo.
echo ⚠️  IMPORTANT : Activez manuellement ces options sur Netlify :
echo.
echo 1. Allez sur https://app.netlify.com/
echo 2. Cliquez sur votre site
echo 3. Menu "Identity" → "Enable Identity"
echo 4. Menu "Identity" → "Services" → "Enable Git Gateway"
echo.
echo ✅ Votre site est en ligne !
echo 🔗 URL Admin : https://votre-site.netlify.app/admin
echo.

:end
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
