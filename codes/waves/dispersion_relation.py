"""Dispersion relation for linear gravity waves: infinite depth vs finite depth.

Plots the non-dimensional frequency omega*sqrt(h/g) against kh:
    infinite depth:  omega = sqrt(g k)            -> sqrt(kh)
    finite depth:    omega = sqrt(g k tanh(k h))  -> sqrt(kh tanh(kh))
Outputs dispersion-finite-infinite.{svg,pdf} into assets/.
"""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt

out = Path(__file__).resolve().parents[2] / "assets"
kh = np.linspace(0, 4, 400)

fig, ax = plt.subplots(figsize=(6, 3.8))
ax.plot(kh, np.sqrt(kh), "k-", lw=1.8, label=r"infinite depth, $\omega = \sqrt{gk}$")
ax.plot(kh, np.sqrt(kh * np.tanh(kh)), "k--", lw=1.8,
        label=r"finite depth, $\omega = \sqrt{gk\,\tanh(kh)}$")
ax.set_xlabel(r"$kh$")
ax.set_ylabel(r"$\omega\sqrt{h/g}$")
ax.set_xlim(0, 4)
ax.set_ylim(0, 2.1)
ax.legend(frameon=False, loc="lower right")
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
fig.tight_layout()
for ext in ("svg", "pdf"):
    fig.savefig(out / f"dispersion-finite-infinite.{ext}")
