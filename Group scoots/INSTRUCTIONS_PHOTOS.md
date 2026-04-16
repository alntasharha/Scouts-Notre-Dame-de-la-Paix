# Instructions pour Ajouter des Photos et Noms Réels

## 📸 Comment Ajouter des Photos depuis Facebook

### Étape 1: Accéder à la Page Facebook
1. Allez sur la page Facebook des Scouts NDP : https://www.facebook.com/scout.ndp/
2. Naviguez également dans les groupes Facebook scouts de Bukavu
3. Cherchez les albums photos des activités récentes

### Étape 2: Télécharger les Photos
1. Cliquez sur une photo pour l'ouvrir en plein écran
2. Faites un clic droit et choisissez "Enregistrer l'image sous..."
3. Sauvegardez les photos dans un dossier `images/` du projet

### Étape 3: Organiser les Photos
Créez les sous-dossiers suivants :
```
images/
├── scouts/          # Photos des scouts
├── chefs/           # Photos des chefs  
├── galerie/         # Photos pour la galerie
├── activities/      # Photos d'activités
└── logo/           # Logo et emblèmes
```

## 🔧 Comment Intégrer les Photos dans le Site

### Pour les Scouts
Dans le fichier `script.js`, modifiez les données des scouts :

```javascript
{
    id: 1,
    name: "Nom Réel du Scout",  // Remplacer par le vrai nom
    age: 14,
    category: "louveteaux",
    role: "Louveteau",
    photo: "images/scouts/nom_scout_1.jpg",  // Ajouter le chemin de la photo
    joinedDate: "2022-09-01",
    specialite: "Artisanat"
}
```

### Pour les Chefs
```javascript
{
    id: 1,
    name: "Nom Réel du Chef",  // Remplacer par le vrai nom
    title: "Chef de Groupe",
    description: "Description réelle du chef",
    photo: "images/chefs/nom_chef_1.jpg",  // Ajouter le chemin de la photo
    responsibilities: [...],
    experience: "X ans",
    email: "email@reel.com"
}
```

### Pour la Galerie
```javascript
{
    id: 1,
    title: "Titre Réel de l'Activité",
    description: "Description réelle",
    category: "camps",
    image: "images/galerie/camp_ete_2024_1.jpg"  // Ajouter le chemin
}
```

## 📝 Informations à Collecter depuis Facebook

### Pour chaque Scout :
- ✅ Nom complet
- ✅ Photo récente
- ✅ Âge
- ✅ Catégorie (Louveteaux, Éclaireurs, Pionniers, Routiers)
- ✅ Spécialité ou talent particulier
- ✅ Date d'entrée dans le groupe

### Pour chaque Chef :
- ✅ Nom complet
- ✅ Photo professionnelle
- ✅ Titre/Rôle exact
- ✅ Années d'expérience
- ✅ Email de contact
- ✅ Responsabilités précises

### Pour les Activités :
- ✅ Date de l'activité
- ✅ Titre de l'événement
- ✅ Description détaillée
- ✅ Plusieurs photos de l'événement
- ✅ Participants

## 🎯 Sources d'Information Prioritaires

### 1. Page Facebook Principale
- https://www.facebook.com/scout.ndp/
- Albums photos récents
- Publications avec noms et photos

### 2. Groupes Facebook Scouts
- Groupes scouts de Bukavu
- Publications des membres
- Photos partagées par les parents

### 3. Contact Direct
- Contacter l'administrateur de la page Facebook
- Demander l'accès aux albums photos complets
- Obtenir les informations manquantes

## ⚠️ Points Importants

### Confidentialité
- Vérifier l'autorisation pour utiliser les photos
- Demander la permission aux parents pour les mineurs
- Respecter les droits à l'image

### Qualité des Photos
- Privilégier les photos de bonne qualité
- Photos récentes et bien éclairées
- Format carré ou rectangulaire recommandé

### Noms et Informations
- Vérifier l'orthographe exacte des noms
- Confirmer les âges et catégories
- Mettre à jour les informations régulièrement

## 🔄 Mise à Jour Continue

### Fréquence de Mise à Jour
- **Chaque mois** : Nouveaux scouts et activités
- **Chaque trimestre** : Mise à jour des photos
- **Chaque année** : Vérification complète des informations

### Automatisation Future
- Créer un formulaire d'ajout de scout
- Système de upload de photos
- Base de données centralisée

---

## 📞 Contact pour Assistance

Pour toute question sur l'ajout de photos ou d'informations :
- **Email** : scouts.ndp.bukavu@email.com
- **Téléphone** : +243 XXX XXX XXX
- **Local** : Cathédrale Notre Dame de la Paix, Bukavu

**Note** : Ce document sera mis à jour régulièrement avec les nouvelles informations collectées depuis Facebook et les sources directes du groupe.
