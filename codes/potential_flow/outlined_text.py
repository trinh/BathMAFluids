"""
outlined_text.py

Module to apply white-outlined, black-filled text effects
to all labels, titles, tick labels, and legend text in matplotlib plots.

Usage:
    import matplotlib.pyplot as plt
    from outlined_text import apply_outlined_text, apply_outlined_text_to_all

    fig, ax = plt.subplots()
    ax.plot([0, 1], [0, 1], label="Example")
    ax.set_title("My Plot")
    ax.set_xlabel("X Axis")
    ax.set_ylabel("Y Axis")
    ax.legend()

    # Apply to this axis only
    apply_outlined_text(ax)

    # Or apply to all axes in the current figure
    # apply_outlined_text_to_all()

    plt.show()
"""

import matplotlib.patheffects as path_effects

# Define the default outline effect
DEFAULT_OUTLINE = [
    path_effects.Stroke(linewidth=3, foreground="white"),
    path_effects.Normal(),
]


def apply_outlined_text(ax, outline_effect=None, z=20):
    """
    Apply outlined text effect to all text in a given Axes.

    Parameters
    ----------
    ax : matplotlib.axes.Axes
        The axes to modify.
    outline_effect : list, optional
        A list of path_effects to use. Defaults to white outline with black interior.
    z : int, optional
        Z-order to draw text above other plot elements. Default=20.
    """
    if outline_effect is None:
        outline_effect = DEFAULT_OUTLINE

    # Collect text objects
    texts = [ax.title, ax.xaxis.label, ax.yaxis.label]
    texts += ax.get_xticklabels() + ax.get_yticklabels()

    # Apply effects
    for t in texts:
        if t is not None:
            t.set_path_effects(outline_effect)
            t.set_zorder(z)
            t.set_clip_on(False)

    # Apply to legend if present
    leg = ax.get_legend()
    if leg:
        for t in leg.get_texts():
            t.set_path_effects(outline_effect)
            t.set_zorder(z)
            t.set_clip_on(False)


def apply_outlined_text_to_all(fig=None, outline_effect=None, z=20):
    """
    Apply outlined text effect to all axes in a figure.

    Parameters
    ----------
    fig : matplotlib.figure.Figure, optional
        Figure to process. Defaults to current figure.
    outline_effect : list, optional
        A list of path_effects to use.
    z : int, optional
        Z-order to draw text above other plot elements.
    """
    import matplotlib.pyplot as plt

    if fig is None:
        fig = plt.gcf()

    for ax in fig.axes:
        apply_outlined_text(ax, outline_effect=outline_effect, z=z)
