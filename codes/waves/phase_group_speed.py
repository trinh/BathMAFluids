"""Phase speed and group velocity for linear gravity waves: infinite vs finite depth.

Non-dimensionalised by sqrt(g h) and plotted against kh:
    infinite depth:  c = sqrt(g/k)                    -> 1/sqrt(kh)
                     v_g = c/2
    finite depth:    c = sqrt((g/k) tanh(kh))         -> sqrt(tanh(kh)/kh)
                     v_g = (c/2)(1 + 2kh/sinh(2kh))
Outputs phase-group-speed.{svg,pdf} into assets/.
"""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt

out = Path(__file__).resolve().parents[2] / "assets"
kh = np.linspace(1e-3, 4, 800)

c_deep = 1 / np.sqrt(kh)
vg_deep = c_deep / 2
c_fin = np.sqrt(np.tanh(kh) / kh)
vg_fin = c_fin / 2 * (1 + 2 * kh / np.sinh(2 * kh))

blue = "#1f5fa8"
fig, ax = plt.subplots(figsize=(6, 3.8))
ax.plot(kh, c_deep, "k-", lw=1.8, label=r"phase speed $c$, infinite depth")
ax.plot(kh, c_fin, "k--", lw=1.8, label=r"phase speed $c$, finite depth")
ax.plot(kh, vg_deep, "-", color=blue, lw=1.8, label=r"group velocity $v_g$, infinite depth")
ax.plot(kh, vg_fin, "--", color=blue, lw=1.8, label=r"group velocity $v_g$, finite depth")
ax.axhline(1, color="0.6", lw=0.8, ls=":")
ax.text(3.95, 1.03, r"$\sqrt{gh}$", ha="right", va="bottom", color="0.4")
ax.set_xlabel(r"$kh$")
ax.set_ylabel(r"speed$\,/\sqrt{gh}$")
ax.set_xlim(0, 4)
ax.set_ylim(0, 2.5)
ax.legend(frameon=False, loc="upper right")
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
fig.tight_layout()
for ext in ("svg", "pdf"):
    fig.savefig(out / f"phase-group-speed.{ext}")
