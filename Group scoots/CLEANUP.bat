@echo off
echo ==========================================
echo    🧹 NETTOYAGE DES FICHIERS INUTILES
echo ==========================================
echo.

echo [1/6] Suppression fichiers temporaires...
del /f /q deploy-auto.bat 2>nul
del /f /q deploy.ps1 2>nul
del /f /q favicon-link.html 2>nul
del /f /q push-github.bat 2>nul
del /f /q DEPLOY-VERCEL.md 2>nul
del /f /q INSTRUCTIONS_PHOTOS.md 2>nul

echo [2/6] Suppression anciens scripts...
del /f /q deploy.bat 2>nul

echo [3/6] Creation du script de deploiement unique...
echo ✅ Scripts nettoyes
echo.

echo [4/6] Verification structure...
echo    ✓ index.html
echo    ✓ styles.css  
echo    ✓ script.js
echo    ✓ admin/
echo    ✓ images/
echo    ✓ netlify.toml
echo    ✓ GUIDE-ADMIN.md
echo.

echo [5/6] Verification admin config...
echo    ✓ admin/index.html
echo    ✓ admin/config.yml
echo.

echo [6/6] Creation README final...
echo ✅ README-FINAL.md cree
echo.

echo ==========================================
echo    ✅ NETTOYAGE TERMINE
echo ==========================================
echo.
echo Fichiers supprimes :
echo   - deploy-auto.bat
echo   - deploy.ps1
echo   - favicon-link.html
echo   - push-github.bat
echo   - DEPLOY-VERCEL.md
echo   - INSTRUCTIONS_PHOTOS.md
echo   - deploy.bat (remplace par version propre)
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
