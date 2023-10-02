<div align="center">
  <h3 align="center">
	<big>Publicodes x Impact Livraison</big>
  </h3>
  <p align="center">
   <a href="https://github.com/incubateur-ademe/publicodes-impact-livraison/issues">Report Bug</a>
   •
   <a href="https://incubateur-ademe.github.io/publicodes-impact-livraison/">API docs</a>
   •
   <a href="https://github.com/incubateur-ademe/publicodes-impact-livraison/blob/master/CONTRIBUTING.md">Contribute</a>
  </p>

![CI][ci-link] ![NPM][npm-link]

Un modèle [Publicodes](https://publi.codes) pour le simulmateur
[Impact Livraison](https://impactco2.fr/livraison) de [Impact CO2](https://impactco2.fr).

Sa documentation est disponible [en
ligne](https://incubateur-ademe.github.io/publicodes-impact-livraison/).

</div>

## Usage

Ajouter le paquet à vos dépendances :

```
bun add publicodes-impact-livraison
```

Instancier un nouveau moteur Publicode :

```typescript
import Engine from 'publicodes'
import rules from 'publicodes-impact-livraison'

const engine = new Engine(rules)

engine.evaluate('livraison colis . scénario . domicile')
```

Utiliser certaines règles dans un autre modèle publicodes :

```yaml
importer!:
  depuis:
    nom: publicodes-impact-livraison
    url: https://github.com/incubateur-ademe/publicodes-impact-livraison
  dans: modèle livraison
  les règles:
    - livraison colis . scénario . domicile
    - livraison colis par avion
```

### En local

#### Compiler le modèle

> Les règles publicodes du modèle sont disponible dans le workspace
> [`rules/`](https://github.com/incubateur-ademe/publicodes-impact-livraison/tree/main/rules).

Pour installer les dépendances et compiler tous les fichiers `.publicodes` en
un seul fichier JSON, il suffit d'exécuter la commande suivante :

```
bun && bun run build
```

#### Lancer la documentation

> Le code de la documentation est disponible dans le workspace
> [`doc/`](https://github.com/incubateur-ademe/publicodes-impact-livraison/tree/main/doc).

Pour lancer l'app React en local permettant de parcourir la documentation du
modèle, il suffit d'exécuter la commande suivante :

```
bun i --cwd doc

bun run doc
```

#### Lancer l'API

> Le code de l'API est disponible dans le workspace
> [`api/`](https://github.com/incubateur-ademe/publicodes-impact-livraison/tree/main/api).

Pour lancer le serveur Node permettant d'utiliser l'API REST, il faut utiliser les commandes
suivantes :

```
bun run api

# En watch-mode
bun run api:watch
```

## Publier une nouvelle version

Afin de publier une nouvelle version il suffit d'exécuter la commande `npm
version`.

[ci-link]: https://img.shields.io/github/actions/workflow/status/incubateur-ademe/publicodes-impact-livraison/packaging.yaml?logo=github&logoColor=white&label=build%20%26%20test
[npm-link]: https://img.shields.io/npm/v/%40incubateur-ademe%2Fpublicodes-impact-livraison?logo=npm&logoColor=white&color=salmon
