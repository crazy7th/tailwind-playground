scss/                               # Import all ‘-dir.scss’ files
|
|- abstracts/                   
|	|- __abstracts.scss         # Import all abstracts .scss files
|	|- _fonts.scss              # Font Import
|	|- _mixins.scss             # Scss Mixins
|	|- _variables.scss          # Scss Variables
|
|- base/
|	|- __base.scss              # Import all base .scss files
|	|- _init.scss               # Initial config
|	|- _reset.scss              # Custom Reset/Normalize
|	|- _typography.scss         # Typography Rules
|	…                           # Etc.
|
|- components/
|	|- __components.scss        # Import all components .scss files
|	|- _button.scss             # Button Styles
|	|- _card.scss               # Input Styles
|	…                           # Etc.
|
|- layouts/
|	|- __layouts.scss           # Import all layouts .scss files
|	|- _footer.scss             # Footer Styles
|	|- _header.scss             # Footer Styles
|	|- _main.scss               # Main Content Styles
|	…                           # Etc.
|
|- vendor/
|	|- __vendor.scss            # Import vendor folders
|	|- tailwind/                # Tailwind
|	…                           # Etc.
|
`styles.scss                        # Main Scss File