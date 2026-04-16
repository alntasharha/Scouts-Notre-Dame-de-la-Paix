# Script de déploiement automatique pour GitHub + Vercel
Write-Host "🚀 DÉPLOIEMENT AUTOMATIQUE SCOUTS NDP" -ForegroundColor Green
Write-Host ""

# Vérifier si Git est installé
try {
    $gitVersion = git --version
    Write-Host "✅ Git trouvé : $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé !" -ForegroundColor Red
    Write-Host "📥 Téléchargez Git ici : https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

# Initialiser le repo Git
if (Test-Path .git) {
    Write-Host "📁 Repo Git déjà initialisé" -ForegroundColor Yellow
} else {
    Write-Host "🔧 Initialisation de Git..." -ForegroundColor Cyan
    git init
}

# Configurer Git (si pas déjà fait)
$gitName = git config user.name
$gitEmail = git config user.email

if (-not $gitName) {
    $name = Read-Host "Entrez votre nom GitHub"
    git config user.name "$name"
}
if (-not $gitEmail) {
    $email = Read-Host "Entrez votre email GitHub"
    git config user.email "$email"
}

# Demander le nom d'utilisateur GitHub
$githubUser = Read-Host "Entrez votre nom d'utilisateur GitHub"
$repoName = "scouts-ndp"

# Ajouter les fichiers
Write-Host "📦 Ajout des fichiers..." -ForegroundColor Cyan
git add .

# Commit
Write-Host "💾 Création du commit..." -ForegroundColor Cyan
git commit -m "Initial commit - Site Scouts NDP responsive"

# Connecter à GitHub
Write-Host "🔗 Connexion à GitHub..." -ForegroundColor Cyan
$remoteUrl = "https://github.com/$githubUser/$repoName.git"

try {
    git remote add origin $remoteUrl 2>$null
} catch {
    git remote set-url origin $remoteUrl
}

# Pousser le code
Write-Host "☁️  Envoi sur GitHub..." -ForegroundColor Cyan
git branch -M main

try {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Votre repo GitHub : $remoteUrl" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🚀 PROCHAINES ÉTAPES :" -ForegroundColor Yellow
    Write-Host "   1. Allez sur https://vercel.com" -ForegroundColor White
    Write-Host "   2. Connectez-vous avec GitHub" -ForegroundColor White
    Write-Host "   3. Importez le repo '$repoName'" -ForegroundColor White
    Write-Host "   4. Cliquez sur 'Deploy'" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Votre site sera dispo sur : https://$repoName.vercel.app" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR lors du push" -ForegroundColor Red
    Write-Host "💡 Créez d'abord le repo sur GitHub :" -ForegroundColor Yellow
    Write-Host "   https://github.com/new" -ForegroundColor Cyan
    Write-Host "   Nom : $repoName" -ForegroundColor White
    Write-Host "   Puis relancez ce script" -ForegroundColor White
}

Write-Host ""
Read-Host "Appuyez sur Entrée pour fermer"
