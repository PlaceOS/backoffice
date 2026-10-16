"""Regenerate the self-hosted fonts after updating material-symbols.

Requires fonttools[woff]==4.61.1. Run from the repository root:
    python3 config/build-icon-fonts.py
All glyphs remain available for icon names supplied by the server.
"""

from pathlib import Path
from shutil import copyfile

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "node_modules/material-symbols"
# The fonts are bundled through src/fonts/material-symbols.css. The license
# stays in public/assets so that it ships with the app.
DESTINATION = ROOT / "src/fonts"
LICENSE_DESTINATION = ROOT / "public/assets"

for style in ("rounded", "outlined", "sharp"):
    name = f"material-symbols-{style}.woff2"
    font = TTFont(SOURCE / name, recalcTimestamp=False)
    # The app does not set font-variation-settings, so pin every axis to its
    # default: 24px optical size, normal weight, unfilled, no grade.
    instantiateVariableFont(
        font, {"opsz": 24, "wght": 400, "FILL": 0, "GRAD": 0}, inplace=True
    )
    font.save(DESTINATION / name)
    print(f"{name}: {(DESTINATION / name).stat().st_size:,} bytes")

copyfile(SOURCE / "LICENSE", LICENSE_DESTINATION / "material-symbols-LICENSE.txt")
