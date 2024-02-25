---
sidebar_position: 1
---

# Overview

`opengimbal` is a set of designs that can be stitched together
to build a gimbal. More specifically, it is a motion control gimbal, not strictly
an auto balancing camera gimbal, for which internet searches largely point to.

## Design principles

- Affordable. Offer hobbyist gimbals that should be buildable for a couple hundred USD or less. This presumes you have access to the correct tooling, which is not covered here.
- Adaptable. Multiple gimbal mechanical styles should be supported.
- Constrained. In direct conflict with above goal, our system should not be so flexible such that it is complicated to build upon. We should support a fixed range of designs that make building pragmatic without too much complexity. The boundaries of those designs are not yet defined. It is likely that we shall support two macro electromechanical variants, and a single controls system.
- End-to-end. For a handful of core designs, a full suite of components shall be provided such that the common engineer should be able to procure the parts to full assemble and operate a Gimbal.
- Modular. Standard generic interfaces, references, and terms shall be used in each logical variant of a common, modular system. For example, "axis_0" shall always be the "pan" axis regardless of the mechanical assembly, or `pin_dir_tilt` is always referenced in the control software, e.g. in contrast to `pin12`.
- Foundational. A gimbal only exists as a foundation for some other goal--searching, tracking, or entertainment. The gimbal platform is always subservient to the end goal. Satisfying common use cases shall drive macro design decisions.
