# Knihovny třetích stran

Soubory jsou místní, verzované a neupravené kopie vydání knihoven. Stránka
nepoužívá CDN ani externí sady ikon. Soubory source map jsou také místní.

## Zdroje a licence

| Součást | Místní adresář | Licence |
| --- | --- | --- |
| Bootstrap 5.3.8 | `bootstrap/5.3.8/` | MIT, viz `LICENSE` |
| Popper 2.11.8 v Bootstrap bundle | `bootstrap/5.3.8/` | MIT, viz `POPPER-LICENSE` |
| Font Awesome Free 6.7.2 | `fontawesome/6.7.2/` | MIT pro kód, CC BY 4.0 pro ikony, SIL OFL 1.1 pro fonty, viz `LICENSE.txt` |
| Původní šablona Freelancer | `freelancer/` | MIT, viz `LICENSE`; copyright Start Bootstrap 2013–2020 |

Bootstrap CSS a JS byly staženy z těchto adres:

- <https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css>
- <https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css.map>
- <https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js>
- <https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js.map>
- <https://raw.githubusercontent.com/twbs/bootstrap/v5.3.8/LICENSE>
- <https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/LICENSE.md>

Font Awesome:

- <https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js>
- <https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.7.2/LICENSE.txt>

Další licenční soubory:

- Freelancer: <https://raw.githubusercontent.com/StartBootstrap/startbootstrap-freelancer/v6.0.5/LICENSE>
- Work Sans, uložený v `../../fonts/OFL.txt`: <https://raw.githubusercontent.com/google/fonts/main/ofl/worksans/OFL.txt>

Licence Freelancer z vydání 6.0.5 zachovává oznámení původní šablony z roku 2020;
nejde o aktualizaci šablony na toto vydání. Upravené styly a skripty webu jsou
mimo tento adresář. Font Awesome `all.min.js` již obsahuje ikony; samostatné
webfonty ani externí soubory SVG nepotřebuje.

## Bezpečnostní kontrola

Dne 12. 10. 2026 byly v databázi [OSV](https://osv.dev/) ověřeny přesné verze
balíčků `bootstrap@5.3.8`, `@popperjs/core@2.11.8` a
`@fortawesome/fontawesome-free@6.7.2`; dotazy nevrátily žádná bezpečnostní
oznámení pro tyto verze.

Bootstrap 4 již [není podporován](https://getbootstrap.com/docs/4.6/end-of-life/),
proto byl nahrazen Bootstrapem 5. Dříve uváděné oznámení
[CVE-2024-6531](https://github.com/advisories/GHSA-vc8w-jr9v-vj7f) bylo staženo;
není důvodem této migrace.

## Kontrolní otisky a aktualizace

[SHA384SUMS](SHA384SUMS) obsahuje pro každý dodaný soubor otisk ve formátu
`sha384-BASE64` a cestu relativní k tomuto adresáři. Otisky načítaného CSS a JS
jsou také v atributech `integrity` v `index.html`.

Při aktualizaci stáhněte konkrétní stabilní vydání do nového verzovaného adresáře,
zachovejte licenční komentáře a přiložte licence i odkazované source map. Otisk
souboru lze vypočítat takto:

```sh
openssl dgst -sha384 -binary assets/vendor/bootstrap/5.3.8/bootstrap.min.css | openssl base64 -A
```

Výstupu přidejte předponu `sha384-`, upravte cesty a otisky v HTML i v tomto
přehledu a v souboru `SHA384SUMS`. Před nasazením ověřte bezpečnostní oznámení,
vzhled na mobilu a desktopu, navigaci a modální okna. Zkontrolujte také, že web
načítá všechny soubory ze svého serveru a nevytváří externí požadavky.
