# 🚀 Mission Spatiale

## Présentation de l'exercice  
Cet exercice doit être réalisé sur la semaine et présenté lors de la prochaine séance. 
Il sera **noté**.  

Vous devez écrire un programme qui **simule le lancement d'une fusée vers Mars** 
en respectant plusieurs étapes.  

---

## Objectif  
Le programme doit suivre les étapes suivantes :  

1. **Vérification des systèmes avant le lancement**  
   - Vérifier si le carburant, les moteurs et la météo sont favorables.  
2. **Effectuer le compte à rebours**  
   - Décompter de 5 à 0 avant le décollage.  
3. **Lancer la fusée 🚀** 
4. **Voyager vers Mars**  
   - Le voyage dure un temps aléatoire (entre 3 et 6 secondes).  
5. **Atterrissage sur Mars**  
   - 50% de chances d’échec ou de réussite.  

---

## Consignes techniques  

**Utilisation des Promises**  
- Au moins une Promise doit être utilisée pour gérer les délais d’attente entre les étapes.  

**Utilisation de `async/await`**  
- Le code doit être écrit en `async/await` pour une meilleure lisibilité.  

**Conditions et Boucles**  
- Utilisez des conditions et des boucles pour gérer le compte à rebours et 
les vérifications système.  

**Affichage dynamique**  
- Chaque étape doit afficher **un message clair** dans la console et sur la page web.  

**Gestion des erreurs**  
- Si un problème survient (ex: mauvaise météo, atterrissage raté), 
**gérer l'erreur proprement** avec `.catch()` ou `try/catch`.  

---

## Fichiers fournis  
- **`index.html`** : Contient la structure de la page (pas besoin de modifier).  
- **`style.css`** : Gère l'affichage (pas besoin de modifer).  
- **`script.js`** : C'est ici que vous devez écrire votre code !  

---

## Exécution du programme  
1. **Ouvrez `index.html` dans votre navigateur.**  
2. **Cliquez sur le bouton "Start Mission"** pour démarrer la simulation.  
3. **Regardez l'évolution de la mission en temps réel.**  

On peut ouvrir le fichier `index.html` directement dans son navigateur web
si on travaille en local.

Sinon, lancer un serveur de test depuis le terminal avec `http-server`.

Si la commande n'est pas disponible, l'installer avec `npx http-server`,
répondre (`y`) pour confirmer l'installation

---

## Conseils

- Utiliser l'objet statique `Math`si vous avez besoin de faire des opérations mathématiques
(arrondir, obtenir un chiffre aléatoire ...)
- Encapsuler les différentes étapes dans des fonctions (`startMission()`, `travelToMars()` ...)

## Bonus (facultatif)  
✔ Ajouter une **animation console** (`console.log("🔥...🚀...🌍")`).  
✔ Ajouter une **interaction utilisateur** (ex: demande de confirmation avant le lancement).  
✔ Afficher une **image aléatoire de Mars** après un atterrissage réussi.  

---

## Date de rendu  
**La mission doit être complétée et présentée lors de la prochaine séance.**  
**Envoyez le lien de votre dépôt GitHub par email à l'adresse `contact@axelweb.fr`**  
(surtout pour ceux présent à l'EEMI de Lyon).

**Bonne chance, astronautes !** 🚀🌍  


