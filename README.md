# epic-crud-template

This repository is a modified version of the Epic Stack and tracks changes to
the Epic Stack as a Sly Template

## Sly Templates

All changes to the Epic stack can be pulled in via Sly, turned into patches, and
applied to this repository

```sh
npx sly template update
```

Check the other/sly.json file to see where this is configured. Sly will compare
the state of the epic stack at `template.head` against the latest head, create
patches and then apply them to the current codebase.

```json
{
  "$schema": "https://sly-cli.fly.dev/registry/config.json",
  "template": {
    "repo": "https://github.com/epicweb-dev/epic-stack",
    "head": "05d92de7e0ebd580edbf4bdd6b43447b32ece5e7",
    "ignore": ["docs", "LICENSE.md"]
  },
```

In turn, the Epic CRUD workshops use this repository as their Sly template, so
it serves as an initial triage for features I want to propagate to the
workshops.

For example, the workshops don't care about Sentry, so it has been removed from
this repository. When the Epic Stack changes its Sentry config, I can ignore
those changes here, and then I don't need to ignore them in every single
workshop exercise.

##
