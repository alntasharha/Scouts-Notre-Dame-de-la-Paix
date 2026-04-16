# 🚀 Guide Déploiement avec CMS (Admin)

## 📋 Résumé

Votre client pourra maintenant gérer le site **sans coder** grâce à Netlify CMS !

---

## ✅ Ce qui est installé

| Fichier | Description |
|---------|-------------|
| `/admin/` | Interface d'administration |
| `/admin/config.yml` | Configuration du CMS |
| `GUIDE-ADMIN.md` | Guide utilisateur pour le client |
| Netlify Identity | Système d'authentification |

### 🎯 Fonctionnalités du CMS :
- ✅ Ajouter/modifier/supprimer des **Scouts**
- ✅ Gérer les **Chefs & Responsables**
- ✅ Créer des **Activités** (camps, sorties...)
- ✅ **Galerie photos** (glisser-déposer)
- ✅ **Actualités** (articles/blog)
- ✅ Upload d'images simple
- ✅ Plusieurs utilisateurs possibles

---

## 🔧 Étapes de déploiement sur Netlify

### Étape 1 : Déployer sur Netlify

1. Allez sur [netlify.com](https://www.netlify.com/)
2. Connectez-vous avec GitHub ou créez un compte
3. Cliquez **"Add new site"** → **"Import an existing project"**
4. Connectez votre repo GitHub ou upload le ZIP
5. Cliquez **"Deploy site"**

### Étape 2 : Activer Netlify Identity (IMPORTANT)

1. Dans le dashboard Netlify, allez dans **"Identity"**
2. Cliquez **"Enable Identity"**
3. Allez dans **"Settings"** → **"Registration"**
4. Choisissez **"Open"** (tout le monde peut s'inscrire) OU **"Invite only"** (vous invitez le client)

### Étape 3 : Activer Git Gateway

1. Toujours dans **"Identity"**
2. Allez dans **"Services"**
3. Cliquez **"Enable Git Gateway"**
4. Autorisez l'accès à votre repo

### Étape 4 : Inviter le client

1. Dans **"Identity"** → **"Users"**
2. Cliquez **"Invite users"**
3. Entrez l'email du client
4. Envoyez l'invitation

---

## 📧 Email à envoyer au client

```
Objet : Votre site Scouts NDP - Accès administrateur

Bonjour [Nom du client],

Votre site est prêt ! Vous pouvez maintenant le gérer vous-même sans aucune connaissance technique.

🔗 ACCÈS AU SITE :
https://[votre-site].netlify.app

⚙️ ACCÈS ADMINISTRATION :
https://[votre-site].netlify.app/admin

📘 GUIDE D'UTILISATION :
Voir le fichier GUIDE-ADMIN.md joint

🎯 CE QUE VOUS POUVEZ FAIRE :
- Ajouter des scouts avec leurs photos
- Modifier les informations des chefs
- Créer des activités (camps, sorties)
- Ajouter des photos à la galerie
- Publier des actualités

👤 CONNEXION :
1. Allez sur /admin
2. Créez un compte avec votre email
3. Vérifiez votre email
4. Connectez-vous

⚡ AUTOMATIQUE :
Toutes vos modifications sont publiées automatiquement en 1-2 minutes !

Besoin d'aide ? Contactez-moi.

Cordialement,
[Votre nom]
```

---

## 🔐 Configuration des rôles (Optionnel)

Si vous voulez différents niveaux d'accès :

### Dans Netlify Identity :

1. **"Site administrators"** : Peuvent tout faire
2. **"Git contributors"** : Peuvent modifier le contenu
3. **"Site members"** : Peuvent voir le site

Pour ajouter un admin :
1. Identity → Users
2. Cliquez sur l'utilisateur
3. Allez dans **"Roles"**
4. Ajoutez **"admin"**

---

## 📱 Workflow pour le client

```
1. Se connecte sur /admin
2. Ajoute un nouveau scout
3. Upload sa photo
4. Clic "Publish"
5. ✅ Le scout apparaît sur le site en 2 min !
```

---

## 🆘 Dépannage

### Le client ne peut pas se connecter
- Vérifiez que Identity est activé
- Vérifiez que Git Gateway est activé
- Vérifiez l'email de confirmation

### Les modifications n'apparaissent pas
- Attendre 1-2 minutes
- Rafraîchir avec F5
- Vider le cache (Ctrl+Shift+R)

### Les images ne s'affichent pas
- Vérifier format (jpg, png, webp)
- Taille < 2 Mo
- Réessayer l'upload

---

## 💡 Astuces pour le client

1. **Photos** : Compresser avant upload (tinypng.com)
2. **Sauvegarde** : Le CMS garde l'historique des versions
3. **Mobile** : Le CMS fonctionne sur téléphone aussi
4. **Aide** : Le fichier GUIDE-ADMIN.md est complet

---

## 🎓 Formation rapide (10 min)

Faites une session Zoom de 10 minutes avec le client :
1. Montrer comment se connecter
2. Ajouter un scout ensemble
3. Uploader une photo
4. Publier et voir le résultat
5. Répondre aux questions

---

## 📞 Support

**Problèmes techniques Netlify :**
- https://www.netlify.com/support/

**Documentation CMS :**
- https://decapcms.org/docs/

**Votre contact :**
- [Votre email]

---

✅ **Votre client est maintenant autonome !**
