# Mykologický klub Brno – webové stránky

Statický web Mykologického klubu Brno, napsaný v HTML, CSS a JavaScriptu.

- [Veřejný web](https://mykobrno.brozkeff.net)
- [Zdrojový kód na GitHubu](https://github.com/brozkeff/mykobrno-web)

Web vychází ze šablony Freelancer od Start Bootstrap (MIT). V roce 2026 jej
Brozkeff modernizoval na Bootstrap 5 při zachování původního vzhledu. Kredit
původní šablony i její licence zůstávají zachovány.

## Knihovny a místní soubory

- Bootstrap 5.3.8: CSS a JavaScriptový bundle včetně Popper 2.11.8.
- Font Awesome Free 6.7.2: podporovaná větev 6.x, ikony vložené přes SVG a JS.
- Work Sans: místní soubory WOFF2 v adresáři `fonts/`.

Knihovny jsou uloženy v `assets/vendor/`; stránka je nenačítá z CDN. Také obrázky,
fonty a PDF jsou místní. Běžné načtení a ovládání webu nevyžaduje spojení s cizími
servery. Externí odkazy vedou mimo web až po kliknutí.

jQuery a jQuery Easing byly odstraněny. Navigaci, animaci posunu a tlačítko pro
návrat nahoru zajišťuje vlastní JavaScript. Bootstrap ovládá menu a modální okna.

[Přehled knihoven](assets/vendor/README.md) uvádí zdroje, licence a postup
aktualizace. Místní CSS a JS knihoven mají v HTML kontrolní otisky SHA-384
(`integrity`); při jejich výměně je nutné aktualizovat i otisky.

## Licence a autorská práva

**Zdrojový kód webu (HTML, CSS a JavaScript) je pod licencí MIT**, stejně jako
původní šablona. Úplné znění a vymezení rozsahu najdete v souboru [LICENSE](LICENSE).
Licence šablony je také uložena [samostatně](assets/vendor/freelancer/LICENSE).

**Texty, obrázky, logo, pozvánky, plakáty, fotografie a PDF nejsou součástí
licence MIT.** Klubové materiály, včetně pozvánek a fotografií k výstavám hub,
podléhají autorským právům Mykologického klubu Brno. U materiálů jiných autorů
zůstávají práva jejich příslušným nositelům. Veřejná dostupnost v tomto repozitáři
není svolením k jejich dalšímu použití; pro použití je třeba souhlas nositele práv
nebo jiný právní důvod. Logo a některé kresby byly vytvořeny s pomocí MidJourney AI.

Soubory třetích stran si ponechávají vlastní licence:

| Součást | Licence |
| --- | --- |
| Bootstrap | [MIT](assets/vendor/bootstrap/5.3.8/LICENSE) |
| Popper v Bootstrap JS bundle | [MIT](assets/vendor/bootstrap/5.3.8/POPPER-LICENSE) |
| Font Awesome Free | [MIT pro kód, CC BY 4.0 pro ikony, SIL OFL 1.1 pro fonty](assets/vendor/fontawesome/6.7.2/LICENSE.txt) |
| Work Sans | [SIL Open Font License 1.1](fonts/OFL.txt) |

Licenční oznámení a atribuce v dodaných souborech knihoven jsou zachovány.
