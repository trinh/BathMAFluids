var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Official description",
  "body": "Official description    Rayleigh's 1883 experiment on turbulence, as duplicated in World of Flosws (Darrigol, 2005).   Turbulence     The description of this unit in the official catalogue is the following: Aims In this unit you will explore the mathematical theory of fluid dynamics, with a view towards applications to physical phenomena such as flight, vortex motion and water waves. You will study the mathematics of conservation laws and the derivation of governing fluid dynamical equations. This unit will provide you with a foundation for further study of more advanced theory of fluid dynamics and continuum mechanics, and its application in scientific areas including engineering, physics and biology. Outcomes (i) Demonstrate an understanding of the principles of mathematical fluid dynamics; (ii) discuss and apply techniques from vector calculus and complex variable theory to analyse and solve fluid flow problems; (iii) give a qualitative and quantitative account of a range of phenomena in fluid dynamics. Content Complex analysis primer: Cauchy-Riemann equations; harmonic functions; complex maps; residue integration. The mathematics of fluid phenomena and its applications: derivation and interpretation of governing equations; reduction of governing equations to equations of simpler formulation; potential flow; vortical flow. Two-dimensional incompressible and irrotational flow: velocity potential; stream function; complex potential. Conformal mapping. Vortex motion: vortex lines and tubes; Kelvin circulation theorem; Helmholtz' principal. Water waves: free surfaces; harmonic waves; finite depth; instability; group velocity. Computational fluid dynamics.  "
},
{
  "id": "fig-rayleigh",
  "level": "2",
  "url": "frontmatter-3.html#fig-rayleigh",
  "type": "Figure",
  "number": "0.0.1",
  "title": "",
  "body": " Rayleigh's 1883 experiment on turbulence, as duplicated in World of Flosws (Darrigol, 2005).   Turbulence   "
},
{
  "id": "history",
  "level": "1",
  "url": "history.html",
  "type": "Preface",
  "number": "",
  "title": "History of the unit",
  "body": "History of the unit  Previously at Bath in the Mathematical Sciences, there were two units meant to teach continuum and fluid mechanics (or dynamics) to students. Prior to 2025, there was the MA30253 Continuum Mechanics module. This was then continued into the MA40255 Viscous fluid dynamics module.  As part of the curriculum transformation (with the first change to Year 3 in 2025), we are attempting to unify these two treatments, providing a more streamlined teaching of elementary fluid dynamics, which is oriented towards a broad range of styles of emphasis, from applied mathematics, to physics and engineering. The hope is that this new course on Fluid Dynamics provides you with a strong foundation in different basic fluid flows and their mathematical formulation and study.   "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Related units at Bath",
  "body": "Related units at Bath  We will only mention units from Year 2 onwards in this. Apart from the key pre-requisites of MA22016 (Differential equations and vector calculus) and\/or MA20223 (the older Vector calculus and partial differential equations), we make an effort to keep the material in the module self-contained. You are recommended to have taken MA22021 (partial differential equations).     MA22016: Differential equations and vector calculus   This unit forms a standard second-year module on differential equations and vector calculus, and is a key pre-requisite for this module. In addition to teaching and reviewing basic techniques for solving ordinary differential equations, you will learn about some of the core methods in vector calculus (directional derivatives; gradients; potentials; line integrals; divergence; curl; surface and volume integrals; curvilinear coordinates; integral theorems).  Note prior to curriculum transformation, this would have been part of the MA20223 unit (with additional material from the below MA22021).    MA22021: Partial differential equations   This module teaches basic techniques and theory for the core PDEs (Laplace, heat, wave equations). Generally, we will make with your broad familiarity of PDE different equation types and terminology (e.g. boundary conditions). This unit will be useful, as it will teach you some basic familiarity with partial differential equations. However, the current fluid dynamics module assumes you may not have taken it, and attempts to fill in any necessary gaps.    MA32045: Complex analysis  This module covers some of the theory and applications behind complex-valued functions. You will have encountered complex functions, e.g. in an ad-hoc way, perhaps in earlier courses on Analysis. Again, we will attempt to cover all the necessary pre-requisites, and also provide you with helpful references.       "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "Moodle and other references",
  "body": "Moodle and other references   Besides this document, the main resource for this unit is the Moodle page . Links to the video recordings, course notes, and other resources are collected there.  There are countless fluid mechanics or fluid dynamics courses and textbooks, and for the most part, the development of a first course on fluid dynamics tends to be quite similar between universities and treatments. If you would like additional references, here are a few useful ones.  However, note that our goal is to be as self-sufficient as possible via the lecture notes.     David Acheson's (1990) book Elementary fluid dynamics  : a significant part of this course follows some of the now-classic treatments that would have been developed simultaneous to the design of this book by Acheson (often used by Oxford UG students). It is written in quite an informal style.    Book cover      Multimedia Fluid Mechanics Online, edited by G. M. Homsy : a collection of videos and explanations of various fluid mechanics phenomena. This is an online resource available through the University of Bath library system.   MFMO     Milton Van Dyke's (1982) book \"An album of fluid motion\" : a classic album showing beautiful black and white images of fluid motion. Published by an iconic private press and sold (by design by Van Dyke) at affordable prices!    Book cover      Kreyszig, E. (2007) book \"Advanced engineering mathematics\" covers all the necessary essentials in terms of Vector Calculus and Complex Variables. This is one of my favourite reference texts for mathematical methods just on account of how straightfoward it is. Despite the \"engineering\" in the title, the style of presentation here fits in well with the style of UK applied mathematics.    Book cover       "
},
{
  "id": "sec-preliminary-vector-calculus",
  "level": "1",
  "url": "sec-preliminary-vector-calculus.html",
  "type": "Section",
  "number": "1.1",
  "title": "A reminder of vector calculus",
  "body": " A reminder of vector calculus   George Green's monumental work on electricity and magnetism, making use of many new concepts in vector calculus, 1828.   Cover    During the first week, we will provide a very brief review of some of the necessities that you may require in terms of vector calculus. Many of you will have taken the MA20223 Vector Calculus and Partial Differential Equations module, and a version of the 2024-25 lecture notes has been updated for easy reference on Moodle .  We will assume that you are familiar enough with how to interpret many of the vector calculus identities found in Sec. 10 of the University of Bath book of tables, which can be access on Moodle or via this link .  In general, over the next few weeks, you will want to be familiar with recalling\/looking up concepts like:   The use of identities like div curl = 0 and curl grad = 0. Some of these are found on p.24 of the above tables.    The notion of line integrals, surface integrals, and volume integrals.    The divergence theorem and Stokes' theorem. (p.24)    Conversion of vector operations and integrals into different coordinate systems (p.25)     "
},
{
  "id": "fig-intro-green",
  "level": "2",
  "url": "sec-preliminary-vector-calculus.html#fig-intro-green",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " George Green's monumental work on electricity and magnetism, making use of many new concepts in vector calculus, 1828.   Cover   "
},
{
  "id": "sec-preliminary-complex-variables",
  "level": "1",
  "url": "sec-preliminary-complex-variables.html",
  "type": "Section",
  "number": "1.2",
  "title": "A reminder of complex variables",
  "body": " A reminder of complex variables   In , we will leverage the power of complex variables to study certain problems in fluids (flow of a potential flow). One concept that you may be unfamiliar with at this stage is the concept of a branch cut .   An image from Tristan Needham's \"Visual Complex Analysis\" showing how complex mappings transform shapes from one region to another.   Cover      Basic complex representations  Generally, we write the Cartesian and polar form of a complex number as, for magnitude and angle . Below, we will consistently refer to . The decomposition of the complex exponential is given by Euler's identity:   The usual trigonometric functions can be extended to the complex plane by considering their definition in terms of complex exponentials and Euler's identity. For example, we have   Another important function we shall consider is the complex logarithm, defined as where . That this definition is sensible is verified by checking that the logarithm is the inverse of the exponential. That is,   However, the definition is troubling because it is not single-valued. For example, writing and gives two different possible values of for the same value of . We dig deeper into this issue.    Complex functions  A complex function maps points on the complex plane to points on the complex plane. For instance, the square function, can be better understood by its effect on points on the unit circle, .  Consider a particle that orbits around the unit circle in the plane at unit speed. If the particle rotates by half a revolution, with , then in the image plane, the image particle has rotated by a full revolution, with in this same unit time. This is illustrated by the image in .   A revolution of in the pre-image produces a full rotation in the image plane.   z2 map    Now we continue rotating around the unit circle in the plane, performing an additional rotation. Within the image plane, the particle has now completed another full rotation around the unit circle. This is shown in .   A revolution of in the pre-image produces a full rotation in the image plane.   z2 map      Multifunctions, branch cuts, and Riemann sheets  Now consider the inverse function of the above, given by the square root function,   Visually, we can simply consider the same figures as before, but now with the mapping proceeding from the right subfigure to the left subfigure. Observe that there is now an ambiguity, because for each point in the original plane, there are two possible images to assign for , corresponding to either the top semicircle of the left figure, or the bottom semicircle.  That is, it is unclear of whether we should define: or   Moreover there is a problem, for if we allow a \"motion\" of the values such that rotates more than a complete revolution around the origin, then is no longer well-defined and takes on multiple possible values.  This leads to the following restriction. We define a branch cut of the plane, and restrict the possible argument values. For example, we may choose hence imposing that the branch cut is along the positive real axis. This is illustrated in where the branch cut is shown as a wavy line.   Branch cut   branch cut    Alternatively, we could have equally chosen hence taken the branch cut along the negative real axis.  Once the branch cut has been selected, the previous multi-function is restricted to one of the two possible definitions above. This leads to the definition as follows.   Branches of the square root function   The positive branch of the square root, with branch cut taken along the positive real axis, is defined by for and . Other branch cut choices can be taken in an analogous manner (curve that extends from to ).  Then the above with restricted as given is a well-defined single-valued function.  There is an analogous negative branch defined as   Therefore, and make up the two \"layers\" of the square root function.  We often refer to each individual \"layer\" as a Riemann sheet Riemann sheet . The critical point is referred to as a branch point branch point .  The collection of Riemann sheets is referred to as a Riemann surface Riemann surface .    In , you will plot the Riemann surface that corresponds to . The result might look like this version created using Python graphing tool:  Riemann surface for the square root function. This shows the real part of the square root, which consists of both a positive branch and a negative branch. In the above case, we have placed the branch cut along the negative real axis.   Sqrt     A similar argument would indicate that the function requires two branch cuts in general, each cut originating from the two branch points at You will study this function in more detail in .  Also in , you will study the branch structure of the complex logarithm in .    Other functions and visualisations   The theory of complex analysis is rich in different kinds of visualisations. Another way to visualise a complex function is by considering its effect on a gridded pattern in the original -plane, and then to imagine the function as warping this pattern. With this interpretation, it will be seen clearly that the operation of essentially rotates and expands the plane. This is seen in the following video.   A famous video by Douglas Arnold and Jonathan Rogness in 2007 illustrating the visualisation of complex functions.   However, you will also encounter some of these more complex mappings, notably the inversion map, in .  The theory in the video (visualisation on the Riemann sphere) is not necessary for this course; it is presented here just out of interest (and because the video is beautiful!).   It is sensible to ask: what does this have to do with fluid mechanics? . In , we will see that the use of complex functions can map a region of fluid to another.     Differentiation of complex functions  In this chapter, we will only cover the basic necessities of visualising and studying complex functions. In , we will need additional theory on the differentiation of complex functions.    Summary  Certain complex functions are only well-defined with appropriate branch cuts chosen. However, once such restrictions are made (and an individual Riemann sheet chosen), the complex function is well defined. The branch cut will correspond to locations where the function is nonsmooth (in its real and\/or imaginary components).   "
},
{
  "id": "fig-intro-needham",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#fig-intro-needham",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " An image from Tristan Needham's \"Visual Complex Analysis\" showing how complex mappings transform shapes from one region to another.   Cover   "
},
{
  "id": "fig-intro-z2map",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#fig-intro-z2map",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " A revolution of in the pre-image produces a full rotation in the image plane.   z2 map   "
},
{
  "id": "fig-intro-z2map_02",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#fig-intro-z2map_02",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " A revolution of in the pre-image produces a full rotation in the image plane.   z2 map   "
},
{
  "id": "fig-intro-branchcut",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#fig-intro-branchcut",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Branch cut   branch cut   "
},
{
  "id": "sec-preliminary-complex-variables-5-10",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#sec-preliminary-complex-variables-5-10",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Branches of the square root function.",
  "body": " Branches of the square root function   The positive branch of the square root, with branch cut taken along the positive real axis, is defined by for and . Other branch cut choices can be taken in an analogous manner (curve that extends from to ).  Then the above with restricted as given is a well-defined single-valued function.  There is an analogous negative branch defined as   Therefore, and make up the two \"layers\" of the square root function.  We often refer to each individual \"layer\" as a Riemann sheet Riemann sheet . The critical point is referred to as a branch point branch point .  The collection of Riemann sheets is referred to as a Riemann surface Riemann surface .   "
},
{
  "id": "fig-intro-sqrt-surface",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#fig-intro-sqrt-surface",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Riemann surface for the square root function. This shows the real part of the square root, which consists of both a positive branch and a negative branch. In the above case, we have placed the branch cut along the negative real axis.   Sqrt   "
},
{
  "id": "sec-preliminary-complex-variables-6-6",
  "level": "2",
  "url": "sec-preliminary-complex-variables.html#sec-preliminary-complex-variables-6-6",
  "type": "Remark",
  "number": "1.2.7",
  "title": "",
  "body": " It is sensible to ask: what does this have to do with fluid mechanics? . In , we will see that the use of complex functions can map a region of fluid to another.  "
},
{
  "id": "ws-intro",
  "level": "1",
  "url": "ws-intro.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "Exercises",
  "body": "    The main function of this chapter was to briefly review complex functions and also review\/introduce you to the notion of branch cuts. Complex functions will be used in the potential theory of and wave theory of .     Plotting a Riemann surface   Select the branch cut of that runs along the positive real axis.     Consider a contour that starts from , then encircles the origin (anticlockwise) and returns to . What is the jump in the value of at the end of the contour as compared to the start?    Let and consider ranging from the initial value to a final value.    Let . For , if we choose the positive branch of the square root (by convention). At the other side of the branch cut, and . Therefore there is a jump in value of .      By hand, plot the Riemann surface as visualised in -space, where . You may also confirm your sketch with a computational tool, if desired.    It is useful to first consider the plot of , and then separately, what happens for the magnitude variation that depends on .    A sketch of the imaginary part of the square root function is shown below. The two key features to capture is the dependence on and the dependence on .   Sketch of the imaginary part of the square root function   Square root        A function with two branch points  Consider the function :      Choose the branch cut from in the positive real direction. Choose the branch cut from in the negative real direction. Write either or for and defined as relative angles from the two branch points.  Show that: (i) when is encircled by a complete revolution, the function jumps in value by a factor of ; (ii) that there is a similar jump in value when is encircled. Finally what happens if (iii) is encircled?  Draw a picture of the final -plane, showing the branch cuts.    (i) We have that Let be the angle about the point . Similarly let be the angle about the point .  Considering firstly a revolution around (that does not also enclose ). Let the initial point be denoted \"A\", with . And the final point be \"B\", with and .  Then so indeed there is a jump in the function about the branch cut along .  (ii) We would similarly verify that for a contour around the branch point there is a jump. Let the initial point be denoted \"A\" with . And the final point be \"B\" with . Then so indeed there is also a jump about the branch cut that runs .  (iii) For the centre point, there are two cases to consider. The first case is if only is encircled and none of the other branch points. This was the situation originally envisioned in the question. For example, consider the circle of radius 1\/2, i.e. with . You can verify that for this circle the start and end points agree.  If along with , one of the branch points is encircled, then there would be a discontinuity. If both branch points are encircled, there is no discontinuity.   Branch cut configuration for the double square root. The original choice of branches is shown on top. Through the analysis, we see that a circle (i) around does not produce a discontinuity. Hence only the second picture of the cut arrangement is needed.   Double square root        Consider now a branch cut from that tends in the positive real direction and the branch cut from tends in the positive real direction as well. Repeat the experiment above, considering (i)-(iii). Conclude that there is no jump in value along the region and hence the branch cuts required only extends between .  Draw a picture of the final -plane, showing the branch cuts.    For this situation, we would define the ranges of and . One main difference is the analysis around the point . Consider the similar loop to the above with, so in this case, notice that there is no jump due to the fact the total variation of angle is .  In essence, because both branch cuts are running in the positive real direction, when we orbit across , we jump through both branches, hence returning to the original. There is no required branch cut for .  The analysis of parts (ii) and (iii) are identical, with the exception of the angle range. However, the final result, of whether there exists a jump is the same.  In the end, the final branch cut picture is shown in the figure below.   Branch cut configuration for the double square root   Double square root        (Challenging). If you consider a plot of or , what will the Riemann surface look like? You can attempt to plot this using any tool.    This is certainly not an easy function to imagine! There are two features you may want to keep in mind. First, in examining the imaginary part of the function, if on the real axis, then the imaginary part is zero. Second, if on the real axis, then again the function is zero. Finally, for the case of the branch selection in part (b), the there is a cut along . A generated plot is shown below for the imaginary part.   The imaginary part of   surface plot        Branch cuts of the complex logarithm   Consider the complex logarithm as defined in .     Explain why there must be a branch cut imposed, originating from the branch point at .    The logarithm will have a jump in the imaginary part every rotation of in the argument.      Take the branch cut along the positive real axis. Do your best to draw the Riemann surface (consisting of the distinct Riemann sheets) of the logarithm, as visualised in the space .     The imaginary part of .   surface plot        Again, you may find it useful to confirm your work above by plotting the function using a computational tool.    There is a picture of the complex logarithm on Wikipedia .      "
},
{
  "id": "ex-Riemannsurface",
  "level": "2",
  "url": "ws-intro.html#ex-Riemannsurface",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "Plotting a Riemann surface.",
  "body": " Plotting a Riemann surface   Select the branch cut of that runs along the positive real axis.     Consider a contour that starts from , then encircles the origin (anticlockwise) and returns to . What is the jump in the value of at the end of the contour as compared to the start?    Let and consider ranging from the initial value to a final value.    Let . For , if we choose the positive branch of the square root (by convention). At the other side of the branch cut, and . Therefore there is a jump in value of .      By hand, plot the Riemann surface as visualised in -space, where . You may also confirm your sketch with a computational tool, if desired.    It is useful to first consider the plot of , and then separately, what happens for the magnitude variation that depends on .    A sketch of the imaginary part of the square root function is shown below. The two key features to capture is the dependence on and the dependence on .   Sketch of the imaginary part of the square root function   Square root      "
},
{
  "id": "ex-branch1",
  "level": "2",
  "url": "ws-intro.html#ex-branch1",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "A function with two branch points.",
  "body": " A function with two branch points  Consider the function :      Choose the branch cut from in the positive real direction. Choose the branch cut from in the negative real direction. Write either or for and defined as relative angles from the two branch points.  Show that: (i) when is encircled by a complete revolution, the function jumps in value by a factor of ; (ii) that there is a similar jump in value when is encircled. Finally what happens if (iii) is encircled?  Draw a picture of the final -plane, showing the branch cuts.    (i) We have that Let be the angle about the point . Similarly let be the angle about the point .  Considering firstly a revolution around (that does not also enclose ). Let the initial point be denoted \"A\", with . And the final point be \"B\", with and .  Then so indeed there is a jump in the function about the branch cut along .  (ii) We would similarly verify that for a contour around the branch point there is a jump. Let the initial point be denoted \"A\" with . And the final point be \"B\" with . Then so indeed there is also a jump about the branch cut that runs .  (iii) For the centre point, there are two cases to consider. The first case is if only is encircled and none of the other branch points. This was the situation originally envisioned in the question. For example, consider the circle of radius 1\/2, i.e. with . You can verify that for this circle the start and end points agree.  If along with , one of the branch points is encircled, then there would be a discontinuity. If both branch points are encircled, there is no discontinuity.   Branch cut configuration for the double square root. The original choice of branches is shown on top. Through the analysis, we see that a circle (i) around does not produce a discontinuity. Hence only the second picture of the cut arrangement is needed.   Double square root        Consider now a branch cut from that tends in the positive real direction and the branch cut from tends in the positive real direction as well. Repeat the experiment above, considering (i)-(iii). Conclude that there is no jump in value along the region and hence the branch cuts required only extends between .  Draw a picture of the final -plane, showing the branch cuts.    For this situation, we would define the ranges of and . One main difference is the analysis around the point . Consider the similar loop to the above with, so in this case, notice that there is no jump due to the fact the total variation of angle is .  In essence, because both branch cuts are running in the positive real direction, when we orbit across , we jump through both branches, hence returning to the original. There is no required branch cut for .  The analysis of parts (ii) and (iii) are identical, with the exception of the angle range. However, the final result, of whether there exists a jump is the same.  In the end, the final branch cut picture is shown in the figure below.   Branch cut configuration for the double square root   Double square root        (Challenging). If you consider a plot of or , what will the Riemann surface look like? You can attempt to plot this using any tool.    This is certainly not an easy function to imagine! There are two features you may want to keep in mind. First, in examining the imaginary part of the function, if on the real axis, then the imaginary part is zero. Second, if on the real axis, then again the function is zero. Finally, for the case of the branch selection in part (b), the there is a cut along . A generated plot is shown below for the imaginary part.   The imaginary part of   surface plot      "
},
{
  "id": "ex-log",
  "level": "2",
  "url": "ws-intro.html#ex-log",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "Branch cuts of the complex logarithm.",
  "body": " Branch cuts of the complex logarithm   Consider the complex logarithm as defined in .     Explain why there must be a branch cut imposed, originating from the branch point at .    The logarithm will have a jump in the imaginary part every rotation of in the argument.      Take the branch cut along the positive real axis. Do your best to draw the Riemann surface (consisting of the distinct Riemann sheets) of the logarithm, as visualised in the space .     The imaginary part of .   surface plot        Again, you may find it useful to confirm your work above by plotting the function using a computational tool.    There is a picture of the complex logarithm on Wikipedia .    "
},
{
  "id": "sec-eulerlagrang",
  "level": "1",
  "url": "sec-eulerlagrang.html",
  "type": "Section",
  "number": "2.1",
  "title": "Eulerian and Lagrangian coordinates",
  "body": " Eulerian and Lagrangian coordinates   There are essentially two natural ways to think of motion in a fluid. We can imagine positioning ourselves at a fixed point in space, . At this point, we then attempt to measure a fluid quantity such as the density, , or temperature, . This is essentially the Eulerian frame . One can imagine, for example, fixing sensor station into the ocean bottom, and obtaining measurements of the water temperature.   (a) The Eulerian interpretation; (b) the Lagrangian interpretation.   (a) The Eulerian interpretation; (b) the Lagrangian interpretation.    Alternatively, we can imagine tracking of a single fixed particle (or a fluid element) within the flow. The particle begins at some position. Let us define a label to describe the particle's initial position. For example, if the particle's position is given by we can define the corresponding Lagrangian label as We then ask for the corresponding measurement of the fluid quantity that corresponds to the label . For example, this is equivalent to tagging a free-floating buoy in the ocean with the label , then measuring the temperature of the water as the buoy drifts in the ocean. This Lagrangian temperature could be written where is simply a fixed quantity for the particular buoy.  We are now in a position to define the Eulerian velocity field of a fluid.    The Eulerian velocity is the velocity of the fluid at the point with spatial coordinates at time . Note that, in physical terms this velocity is the average velocity at the time of the fluid particles (e.g. molecules, ions) in a small box centred on the point . See also for a discussion of the continuum assumption.    It will be useful to introduce the concept of steady flow.    A velocity field is defined as steady if it can be written .    Note that steady flow does not mean that the fluid particles are not moving. It simply means that at a fixed point in space, the Eulerian velocity does not change in time. The Lagrangian velocity of a fluid particle will generally change in time, even in a steady flow.  A simple example of the conversion between the Eulerian and Lagrangian reference frames is in .    The convective derivative  Let us now be more specific. We wish to consider how different quantities in our flow changes with time, but the matter is made complicated by the two above perspectives (fixed or following the flow).  Again, let us consider a scalar property of the fluid (for example, its density, temperature, velocity component, pressure, etc.), and let us suppose that this quantity is a function of both position, , and time, , and denote it by . This is the Eulerian description of the property since it is defined by specifying a fixed position in space. Fixing and then measuring is akin to standing in the fluid at a fixed location and measuring the property value in time.  We can alternatively write the property by its Lagrangian description. That is, given a label , we obtain the current position of the particle associated with this label, , then obtain its property value. This we can write as the following: Now, fixing and changing corresponds to tracking the scalar property at a material point in the flow, or, equivalently, how changes as we move with the particle along the deforming fluid.  There are thus two ways of considering time derivatives.    We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is defined at a fixed material point in the fluid. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .     The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables. This is because physical forces act on physical particles, or material elements, of the fluid.   The natural question is how the two derivatives relate to one another. This is given by the following theorem.   The material\/convective derivative   The material or convective derivative can be defined in terms of Eulerian derivative in the following way:     This is a result of the chain rule. For a scalar function , we have the fact that     The proof to seems to use magic vector operations! In , we ask you to check this more carefully by expanding the vector operations explicitly.  We can now apply the above result to the question of how to calculate the acceleration within the fluid (more specifically, we are enquiring about the acceleration of a volume or particle within the fluid). The acceleration is given by the convective or material derivative of the velocity: You will practice using this formula in of the problem set.   Vector gradient  In the formula for the acceleration in , the quantity appears. This is a tensor (matrix). One mustn't be too intimidated as it is just a convenient notation.  It is worth considering what this must be by considering each individual element of the acceleration. The acceleration is calculated simply by taking the velocity, and working out the material derivative for each individual component. So we have So the above gives each of the three components of .  You may prefer to see the above written in terms of the notation for , so it is   You can also re-arrange the above in something closer to \"matrix\" form. So and where the last quantity corresponds to And hence the vector gradient can be defined as a matrix, where each row of the matrix is the gradient of the elements of the vector.  The author's opinionated note it is that it is easier simply to remember that the material derivative is applied via then it is to try and untangle the multiplication of matrix via .    "
},
{
  "id": "sec-eulerlagrang-2-2",
  "level": "2",
  "url": "sec-eulerlagrang.html#sec-eulerlagrang-2-2",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " (a) The Eulerian interpretation; (b) the Lagrangian interpretation.   (a) The Eulerian interpretation; (b) the Lagrangian interpretation.   "
},
{
  "id": "def-velocity",
  "level": "2",
  "url": "sec-eulerlagrang.html#def-velocity",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  The Eulerian velocity is the velocity of the fluid at the point with spatial coordinates at time . Note that, in physical terms this velocity is the average velocity at the time of the fluid particles (e.g. molecules, ions) in a small box centred on the point . See also for a discussion of the continuum assumption.   "
},
{
  "id": "def-steady-flow",
  "level": "2",
  "url": "sec-eulerlagrang.html#def-steady-flow",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  A velocity field is defined as steady if it can be written .   "
},
{
  "id": "def-eulerlag",
  "level": "2",
  "url": "sec-eulerlagrang.html#def-eulerlag",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": "  We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is defined at a fixed material point in the fluid. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .   "
},
{
  "id": "subsec-laglabel-7",
  "level": "2",
  "url": "sec-eulerlagrang.html#subsec-laglabel-7",
  "type": "Remark",
  "number": "2.1.5",
  "title": "",
  "body": " The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables. This is because physical forces act on physical particles, or material elements, of the fluid.  "
},
{
  "id": "thm-material-derivative",
  "level": "2",
  "url": "sec-eulerlagrang.html#thm-material-derivative",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "The material\/convective derivative.",
  "body": " The material\/convective derivative   The material or convective derivative can be defined in terms of Eulerian derivative in the following way:     This is a result of the chain rule. For a scalar function , we have the fact that    "
},
{
  "id": "remark-vector-gradient",
  "level": "2",
  "url": "sec-eulerlagrang.html#remark-vector-gradient",
  "type": "Remark",
  "number": "2.1.7",
  "title": "Vector gradient.",
  "body": " Vector gradient  In the formula for the acceleration in , the quantity appears. This is a tensor (matrix). One mustn't be too intimidated as it is just a convenient notation.  It is worth considering what this must be by considering each individual element of the acceleration. The acceleration is calculated simply by taking the velocity, and working out the material derivative for each individual component. So we have So the above gives each of the three components of .  You may prefer to see the above written in terms of the notation for , so it is   You can also re-arrange the above in something closer to \"matrix\" form. So and where the last quantity corresponds to And hence the vector gradient can be defined as a matrix, where each row of the matrix is the gradient of the elements of the vector.  The author's opinionated note it is that it is easier simply to remember that the material derivative is applied via then it is to try and untangle the multiplication of matrix via .  "
},
{
  "id": "sec-flowexamples",
  "level": "1",
  "url": "sec-flowexamples.html",
  "type": "Section",
  "number": "2.2",
  "title": "Flow visualisation, fluxes, and forces",
  "body": " Flow visualisation, fluxes, and forces   There are different ways to visualise the dynamics of a fluid. Given the velocity, , we can plot a vector field at each point in space, and at a fixed moment in time. Little arrows are used to indicate the direction and the length of the arrow can be chosen to represent the magnitude. Joining these up at a fixed moment in time into smooth curves gives the streamlines of the flow. This is often the easiest type of visualisation to perform mathematically, but the hardest experimentally.  Another representation of the flow is using particle paths or pathlines . Given a point and time, the particle path is the trajectory that would result if a particle were dropped into the flow at that chosen point and time. It is thus found by solving an equation where at every point on the trajectory, the particle's velocity is the specified velocity of the fluid.  A third representation is a streakline . If dye were continuously released into a fluid from a fixed chosen point, the streakline at a given time is the line that would be made by the dye. It is thus found by finding the current position of those particles whose pathline has visited the chosen point at any past time. This is often the easiest type of visualisation to perform experimentally, but the hardest to perform mathematically.  Note that in a steady flow, the streamlines, pathlines and streaklines all coincide. However, in an unsteady flow, they are all different. In you will study a video showing this concept.    Definitions of streamlines, pathlines, streaklines  In the definition below, we define these concepts more concretely.   Particle streamlines   Consider a fixed time, .  Select an initial point, at this time.  The streamline , through the above point is given by solving the parametric equation where is a parameter along the streamline. Choosing a variety of different initial points, , and solving the above equation gives a family of streamlines at time .    Basically, given a velocity field, we freeze time. The streamlines are those curves that are traced out by the velocity field in the \"snapshot\".   Pathline or particle path   Consider now a particle that begins at the location at time .  We consider the partical path or pathline of the particle, given by the curve and found by solving the equation Choosing a variety of initial points, , yields a family of pathlines.    The pathline or particle path from an initial point is what we would physically expect if we were to dye the point with a colour and follow the dye colour as time increases.   Streakline   Consider now fixing a location .  The streakline for a point is given by solving the equation for a variety of values of . This gives the current position of all particles that have passed through the point at any time in the past.    If it is the case that the velocity is time independent, i.e. , then the three above definitions coincide.  You will practice the theory of these concepts in and do a worked example in of the problem set.    Examples of streamlines, pathlines, and streaklines  Let us practice these concepts.   Stagnation point flow   Consider a fluid described by the two-dimensional velocity field Derive and plot the streamlines of the flow. Discuss what occurs with particle paths and streaklines.    There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.   An example of a direction field   direction field    The streamlines follow from . We seek to solve the equations Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories for different values of .  However, in this case, it is easier to remove the time-like variable, , entirely. Notice that Therefore, the trajectories lie along hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths coincide with the streamlines and streaklines.  For instance, the particle path through a particle at is given by (replacing with ): Similarly, the streakline through the point is precisely the set of points above.     Straight streamlines and circular pathlines   Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories. What occurs with the streaklines?    In this case, the velocity field is changing in time. Consider firstly the concept of the streamline in .  We solve the governing equations for the streamlines , for fixed .  This gives for constants . Therefore the streamline are given by straight lines in the plane, if is fixed.  Consider instead the definition of particle paths via . We seek to solve yielding for constants . Therefore, we see that the particle paths are closed circles (in the -plane) of unit radius encircling the point .  The fact that the streamlines are straight lines while the particle paths are circular can be visualised in    Streamlines and particle paths    Animation of streamlines    In this case, considering the streakline via , we conclude that the streakline coincides with the particle path. Can you reason why this must be the case in this situation? What is necessary in order for this not to be true?     An oscillating hose\/plate   Water flows out of an oscillating sprinkler head, held along the edge , such that the velocity field produced is given by where and are constants.  Determine the streamline that passes through the origin at and .   Determine the pathline of the particle that was at the origin at ; at .  Qualitatively describe the shape of the streakline that passes through the origin?     Isolated pathlines show that particles move along straight paths.    gif     However, viewed in terms of the streakline, the visible pattern is oscillatory.    gif        Fluxes and forces  Before we go on, we remind the reader of two important quantities that will be used in the following chapters. These are typicaly introduced in the prior modules on vector calculus.  The first is the notion of flux through a surface  flux through a surface  . Given a surface and a velocity field , the flux through the surface is the amount of flow through the surface per unit time. It is given by the integral and is the outer unit normal.  In 2D, the flux due to a 2D velocity field can also be written as In the two above formulae, refer to your previous vector calculus notes for the procedures to calculate the area element or the line element .  Finally, we may like to also calculate the total force on a surface or on a contour. If is the pointwise force applied at every point, the total force is given by The above remains a vector quantity.   "
},
{
  "id": "def-streamline",
  "level": "2",
  "url": "sec-flowexamples.html#def-streamline",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Particle streamlines.",
  "body": " Particle streamlines   Consider a fixed time, .  Select an initial point, at this time.  The streamline , through the above point is given by solving the parametric equation where is a parameter along the streamline. Choosing a variety of different initial points, , and solving the above equation gives a family of streamlines at time .   "
},
{
  "id": "def-particle-path",
  "level": "2",
  "url": "sec-flowexamples.html#def-particle-path",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Pathline or particle path.",
  "body": " Pathline or particle path   Consider now a particle that begins at the location at time .  We consider the partical path or pathline of the particle, given by the curve and found by solving the equation Choosing a variety of initial points, , yields a family of pathlines.   "
},
{
  "id": "def-streakline",
  "level": "2",
  "url": "sec-flowexamples.html#def-streakline",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Streakline.",
  "body": " Streakline   Consider now fixing a location .  The streakline for a point is given by solving the equation for a variety of values of . This gives the current position of all particles that have passed through the point at any time in the past.   "
},
{
  "id": "subsec-examples-streamlines-3",
  "level": "2",
  "url": "sec-flowexamples.html#subsec-examples-streamlines-3",
  "type": "Example",
  "number": "2.2.4",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow   Consider a fluid described by the two-dimensional velocity field Derive and plot the streamlines of the flow. Discuss what occurs with particle paths and streaklines.    There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.   An example of a direction field   direction field    The streamlines follow from . We seek to solve the equations Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories for different values of .  However, in this case, it is easier to remove the time-like variable, , entirely. Notice that Therefore, the trajectories lie along hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths coincide with the streamlines and streaklines.  For instance, the particle path through a particle at is given by (replacing with ): Similarly, the streakline through the point is precisely the set of points above.   "
},
{
  "id": "subsec-examples-streamlines-4",
  "level": "2",
  "url": "sec-flowexamples.html#subsec-examples-streamlines-4",
  "type": "Example",
  "number": "2.2.6",
  "title": "Straight streamlines and circular pathlines.",
  "body": " Straight streamlines and circular pathlines   Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories. What occurs with the streaklines?    In this case, the velocity field is changing in time. Consider firstly the concept of the streamline in .  We solve the governing equations for the streamlines , for fixed .  This gives for constants . Therefore the streamline are given by straight lines in the plane, if is fixed.  Consider instead the definition of particle paths via . We seek to solve yielding for constants . Therefore, we see that the particle paths are closed circles (in the -plane) of unit radius encircling the point .  The fact that the streamlines are straight lines while the particle paths are circular can be visualised in    Streamlines and particle paths    Animation of streamlines    In this case, considering the streakline via , we conclude that the streakline coincides with the particle path. Can you reason why this must be the case in this situation? What is necessary in order for this not to be true?   "
},
{
  "id": "subsec-examples-streamlines-5",
  "level": "2",
  "url": "sec-flowexamples.html#subsec-examples-streamlines-5",
  "type": "Example",
  "number": "2.2.8",
  "title": "An oscillating hose\/plate.",
  "body": " An oscillating hose\/plate   Water flows out of an oscillating sprinkler head, held along the edge , such that the velocity field produced is given by where and are constants.  Determine the streamline that passes through the origin at and .   Determine the pathline of the particle that was at the origin at ; at .  Qualitatively describe the shape of the streakline that passes through the origin?     Isolated pathlines show that particles move along straight paths.    gif     However, viewed in terms of the streakline, the visible pattern is oscillatory.    gif     "
},
{
  "id": "ws-kinematics",
  "level": "1",
  "url": "ws-kinematics.html",
  "type": "Exercises",
  "number": "2.3",
  "title": "Exercises",
  "body": "  The kinematics chapter covered the basic essentials about the measurement and computation of fluid velocities and acceleration. We examined the difference between Eulerian and Lagrangian coordinates and derivatives. Examples of streamlines and velocity fields were examined.      Flow visualisation    Watch the first 13 and half minutes of the video \"Flow visualisation\" from the NCFMF archives .     Name a few ways in which a fluid flow can be visualised (i.e. how does one produce, in an experiment, such a visualisation?)      Define, in words, what pathline , streakline , timeline , and streamline means. At 6:30, the author comments that \"there is no way to make a streamline visible\". Discuss this point.      Give the example, shown in the video, where the pathline, streakline, and streamlines all coincide. Draw pictures to illustrate the concept.      Give an example, shown in the video, where the pathline, streakline, and streamlines do not coincide. Draw pictures to illustrate the concept.      In the video, an intuitive explanation is given for what it means for the velocity to be incompressible . What is this explanation? (near 8:25)      Derivation of the material derivative   Prove the Eulerian representation of the material derivative, as presented in by manually expanding the components of the function. That is, consider a scalar function . Let the spatial coordinate follow and hence is defined by a specified material label . Then derive the identity for according to .    This is the chain rule. Denote the three components of . Then we differentiate through both outer arguments of :   The factor, corresponds to the velocity component in each direction. Then as desired.     Eulerian and Lagrangian descriptions   A velocity field is described in Eulerian terms in Cartesian coordinates by .     What is the Lagrangian position of the particle that starts at the point ? Describe its path. What is its velocity?    A particle moves with the velocity of the fluid. Then it must satisfy the equations Trying solutions of the form gives , so the general solution is or, equivalently, where and are constants, and Setting and gives and , so This is a circular path of radius going anticlockwise around the origin. The velocity is       Express the position and velocity in polar coordinates. What do you notice?    Note that see also , and .    The calculation works out more simply in polar coordinates; the velocity field is where is the angular unit vector given in . Then the equation for particle paths is Thus and , where . The velocity is .  Note that the expression for the velocity in polar coordinates is simpler than that in Cartesian coordinates, being in one coordinate direction only. Performing this conversion makes it easier to find pathlines and streamlines.  This flow is an example of rigid-body rotation, that is the fluid is moving with a velocity field that would be attainable for a rigid body, and there is no relative motion of the fluid particles.      Eulerian and Lagrangian descriptions   A fluid flows through the nozzle shown from to with one-dimensional velocity in the -direction, where and are constants. Note that, in reality the flow would be two- or three-dimensional, but we ignore this here for simplicity.   Sketch of nozzle.        What is the particle acceleration?           If a particle starts at at time , what is its position at time ?    We have Solving by separation of variables gives,       What is its Lagrangian velocity as a function of time?    The velocity is       What is its Lagrangian acceleration as a function of time?    The acceleration is       Write the Lagrangian velocity and acceleration as a function of . Compare with the corresponding Eulerian velocity and particle acceleration. What do you notice?    The velocity is as expected. This is the same as the Eulerian velocity at the particle position. The acceleration is which is the same as the particle acceleration, as expected from the defintion.      How long does it take for a particle to travel from to ?    The particle reaches when       Particle paths and streamlines    Define the particle paths and streamlines for a velocity field . When do these coincide?    Particle paths are the trajectories of individual fluid particles, which are found by solving the ODE Streamlines are curves that are instantaneously tangent to the velocity field, and therefore satisfy where is a parameter along the streamline. The two coincide if the flow is steady, i.e. .      By drawing a sketch of a pathline and considering the points where the particle is at time and at time , show that a quantity is preserved following the flow if     We can write , where \" \" indicates smaller corrections. We need to find Now write as a Taylor series about and use this to simplify the above expression.     Pathline, showing the particle positions at times and .     shows the points and , and the equation for pathlines gives . We follow the value of following a particle: ('' '' denotes higher order terms). Thus the value is preserved if .      In a similar way, show that is constant along streamlines if     In this case we can consider the points and on the streamline, where , where \" \" indicates smaller corrections. We need to find Now write as a Taylor series about .    Now suppose that in , we have shown instead the situation of a streamline.  In this case, the points and are shown, and the equation for streamlines gives . We follow the value of along the streamline:  Thus the value of is preserved if .      Streamlines, pathlines and streaklines   The velocity of a two-dimensional fluid flow in Cartesian coordinates is , . Calculate and sketch the following:     the streamlines at a fixed time ,    The streamlines are given by for any constant . Different values of give different streamlines. See for a sketch.   Sketch of streamlines, pathline and streaklines.        the pathline of the particle starting from . Hence find and sketch the pathline of the particle that starts from ,    The pathlines for a particle starting from are given by Eliminating : This is a general pathline. For the particular particle that starts from : See for a sketch.      and the streaklines passing through .    The expression for a general pathline starting from is given by     Suppose the particle that started at hits the special point at time . From the pathline equation: Solving for and : At time the particle is at: Eliminating gives the streakline at time : See for a sketch. Note that the streamlines, pathlines and streaklines are all very different.      For a line\/curve in the , its timeline at time is the locus of the material elements at time that started on the line\/curve at . In experiments this can be visualised using a streak of dye placed initally along the line\/curve. Tracking this over time gives the timelines.  Calculate and sketch the timelines of the line (i) , (ii) .    From the pathline equation, a particle starting from reaches at time . Eliminating gives the timeline: See for a sketch.  From the pathline equation, a particle starting from reaches at time . Since can take any value, the timeline is just the line . See for a sketch.      An experiment for the material derivative    Watch around 12:00 to around 19:00 of the video \"Eulerian and Lagrangian Descriptions of Fluid Mechanics\" from the NCFMF archives .     In the video, the authors describe an experiment that one can setup to measure decay of a substance, say along a 1D segment in a river.  In the first situation, it is assumed that is distributed uniformly in the river, but is a naturally decaying substance with some uniform rate of change, . Explain what is the (material) change in that would be measured via two sensors, one upstream ane one downstream.      Next, the authors imagine a situation where is not uniformly distributed. They give a visual and analytical explanation of the material derivative, where is the horizontal velocity within the infinitessimal 1D section. Write your own explanation of the above.     "
},
{
  "id": "ex-video-flow-visualisation",
  "level": "2",
  "url": "ws-kinematics.html#ex-video-flow-visualisation",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "Flow visualisation.",
  "body": " Flow visualisation    Watch the first 13 and half minutes of the video \"Flow visualisation\" from the NCFMF archives .     Name a few ways in which a fluid flow can be visualised (i.e. how does one produce, in an experiment, such a visualisation?)      Define, in words, what pathline , streakline , timeline , and streamline means. At 6:30, the author comments that \"there is no way to make a streamline visible\". Discuss this point.      Give the example, shown in the video, where the pathline, streakline, and streamlines all coincide. Draw pictures to illustrate the concept.      Give an example, shown in the video, where the pathline, streakline, and streamlines do not coincide. Draw pictures to illustrate the concept.      In the video, an intuitive explanation is given for what it means for the velocity to be incompressible . What is this explanation? (near 8:25)    "
},
{
  "id": "ex-material-derivative",
  "level": "2",
  "url": "ws-kinematics.html#ex-material-derivative",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "Derivation of the material derivative.",
  "body": " Derivation of the material derivative   Prove the Eulerian representation of the material derivative, as presented in by manually expanding the components of the function. That is, consider a scalar function . Let the spatial coordinate follow and hence is defined by a specified material label . Then derive the identity for according to .    This is the chain rule. Denote the three components of . Then we differentiate through both outer arguments of :   The factor, corresponds to the velocity component in each direction. Then as desired.   "
},
{
  "id": "ex-eulerian-lagrangian",
  "level": "2",
  "url": "ws-kinematics.html#ex-eulerian-lagrangian",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "Eulerian and Lagrangian descriptions.",
  "body": " Eulerian and Lagrangian descriptions   A velocity field is described in Eulerian terms in Cartesian coordinates by .     What is the Lagrangian position of the particle that starts at the point ? Describe its path. What is its velocity?    A particle moves with the velocity of the fluid. Then it must satisfy the equations Trying solutions of the form gives , so the general solution is or, equivalently, where and are constants, and Setting and gives and , so This is a circular path of radius going anticlockwise around the origin. The velocity is       Express the position and velocity in polar coordinates. What do you notice?    Note that see also , and .    The calculation works out more simply in polar coordinates; the velocity field is where is the angular unit vector given in . Then the equation for particle paths is Thus and , where . The velocity is .  Note that the expression for the velocity in polar coordinates is simpler than that in Cartesian coordinates, being in one coordinate direction only. Performing this conversion makes it easier to find pathlines and streamlines.  This flow is an example of rigid-body rotation, that is the fluid is moving with a velocity field that would be attainable for a rigid body, and there is no relative motion of the fluid particles.    "
},
{
  "id": "ex-eulerian-lagrangian2",
  "level": "2",
  "url": "ws-kinematics.html#ex-eulerian-lagrangian2",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "Eulerian and Lagrangian descriptions.",
  "body": " Eulerian and Lagrangian descriptions   A fluid flows through the nozzle shown from to with one-dimensional velocity in the -direction, where and are constants. Note that, in reality the flow would be two- or three-dimensional, but we ignore this here for simplicity.   Sketch of nozzle.        What is the particle acceleration?           If a particle starts at at time , what is its position at time ?    We have Solving by separation of variables gives,       What is its Lagrangian velocity as a function of time?    The velocity is       What is its Lagrangian acceleration as a function of time?    The acceleration is       Write the Lagrangian velocity and acceleration as a function of . Compare with the corresponding Eulerian velocity and particle acceleration. What do you notice?    The velocity is as expected. This is the same as the Eulerian velocity at the particle position. The acceleration is which is the same as the particle acceleration, as expected from the defintion.      How long does it take for a particle to travel from to ?    The particle reaches when     "
},
{
  "id": "ex-particle-paths-streamlines",
  "level": "2",
  "url": "ws-kinematics.html#ex-particle-paths-streamlines",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "Particle paths and streamlines.",
  "body": " Particle paths and streamlines    Define the particle paths and streamlines for a velocity field . When do these coincide?    Particle paths are the trajectories of individual fluid particles, which are found by solving the ODE Streamlines are curves that are instantaneously tangent to the velocity field, and therefore satisfy where is a parameter along the streamline. The two coincide if the flow is steady, i.e. .      By drawing a sketch of a pathline and considering the points where the particle is at time and at time , show that a quantity is preserved following the flow if     We can write , where \" \" indicates smaller corrections. We need to find Now write as a Taylor series about and use this to simplify the above expression.     Pathline, showing the particle positions at times and .     shows the points and , and the equation for pathlines gives . We follow the value of following a particle: ('' '' denotes higher order terms). Thus the value is preserved if .      In a similar way, show that is constant along streamlines if     In this case we can consider the points and on the streamline, where , where \" \" indicates smaller corrections. We need to find Now write as a Taylor series about .    Now suppose that in , we have shown instead the situation of a streamline.  In this case, the points and are shown, and the equation for streamlines gives . We follow the value of along the streamline:  Thus the value of is preserved if .    "
},
{
  "id": "ex-streamlines-pathlines-streaklines",
  "level": "2",
  "url": "ws-kinematics.html#ex-streamlines-pathlines-streaklines",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "Streamlines, pathlines and streaklines.",
  "body": " Streamlines, pathlines and streaklines   The velocity of a two-dimensional fluid flow in Cartesian coordinates is , . Calculate and sketch the following:     the streamlines at a fixed time ,    The streamlines are given by for any constant . Different values of give different streamlines. See for a sketch.   Sketch of streamlines, pathline and streaklines.        the pathline of the particle starting from . Hence find and sketch the pathline of the particle that starts from ,    The pathlines for a particle starting from are given by Eliminating : This is a general pathline. For the particular particle that starts from : See for a sketch.      and the streaklines passing through .    The expression for a general pathline starting from is given by     Suppose the particle that started at hits the special point at time . From the pathline equation: Solving for and : At time the particle is at: Eliminating gives the streakline at time : See for a sketch. Note that the streamlines, pathlines and streaklines are all very different.      For a line\/curve in the , its timeline at time is the locus of the material elements at time that started on the line\/curve at . In experiments this can be visualised using a streak of dye placed initally along the line\/curve. Tracking this over time gives the timelines.  Calculate and sketch the timelines of the line (i) , (ii) .    From the pathline equation, a particle starting from reaches at time . Eliminating gives the timeline: See for a sketch.  From the pathline equation, a particle starting from reaches at time . Since can take any value, the timeline is just the line . See for a sketch.    "
},
{
  "id": "ex-video-radioactive",
  "level": "2",
  "url": "ws-kinematics.html#ex-video-radioactive",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "An experiment for the material derivative.",
  "body": " An experiment for the material derivative    Watch around 12:00 to around 19:00 of the video \"Eulerian and Lagrangian Descriptions of Fluid Mechanics\" from the NCFMF archives .     In the video, the authors describe an experiment that one can setup to measure decay of a substance, say along a 1D segment in a river.  In the first situation, it is assumed that is distributed uniformly in the river, but is a naturally decaying substance with some uniform rate of change, . Explain what is the (material) change in that would be measured via two sensors, one upstream ane one downstream.      Next, the authors imagine a situation where is not uniformly distributed. They give a visual and analytical explanation of the material derivative, where is the horizontal velocity within the infinitessimal 1D section. Write your own explanation of the above.    "
},
{
  "id": "sec-RTT",
  "level": "1",
  "url": "sec-RTT.html",
  "type": "Section",
  "number": "3.1",
  "title": "Reynolds’ Transport Theorem",
  "body": " Reynolds' Transport Theorem   Jacobian of Lagrangian to Eulerian  Consider a fluid volume, , that is initially dyed a certain colour. The packet of fluid is initially located at . As the fluid evolves in time, it then occupies the volume with .  As an example, we may express the density of the fluid as i.e. at every point in space and moment in time, the above retrieves the density of the fluid within a designated region (which may be changing). This is a natural quantity to study in a fixed frame of the fluid.  Alternatively, we can write which is the density of fluid for those particles making up an originally chosen volume, . This is a natural quantity to study if we were to move with the fluid; for instance, if we were to colour the volume with a dye and track its density in time.  The correspondence between the Euclidean and Lagrangian coordinates is written as    Jacobian of Lagrangian to Eulerian   Since we assume the medium is continuous, then we would generally require that the mapping from Lagrangian to Eulerian coordinates is continuous and one-to-one; then the map assigns every element (label) in the original reference configuration, denoted , a unique position, , in the deformed state.  From Multivariable Calculus, a sufficient condition for this to be true is that the Jacobian of the transformation , is finite and non-zero:     The following requires a bit of algebra, and you are not required to prove the result.   Euler's identity   The material derivative of the Jacobian of the transformation is given by where .    The proof follows from direct differentiation on the determinant and use of the identity of the material derivative.      Reynolds' Transport Theorem  We are now ready to derive a key result that eases our path towards developing the governing equations for a fluid. The result is as follows.   Reynolds' Transport Theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' Transport Theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' Transport Theorem.     It is helpful for you to convince yourself that the vector identity used in the proof is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.   In summary: the Reynolds' Transport Theorem thus gives an identity for how time differentiation can pass through the integral when the domain of integration is changing in time!   A 1D version of the Reynolds' Transport Theorem  In 1D, Reynolds' Transport Theorem reduces to an identity known as Leibniz's rule. This is presented as an exercise in .    RTT and conserved quantities  Reynolds' Transport Theorem is particularly useful when the integral quantity is a conserved quantity . A conserved quantity is something for which we can apply a principle of conservation . In practice for this course, this is usually mass or linear momentum:   Mass: and the left-hand side of is zero because mass is conserved.    Linear momentum: is now a vector quantity and, by Newton's second law , the left-hand side of equals the sum of the all the forces acting on the fluid in the control volume , which are:   Surface forces: Forces acting on the surfaces of the fluid, which could be reaction forces from the walls of a container, or forces due to pressure or stress from surrounding fluid. (Note that we will cover stress in .)    Body forces: Forces acting over the interior of the fluid, and in this course you will usually only need to consider the force of gravity, although in principle other body forces could act such as an electromagnetic force. In addition, if working in a noninertial frame of reference, other apparent forces need to be added (forces due to linear acceleration, angular acceleration and the Coriolis and centrifugal forces).           General statement of RTT   Non-examinable:   A more general statement of the Reynolds' Transport Theorem is as follows: We define a control volume  . This is a region of the fluid that we specify; it could be any fluid-containing volume, and in particular it doesn't need to follow the fluid particles (unlike ). Then the rate of change of in the system of particles equals the integral of the rate of change of over the control volume plus the net flux of the through the surface of the control volume: Here, is the amount of in the system of particles, that is the Lagrangian derivative of , is the amount of in the control volume and is the flux of across the surface of the control volume. Note that, if is conserved then we can write the left-hand side in terms of other things (zero if is mass and the sum of the forces if is linear momentum).  This is in a form that can be used to solve many problems in engineering. The key point is that these problems are about quantities on the scale of the control volume and not about the details of the flow at particular points.  Thus, for example we could consider a tank with inlets and outlets and, using the fluid in the tank as the control volume, we can apply the conservation of mass to find the volume flow rates in the inlets and outlets and the level of fluid in the tank.  We can use momentum conservation to find the force on a section of a pipe or the dynamics of a piston moving a fluid to which a known force is applied.     "
},
{
  "id": "thm-jacobian",
  "level": "2",
  "url": "sec-RTT.html#thm-jacobian",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Jacobian of Lagrangian to Eulerian.",
  "body": " Jacobian of Lagrangian to Eulerian   Since we assume the medium is continuous, then we would generally require that the mapping from Lagrangian to Eulerian coordinates is continuous and one-to-one; then the map assigns every element (label) in the original reference configuration, denoted , a unique position, , in the deformed state.  From Multivariable Calculus, a sufficient condition for this to be true is that the Jacobian of the transformation , is finite and non-zero:    "
},
{
  "id": "thm-Euleridentity",
  "level": "2",
  "url": "sec-RTT.html#thm-Euleridentity",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Euler’s identity.",
  "body": " Euler's identity   The material derivative of the Jacobian of the transformation is given by where .    The proof follows from direct differentiation on the determinant and use of the identity of the material derivative.   "
},
{
  "id": "thm-RTT",
  "level": "2",
  "url": "sec-RTT.html#thm-RTT",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "Reynolds’ Transport Theorem.",
  "body": " Reynolds' Transport Theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' Transport Theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' Transport Theorem.   "
},
{
  "id": "subsec-RTT-4",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-4",
  "type": "Note",
  "number": "3.1.4",
  "title": "",
  "body": " It is helpful for you to convince yourself that the vector identity used in the proof is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.  "
},
{
  "id": "subsec-RTT-6",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-6",
  "type": "Remark",
  "number": "3.1.5",
  "title": "A 1D version of the Reynolds’ Transport Theorem.",
  "body": " A 1D version of the Reynolds' Transport Theorem  In 1D, Reynolds' Transport Theorem reduces to an identity known as Leibniz's rule. This is presented as an exercise in .  "
},
{
  "id": "subsec-RTT-7",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-7",
  "type": "Remark",
  "number": "3.1.6",
  "title": "RTT and conserved quantities.",
  "body": " RTT and conserved quantities  Reynolds' Transport Theorem is particularly useful when the integral quantity is a conserved quantity . A conserved quantity is something for which we can apply a principle of conservation . In practice for this course, this is usually mass or linear momentum:   Mass: and the left-hand side of is zero because mass is conserved.    Linear momentum: is now a vector quantity and, by Newton's second law , the left-hand side of equals the sum of the all the forces acting on the fluid in the control volume , which are:   Surface forces: Forces acting on the surfaces of the fluid, which could be reaction forces from the walls of a container, or forces due to pressure or stress from surrounding fluid. (Note that we will cover stress in .)    Body forces: Forces acting over the interior of the fluid, and in this course you will usually only need to consider the force of gravity, although in principle other body forces could act such as an electromagnetic force. In addition, if working in a noninertial frame of reference, other apparent forces need to be added (forces due to linear acceleration, angular acceleration and the Coriolis and centrifugal forces).         "
},
{
  "id": "rem-RTT-control-volume",
  "level": "2",
  "url": "sec-RTT.html#rem-RTT-control-volume",
  "type": "Remark",
  "number": "3.1.7",
  "title": "General statement of RTT.",
  "body": " General statement of RTT   Non-examinable:   A more general statement of the Reynolds' Transport Theorem is as follows: We define a control volume  . This is a region of the fluid that we specify; it could be any fluid-containing volume, and in particular it doesn't need to follow the fluid particles (unlike ). Then the rate of change of in the system of particles equals the integral of the rate of change of over the control volume plus the net flux of the through the surface of the control volume: Here, is the amount of in the system of particles, that is the Lagrangian derivative of , is the amount of in the control volume and is the flux of across the surface of the control volume. Note that, if is conserved then we can write the left-hand side in terms of other things (zero if is mass and the sum of the forces if is linear momentum).  This is in a form that can be used to solve many problems in engineering. The key point is that these problems are about quantities on the scale of the control volume and not about the details of the flow at particular points.  Thus, for example we could consider a tank with inlets and outlets and, using the fluid in the tank as the control volume, we can apply the conservation of mass to find the volume flow rates in the inlets and outlets and the level of fluid in the tank.  We can use momentum conservation to find the force on a section of a pipe or the dynamics of a piston moving a fluid to which a known force is applied.  "
},
{
  "id": "ch-chapter03-equations-4",
  "level": "1",
  "url": "ch-chapter03-equations-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conservation of mass",
  "body": " Conservation of mass   Our task from this section is to prove the following equation for the conservation of mass of a fluid:   Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to     In fact, as it turns out, the proof of this result is trivial if we use the Reynolds' Transport Theorem and Lagrangian formulation following .   We consider the time differentiation of the mass integral, for an arbitrary material volume in the fluid.  By , we can use the Reynolds' Transport Theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .   Within the above proof, we use an idea used throughout this chapter, which is that if an integral of a quantity (the integrand) is zero for all possible domains of integration, then the integrand, itself, is zero. This is sometimes referred to as the \"Bump lemma\".   Bump lemma   Let be a sufficiently smooth function defined on . Suppose it is the case that for all . Then in .    In , you will prove the above lemma.    Derivation of mass conservation using Eulerian methods  The derivation we have just shown for , using the Lagrangian viewpoint and the Reynolds' Transport Theorem is misleadingly simple, and it can be instructive to see how the result is proved purely from the perspective of Eulerian coordinates.  For this, let us consider to be a fixed and closed subregion of the overall fluid, that does not change with time. An illustration of this is shown in .   Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid    We want to prove the following result, which essentially equates the change in mass, due to density changes, to the flow of mass in or out of the volume.   Integral form of the law of conservation of mass   Given a fixed volume element and boundary , the integral form of the law of mass conservation is     The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.    We now want to transform the integral form in into the form of a partial differential equation. To do this, apply the Divergence theorem to the right hand-side of the above integral, converting the surface integral to a volume integral. Moving all quantities to the left hand side now yields Since the above integral equation holds for all possible , it must be equivalent to the integrand equated to zero ( ). This yields our final result leading to .    Corollary of the Transport Theorem    There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . Indeed consider a moving volume , and a density that satisfies the continuity equation or . Then     This proof just follows from expansion. Pass the derivative through the integral and use the Reynolds' transport theorem formula. Then expand the quantity: where . Finally use the continuity equation on .     "
},
{
  "id": "thm-mass",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#thm-mass",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Continuity equation.",
  "body": " Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to    "
},
{
  "id": "ch-chapter03-equations-4-2-4",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#ch-chapter03-equations-4-2-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We consider the time differentiation of the mass integral, for an arbitrary material volume in the fluid.  By , we can use the Reynolds' Transport Theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .  "
},
{
  "id": "lem-bump",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#lem-bump",
  "type": "Lemma",
  "number": "3.2.2",
  "title": "Bump lemma.",
  "body": " Bump lemma   Let be a sufficiently smooth function defined on . Suppose it is the case that for all . Then in .   "
},
{
  "id": "fig-normalvolume",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#fig-normalvolume",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid   "
},
{
  "id": "ch-chapter03-equations-4-3-6",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#ch-chapter03-equations-4-3-6",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Integral form of the law of conservation of mass.",
  "body": " Integral form of the law of conservation of mass   Given a fixed volume element and boundary , the integral form of the law of mass conservation is     The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.   "
},
{
  "id": "cor-convmass",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#cor-convmass",
  "type": "Corollary",
  "number": "3.2.5",
  "title": "",
  "body": "  There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . Indeed consider a moving volume , and a density that satisfies the continuity equation or . Then     This proof just follows from expansion. Pass the derivative through the integral and use the Reynolds' transport theorem formula. Then expand the quantity: where . Finally use the continuity equation on .   "
},
{
  "id": "subsec-euler-momentum",
  "level": "1",
  "url": "subsec-euler-momentum.html",
  "type": "Section",
  "number": "3.3",
  "title": "Momentum balance",
  "body": " Momentum balance   With mass conservation now handled, we turn our eyes towards a law that governs the conservation of momentum. This is Newton's second law the rate of change of momentum of a body is equal to the sum of all forces acting on the body.  Our task from this section is to prove the following equation for the conservation of mass of a fluid:   Momentum equation   The differential form of the law of conservation of momentum, is where is the density of the fluid, is the velocity of the fluid, is the pressure, and is the acceleration due to a body force (typically gravity).    Note that above, we have used the notation for the gradient of a vector. This is explained in .    Proof of the momentum equation for an inviscid fluid  Consider again a material volume of the fluid. Then the rate of change of net momentum of this volume is equal to It is helpful to remember that the mass of a volume element is and the acceleration is , so the above is similar to mass times acceleration. However, we work with the more general form above to allow for changes in the density throughout the fluid, and also for variable fluid elements, .  We must equate the above to the sum of all surface and body forces applied to the fluid element.  An example of a body force is the force of gravity. For a small volume element of mass , the force of gravity is equal to . Therefore, the total external force due to gravity on the volume is equal to There may be other external body forces. For example, if your fluid is electrically conductive (like a plasma), there may be electromagnetic forces that must be considered. In any case, can be considered as the analogous body force.  The final type of forces we should consider are surface forces , which are applied to the boundary of the fluid element, denoted . Let us assume that at each point on the boundary, there is a per-surface area surface force, , that decomposes into component normal to the boundary, , and a component tangential to the boundary, . So the surface forces, summed over the boundary, will be In the above, the interpretation is that the force on a small patch of surface area is equal to the per-area force, say , multiplied by the area, then directed into the normal direction, .  At this point, we make a key assumption that is applied in the particular case of inviscid fluids .   Forces in inviscid fluids   In the case of inviscid fluids , we assume that the surface pressure exerted on (interior) volume elements is accounted solely by a pressure, , which acts in the inward normal direction at each point, with . Consequently, the surface force, given by , is   In particular, for the case of inviscid fluids, we ignore tangential internal forces.    The result follows by a corollary of the diverence theorem. The divergence theorem is Let where and apply to the above.    Finally, it follows by summation of the forces above that Newton's law states that We can now use the corollary to the transport theorem , with the assignment of and this allows us to the conclude that Again, the above holds for all material volumes and therefore it must follow that the integrand is zero. We conclude thus with the following result as stated in :   In , you will practice the derivation of the mass and momentum equations.   "
},
{
  "id": "thm-momentum",
  "level": "2",
  "url": "subsec-euler-momentum.html#thm-momentum",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "Momentum equation.",
  "body": " Momentum equation   The differential form of the law of conservation of momentum, is where is the density of the fluid, is the velocity of the fluid, is the pressure, and is the acceleration due to a body force (typically gravity).   "
},
{
  "id": "thm-inviscid-force",
  "level": "2",
  "url": "subsec-euler-momentum.html#thm-inviscid-force",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "Forces in inviscid fluids.",
  "body": " Forces in inviscid fluids   In the case of inviscid fluids , we assume that the surface pressure exerted on (interior) volume elements is accounted solely by a pressure, , which acts in the inward normal direction at each point, with . Consequently, the surface force, given by , is   In particular, for the case of inviscid fluids, we ignore tangential internal forces.    The result follows by a corollary of the diverence theorem. The divergence theorem is Let where and apply to the above.   "
},
{
  "id": "sec-incompressible",
  "level": "1",
  "url": "sec-incompressible.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Euler equations",
  "body": " The Euler equations   Incompressible fluids and the Euler equations  Recall from that the Jacobian relates infinitessimal volumes in Eulerian and Lagrangian frames via . So the Jacobian is a measure of the local expansion or contraction of a fluid (relative to its original state). If we use Euler's identity in the theorem, we are led to an important interpretation for what it means for a fluid to satisfy . This leads us to defining the notion of an incompressible fluid. (You already previously encountered an intuitive definition for an incompressible flow as part of ).   Incompressible fluids   A fluid is said to be incompressible if it preserves infinitessimal volumes. Since such volumes are related via , then this is equivalent to within the relevant fluid (and temporal) domain.  The following equivalence (iff) then follows:     Note that if , then indeed the an infinitessimal volume element must be of static volume for all time according to . Then by Euler's identity in , this implies Conversely, if , then again by the identity the fluid is incompressible.    So in conclusion, for the case of an incompressible fluid, it suffices to solve the equation instead of the more complicated equation in .  By the way, what happens to the mass conservation equation in if the fluid is incompressible? This leads to the following corollary.   Constant density along streamlines   For an incompressible fluid, the density is constant along streamlines, i.e.     This relies on setting in .    Let us return to consider the total sum of equations and unknowns. We have introduced the scalar mass conservation equation found in (or alternatively the more simplified equation for incompressible fluids). Also the vector momentum equation found in . This yields four scalar equations for five unknowns: the pressure , density , and the three velocity components .  One way of proceeding is to attempt to establish or to inuit a relationship between pressure and density. For instance, the assumption of an ideal gas law can be derived from kinetic theory, which leads to the empirical law that , relating pressure in a linear fashion to density, and depending on the temperature, , and a (gas) constant . Other assumptions of the form are possible, and this is involved in the study of gases and compressible fluids .  However, empirically, we observe that in most liquids, the density only varies within a few percent under typical variations of temperature and pressure. Therefore, it is common to assume:   Constant density assumption  We often assume that in the situation of liquids, the density is taken to be constant, .   Note, then that in the case of constant density fluids, if we consider the mass conservation equation , it follows that . Therefore, from the definition , we conclude that the fluid is indeed incompressible.   Confusingly, in many references, authors define a fluid to be incompressible if is constant. However, we see this is not necessarily the case. A fluid can be incompressible and therefore without being constant.   We are finally ready to state the Euler equations .   Euler equations   The Euler equations consist of the continuity equation and momentum equations , considered in the situation of an incompressible fluid: Note this is then four scalar equations for the three unknown velocities in and pressure . We shall assume in the course that incompressible fluids have constant density, . The above Euler equations include the (gravitational) body force .    Simple applications of the Euler equations are given in , and   You will consider the derivation of the Euler equations as part of .   Computer graphics and fluid simulations  There has always been an intimate link between the research field of fluid mechanics and the entertainment field, where cutting-edge applications in animation, movie, and video-game graphics use ideas from fluid mechanics to model fluids. Many fluid simulators will use things like the Euler equations (or \"bastardised version\") to simulate fluids. In some cases, such simulations can even happen in real time. Here is an example of a real-time Euler equation solver coded in Javascript.      Boundary conditions   boundary conditions   A great deal of the complexity of fluid motion comes from the conditions that we must consider between the fluid and its bounding surfaces. For water in the ocean, a bounding surfaces might include the ocean floor bottom and the body of a boat, down to the vegetation in the water or the sand on a beach. This can get quite complex! In this module, and when we first learn fluid dynamics, we only consider simple bounded fluid regions (fluid above a plate, fluid in a box, fluid in a channel, etc.)  In the case of a water wave, a bounding surface will also include the free surface of the wave, itself, which interacts with the surrounding atmospheric gas. This leads to the situation of free-boundary or free-surface conditions  free-surface  .  For the situation of fluid at a solid boundary, this leads us to formulate the following.   No-flux condition through a boundary  For a fluid in contact with a fixed rigid boundary, , then we require that the normal velocity of the fluid there must be zero: where is the unit normal to . This condition states that the fluid cannot flow through or separate from (hence leaving a vacuum).   It turns out that the above no-flux condition is sufficient to provide well-posed boundary conditions for most inviscid fluids. Note that in particular, we have not constrained the tangential velocity of the fluid, i.e. , where is the tangential vector at the boundary.  Later in , you will study the situation of a viscous fluid , where it will be important to consider the tangential fluid velocity.   "
},
{
  "id": "def-incompressible",
  "level": "2",
  "url": "sec-incompressible.html#def-incompressible",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "Incompressible fluids.",
  "body": " Incompressible fluids   A fluid is said to be incompressible if it preserves infinitessimal volumes. Since such volumes are related via , then this is equivalent to within the relevant fluid (and temporal) domain.  The following equivalence (iff) then follows:     Note that if , then indeed the an infinitessimal volume element must be of static volume for all time according to . Then by Euler's identity in , this implies Conversely, if , then again by the identity the fluid is incompressible.   "
},
{
  "id": "cor-incompressible-density",
  "level": "2",
  "url": "sec-incompressible.html#cor-incompressible-density",
  "type": "Corollary",
  "number": "3.4.2",
  "title": "Constant density along streamlines.",
  "body": " Constant density along streamlines   For an incompressible fluid, the density is constant along streamlines, i.e.     This relies on setting in .   "
},
{
  "id": "sec-incompressible-2-10",
  "level": "2",
  "url": "sec-incompressible.html#sec-incompressible-2-10",
  "type": "Note",
  "number": "3.4.3",
  "title": "Constant density assumption.",
  "body": " Constant density assumption  We often assume that in the situation of liquids, the density is taken to be constant, .  "
},
{
  "id": "sec-incompressible-2-12",
  "level": "2",
  "url": "sec-incompressible.html#sec-incompressible-2-12",
  "type": "Remark",
  "number": "3.4.4",
  "title": "",
  "body": " Confusingly, in many references, authors define a fluid to be incompressible if is constant. However, we see this is not necessarily the case. A fluid can be incompressible and therefore without being constant.  "
},
{
  "id": "def-euler",
  "level": "2",
  "url": "sec-incompressible.html#def-euler",
  "type": "Definition",
  "number": "3.4.5",
  "title": "Euler equations.",
  "body": " Euler equations   The Euler equations consist of the continuity equation and momentum equations , considered in the situation of an incompressible fluid: Note this is then four scalar equations for the three unknown velocities in and pressure . We shall assume in the course that incompressible fluids have constant density, . The above Euler equations include the (gravitational) body force .   "
},
{
  "id": "sec-incompressible-2-17",
  "level": "2",
  "url": "sec-incompressible.html#sec-incompressible-2-17",
  "type": "Example",
  "number": "3.4.6",
  "title": "Computer graphics and fluid simulations.",
  "body": " Computer graphics and fluid simulations  There has always been an intimate link between the research field of fluid mechanics and the entertainment field, where cutting-edge applications in animation, movie, and video-game graphics use ideas from fluid mechanics to model fluids. Many fluid simulators will use things like the Euler equations (or \"bastardised version\") to simulate fluids. In some cases, such simulations can even happen in real time. Here is an example of a real-time Euler equation solver coded in Javascript.   "
},
{
  "id": "note-noflux-BC",
  "level": "2",
  "url": "sec-incompressible.html#note-noflux-BC",
  "type": "Note",
  "number": "3.4.7",
  "title": "No-flux condition through a boundary.",
  "body": " No-flux condition through a boundary  For a fluid in contact with a fixed rigid boundary, , then we require that the normal velocity of the fluid there must be zero: where is the unit normal to . This condition states that the fluid cannot flow through or separate from (hence leaving a vacuum).  "
},
{
  "id": "sec-bernoulli",
  "level": "1",
  "url": "sec-bernoulli.html",
  "type": "Section",
  "number": "3.5",
  "title": "Bernoulli’s equation",
  "body": " Bernoulli's equation   There is a reformulation of the momentum equations that proves to be useful. In essence, it emerges from attempting to integrate the momentum equation and yields the famous Bernoulli equation(s) .  We will first need a vector identity.    Note the following identity:     The proof follows from direct expansion of both sides.    It will also be useful for us to introduce the notion of vorticity.   Vorticity of a vector field   The vorticity , , of a vector field is defined by The vorticity is a measure of the local rotation of the flow.    Let us recall the definition of a conservative force .   Conservative forces   A force is a conservative force if and only if there exists a potential , such that in a simply connected region where the quantities are defined.    Note the distinction about a simply-connected neighbourhood. The above is not quite the definition of a conservative force (typically defined to be a force for which the work done on an object between two points is independent of path). For now, this is not an important distinction since we will focus on fluid regions that are free of holes. Until told otherwise, we will always assume that the fluid is simply connected and therefore the above serves as a definition of conservative forces.   Bernoulli's equation for steady flow   Bernoulli's equation (theorem) for steady flow states that where we have assumed that the body force is conservative , i.e. it can be written as for a potential function, .    Start from the momentum equation , and use the vector identity gives   Next, the flow is steady, and therefore we can zero the first term. This leaves We now take the dot product of both sides of the equation with . We use the fact that, since it is a triple scalar product with two repeated entries. It therefore results in the fact that Notice that this is the steady component that comes from the material derivative, . So we conclude that is constant along streamlines of the flow.  It is useful to note that if we use the definition of vorticity in , and the definition of in , we have from the above that a form that will be useful, shortly.     For the typical gravity force directed in the direction, we can write . So in this case, the (gravitational) potential is .   The proof of introduced a useful form of the momentum equation using the vorticity function, resulting in . This leads to the so-called vorticity equation form of the momentum equation.   The vorticity equation for incompressible flow   The momentum equation for incompressible flow, reposed in terms of the vorticity is: or, equivalently, and is known as the vorticity equation .    In the proof, it is useful to use the vector identity for the curl of a cross product:    Crucially, we recall the result that \"curl grad equals zero\" for a vector field. So from , we take the curl of both sides to obtain Expanding the outer cross product, the first term can be simplified by swapping differentiation in space with differentiation in time. The second term requires the cross product identity . For the second term, we get with the first zero resulting in the fact that \"div curl equals zero\", while the second results from incompressibility.  Thus we have, which is the main result.   You will prove this result from first principles in .    Potential flow  We are interested in the simplest scenarios that will result in reducing the governing equations. Previosly, we introduced the notion of incompressible flows, which results in the Euler equations in and in particular, the reduction of the mass conservation equation to .  We attempt to reduce further by assuming that the fluid is irrotational . This lends to the following definition.   Irrotational flows   A flow is said to be irrotational if the vorticity is identically zero:     For an irrotational and incompressible flow, there is a more powerful version of Bernoulli's equation.   Bernoulli's equation for steady irrotational flow   For an incompressible and irrotational flow, Bernoulli's theorem states that where is the body force.    The proof of this relies on returning to the proof of the unsteady Bernoulli's equation in . In the proof, we arrived at the result in that For steady flow, the first term disappears. If we have the additional assumption that the flow is irrotational, then we have that , and therefore we have But the only way that all spatial derivatives is zero is if the function is constant.    You will practice an application of Bernoulli's equation in .   Airflow into or out of a room  During the lecture, just for fun, we will play this video by Matthias Wandel about airflow out of a room. This is somewhat related to Bernoulli's equation (the connection between pressure and velocity), though the situation is considerably more difficult.    Pascal's bursting barrel  For fun during the lecture, we will play this video demonstration done at Princeton demonstrating the power of hydrostatic pressure.    Urination across species  During the lecture, we will play this video describing the work by Yang et al. on \"Duration of urination does not change with body size\" . The title is not quite accurate, and the article describe that for most mammals tested greater than about 3kg, this is true. Bernoulli's equation is used.    "
},
{
  "id": "ident-ugradu",
  "level": "2",
  "url": "sec-bernoulli.html#ident-ugradu",
  "type": "Identity",
  "number": "3.5.1",
  "title": "",
  "body": "  Note the following identity:     The proof follows from direct expansion of both sides.   "
},
{
  "id": "def-vorticity",
  "level": "2",
  "url": "sec-bernoulli.html#def-vorticity",
  "type": "Definition",
  "number": "3.5.2",
  "title": "Vorticity of a vector field.",
  "body": " Vorticity of a vector field   The vorticity , , of a vector field is defined by The vorticity is a measure of the local rotation of the flow.   "
},
{
  "id": "def-conservative-force",
  "level": "2",
  "url": "sec-bernoulli.html#def-conservative-force",
  "type": "Definition",
  "number": "3.5.3",
  "title": "Conservative forces.",
  "body": " Conservative forces   A force is a conservative force if and only if there exists a potential , such that in a simply connected region where the quantities are defined.   "
},
{
  "id": "thm-bernoulli-steady",
  "level": "2",
  "url": "sec-bernoulli.html#thm-bernoulli-steady",
  "type": "Theorem",
  "number": "3.5.4",
  "title": "Bernoulli’s equation for steady flow.",
  "body": " Bernoulli's equation for steady flow   Bernoulli's equation (theorem) for steady flow states that where we have assumed that the body force is conservative , i.e. it can be written as for a potential function, .    Start from the momentum equation , and use the vector identity gives   Next, the flow is steady, and therefore we can zero the first term. This leaves We now take the dot product of both sides of the equation with . We use the fact that, since it is a triple scalar product with two repeated entries. It therefore results in the fact that Notice that this is the steady component that comes from the material derivative, . So we conclude that is constant along streamlines of the flow.  It is useful to note that if we use the definition of vorticity in , and the definition of in , we have from the above that a form that will be useful, shortly.   "
},
{
  "id": "sec-bernoulli-2-10",
  "level": "2",
  "url": "sec-bernoulli.html#sec-bernoulli-2-10",
  "type": "Remark",
  "number": "3.5.5",
  "title": "",
  "body": " For the typical gravity force directed in the direction, we can write . So in this case, the (gravitational) potential is .  "
},
{
  "id": "thm-vorticity-equation",
  "level": "2",
  "url": "sec-bernoulli.html#thm-vorticity-equation",
  "type": "Theorem",
  "number": "3.5.6",
  "title": "The vorticity equation for incompressible flow.",
  "body": " The vorticity equation for incompressible flow   The momentum equation for incompressible flow, reposed in terms of the vorticity is: or, equivalently, and is known as the vorticity equation .   "
},
{
  "id": "sec-bernoulli-2-14",
  "level": "2",
  "url": "sec-bernoulli.html#sec-bernoulli-2-14",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Crucially, we recall the result that \"curl grad equals zero\" for a vector field. So from , we take the curl of both sides to obtain Expanding the outer cross product, the first term can be simplified by swapping differentiation in space with differentiation in time. The second term requires the cross product identity . For the second term, we get with the first zero resulting in the fact that \"div curl equals zero\", while the second results from incompressibility.  Thus we have, which is the main result.  "
},
{
  "id": "def-irrotational",
  "level": "2",
  "url": "sec-bernoulli.html#def-irrotational",
  "type": "Definition",
  "number": "3.5.7",
  "title": "Irrotational flows.",
  "body": " Irrotational flows   A flow is said to be irrotational if the vorticity is identically zero:    "
},
{
  "id": "thm-bernoulli-potential",
  "level": "2",
  "url": "sec-bernoulli.html#thm-bernoulli-potential",
  "type": "Theorem",
  "number": "3.5.8",
  "title": "Bernoulli’s equation for steady irrotational flow.",
  "body": " Bernoulli's equation for steady irrotational flow   For an incompressible and irrotational flow, Bernoulli's theorem states that where is the body force.    The proof of this relies on returning to the proof of the unsteady Bernoulli's equation in . In the proof, we arrived at the result in that For steady flow, the first term disappears. If we have the additional assumption that the flow is irrotational, then we have that , and therefore we have But the only way that all spatial derivatives is zero is if the function is constant.   "
},
{
  "id": "subsec-potential-8",
  "level": "2",
  "url": "sec-bernoulli.html#subsec-potential-8",
  "type": "Example",
  "number": "3.5.9",
  "title": "Airflow into or out of a room.",
  "body": " Airflow into or out of a room  During the lecture, just for fun, we will play this video by Matthias Wandel about airflow out of a room. This is somewhat related to Bernoulli's equation (the connection between pressure and velocity), though the situation is considerably more difficult.  "
},
{
  "id": "subsec-potential-9",
  "level": "2",
  "url": "sec-bernoulli.html#subsec-potential-9",
  "type": "Example",
  "number": "3.5.10",
  "title": "Pascal’s bursting barrel.",
  "body": " Pascal's bursting barrel  For fun during the lecture, we will play this video demonstration done at Princeton demonstrating the power of hydrostatic pressure.  "
},
{
  "id": "subsec-potential-10",
  "level": "2",
  "url": "sec-bernoulli.html#subsec-potential-10",
  "type": "Example",
  "number": "3.5.11",
  "title": "Urination across species.",
  "body": " Urination across species  During the lecture, we will play this video describing the work by Yang et al. on \"Duration of urination does not change with body size\" . The title is not quite accurate, and the article describe that for most mammals tested greater than about 3kg, this is true. Bernoulli's equation is used.  "
},
{
  "id": "ws-equations",
  "level": "1",
  "url": "ws-equations.html",
  "type": "Exercises",
  "number": "3.6",
  "title": "Exercises",
  "body": "  This chapter focused on deriving the key Euler equations for an inviscid and incompressible flow, starting from first principles, and deriving the conservation laws using vector calculus. Eventually, we studied different variations of the Euler equations and its consequences.     Continuum approximation   Domestic salt flows quite well out of a container with a hole in the bottom. Following , consider whether salt matches up to the properties quoted for a fluid  What is the size of a typical salt particle? What size of hole would required so that a continuum model of the salt flow is a reasonable assumption? (Based on Q1, p. 42 by Paterson .)    Salt is not like a fluid because you can make it into a pile, whereas the surface of a resting fluid is always horizontal. However, some aspects of salt flow are similar to the flow of a fluid. A typical salt particle is approximately a cube of side mm, and therefore has a volume of approximately m . We need a size of hole that admits a very large number of particles. A reasonable value of the volume appearing in the continuum approximation might be the volume of salt grains (this was the number of gas or liquid molecules quoted in the notes), i.e. m , which is a cube of side length approximately cm. We need a hole that is many times this distance, perhaps a hole with a diameter of one metre or so might be reasonable!     Bump lemma   Within our derivations of the governing equations, we often make use of the so-called \"Bump lemma\" given in .  Give a proof of the lemma.    This proof assumes that the function is not pathological (e.g. it cannot oscillate infinitely fast, take different values for rational vs. irrational, etc.). That's what we mean by \"sufficiently smooth\".  Assume that there exists a point where . Suppose without loss of generality here. Since is sufficiently smooth (and in particular, it is continuous), then there exists a non-trivial neighbourhood near where everywhere in this neighbourhood, say . Then , contradicting the assumption. Therefore must be zero everywhere.     Leibnitz's rule   The Reynolds' Transport Theorem , which relates to the passage of a time derivative through an integral, is a general form of the 1D Leibnitz rule:      Examine the figure in . Can you associate the quantities in Leibnitz's rule with the circled elements in the figure?   Visual \"proof\" of Leibnitz's rule   Leibnitz      The first circled element is associated with the quantity: This is essentially the finite-difference version of the first term on the RHS.  The second circled element is associated with the quantity: and is associated with the area of the rectangle.  The third circled element is associated with and is associated with the area of the rectangle. Notice that for small , the rectangle height of is approximately the same as the rectangle height of .      A nice proof of the Leibnitz rule is given in this YouTube video by Brian Storey . Watch the video and follow the derivation, making your own notes.      Can you now connect the form of the rule in to the Reynolds' Transport Theorem in ?    Write the second and third terms on the RHS as        Derivation of governing equations    This is a re-derivation of what is already presented in the notes, giving you valuable practice to understand the concepts.   Starting from conservation of mass and momentum for a material volume moving in an inviscid fluid, use Reynolds' Transport Theorem to derive the equations:   What additional assumptions are required to transform the set of equations to the Euler equations of ? Apply these assumptions and conclude with the Euler equations.    The proof of the continuity equation is given in and the proof of the momentum equation is given in , so make sure you can follow these arguments and produce your own notes.  The derivation of the Euler equations, as given in requires the additional assumption of an incompressible fluid, following . Incompressibility implies that , and this equation then replaces the continuity equation.      Pressure field in uniform flow   An ideal (incompressible and irrotational) fluid in a gravitational field with density and acceleration vector (with being the unit vector in the positive -direction) has uniform velocity The pressure at the origin is fixed at .     Using the Euler equations in , find the pressure field in terms of and .    The fluid has a uniform velocity, which means that all components of vanish. The Euler equation simplifies to where Hence, the pressure is given by solving the equation, which is a vector equation. Splitting into components, we obtain Solving sequentially, the first equation gives Substituting into the second equation,  The third equation then implies  Using at the origin gives for all . Hence       Draw the contours of the pressure at a fixed time , and hence describe the pressure field.    The pressure is constant on planes normal to the vector , as illustrated below:   Contours of the pressure field at fixed .        Piston problem   The piston shown in the diagram below is pushed with a force into a pipe of length and cross-sectional area containing incompressible and irrotational fluid of density .   Schematic of piston and pipe system.    Assume that the pressure at the open end is held at atmospheric pressure, .  Assume the fluid moves as a rigid body and neglect friction and the mass of the piston. Using the Euler equations in , write down a differential equation governing the position, , of the piston at time . You may neglect gravity.    We assume that the fluid pressure at the open end of the pipe is atmospheric pressure. Since the fluid moves as a rigid body, the velocity field has no spatial gradients, and hence the Euler equation reduces to where the velocity is uniformly .  Solving for and using the fact that is atmospheric pressure at , we have   At the piston side, the pressure is equal to (recall pressure is force per unit area, therefore the piston force must be divided by ). Then      The vorticity equation   Consider an incompressible fluid, with constant density , subject to a conservative body force (i.e. for some potential function ).     Starting from the Euler equations, show that the vorticity satisfies Note that, in this question, you are expected to do a long-form calculation. The method given in the notes uses an alternative expression for the momentum equation combined with a vector identity to get the same result with less effort.    The Euler equation reads: Since the curl of a gradient is zero, is constant and we can commute derivatives, taking the curl of both sides gives We have where the final equality follows from incompressibility. Hence, as required.       Deduce that, in two-dimensional incompressible flow, is conserved following the flow.    If the flow is the -plane, we have and all -derivatives are zero. Hence the only non-zero component of the vorticity is the -component, . Thus Hence meaning that is conserved following the flow.      Using streamlines: The clepsydra   One of the earliest means for measuring the passage of time, invented by the ancient Egyptians, was the clepsydra (or ‘water thief’): a large jar with a hole in its base is filled with water. The shape of the jar was such that the interval of time taken for the water surface to pass two equally-spaced markers on the side of the jar is constant.   Clepsyndra   clepsyndra    In this question you will determine the shape of jar required to achieve this. In particular, we denote the (axisymmetric) jar radius a height above the hole by . The radius of the hole, , in general.     Explain why the curve is a streamline.    The fluid velocity at the surface of the jar satisfies , so that no fluid leaves or enters the jar through its sides. Thus, This is precisely the condition for to be a streamline.      If the surface of the water lies at , use an appropriate form of Bernoulli’s principle to calculate the speed of liquid, , leaving the jar at .  [You may assume that the desired surface speed , so that the flow is approximately steady and that the fluid pressure is atmospheric at .]    We apply Bernoulli's equation to equate the energy at a point at the edge of the free surface at and the fluid leaving the hole at . At the free surface, the pressure is atmospheric, , and the speed is . At the hole, the pressure is also atmospheric, , and the velocity is . Thus, Bernoulli's equation for the streamline joining the two points gives Assuming that , this simplifies to       Use the principle of conservation of mass to link , , and ; thereby determine the correct shape for a clepsydra.    The volume flux out of the hole is , while the rate of decrease of the volume of fluid in the jar is . Conservation of mass therefore gives or Using the result from part (b) to eliminate gives We require to be independent of time so that equally spaced intervals are traversed in equal times. Hence, The terms in the brackets are constant, so we have that the radius of the jar must vary as the fourth root of the height.     "
},
{
  "id": "ex-continuum-assumption",
  "level": "2",
  "url": "ws-equations.html#ex-continuum-assumption",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "Continuum approximation.",
  "body": " Continuum approximation   Domestic salt flows quite well out of a container with a hole in the bottom. Following , consider whether salt matches up to the properties quoted for a fluid  What is the size of a typical salt particle? What size of hole would required so that a continuum model of the salt flow is a reasonable assumption? (Based on Q1, p. 42 by Paterson .)    Salt is not like a fluid because you can make it into a pile, whereas the surface of a resting fluid is always horizontal. However, some aspects of salt flow are similar to the flow of a fluid. A typical salt particle is approximately a cube of side mm, and therefore has a volume of approximately m . We need a size of hole that admits a very large number of particles. A reasonable value of the volume appearing in the continuum approximation might be the volume of salt grains (this was the number of gas or liquid molecules quoted in the notes), i.e. m , which is a cube of side length approximately cm. We need a hole that is many times this distance, perhaps a hole with a diameter of one metre or so might be reasonable!   "
},
{
  "id": "ex-bump",
  "level": "2",
  "url": "ws-equations.html#ex-bump",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "Bump lemma.",
  "body": " Bump lemma   Within our derivations of the governing equations, we often make use of the so-called \"Bump lemma\" given in .  Give a proof of the lemma.    This proof assumes that the function is not pathological (e.g. it cannot oscillate infinitely fast, take different values for rational vs. irrational, etc.). That's what we mean by \"sufficiently smooth\".  Assume that there exists a point where . Suppose without loss of generality here. Since is sufficiently smooth (and in particular, it is continuous), then there exists a non-trivial neighbourhood near where everywhere in this neighbourhood, say . Then , contradicting the assumption. Therefore must be zero everywhere.   "
},
{
  "id": "ex-leibnitz-rule",
  "level": "2",
  "url": "ws-equations.html#ex-leibnitz-rule",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "Leibnitz’s rule.",
  "body": " Leibnitz's rule   The Reynolds' Transport Theorem , which relates to the passage of a time derivative through an integral, is a general form of the 1D Leibnitz rule:      Examine the figure in . Can you associate the quantities in Leibnitz's rule with the circled elements in the figure?   Visual \"proof\" of Leibnitz's rule   Leibnitz      The first circled element is associated with the quantity: This is essentially the finite-difference version of the first term on the RHS.  The second circled element is associated with the quantity: and is associated with the area of the rectangle.  The third circled element is associated with and is associated with the area of the rectangle. Notice that for small , the rectangle height of is approximately the same as the rectangle height of .      A nice proof of the Leibnitz rule is given in this YouTube video by Brian Storey . Watch the video and follow the derivation, making your own notes.      Can you now connect the form of the rule in to the Reynolds' Transport Theorem in ?    Write the second and third terms on the RHS as     "
},
{
  "id": "ex-euler-check",
  "level": "2",
  "url": "ws-equations.html#ex-euler-check",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "Derivation of governing equations.",
  "body": " Derivation of governing equations    This is a re-derivation of what is already presented in the notes, giving you valuable practice to understand the concepts.   Starting from conservation of mass and momentum for a material volume moving in an inviscid fluid, use Reynolds' Transport Theorem to derive the equations:   What additional assumptions are required to transform the set of equations to the Euler equations of ? Apply these assumptions and conclude with the Euler equations.    The proof of the continuity equation is given in and the proof of the momentum equation is given in , so make sure you can follow these arguments and produce your own notes.  The derivation of the Euler equations, as given in requires the additional assumption of an incompressible fluid, following . Incompressibility implies that , and this equation then replaces the continuity equation.   "
},
{
  "id": "ex-fluid-pressure-uniform-velocity",
  "level": "2",
  "url": "ws-equations.html#ex-fluid-pressure-uniform-velocity",
  "type": "Exercise",
  "number": "3.6.5",
  "title": "Pressure field in uniform flow.",
  "body": " Pressure field in uniform flow   An ideal (incompressible and irrotational) fluid in a gravitational field with density and acceleration vector (with being the unit vector in the positive -direction) has uniform velocity The pressure at the origin is fixed at .     Using the Euler equations in , find the pressure field in terms of and .    The fluid has a uniform velocity, which means that all components of vanish. The Euler equation simplifies to where Hence, the pressure is given by solving the equation, which is a vector equation. Splitting into components, we obtain Solving sequentially, the first equation gives Substituting into the second equation,  The third equation then implies  Using at the origin gives for all . Hence       Draw the contours of the pressure at a fixed time , and hence describe the pressure field.    The pressure is constant on planes normal to the vector , as illustrated below:   Contours of the pressure field at fixed .      "
},
{
  "id": "ex-piston-fluid-problem",
  "level": "2",
  "url": "ws-equations.html#ex-piston-fluid-problem",
  "type": "Exercise",
  "number": "3.6.6",
  "title": "Piston problem.",
  "body": " Piston problem   The piston shown in the diagram below is pushed with a force into a pipe of length and cross-sectional area containing incompressible and irrotational fluid of density .   Schematic of piston and pipe system.    Assume that the pressure at the open end is held at atmospheric pressure, .  Assume the fluid moves as a rigid body and neglect friction and the mass of the piston. Using the Euler equations in , write down a differential equation governing the position, , of the piston at time . You may neglect gravity.    We assume that the fluid pressure at the open end of the pipe is atmospheric pressure. Since the fluid moves as a rigid body, the velocity field has no spatial gradients, and hence the Euler equation reduces to where the velocity is uniformly .  Solving for and using the fact that is atmospheric pressure at , we have   At the piston side, the pressure is equal to (recall pressure is force per unit area, therefore the piston force must be divided by ). Then    "
},
{
  "id": "ex-vorticity-equation",
  "level": "2",
  "url": "ws-equations.html#ex-vorticity-equation",
  "type": "Exercise",
  "number": "3.6.7",
  "title": "The vorticity equation.",
  "body": " The vorticity equation   Consider an incompressible fluid, with constant density , subject to a conservative body force (i.e. for some potential function ).     Starting from the Euler equations, show that the vorticity satisfies Note that, in this question, you are expected to do a long-form calculation. The method given in the notes uses an alternative expression for the momentum equation combined with a vector identity to get the same result with less effort.    The Euler equation reads: Since the curl of a gradient is zero, is constant and we can commute derivatives, taking the curl of both sides gives We have where the final equality follows from incompressibility. Hence, as required.       Deduce that, in two-dimensional incompressible flow, is conserved following the flow.    If the flow is the -plane, we have and all -derivatives are zero. Hence the only non-zero component of the vorticity is the -component, . Thus Hence meaning that is conserved following the flow.    "
},
{
  "id": "ex-bernoulli-streamline",
  "level": "2",
  "url": "ws-equations.html#ex-bernoulli-streamline",
  "type": "Exercise",
  "number": "3.6.8",
  "title": "Using streamlines: The clepsydra.",
  "body": " Using streamlines: The clepsydra   One of the earliest means for measuring the passage of time, invented by the ancient Egyptians, was the clepsydra (or ‘water thief’): a large jar with a hole in its base is filled with water. The shape of the jar was such that the interval of time taken for the water surface to pass two equally-spaced markers on the side of the jar is constant.   Clepsyndra   clepsyndra    In this question you will determine the shape of jar required to achieve this. In particular, we denote the (axisymmetric) jar radius a height above the hole by . The radius of the hole, , in general.     Explain why the curve is a streamline.    The fluid velocity at the surface of the jar satisfies , so that no fluid leaves or enters the jar through its sides. Thus, This is precisely the condition for to be a streamline.      If the surface of the water lies at , use an appropriate form of Bernoulli’s principle to calculate the speed of liquid, , leaving the jar at .  [You may assume that the desired surface speed , so that the flow is approximately steady and that the fluid pressure is atmospheric at .]    We apply Bernoulli's equation to equate the energy at a point at the edge of the free surface at and the fluid leaving the hole at . At the free surface, the pressure is atmospheric, , and the speed is . At the hole, the pressure is also atmospheric, , and the velocity is . Thus, Bernoulli's equation for the streamline joining the two points gives Assuming that , this simplifies to       Use the principle of conservation of mass to link , , and ; thereby determine the correct shape for a clepsydra.    The volume flux out of the hole is , while the rate of decrease of the volume of fluid in the jar is . Conservation of mass therefore gives or Using the result from part (b) to eliminate gives We require to be independent of time so that equally spaced intervals are traversed in equal times. Hence, The terms in the brackets are constant, so we have that the radius of the jar must vary as the fourth root of the height.    "
},
{
  "id": "sec-Potential-and-streamfunction",
  "level": "1",
  "url": "sec-Potential-and-streamfunction.html",
  "type": "Section",
  "number": "4.1",
  "title": "The velocity potential",
  "body": " The velocity potential   In this chapter, we focus on 2D flows where the velocity vector is given by With the velocity given as above, the vorticity is then If we assume that the flow is irrotational according to , then and   Further, we know that if the flow is irrotational, then there exists a velocity potential , , such that . Thus the velocities are expressed as   The above result about irrotational flows is a standard result in Vector Calculus, but we will re-state the result here for reference, and provide a review of its proof.   Existence of a potential   Consider a three-dimensional time-dependent velocity field, defined on a simply connected domain   Then is irrotational, i.e. if and only if there exists a scalar potential, defined on , such that .    Define where is any contour connecting an arbitrary origin point to the point (changing the origin point will change the \"constant\" of integration ).  We can verify, using the definition of differentiation, and the fundamental theorme of calculus, applied along each of the three coordinate directions, that as desired.  The key is to prove that the above definition is unique, regardless of the choice of contour . To this end, consider two contours, and , both with the same origin point, , and end point . Then the contour is a close contour beginning and ending at .   Proof of the uniqueness of the potential    By Stokes' theorem, where is any surface with bounding curve , and with unit normal positively oriented with the bounding curve. However, the right hand-side is zero by irrotationality, and therefore and our choice of curve in the definition of the potential is irrelevant.  The converse direction of the theorem follows directly from the fact that \"curl grad equals zero\", i.e. .    Let us return to discussing the setting of potential flow.  In addition to being irrotational, we furthermore have assumed that the flow is incompressible. Therefore from , This is the crucial result, which is that in potential flows, we need only solve the Laplace equation: within the flow region. This is effectively a single linear equation for the single unknown . However, for different problems, the boundary conditions can render even this \"simple\" problem difficult.  Once the velocity potential has been solved, the velocities in the flow can be recovered from the relationship . The pressure in the flow also follows from Bernoulli's equation. For the situation of a steady potential flow, following , it is     Elementary flows  The next three examples will introduce you to the elementary flows consisting of uniform flow, stagnation point flow, and line source\/sink flows. You will also investigate the notion of a source \"strength\".   Uniform flow  uniform flow  Consider the potential given by the linear function with constants and . Then by differentiation we have that the velicity is   The image shown below shows the streamlines of the flow.   Streamlines (or velocity field) of uniform flow with and .      Stagnation point flow stagnation point flow  We can verify that the velocity potential satisfies Laplace's equation. The corresponding velocity field is given by and corresponds to stagnation point flow .  The streamlines (or velocity field) is shown below.   Streamlines (or velocity field) of stagnation point flow.      Line source  line source  We aim to derive the potential and velocity for a line source , imagined as the flow consisting of a point source or point sink that ejects\/drains fluid from a point in space. Since it would be expected for the potential to be axisymmetric, we attempt to solve in plane polar coordinates. This is given by We assume that the potential takes the form . Then direct integration gives where we have set an additional constant of integration to zero without loss of generality. The leading constant has been set to so that can be later identified with a physical quantity.  The velocity then follows from consideration of the gradient in polar form, where the unit vectors written in the Cartesian basis are and . Thus we can write the velocity as The above corresponds to a velocity field directed radially outwards from the origin. The flow is a called a line source because fluid is ejected from the origin (a source). It refers to a \"line\" because in , the source runs parallel to the -axis.  The streamlines (or velocity field) are shown below.   Streamlines (or velocity field) of line source flow.    Let us also identify the strength of this line source. Consider a closed contour around the origin. Then the quantity is the flux (the flow per unit time) of fluid crossing the contour, with denoting the unit normal along .  For simplicity, let us take the contour to be a circle of constant radius . Then since the unit normal is precisely , we have that In computing the above integral, remember that the conversion following the polar Jacobian is where .  Therefore, is the rate at which fluid is produced from the line source. If , we refer to the flow as a line sink . line sink    Crucially, because the governing fluid mechanical equation is only Laplace's equation: this is a linear partial differential equation, and therefore the summation of elementary flows also produces an admissible flow.   Line source in a uniform flow  For instance, we may combine a uniform flow in the -direction with a line source: We can then obtain the velocity field as   The streamlines (or velocity field) is shown below.   Streamlines (or velocity field) of a line source in a uniform flow with and .    Where do you think the stagnation point lies in this flow?    "
},
{
  "id": "thm-exist-potential",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#thm-exist-potential",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "Existence of a potential.",
  "body": " Existence of a potential   Consider a three-dimensional time-dependent velocity field, defined on a simply connected domain   Then is irrotational, i.e. if and only if there exists a scalar potential, defined on , such that .    Define where is any contour connecting an arbitrary origin point to the point (changing the origin point will change the \"constant\" of integration ).  We can verify, using the definition of differentiation, and the fundamental theorme of calculus, applied along each of the three coordinate directions, that as desired.  The key is to prove that the above definition is unique, regardless of the choice of contour . To this end, consider two contours, and , both with the same origin point, , and end point . Then the contour is a close contour beginning and ending at .   Proof of the uniqueness of the potential    By Stokes' theorem, where is any surface with bounding curve , and with unit normal positively oriented with the bounding curve. However, the right hand-side is zero by irrotationality, and therefore and our choice of curve in the definition of the potential is irrelevant.  The converse direction of the theorem follows directly from the fact that \"curl grad equals zero\", i.e. .   "
},
{
  "id": "example-potential-uniform",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#example-potential-uniform",
  "type": "Example",
  "number": "4.1.3",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow  Consider the potential given by the linear function with constants and . Then by differentiation we have that the velicity is   The image shown below shows the streamlines of the flow.   Streamlines (or velocity field) of uniform flow with and .    "
},
{
  "id": "example-potential-stagnation",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#example-potential-stagnation",
  "type": "Example",
  "number": "4.1.5",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow stagnation point flow  We can verify that the velocity potential satisfies Laplace's equation. The corresponding velocity field is given by and corresponds to stagnation point flow .  The streamlines (or velocity field) is shown below.   Streamlines (or velocity field) of stagnation point flow.    "
},
{
  "id": "example-potential-linesource",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#example-potential-linesource",
  "type": "Example",
  "number": "4.1.7",
  "title": "Line source.",
  "body": " Line source  line source  We aim to derive the potential and velocity for a line source , imagined as the flow consisting of a point source or point sink that ejects\/drains fluid from a point in space. Since it would be expected for the potential to be axisymmetric, we attempt to solve in plane polar coordinates. This is given by We assume that the potential takes the form . Then direct integration gives where we have set an additional constant of integration to zero without loss of generality. The leading constant has been set to so that can be later identified with a physical quantity.  The velocity then follows from consideration of the gradient in polar form, where the unit vectors written in the Cartesian basis are and . Thus we can write the velocity as The above corresponds to a velocity field directed radially outwards from the origin. The flow is a called a line source because fluid is ejected from the origin (a source). It refers to a \"line\" because in , the source runs parallel to the -axis.  The streamlines (or velocity field) are shown below.   Streamlines (or velocity field) of line source flow.    Let us also identify the strength of this line source. Consider a closed contour around the origin. Then the quantity is the flux (the flow per unit time) of fluid crossing the contour, with denoting the unit normal along .  For simplicity, let us take the contour to be a circle of constant radius . Then since the unit normal is precisely , we have that In computing the above integral, remember that the conversion following the polar Jacobian is where .  Therefore, is the rate at which fluid is produced from the line source. If , we refer to the flow as a line sink . line sink   "
},
{
  "id": "example-potential-movingsource",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#example-potential-movingsource",
  "type": "Example",
  "number": "4.1.9",
  "title": "Line source in a uniform flow.",
  "body": " Line source in a uniform flow  For instance, we may combine a uniform flow in the -direction with a line source: We can then obtain the velocity field as   The streamlines (or velocity field) is shown below.   Streamlines (or velocity field) of a line source in a uniform flow with and .    Where do you think the stagnation point lies in this flow?  "
},
{
  "id": "ch-chapter04-potentialflows-4",
  "level": "1",
  "url": "ch-chapter04-potentialflows-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "The streamfunction",
  "body": " The streamfunction   Our next task is to introduce the concept of the streamfunction . Remember that in 2D, the irrotational flow led to the equation and this led to the existence of the potential function. If we begin with incompressibility, however, we have , which can be written as And we can deduce the existence of an analogous function, the streamfunction , satisfying, Alternatively and more conveniently, we can write To establish the existence of the streamfunction, we follow a similar proof as in but now with the definition that where again is an arbitrary function of . The proof is otherwise identical, relying on establishing the independence of path of the integral using Stokes' theorem.  Why all this work? The streamfunction has an intuitive intepretation via the following result.   The streamfunction is constant along streamlines   The streamfunction, , is constant along streamlines of the flow (i.e. the trajectory formed by a particle in the flow).    The proof follows simply by the fact that and for which the substitution in the first equality follows from .  The above equality indicates that the velocity vector, , is orthogonal to the vector pointing along . However, it is known from Vector Calculus that runs along curves of steepest descent\/ascent of ---these must hence be orthogonal to the level sets of . Therefore, the level sets of are tangential to (the definition of a streamline).    A graphical depiction of the property in is shown below.   Flow between two streamlines, where the streamlines and are constant. Later, we will consider the flux through the contour illustrated in the figure along with its unit normal .     The streamfunction is thus constant on streamlines. Consider two streamlines. The following theorem relates the flux between the streamlines to the streamline values.   Flux between streamlines   Consider two streamlines and . We assume that the streamlines pass through the points A and B respectively. Consider a contour connecting A and B. The flux (net flow of fluid) through and hence between the streamlines is We have not specified the sign of the flux as it is subject to the considered direction through .    By definition, the flux is given by the integral where is any smooth path joining the two streamlines with unit normal , as shown in .  Note that given the curve, and in consideration of a small arclength element , the tangent and normal are given by Therefore we can write . Then the flux is re-written as the following: In the third line above, is the change of across the contour. Note that there is somewhat an arbitrary choice of direction for the contour , as related to the selection of the normal direction , and the positivity or negativity of the flux. To be safe, we have taken the absolute value in the problem.    An example of the use of the above theorem is given in .    Let the velocity of a two-dimensional flow be given by the formula where is a positive constant. By finding the streamfunction, , calculate the volume flux across a curve connecting points and using .    (Done in problem class) We can check, using the integration of velocity components that Hence the flux is We can verify this flux should be positive if the normal is oriented to the right of the curve from A to B.    Finally, note that the velocity potential was governed by Laplace's equation, . The streamfunction is also governed by the same Laplace's equation.   Streamfunction satisfies Laplace's equation   Like the velocity potential, the streamfunction satisfies Laplace's equation:     Substitute the relationship into .    Like in the situation of certain flows, e.g. the line source in , it is easier to work in alternative coordinate systems to study the streamfunction. Since we know that by , we can use the conversion of the curl to polar coordinates in to give which allows us to relate the radial and angular velocities to the streamfunction.    Elementary flows  Let us return to each of the examples in and reconsider their corresponding streamfunctions.   Uniform flow  uniform flow, streamfunction  From , we can directly integrate and to get up to an arbitrary constant. Therefore, lines of constant correspond to which indeed yields the image seen in .    Stagnation point flow stagnation point flow, streamfunction  Now turning to , we integrate and . This gives up to an arbitrary constant. Indeed curves of constant match the hyperbole shown in .    Line source  line source, streamfunction  For the situation of the line source in , we want to work with polar coordinates. From the previous work, we have for this situation the potential . It then follows from the polar version of the gradient in , that the velocity is entirely radial and We use the formulae in and integrate yielding Then indeed note that the lines of constant are given by the radial lines of constant , matching the illustration in .   Another remark concerns the fact that is a multi-valued function in the example of the line source , gaining a jump of every time the origin is encircled. This is indeed a warning that the standard proof, analogous to , leading to the existence of a unique streamfunction, via would not apply since the velocity field is not defined at the origin. However, despite this, we see that the streamfunction provides well-defined predictions of streamlines on the cut plane with e.g. .   Line source in a uniform flow  Like the case of the potential function in , the linearity of the equation governing the streamfunction implies that we can consider the combination of those streamfunctions for a line source with a uniform flow. This yields for the case of uniform flow of speed in the positive -direction. The streamlines are then given by having designed the constant combination on the right hand-side for convenience. Then using , we have    Our previous examples were reliant on considering the flows generated by the velocity potentials studied previously. However, we can also consider \"fundamental solutions\" of the equation in their own right. Recall that in deriving the velocity potential of the line source in , we considered the solution of an axi-symmetric problem, where is only dependent on the distance from the origin. A similar argument must imply that the analogous axi-symmetric streamfunction is a permissible solution. And this leads us to the following example.   Line vortex  line vortex  The fundamental solution for the streamfunction, in plane polar coordinates, is the axisymmetric solution, defined up to a constant, and corresponds to a line vortex .  The streamlines of such a flow correspond to circular trajectories with constant, and are visualised in    Streamlines (or velocity field) of a line vortex with .    Recall that the radial and angular velocities are given by . Therefore, we see that the velocity vector is given by and thus this flow corresponds to entirely circular trajectories orbiting the origin, and with angular velocity increasing as .  The quantity is called the vortex strength , analogous to the source strength in . Let us consider the amount of circulation around a contour that contains the origin: i.e. one envisions encircling the origin along , adding up each of the velocity components tangential to the path. This is the circulation. By Stokes' theorem it is equal to the flux of vorticity of the corresponding bounding surface.  Choosing to be the circle of radius , we have . Then the circulation is given by So indeed this gives us an intuitive understanding of . Notice that corresponds to flow in the anticlockwise sense, and corresponds to flow in the clockwise sense.  In , you will practice the computation of fluxes using line integrals.    "
},
{
  "id": "thm-streamfunction",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#thm-streamfunction",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "The streamfunction is constant along streamlines.",
  "body": " The streamfunction is constant along streamlines   The streamfunction, , is constant along streamlines of the flow (i.e. the trajectory formed by a particle in the flow).    The proof follows simply by the fact that and for which the substitution in the first equality follows from .  The above equality indicates that the velocity vector, , is orthogonal to the vector pointing along . However, it is known from Vector Calculus that runs along curves of steepest descent\/ascent of ---these must hence be orthogonal to the level sets of . Therefore, the level sets of are tangential to (the definition of a streamline).   "
},
{
  "id": "fig-streamfunction",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#fig-streamfunction",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " Flow between two streamlines, where the streamlines and are constant. Later, we will consider the flux through the contour illustrated in the figure along with its unit normal .   "
},
{
  "id": "thm-flux-streamlines",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#thm-flux-streamlines",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "Flux between streamlines.",
  "body": " Flux between streamlines   Consider two streamlines and . We assume that the streamlines pass through the points A and B respectively. Consider a contour connecting A and B. The flux (net flow of fluid) through and hence between the streamlines is We have not specified the sign of the flux as it is subject to the considered direction through .    By definition, the flux is given by the integral where is any smooth path joining the two streamlines with unit normal , as shown in .  Note that given the curve, and in consideration of a small arclength element , the tangent and normal are given by Therefore we can write . Then the flux is re-written as the following: In the third line above, is the change of across the contour. Note that there is somewhat an arbitrary choice of direction for the contour , as related to the selection of the normal direction , and the positivity or negativity of the flux. To be safe, we have taken the absolute value in the problem.   "
},
{
  "id": "ch-chapter04-potentialflows-4-2-9",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-2-9",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Let the velocity of a two-dimensional flow be given by the formula where is a positive constant. By finding the streamfunction, , calculate the volume flux across a curve connecting points and using .    (Done in problem class) We can check, using the integration of velocity components that Hence the flux is We can verify this flux should be positive if the normal is oriented to the right of the curve from A to B.   "
},
{
  "id": "thm-streamfunction-laplace",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#thm-streamfunction-laplace",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "Streamfunction satisfies Laplace’s equation.",
  "body": " Streamfunction satisfies Laplace's equation   Like the velocity potential, the streamfunction satisfies Laplace's equation:     Substitute the relationship into .   "
},
{
  "id": "ch-chapter04-potentialflows-4-3-3",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-3-3",
  "type": "Example",
  "number": "4.2.6",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow, streamfunction  From , we can directly integrate and to get up to an arbitrary constant. Therefore, lines of constant correspond to which indeed yields the image seen in .  "
},
{
  "id": "ch-chapter04-potentialflows-4-3-4",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-3-4",
  "type": "Example",
  "number": "4.2.7",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow stagnation point flow, streamfunction  Now turning to , we integrate and . This gives up to an arbitrary constant. Indeed curves of constant match the hyperbole shown in .  "
},
{
  "id": "example-streamfunction-linesource",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#example-streamfunction-linesource",
  "type": "Example",
  "number": "4.2.8",
  "title": "Line source.",
  "body": " Line source  line source, streamfunction  For the situation of the line source in , we want to work with polar coordinates. From the previous work, we have for this situation the potential . It then follows from the polar version of the gradient in , that the velocity is entirely radial and We use the formulae in and integrate yielding Then indeed note that the lines of constant are given by the radial lines of constant , matching the illustration in .  "
},
{
  "id": "ch-chapter04-potentialflows-4-3-7",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-3-7",
  "type": "Example",
  "number": "4.2.9",
  "title": "Line source in a uniform flow.",
  "body": " Line source in a uniform flow  Like the case of the potential function in , the linearity of the equation governing the streamfunction implies that we can consider the combination of those streamfunctions for a line source with a uniform flow. This yields for the case of uniform flow of speed in the positive -direction. The streamlines are then given by having designed the constant combination on the right hand-side for convenience. Then using , we have   "
},
{
  "id": "example-streamfunction-linevortex",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#example-streamfunction-linevortex",
  "type": "Example",
  "number": "4.2.10",
  "title": "Line vortex.",
  "body": " Line vortex  line vortex  The fundamental solution for the streamfunction, in plane polar coordinates, is the axisymmetric solution, defined up to a constant, and corresponds to a line vortex .  The streamlines of such a flow correspond to circular trajectories with constant, and are visualised in    Streamlines (or velocity field) of a line vortex with .    Recall that the radial and angular velocities are given by . Therefore, we see that the velocity vector is given by and thus this flow corresponds to entirely circular trajectories orbiting the origin, and with angular velocity increasing as .  The quantity is called the vortex strength , analogous to the source strength in . Let us consider the amount of circulation around a contour that contains the origin: i.e. one envisions encircling the origin along , adding up each of the velocity components tangential to the path. This is the circulation. By Stokes' theorem it is equal to the flux of vorticity of the corresponding bounding surface.  Choosing to be the circle of radius , we have . Then the circulation is given by So indeed this gives us an intuitive understanding of . Notice that corresponds to flow in the anticlockwise sense, and corresponds to flow in the clockwise sense.  In , you will practice the computation of fluxes using line integrals.  "
},
{
  "id": "sec-complex-potential",
  "level": "1",
  "url": "sec-complex-potential.html",
  "type": "Section",
  "number": "4.3",
  "title": "The complex potential",
  "body": " The complex potential   In the previous two sections, we studied the properties and utility of the velocity potential and streamfunction in the context of two-dimensional potential flows (inviscid, incompressible, irrotational). We did this with techniques from real-valued Vector Calculus. As it turns out, there is a much more elegant and powerful framework for studying two-dimensional flow which leverages the significant power of complex analysis and complex variables.  In fact, you may have already noticed this on an intuitive level, given the intimate relationships between and , seeming to exhibit a certain kind of symmetry in formulae and operations. Complex analysis is the language in which we can make this kind of \"symmetry\" transparent.  We begin by reviewing (or in some cases, introducing) you to some key theorems about the properties of well-behaved (analytic) complex functions.  In his section, we will refer to a complex function generically as where and and the real-valued decompositions of the complex-valued function . Also, .  A complex function is differentiated in much the same way as real-valued functions, with the definition that The crucial difference with real-valued differentiation is that the above limit is required to hold whilst approaching the point in any direction of the complex plane.   As long as you stay away from exceptional points of a function, the \"calculus\" of complex functions is largely the same as for real-valued functions, e.g. and the usual rules of algebraic manipulations hold. There are some caveats, however, which are dealt with on an individual manner.    Examinable content  The proofs of all theorems from this section are non-examinable, but you are expected to understand the theorems and their relevance to the theory of potential flow.   Below, we will often use susbcripts for partial differentiation, e.g. .    Cauchy's theorem and harmonic functions  We will follow the reference text by and and introduce the basic notions of complex functions that we will need.   Analyticity  analytic   A function is said to be analytic in a domain if is defined and differentiable at all points in the domain. The function is said to be analytic at a point  if it is analytic in a neighbourhood of .  When we refer to an analytic function , we mean a function that is analytic in some domain of (often clear by context).  The function is holomorphic holomorphic if it is analytic; the terms are synonyms.  An analytic function is entire entire if its region of analyticity includes all points in , including infinity.    Note that above, we have stated that a function is analytic if it is well-defined and differentiable once (!) As it turns out, the requirement that a complex-valued function is differentiable is a strong condition. An analytic function turns out to be infinitely differentiable by consequence!   In this module, we will not be concerned with formalities when they are not relevant. For example, in our definition of analyticity, we do not specify if the relevant domains are open or closed. The functions we work with are generally non-pathological---they may have isolated singularities or exceptional points, but generally the application and context will make it clear the limits of our results.   Now we have one of the most important theorems of complex analysis.   Cauchy-Riemann equations I   If is differentiable, then the Cauchy-Riemann equations, given by hold.  In particular, if is analytic on a domain, then its real and complex parts must satisfy the Cauchy-Riemann equations (in that domain).    (Non-examinable)  This follows by considering the definition of the derivative when the point is approached from the or directions.  With real, we can verify from applying the definition that On the other hand, approaching with gives Equating the two results then yields the Cauchy-Riemann equations.    It turns out that the Cauchy-Riemann equations are not only necessary to an analytic function, but are actually sufficient as well.   Cauchy-Riemann equations II   If two real-valued continuous functions, and of two real variables and have continuous firsst partial derivatives that satisfy the Cauchy-Riemann equations in some domain, then is analytic in that domain.    (Non-examinable)  The proof is not difficult, but we will refer students to for its proof. It relies on constructing the derivative of along any direction using the decomposition into the two Cartesian directions.      If is analytic, it is differentiable to all orders.    Our last step involves relating complex functions to the solution of Laplace's equation(s), i.e. or , that govern potential flow.   Analyticity and Laplace's equation   If is analytic in a domain , then and satisfy Laplace's equation, in , and have continuous second partial derivatives in .    Since is analytic, then it follows from that and . It furthermore follows from that is differentiable to all orders; therefore, we can take derivatives to obtain The second derivatives are continuous and therefore . Therefore . Laplace's equation is analogously proved for .    The above theorem is truly a remarkable result; it would not be a stretch to state that this single result was at the forefront of why complex analysis played such an important role in the development of applied mathematics and physics in the 18th, 19th, and 20th centuries.  Since Laplace's equation, , is such an important equation in physics, occuring in theories of gravitation, electrostatics, fluid mechanics, etc. the theorem establishes that there exists a parallel theory in the language of complex variables for the specific case of two-dimensional applications.  A potential fluid, for example, can be studied by manipulating complex functions of the form One can envision all kinds of different forms of ---polynomials, cosines and sines, exponentials, logarithms, etc. As long as the function is locally differentiable, it is thus analytic and therefore can be associated with (some kind of) fluid flow.    Examples of elementary flows  Let us return to the examples of flows studied in and re-interpret them using the theory of analytic functions.  We will associate the velocity potential, , and streamfunction with an analytic function in the following way.    Let and be the respective velocity potential and streamfunction for some potential flow. We define and call the complex potential .  Note that by differentiating in the horizontal and vertical directions, we have Therefore it follows that the horizontal and vertical velocity components of the flow, related via , are given by      Uniform flow  uniform flow, complex  We can verify that the complex potential for uniform flow is given from This can be compared to .    Stagnation point flow  stagnation point flow, complex  We can verify that the complex potential for a stagnation point flow is given by This can be compared to .    Line source  line source, complex  We can verify that the complex potential for a line source flow is given by This can be compared to .  The complex logarithm is an example of a function that is not analytic at the isolated point where it possesess a branch point . However, it still provides a permissible analytic function away from the origin.  The evaluation of the complex logarithm can be performed via the definition where is the polar form representation of . In particular is a multi-function with a branch point at the origin.  With the above decomposition of the logarithm in mind, notice that we can then conclude that the velocity potential and streamfunction are given by Indeed the streamlines are along the rays constant.  From , we can also compute the velocities using the relationship . We thus have once we have multiplied the top and bottom by the conjugate of .    Line vortex flow  line vortex, complex  We can verify that the complex potential for a line vortex is given by This can be compared to .  Again, using the definition of the complex logarithm, via , we can write in terms of its real and complex components as where .  Therefore, the streamfunction is given by and is constant along circular trajectories with constant distance from the origin, .    "
},
{
  "id": "sec-complex-potential-2-6",
  "level": "2",
  "url": "sec-complex-potential.html#sec-complex-potential-2-6",
  "type": "Remark",
  "number": "4.3.1",
  "title": "",
  "body": " As long as you stay away from exceptional points of a function, the \"calculus\" of complex functions is largely the same as for real-valued functions, e.g. and the usual rules of algebraic manipulations hold. There are some caveats, however, which are dealt with on an individual manner.  "
},
{
  "id": "sec-complex-potential-2-7",
  "level": "2",
  "url": "sec-complex-potential.html#sec-complex-potential-2-7",
  "type": "Remark",
  "number": "4.3.2",
  "title": "Examinable content.",
  "body": " Examinable content  The proofs of all theorems from this section are non-examinable, but you are expected to understand the theorems and their relevance to the theory of potential flow.  "
},
{
  "id": "def-analytic",
  "level": "2",
  "url": "sec-complex-potential.html#def-analytic",
  "type": "Definition",
  "number": "4.3.3",
  "title": "Analyticity.",
  "body": " Analyticity  analytic   A function is said to be analytic in a domain if is defined and differentiable at all points in the domain. The function is said to be analytic at a point  if it is analytic in a neighbourhood of .  When we refer to an analytic function , we mean a function that is analytic in some domain of (often clear by context).  The function is holomorphic holomorphic if it is analytic; the terms are synonyms.  An analytic function is entire entire if its region of analyticity includes all points in , including infinity.   "
},
{
  "id": "subsec-complex-introduction-5",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-introduction-5",
  "type": "Remark",
  "number": "4.3.4",
  "title": "",
  "body": " In this module, we will not be concerned with formalities when they are not relevant. For example, in our definition of analyticity, we do not specify if the relevant domains are open or closed. The functions we work with are generally non-pathological---they may have isolated singularities or exceptional points, but generally the application and context will make it clear the limits of our results.  "
},
{
  "id": "thm-CR1",
  "level": "2",
  "url": "sec-complex-potential.html#thm-CR1",
  "type": "Theorem",
  "number": "4.3.5",
  "title": "Cauchy-Riemann equations I.",
  "body": " Cauchy-Riemann equations I   If is differentiable, then the Cauchy-Riemann equations, given by hold.  In particular, if is analytic on a domain, then its real and complex parts must satisfy the Cauchy-Riemann equations (in that domain).    (Non-examinable)  This follows by considering the definition of the derivative when the point is approached from the or directions.  With real, we can verify from applying the definition that On the other hand, approaching with gives Equating the two results then yields the Cauchy-Riemann equations.   "
},
{
  "id": "thm-CR2",
  "level": "2",
  "url": "sec-complex-potential.html#thm-CR2",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "Cauchy-Riemann equations II.",
  "body": " Cauchy-Riemann equations II   If two real-valued continuous functions, and of two real variables and have continuous firsst partial derivatives that satisfy the Cauchy-Riemann equations in some domain, then is analytic in that domain.    (Non-examinable)  The proof is not difficult, but we will refer students to for its proof. It relies on constructing the derivative of along any direction using the decomposition into the two Cartesian directions.   "
},
{
  "id": "thm-complex-inf-derivatives",
  "level": "2",
  "url": "sec-complex-potential.html#thm-complex-inf-derivatives",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "",
  "body": "  If is analytic, it is differentiable to all orders.   "
},
{
  "id": "thm-complex-laplace",
  "level": "2",
  "url": "sec-complex-potential.html#thm-complex-laplace",
  "type": "Theorem",
  "number": "4.3.8",
  "title": "Analyticity and Laplace’s equation.",
  "body": " Analyticity and Laplace's equation   If is analytic in a domain , then and satisfy Laplace's equation, in , and have continuous second partial derivatives in .    Since is analytic, then it follows from that and . It furthermore follows from that is differentiable to all orders; therefore, we can take derivatives to obtain The second derivatives are continuous and therefore . Therefore . Laplace's equation is analogously proved for .   "
},
{
  "id": "def-complex-potential",
  "level": "2",
  "url": "sec-complex-potential.html#def-complex-potential",
  "type": "Definition",
  "number": "4.3.9",
  "title": "",
  "body": "  Let and be the respective velocity potential and streamfunction for some potential flow. We define and call the complex potential .  Note that by differentiating in the horizontal and vertical directions, we have Therefore it follows that the horizontal and vertical velocity components of the flow, related via , are given by    "
},
{
  "id": "subsec-complex-examples-5",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-5",
  "type": "Example",
  "number": "4.3.10",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow, complex  We can verify that the complex potential for uniform flow is given from This can be compared to .  "
},
{
  "id": "subsec-complex-examples-6",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-6",
  "type": "Example",
  "number": "4.3.11",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow  stagnation point flow, complex  We can verify that the complex potential for a stagnation point flow is given by This can be compared to .  "
},
{
  "id": "subsec-complex-examples-7",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-7",
  "type": "Example",
  "number": "4.3.12",
  "title": "Line source.",
  "body": " Line source  line source, complex  We can verify that the complex potential for a line source flow is given by This can be compared to .  The complex logarithm is an example of a function that is not analytic at the isolated point where it possesess a branch point . However, it still provides a permissible analytic function away from the origin.  The evaluation of the complex logarithm can be performed via the definition where is the polar form representation of . In particular is a multi-function with a branch point at the origin.  With the above decomposition of the logarithm in mind, notice that we can then conclude that the velocity potential and streamfunction are given by Indeed the streamlines are along the rays constant.  From , we can also compute the velocities using the relationship . We thus have once we have multiplied the top and bottom by the conjugate of .  "
},
{
  "id": "subsec-complex-examples-8",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-8",
  "type": "Example",
  "number": "4.3.13",
  "title": "Line vortex flow.",
  "body": " Line vortex flow  line vortex, complex  We can verify that the complex potential for a line vortex is given by This can be compared to .  Again, using the definition of the complex logarithm, via , we can write in terms of its real and complex components as where .  Therefore, the streamfunction is given by and is constant along circular trajectories with constant distance from the origin, .  "
},
{
  "id": "sec-method-of-images",
  "level": "1",
  "url": "sec-method-of-images.html",
  "type": "Section",
  "number": "4.4",
  "title": "The method of images",
  "body": " The method of images   The preceeding sections would give the misleading impression that solving potential-flow problems for two-dimensional flows is easy. This is not the case, and the primary reason is due to the presence of boundary conditions . The elementary flows we have previously considered were unconfined and\/or we did not consider additonal constraints on their behaviours at infinity. In reality, a real physical fluid, whether in the ocean, the air, or in a container, is confined in some direction, and we must often consider subtle questions about the mechanism that produces the fluid motion.  In this section, we consider the situation of solving for the potential flow in a fluid region with boundaries. Recall that this is equivalent to finding a velocity potential satisfying or an analytic complex potential, .  Recall from that on solid boundaries, we must impose the no-flux condition that     Planar boundaries: a half-plane  Consider the situation illustrated in .   A flow region in the right half-plane, with a single source placed at .    We envision a semi-infinite region of fluid bounded on the left by a wall at . A single (line) source of strength is placed at . Therefore from , we would expect that at least near , the complex potential behaves as However the above solution does not satisfy the required boundary conditions at since it corresponds to a velocity field for which the horizontal velocity penetrates through . This can be verified via inspection. For example, we can inspect the velocity or the streamlines; this is part of .  Rephrased in terms of the streamlines, the boundary condition at is equivalent to the constraint that   Our inspired solution to the above problem is referred to as the method of images .   Method of images  Given potential flow problem, we consider the superposition of elementary sinks\/sources, i.e. and\/or vortices, The strengths and locations of the individual contributions are chosen so that boundary conditions on the required boundaries (including at infinity) can be met.   Notice that the linearity of the potential flow problem is crucial: any analytic function is associated with a velocity potential that satisfies Laplace's equation, , and therefore the superposition of such functions also yields a permissible complex potential, .  We consider the addition of a \"fictitious\" image source, with the same strength at the reflected point , which lies outside of the posited fluid region. This gives the complex potential of This yields the illustration of the flow in    Placement of the image source at makes it so the boundary condition on can be satisfied.    The corresponding complex velocity is given by So indeed, on the central boundary, we have , and and the velocity is entirely vertical. So indeed, the condition that on the planar boundary is satisfied.  In order to study the complex velocity, , and develop an equation for the streamlines of the flow, we must first navigate the fact that the complex logarithm function is only well-defined in a slit complex plane. First, let Using the definition of the complex logarithm , we have The definitions of and , are shown in the below figure. In order for each logarithm to be well defined, the angles and must be restricted to be less than a complete revolution. We thus restrict and .   When considering the evaluation of the flow, we must take care of the fact that the logarithm is multi-valued. A branch cut from each of the two branch points is imposed.    In , you will be asked to develop an equation for the streamlines of this flow.  The above ideas can be extended to the situation of a line vortex in a half plane. Again, we are interested in describing the flow due to a line vortex at , and therefore we expect that near this point, However, the above potential does not satisfy the necessary zero-flux condition at .  In this case, the approach is to add an image vortex at , but opposite in direction: Therefore, this flow is composed by a line vortex circulating anticlockwise on the right, and a line vortex circulating clockwise on the left. It can be verified that the complex velocity is given by and indeed the velocity at is entirely vertical and there is no flux through the boundary.  There is an exercise in .   Uniqueness of solutions  You may be wondering: if a permissible potential function is found that satisfies the necessary boundary conditions, can we be certain it is the unique solution in the problem (up to a constant)? You may understand the construction of potentials, via the method of images, but perhaps irked that it involves the insertion of these so-called 'fictitious' points. The answer, at least for most non-pathological problems in potential flow theory (i.e. all the problems you study) is yes , the solution you have found is assured to be the only solution (up to a constant).  This is, to some extent, related to the uniqueness of analytic continuation . In a nutshall, the relevant theorem states that given two admissible complex potentials, say and , that agree on the line (in the case of the above situation), it is the case that everywhere (where they are analytic).  Therefore, you can be certain that solutions you find via the trick of method of images are the only solutions.     "
},
{
  "id": "image-planar01",
  "level": "2",
  "url": "sec-method-of-images.html#image-planar01",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " A flow region in the right half-plane, with a single source placed at .   "
},
{
  "id": "note-method-of-images",
  "level": "2",
  "url": "sec-method-of-images.html#note-method-of-images",
  "type": "Note",
  "number": "4.4.2",
  "title": "Method of images.",
  "body": " Method of images  Given potential flow problem, we consider the superposition of elementary sinks\/sources, i.e. and\/or vortices, The strengths and locations of the individual contributions are chosen so that boundary conditions on the required boundaries (including at infinity) can be met.  "
},
{
  "id": "fig-image-planar02",
  "level": "2",
  "url": "sec-method-of-images.html#fig-image-planar02",
  "type": "Figure",
  "number": "4.4.3",
  "title": "",
  "body": " Placement of the image source at makes it so the boundary condition on can be satisfied.   "
},
{
  "id": "fig-image-duallog",
  "level": "2",
  "url": "sec-method-of-images.html#fig-image-duallog",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": " When considering the evaluation of the flow, we must take care of the fact that the logarithm is multi-valued. A branch cut from each of the two branch points is imposed.   "
},
{
  "id": "subsec-images-planar-18",
  "level": "2",
  "url": "sec-method-of-images.html#subsec-images-planar-18",
  "type": "Remark",
  "number": "4.4.5",
  "title": "Uniqueness of solutions.",
  "body": " Uniqueness of solutions  You may be wondering: if a permissible potential function is found that satisfies the necessary boundary conditions, can we be certain it is the unique solution in the problem (up to a constant)? You may understand the construction of potentials, via the method of images, but perhaps irked that it involves the insertion of these so-called 'fictitious' points. The answer, at least for most non-pathological problems in potential flow theory (i.e. all the problems you study) is yes , the solution you have found is assured to be the only solution (up to a constant).  This is, to some extent, related to the uniqueness of analytic continuation . In a nutshall, the relevant theorem states that given two admissible complex potentials, say and , that agree on the line (in the case of the above situation), it is the case that everywhere (where they are analytic).  Therefore, you can be certain that solutions you find via the trick of method of images are the only solutions.  "
},
{
  "id": "sec-conformal-mapping",
  "level": "1",
  "url": "sec-conformal-mapping.html",
  "type": "Section",
  "number": "4.5",
  "title": "Conformal mapping",
  "body": " Conformal mapping   The essential idea of conformal mapping is as follows. Suppose that we are given a two-dimensional potential fluid flow problem in a region, , with impermeable boundary . There may be singularities in corresponding to sinks, sources, vortices, etc. We then seek a conformal mapping from the -plane to the -plane via so that the region is mapped to a new region , as shown in .  The hope is that within the -plane, the fluid region is sufficiently simple that a complex potential, say , can be found. This task is aided by virtue of the fact that sinks\/sources and vortices are preserved by the conformal map. Typically, we wish for to be e.g. the upper half-plane or the unit disc, with to be the real axis or circumferance of the unit disc, respectively. Once found, the complex potential in the -plane is then obtained simply by inverting the conformal map, i.e. This simple idea turns out to yield many insights to potential flows in two dimensions.   A general conformal mapping from the -plane to the -plane. The object is to map the region to the region , which is geometrically simpler.   Conformal mapping      Source in a wedge  Consider fluid contained in a wedge with walls at and , and with the fluid in . A source of strength is placed somewhere within the flow, say at the point .  Consider then the map It can be verified that this map transforms the fluid region to the upper half- -plane. Indeed the ray is mapped to the positive real axis and the ray is mapped to the negative real axis. This is shown in .   The map from the wedge-shaped region in the -plane (left) and the upper half- -plane (right).   conformal map    In the -plane, the fluid problem thus consists of solving for flow in the upper half-plane with a source of strength at the location , with an impermeable boundary on the real -axis. Indeed, from the previous section, we know this can be solved using the method of images, with a source placed at both the point and its complex conjugate point, . It then follows that the complex potential is We can then invert the above formula, expressing the complex potential in the -plane as   We can verify with a computational plot that this complex potential indeed seems to duplicate the necessary fluid flow within the wedge.    The conformal mapping method  How does it work?  We can say that the conformal mapping method is dependent on a number of key properties of conformal maps.   Conformal map   Let us specifically define a conformal map as a mapping, , where is analytic in a region and also that in .    The following properties hold for conformal maps.   Properties of conformal maps     Conformal maps preserve angles.    If the boundary is a streamline in the -plane, then the corresponding boundary is a streamline in the -plane (and vice versa).    A source (or vortex) of strength at in the -plane corresponds to a source (or vortex) of the same strength at in the -plane (and vice versa).         Standard conformal maps  The exponential map is used to map a channel to a half-space. Consider a channel of width in the region in the -plane. Then maps this channel to the upper half- -plane. The correspondence of critical points and points at infinity in the pre-image and the image is shown in . It is good to see the map as essentially 'unfolding' the infinite channel, sending points AD to the origin, while sending B to negative infinity and C to positive infinity. The conformal map will preserve the orientation of the boundary, so as we traverse along ABCD, the fluid region is always on the left.   The exponential map maps the infinite strip of height to the upper half-plane.   conformal map     Trigonometric maps are used to map semi-infinite channels into a half space. Consider for example, the region given in the following diagram in . We can then see that the semi-infinite channel of width has been mapped to the upper half-plane. The two corners at have been mapped to , respectively.   The sinusoidal transformation maps the semi-infinite strip of width to the upper half-plane.   conformal map    The above map is given by     Vortex flow in a semi-infinite channel   Consider the channel shown in the left of . Insert a vortex of strength at the point . Verify that an appropriate conformal map is given by and find where the map sends the relevant critical points of the pre-image.  Using the conformal map, find the complex velocity of the flow.   The sinh transformation maps the semi-infinite channel with height to the right half-plane.   conformal map        "
},
{
  "id": "fig-conformal-general",
  "level": "2",
  "url": "sec-conformal-mapping.html#fig-conformal-general",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " A general conformal mapping from the -plane to the -plane. The object is to map the region to the region , which is geometrically simpler.   Conformal mapping   "
},
{
  "id": "fig-conformal-wedge",
  "level": "2",
  "url": "sec-conformal-mapping.html#fig-conformal-wedge",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": " The map from the wedge-shaped region in the -plane (left) and the upper half- -plane (right).   conformal map   "
},
{
  "id": "def-conformal-mapping",
  "level": "2",
  "url": "sec-conformal-mapping.html#def-conformal-mapping",
  "type": "Definition",
  "number": "4.5.3",
  "title": "Conformal map.",
  "body": " Conformal map   Let us specifically define a conformal map as a mapping, , where is analytic in a region and also that in .   "
},
{
  "id": "prop-conformal",
  "level": "2",
  "url": "sec-conformal-mapping.html#prop-conformal",
  "type": "Proposition",
  "number": "4.5.4",
  "title": "Properties of conformal maps.",
  "body": " Properties of conformal maps     Conformal maps preserve angles.    If the boundary is a streamline in the -plane, then the corresponding boundary is a streamline in the -plane (and vice versa).    A source (or vortex) of strength at in the -plane corresponds to a source (or vortex) of the same strength at in the -plane (and vice versa).      "
},
{
  "id": "fig-conformal-exp",
  "level": "2",
  "url": "sec-conformal-mapping.html#fig-conformal-exp",
  "type": "Figure",
  "number": "4.5.5",
  "title": "",
  "body": " The exponential map maps the infinite strip of height to the upper half-plane.   conformal map   "
},
{
  "id": "fig-conformal-sin",
  "level": "2",
  "url": "sec-conformal-mapping.html#fig-conformal-sin",
  "type": "Figure",
  "number": "4.5.6",
  "title": "",
  "body": " The sinusoidal transformation maps the semi-infinite strip of width to the upper half-plane.   conformal map   "
},
{
  "id": "sec-conformal-mapping-5-7",
  "level": "2",
  "url": "sec-conformal-mapping.html#sec-conformal-mapping-5-7",
  "type": "Example",
  "number": "4.5.7",
  "title": "Vortex flow in a semi-infinite channel.",
  "body": " Vortex flow in a semi-infinite channel   Consider the channel shown in the left of . Insert a vortex of strength at the point . Verify that an appropriate conformal map is given by and find where the map sends the relevant critical points of the pre-image.  Using the conformal map, find the complex velocity of the flow.   The sinh transformation maps the semi-infinite channel with height to the right half-plane.   conformal map     "
},
{
  "id": "ws-potentialflows",
  "level": "1",
  "url": "ws-potentialflows.html",
  "type": "Exercises",
  "number": "4.6",
  "title": "Exercises",
  "body": "  There is an excellent website at www.potentialflows.com that allows you to plug in different flow elements (sources\/sinks, vortices, etc.) into a potential flow and observe the streamlines and potential-flow lines. In your exercises, use this to help you visualise the flow.    Potential flows, part 1   These exercises cover approximately around sections 4.1 (the velocity potential) to 4.3 (the complex potential).     Basic calculations   The following question relates to two-dimensional potential flow. Remember that the fluid flux through a surface given by contour is given by , or You will get some practice on calculating this quantity below.  We can also calculate the total force on the surface specified by by using the integral in . Since the force in potential flow is given by , then the total force is where is the pressure force given by Bernoulli's equation: and is a reference value and we ignore gravity.  For each of the following elementary flows, state or calculate:   the complex potential, ;    the velocity vector, written in vector form ;    the flux and fluid force on a surface consisting of a circle of unit radius;   Hint: the unit normal for the circle is ; when converting to polar coordinates remember that .    the flux and fluid force on a surface consisting of a plate given by the line with .        Uniform flow of velocity oriented at an angle of to the horizontal.    (i) complex potential given in the notes is ;  (ii) complex velocity is given by . Writing out the velocity components in vector form, we have   (iii) We expect the flux past a circle will be zero (since the flow will enter one side and exit the other). The flux is given by   The force is given by The total force again is zero since the force on the two hemispheres will cancel themselves out.  (iv) The normal of the plate is given by (here we assume this normal is pointing 'out'). We can parameterise the plate using a vector equation for the position vector: since the equation of the line is . Then So the surface conversion is The flux is then The above makes perfect sense. The fluid is entirely normal to the plate, and the plate has length .  For the force, remember that the pressure is constant, since the speed is constant. Thus       A line source of strength located at the origin.      Stagnation point flow with a stagnation point at the origin.      A line vortex flow of strength placed at the origin.       Evaluation of the flux   Return to the previous question and, instead of directly calculating the flux via a line integral, use to calculate the flux for the two geometries (unit circle and straight plate) for each of the flows given.     Doublet   A line source of strength is at and a line sink of the same strength is at where .     Write down the complex potential, . Find . Locate any stagnation points and derive an equation for the streamlines of the flow. Finally, use a plotter, such as the one at the potential flow simulator to sketch the streamlines.    The complex potential is the sum of a line source and line sink: Therefore the complex velocity is given by Stagnation points are where . There are no stagnation points. The streamfunction is given by where and are angles measured relative to the positions about . Thus, The streamlines are given where is constant. The streamlines are shown below.   Streamlines for a sink and source   Almost doublet        Let and while keeping the product fixed. This gives the flow due to a doublet doublet . Show that its complex potential is where is expressed in terms of and . It will be useful for you to use the fact that considered as an appropriate approximation when is small. Show that the streamlines are circles through the origin with centres on the -axis.    Expanding the logarithms for small gives Thus in the limit , we have Therefore, we let both and in a fashion such that is fixed. We then have the potential where        Potential flows, part 2   These exercises will cover the second part of Chapter 4, from sec. 4.4 (the method of images).    Single source in a semi-infinite flow   Verify that a single source of strength placed at the point is insufficient to describe flow bounded in the semi-infinite region, , with a planar boundary at . What is the horizontal and vertical velocities on the boundary? Find an equation for the streamlines and sketch the flow.     A source in a semi-infinite flow   Consider the situation of two point sources of identical strength, , placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by hyperbolae and develop the equation for their form.     Two vortices and a dividing boundary   Consider the situation of two point vorticies of identical strength, but opposite direction, placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by      A line source in a flow; stagnation points   Incompressible inviscid fluid occupies the region , and there is a rigid plane wall at . There is a uniform flow, speed , in the positive -direction, and a line source of strength at , where . Find the complex potential and calculate . Let . Show that if there are two stagnation points, both on the wall, while if there is only one, in the fluid, a distance from the origin. Try to sketch the streamlines in either case    The potential is given by The complex velocity is then   A stagnation point requires and so we solve the resultant quadratic to obtain Setting , there are two real roots if . Hence this is the case of two stagnation points along the axis. If , then there two complex conjugate points, and hence only one stagnation point in the flow field.     image       image       The exponential and sinusoidal conformal maps  Check where each of the labeled points in the associated diagrams for the exponential map and are sent, from the -plane to the -plane. In each of these cases, verify that an interior (within the fluid domain) is sent to the upper half-plane.  Construct the complex potential that corresponds to a single line source placed within the fluid in each of these cases (an infinite strip of height and a semi-infinite strip).    Elementary conformal maps   Define the term conformal map .  Write down the conformal maps from the wedge , from the strip and from the semi-infinite strip , into the upper half-plane. Find all the points at which the map is not conformal.     Flow past a flat plate   Show that the circle is mapped tro a line segment along the real -axis by the Joukowski transformation   Deduce that the extttterior of the line segment is mapped to the exterior of the circle by the transformation Carefully define the function and determine where the mapping above is conformal.       "
},
{
  "id": "ps-streamfunction-flux-compute",
  "level": "2",
  "url": "ws-potentialflows.html#ps-streamfunction-flux-compute",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "Basic calculations.",
  "body": " Basic calculations   The following question relates to two-dimensional potential flow. Remember that the fluid flux through a surface given by contour is given by , or You will get some practice on calculating this quantity below.  We can also calculate the total force on the surface specified by by using the integral in . Since the force in potential flow is given by , then the total force is where is the pressure force given by Bernoulli's equation: and is a reference value and we ignore gravity.  For each of the following elementary flows, state or calculate:   the complex potential, ;    the velocity vector, written in vector form ;    the flux and fluid force on a surface consisting of a circle of unit radius;   Hint: the unit normal for the circle is ; when converting to polar coordinates remember that .    the flux and fluid force on a surface consisting of a plate given by the line with .        Uniform flow of velocity oriented at an angle of to the horizontal.    (i) complex potential given in the notes is ;  (ii) complex velocity is given by . Writing out the velocity components in vector form, we have   (iii) We expect the flux past a circle will be zero (since the flow will enter one side and exit the other). The flux is given by   The force is given by The total force again is zero since the force on the two hemispheres will cancel themselves out.  (iv) The normal of the plate is given by (here we assume this normal is pointing 'out'). We can parameterise the plate using a vector equation for the position vector: since the equation of the line is . Then So the surface conversion is The flux is then The above makes perfect sense. The fluid is entirely normal to the plate, and the plate has length .  For the force, remember that the pressure is constant, since the speed is constant. Thus       A line source of strength located at the origin.      Stagnation point flow with a stagnation point at the origin.      A line vortex flow of strength placed at the origin.     "
},
{
  "id": "ps-potential-fluxcalc",
  "level": "2",
  "url": "ws-potentialflows.html#ps-potential-fluxcalc",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "Evaluation of the flux.",
  "body": " Evaluation of the flux   Return to the previous question and, instead of directly calculating the flux via a line integral, use to calculate the flux for the two geometries (unit circle and straight plate) for each of the flows given.   "
},
{
  "id": "ws-potentialflows-2-5",
  "level": "2",
  "url": "ws-potentialflows.html#ws-potentialflows-2-5",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "Doublet.",
  "body": " Doublet   A line source of strength is at and a line sink of the same strength is at where .     Write down the complex potential, . Find . Locate any stagnation points and derive an equation for the streamlines of the flow. Finally, use a plotter, such as the one at the potential flow simulator to sketch the streamlines.    The complex potential is the sum of a line source and line sink: Therefore the complex velocity is given by Stagnation points are where . There are no stagnation points. The streamfunction is given by where and are angles measured relative to the positions about . Thus, The streamlines are given where is constant. The streamlines are shown below.   Streamlines for a sink and source   Almost doublet        Let and while keeping the product fixed. This gives the flow due to a doublet doublet . Show that its complex potential is where is expressed in terms of and . It will be useful for you to use the fact that considered as an appropriate approximation when is small. Show that the streamlines are circles through the origin with centres on the -axis.    Expanding the logarithms for small gives Thus in the limit , we have Therefore, we let both and in a fashion such that is fixed. We then have the potential where     "
},
{
  "id": "ps-image-planar01",
  "level": "2",
  "url": "ws-potentialflows.html#ps-image-planar01",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "Single source in a semi-infinite flow.",
  "body": " Single source in a semi-infinite flow   Verify that a single source of strength placed at the point is insufficient to describe flow bounded in the semi-infinite region, , with a planar boundary at . What is the horizontal and vertical velocities on the boundary? Find an equation for the streamlines and sketch the flow.   "
},
{
  "id": "ps-image-planar02",
  "level": "2",
  "url": "ws-potentialflows.html#ps-image-planar02",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "A source in a semi-infinite flow.",
  "body": " A source in a semi-infinite flow   Consider the situation of two point sources of identical strength, , placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by hyperbolae and develop the equation for their form.   "
},
{
  "id": "ps-image-planar03",
  "level": "2",
  "url": "ws-potentialflows.html#ps-image-planar03",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "Two vortices and a dividing boundary.",
  "body": " Two vortices and a dividing boundary   Consider the situation of two point vorticies of identical strength, but opposite direction, placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by    "
},
{
  "id": "ws-potentialflows-3-6",
  "level": "2",
  "url": "ws-potentialflows.html#ws-potentialflows-3-6",
  "type": "Exercise",
  "number": "4.6.7",
  "title": "A line source in a flow; stagnation points.",
  "body": " A line source in a flow; stagnation points   Incompressible inviscid fluid occupies the region , and there is a rigid plane wall at . There is a uniform flow, speed , in the positive -direction, and a line source of strength at , where . Find the complex potential and calculate . Let . Show that if there are two stagnation points, both on the wall, while if there is only one, in the fluid, a distance from the origin. Try to sketch the streamlines in either case    The potential is given by The complex velocity is then   A stagnation point requires and so we solve the resultant quadratic to obtain Setting , there are two real roots if . Hence this is the case of two stagnation points along the axis. If , then there two complex conjugate points, and hence only one stagnation point in the flow field.     image       image     "
},
{
  "id": "ps-conformal-check-exp-sin",
  "level": "2",
  "url": "ws-potentialflows.html#ps-conformal-check-exp-sin",
  "type": "Exercise",
  "number": "4.6.8",
  "title": "The exponential and sinusoidal conformal maps.",
  "body": " The exponential and sinusoidal conformal maps  Check where each of the labeled points in the associated diagrams for the exponential map and are sent, from the -plane to the -plane. In each of these cases, verify that an interior (within the fluid domain) is sent to the upper half-plane.  Construct the complex potential that corresponds to a single line source placed within the fluid in each of these cases (an infinite strip of height and a semi-infinite strip).  "
},
{
  "id": "ws-potentialflows-3-8",
  "level": "2",
  "url": "ws-potentialflows.html#ws-potentialflows-3-8",
  "type": "Exercise",
  "number": "4.6.9",
  "title": "Elementary conformal maps.",
  "body": " Elementary conformal maps   Define the term conformal map .  Write down the conformal maps from the wedge , from the strip and from the semi-infinite strip , into the upper half-plane. Find all the points at which the map is not conformal.   "
},
{
  "id": "ws-potentialflows-3-9",
  "level": "2",
  "url": "ws-potentialflows.html#ws-potentialflows-3-9",
  "type": "Exercise",
  "number": "4.6.10",
  "title": "Flow past a flat plate.",
  "body": " Flow past a flat plate   Show that the circle is mapped tro a line segment along the real -axis by the Joukowski transformation   Deduce that the extttterior of the line segment is mapped to the exterior of the circle by the transformation Carefully define the function and determine where the mapping above is conformal.   "
},
{
  "id": "ch-chapter05-waves",
  "level": "1",
  "url": "ch-chapter05-waves.html",
  "type": "Chapter",
  "number": "5",
  "title": "Water waves",
  "body": " Water waves   In this chapter, you will study the theory of linear and nonlinear water waves. Linear water waves can be obtained by series expansions of the relevant free-surface equations. Nonlinear water waves requires the use of computational methods.   "
},
{
  "id": "sec-helmholtz",
  "level": "1",
  "url": "sec-helmholtz.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Helmholtz principle",
  "body": " The Helmholtz principle   As mentioned in Chapter , the vorticity obeys the vorticity equation : In two-dimensional irrotational flow, the right-hand side is zero, so the vorticity of each fluid particle is constant in time. This is a special case of the more general result known as the Helmholtz principle , which states that in an inviscid fluid, the vorticity of each fluid particle is conserved.    The circulation in a flow   Circulation   We define the circulation around a closed loop in the flow as      Kelvin's circulation theorem  Assume that a fluid is inviscid and incompressible and that a conservative body force (e.g. gravity) acts on it. If a loop is fixed in the fluid (and thus moves around in the Lagrangian sense as the fluid moves) then the circulation around is constant in time.    Proof of Kelvin's circulation theorem  A proof of this theorem is given in Exercise .    Importance of Kelvin's circulation theorem  This theorem explains why the circulation is an important physical concept. In particular, if a flow is initally irrotational, then the circulation around any loop is zero at . The theorem then implies that the circulation around any loop is zero for all time. Therefore the flow at any time is irrotational.    Relationship between circulation and vorticity  Using Stokes' theorem where is any surface spanning the loop . Thus the circulation equals the flux of vorticity through the spanning surface.     Vortex lines and the Helmholtz vortex theorems   Vortex lines   Vortex lines are curves that point in the same direction as the vorticity vector. They satisfy the differential equation where is fixed. Just as the streamlines give a picture of the flow field, so the vortex lines give a picture of the vorticity field. Note that if the vorticity is zero at some point, the vortex lines are not defined there.     Analogy with streamlines  The vortex lines are to the vorticity of the fluid as the streamlines are to its velocity.    Vortex lines in a two-dimensional flow  In a two-dimensional flow, the vorticity is unidirectional, so the vortex lines are straight lines parallel to the vorticity vector. For example, for a flow in the -plane, the vorticity points in the -direction, and the vortex lines are straight lines parallel to the -axis.    The Helmholtz vortex theorems  These state   Vortex lines move with the fluid. Thus they follow the material paths of the fluid particles. We can group nearby vortex lines together to form a vortex tube, as shown in (taken from ), and the vortex tube moves with the flow. The surfaces of the vortex tube are vortex lines. This is a strong part of the reason why it is useful to calculate vortex lines.     Sketch of a vortex tube.   Vortex tube    The circulation of the tube is around any closed curve that goes once anticlockwise around the vortex tube, or equivalently , where is any cross-section of the vortex tube, see . The circulation is independent of the choice of curve or cross-section at all times.       Proof of the Helmholtz vortex theorems  To do.    Thus if a vortex line becomes stretched then spin up occurs. If we consider a thin vortex tube surrounding the vortex line, then, as the vortex line is stretched, the tube becomes thinner and longer. However, must remain constant, and therefore, since the area of the cross-section is decreasing, must get bigger. Conversely, if a vortex line shortens we get spin down and gets smaller.    Example of spin up and spin down    Spin up of vorticity as thunderclouds move overhead.   Spin up     Spin down of a cup of tea. Secondary circulations (shown by the arrows) tend to spread the material lines out radially. Thus the tall thin column of fluid (a) becomes a short fat one(b).   Spin up     The two sketches in and (taken from ) show examples of spin up and spin down, respectively. Spin up occurs in thunderstorms; as the cloud moves, the vortex lines get stretched, which could result in a tornado. Spin up happens in a cup of tea after it has been stirred. Secondary flows in the cup tend to spread the column of rotating fluid horizontally, making the area of the cross-section of the vortex tube bigger, and hence the vorticity smaller, which is spin down.    "
},
{
  "id": "def-circulation",
  "level": "2",
  "url": "sec-helmholtz.html#def-circulation",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Circulation.",
  "body": " Circulation   We define the circulation around a closed loop in the flow as    "
},
{
  "id": "thm-kelvin-circulation-theorem",
  "level": "2",
  "url": "sec-helmholtz.html#thm-kelvin-circulation-theorem",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "Kelvin’s circulation theorem.",
  "body": " Kelvin's circulation theorem  Assume that a fluid is inviscid and incompressible and that a conservative body force (e.g. gravity) acts on it. If a loop is fixed in the fluid (and thus moves around in the Lagrangian sense as the fluid moves) then the circulation around is constant in time.  "
},
{
  "id": "sec-circulation-4",
  "level": "2",
  "url": "sec-helmholtz.html#sec-circulation-4",
  "type": "Proof",
  "number": "6.1.1.1",
  "title": "Proof of Kelvin’s circulation theorem.",
  "body": " Proof of Kelvin's circulation theorem  A proof of this theorem is given in Exercise .  "
},
{
  "id": "sec-circulation-5",
  "level": "2",
  "url": "sec-helmholtz.html#sec-circulation-5",
  "type": "Remark",
  "number": "6.1.3",
  "title": "Importance of Kelvin’s circulation theorem.",
  "body": " Importance of Kelvin's circulation theorem  This theorem explains why the circulation is an important physical concept. In particular, if a flow is initally irrotational, then the circulation around any loop is zero at . The theorem then implies that the circulation around any loop is zero for all time. Therefore the flow at any time is irrotational.  "
},
{
  "id": "sec-circulation-6",
  "level": "2",
  "url": "sec-helmholtz.html#sec-circulation-6",
  "type": "Remark",
  "number": "6.1.4",
  "title": "Relationship between circulation and vorticity.",
  "body": " Relationship between circulation and vorticity  Using Stokes' theorem where is any surface spanning the loop . Thus the circulation equals the flux of vorticity through the spanning surface.  "
},
{
  "id": "def-vortex-lines",
  "level": "2",
  "url": "sec-helmholtz.html#def-vortex-lines",
  "type": "Definition",
  "number": "6.1.5",
  "title": "Vortex lines.",
  "body": " Vortex lines   Vortex lines are curves that point in the same direction as the vorticity vector. They satisfy the differential equation where is fixed. Just as the streamlines give a picture of the flow field, so the vortex lines give a picture of the vorticity field. Note that if the vorticity is zero at some point, the vortex lines are not defined there.   "
},
{
  "id": "sec-helmholtz-4-3",
  "level": "2",
  "url": "sec-helmholtz.html#sec-helmholtz-4-3",
  "type": "Remark",
  "number": "6.1.6",
  "title": "Analogy with streamlines.",
  "body": " Analogy with streamlines  The vortex lines are to the vorticity of the fluid as the streamlines are to its velocity.  "
},
{
  "id": "sec-helmholtz-4-4",
  "level": "2",
  "url": "sec-helmholtz.html#sec-helmholtz-4-4",
  "type": "Remark",
  "number": "6.1.7",
  "title": "Vortex lines in a two-dimensional flow.",
  "body": " Vortex lines in a two-dimensional flow  In a two-dimensional flow, the vorticity is unidirectional, so the vortex lines are straight lines parallel to the vorticity vector. For example, for a flow in the -plane, the vorticity points in the -direction, and the vortex lines are straight lines parallel to the -axis.  "
},
{
  "id": "thm-helmholtz-vortex-theorems",
  "level": "2",
  "url": "sec-helmholtz.html#thm-helmholtz-vortex-theorems",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "The Helmholtz vortex theorems.",
  "body": " The Helmholtz vortex theorems  These state   Vortex lines move with the fluid. Thus they follow the material paths of the fluid particles. We can group nearby vortex lines together to form a vortex tube, as shown in (taken from ), and the vortex tube moves with the flow. The surfaces of the vortex tube are vortex lines. This is a strong part of the reason why it is useful to calculate vortex lines.     Sketch of a vortex tube.   Vortex tube    The circulation of the tube is around any closed curve that goes once anticlockwise around the vortex tube, or equivalently , where is any cross-section of the vortex tube, see . The circulation is independent of the choice of curve or cross-section at all times.     "
},
{
  "id": "sec-helmholtz-4-6",
  "level": "2",
  "url": "sec-helmholtz.html#sec-helmholtz-4-6",
  "type": "Proof",
  "number": "6.1.2.1",
  "title": "Proof of the Helmholtz vortex theorems.",
  "body": " Proof of the Helmholtz vortex theorems  To do.  "
},
{
  "id": "sec-helmholtz-4-7",
  "level": "2",
  "url": "sec-helmholtz.html#sec-helmholtz-4-7",
  "type": "Remark",
  "number": "6.1.10",
  "title": "",
  "body": " Thus if a vortex line becomes stretched then spin up occurs. If we consider a thin vortex tube surrounding the vortex line, then, as the vortex line is stretched, the tube becomes thinner and longer. However, must remain constant, and therefore, since the area of the cross-section is decreasing, must get bigger. Conversely, if a vortex line shortens we get spin down and gets smaller.  "
},
{
  "id": "sec-helmholtz-4-8",
  "level": "2",
  "url": "sec-helmholtz.html#sec-helmholtz-4-8",
  "type": "Example",
  "number": "6.1.11",
  "title": "Example of spin up and spin down.",
  "body": " Example of spin up and spin down    Spin up of vorticity as thunderclouds move overhead.   Spin up     Spin down of a cup of tea. Secondary circulations (shown by the arrows) tend to spread the material lines out radially. Thus the tall thin column of fluid (a) becomes a short fat one(b).   Spin up     The two sketches in and (taken from ) show examples of spin up and spin down, respectively. Spin up occurs in thunderstorms; as the cloud moves, the vortex lines get stretched, which could result in a tornado. Spin up happens in a cup of tea after it has been stirred. Secondary flows in the cup tend to spread the column of rotating fluid horizontally, making the area of the cross-section of the vortex tube bigger, and hence the vorticity smaller, which is spin down.  "
},
{
  "id": "sec-helmholtz-examples",
  "level": "1",
  "url": "sec-helmholtz-examples.html",
  "type": "Section",
  "number": "6.2",
  "title": "Examples illustrating the use of the Helmholtz principle",
  "body": " Examples illustrating the use of the Helmholtz principle  Here are some examples.  "
},
{
  "id": "ws-vorticity",
  "level": "1",
  "url": "ws-vorticity.html",
  "type": "Exercises",
  "number": "6.3",
  "title": "Exercises",
  "body": "   We look to complete worksheets in the week prior to the content being delivered. Once this is done, this disclaimer message will be removed.     Kelvin’s Circulation Theorem   The circulation around a closed curve is defined by By transforming to Lagrangian variables show that is independent of . Deduce that a flow that is initially irrotational (i.e. at ) remains irrotational for all time.  Note that this is a key result: if a flow is initially irrotational, it remains so indefinitely and we can introduce a velocity potential such that .     Curve at times and . The inset shows the relationship between the two curves.    Assuming a conservative body force per unit volume, the Euler equation reads  Hence The final equality above follows because the line integral of a gradient around a closed curve is zero. Thus is independent of . If the flow is initially irrotational, then at for any closed curve , and hence for all time. Since this holds for any closed curve, it follows that for all time.    "
},
{
  "id": "ws-vorticity-1-1",
  "level": "2",
  "url": "ws-vorticity.html#ws-vorticity-1-1",
  "type": "Warning",
  "number": "6.3.1",
  "title": "",
  "body": " We look to complete worksheets in the week prior to the content being delivered. Once this is done, this disclaimer message will be removed.  "
},
{
  "id": "ex-kelvin-circulation-theorem",
  "level": "2",
  "url": "ws-vorticity.html#ex-kelvin-circulation-theorem",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "Kelvin’s Circulation Theorem.",
  "body": " Kelvin’s Circulation Theorem   The circulation around a closed curve is defined by By transforming to Lagrangian variables show that is independent of . Deduce that a flow that is initially irrotational (i.e. at ) remains irrotational for all time.  Note that this is a key result: if a flow is initially irrotational, it remains so indefinitely and we can introduce a velocity potential such that .     Curve at times and . The inset shows the relationship between the two curves.    Assuming a conservative body force per unit volume, the Euler equation reads  Hence The final equality above follows because the line integral of a gradient around a closed curve is zero. Thus is independent of . If the flow is initially irrotational, then at for any closed curve , and hence for all time. Since this holds for any closed curve, it follows that for all time.   "
},
{
  "id": "definitions",
  "level": "1",
  "url": "definitions.html",
  "type": "Section",
  "number": "7.1",
  "title": "Important definitions",
  "body": " Important definitions   Viscosity  Viscosity quantifies the fluid's internal resistance to flow when a force is applied (the higher the resistance the higher the viscosity). One of the most common mathematical models of an idealised fluid is a Newtonian fluid, which will be defined precisely in . For these fluids, the shear viscosity (sometimes called dynamic viscosity, or just viscosity) is a scalar quantity. In S.I. units, it is measured in .   Thought experiment to measure viscosity   We could imagine a thought experiment to measure the shear viscosity of a fluid as follows, see also . A solid block of area floats on the surface of a thin layer of the fluid of thickness . The block is pushed with a force parallel to the surface of the fluid, causing it to move with a steady velocity . The shear viscosity is given by In principle this formula could be used to determine the viscosity of a fluid experimentally; however, in practice it is more common to use a falling ball viscometer (see in the worksheet at the end of this chapter).   Experiment to determine the shear viscosity of a fluid.   Fluid       Kinematic viscosity   It is sometimes mathematically more convenient to work in terms of the kinematic viscosity (measured in ). This is related to the shear viscosity via      Shear viscosities at pressure and .     ( )  ( )  ( )    Air       Water       Blood       Glycerol       Honey       Tar        The shear viscosity of air increases with increasing temperature, whereas that of water decreases with increasing temperature. This is typical behaviour for gases and liquids, respectively. Many real fluids have more complicated viscosity properties, for example blood, mucus, shampoo, egg white and custard. In this course we mainly consider Newtonian fluids, thereby avoiding a lot of complexity!   Note that we have not yet formally defined the shear viscosity, although the example given in provides an informal definition. This concept will be formalised in .     Reynolds number  This is one of the most important flow parameters in the study of fluid dynamics, as its order of magnitude determines many of the qualitative features of the flow. In a given flow, it quantifies the relative importance of inertial and viscous effects.   The Reynolds number   The Reynolds number is a dimensionless quantity, defined by where is a characteristic (or typical) velocity of the flow and is a characteristic lengthscale. It equals the typical size of an inertial acceleration divided by a typical size of a viscous acceleration in the flow.     Choice of characteristic scales  What do we pick as the characteristic length and velocity scales? This is something that gets easier with increasing experience. For a given problem there are usually ‘natural’ scales that arise within it.  As an illustrative example of how we might think about choosing suitable scales, consider a steady flow along a pipe with a circular cross-section. An appropriate choice of could be the pipe radius or diameter, while an appropriate value of could be the velocity along the centreline (axis) of the pipe or the average velocity across the pipe cross-section (equal to the volumetric flux (volume per unit time) of fluid passing along the pipe divided by the cross-sectional area of the pipe).  Different choices of scales (for example radius vs. diameter and centreline vs. average velocity in the pipe example given in ) would lead to different numerical values of . However, note:   The order of magnitude of the Reynolds number is the same for all choices. Thus, when describing a flow, the value of is often quoted as an order-of-magnitude property.    If we give detailed information about exactly which length and velocity scales are being used then we can directly compare different values of , even if they are of the same order of magnitude. For example, we might do this in a plot of a property of the flow against the Reynolds number. In this case, it would be good scientific practice to specify the choice of velocity and length scales used.       Flow characteristics at different Reynolds numbers  Typical characteristics of the flow are strongly associated with the order of magnitude of the Reynolds number:   Low-Reynolds-number flows ( ):   Examples include several biological examples, such as flow in capillaries (the smallest blood vessels) swimming bacteria or other single cell organisms, lymphatic system flow, and other examples include microfluidics, glacier flow, and spreading honey on toast.  These flows are called Stokes flows (after G. G. Stokes who studied them) or creeping flows.  Low-Reynolds-number flows are also reversible, meaning that if a force is applied, followed by the reverse of that force then the fluid particles return to their original positions. This movie shows a low-Reynolds-number flow that is reversible, whereas this movie shows a flow with a higher Reynolds number that is not reversible.  Inertial effects are negligible and viscous effects are important.      Flows with moderate Reynolds number ( ):   Examples include flows in most blood vessels that are not capillaries, small fish swimming, not-too-fast flow out of a domestic tap, stirring a cup of tea.  Flows in pipes with moderate Reynolds number are often described as laminar , meaning that the fluid moves in ‘layers’ sliding past each other (in fluid dynamics, the word ‘laminar’ is often used to mean that the flow is not turbulent ).      High-Reynolds-number flows (typically above about ):   Examples include atmospheric and ocean flows, rivers, large industrial processes, flows around vehicles, airflow in trachea and ships or large animals swimming.  Inertial effects are important and viscous effects are small.  Since viscous effects are small, they may often be neglected in these flows, and the Euler equations  govern the dynamics.  These flows are often unstable or turbulent (especially for very high Reynolds numbers).     This movie shows flows for a range of Reynolds numbers.    Turbulent flow  This is a qualitative type of flow that is characterised as having many different length scales, and the flow is mathematically chaotic . Chaotic flow means that fluid particles that start close together can become widely separated over time. As well as the scale of the whole experiment, the turbulence has eddies on all small length scales. Turbulent flows are analysed mathematically by decomposing the fluid velocity into a mean flow , which describes the large-scale flow and a fluctuating flow , which describes the eddies. Equations can be written for each of these, but this decomposition leads to the so-called closure problem , in which an assumption needs to be made to provide a final equation that governs the dynamics.  Turbulence is of great importance in applications such as aeronautical engineering, weather forecasting and large-scale industrial flows, basically because large and fast moving flows have a sufficiently high Reynolds number that turbulence is unavoidable and it dominates the flow characteristics.  The study of turbulence could constitute a lecture course in its own right, and therefore a detailed analysis is beyond the scope of this course.     State relations   In addition to the balances implied by mass and momentum conservation that you have so far been working on in this course, there is an additional condition needed, and this is called a state relation . This relates the thermodynamic variables density , pressure and temperature . In this section, we give two of the most common state relations that are used mathematically, the first for liquids and the second for gases.    Liquids  Liquids are often assumed to be incompressible, that is we assume . This is the most common assumption made in this course. However, it is important to be aware that it is not always appropriate.   One of the most common reasons that making the assumption does not capture the flow dynamics accurately is if there are significant temperature variations within the liquid. Typically, liquids expand as the temperature rises, and this leads to thermal convection , which needs to be taken into account in the mathematical analysis.    The Boussinesq approximation   In a problem in which temperature variations are important in the fluid dynamics, it is often sufficient to assume the Boussinesq approximation :   In the buoyancy term of the momentum conservation equation (that is the term appearing in the Euler equation), we assume the density is a linear function of the temperature. Thus we write , where and are a reference temperature and density, respectively, and is the coefficient of thermal expansion .    In all other appearances in the governing equations, is replaced by the constant value .         Gases  Gases (especially at high temperatures and low pressures) closely follow the ideal or perfect gas law .   The ideal or perfect gas law   This law states where  is the specific gas constant,  m \/s \/K (for air) is the specific heat capacity at constant pressure,  m \/s \/K (for air) is the specific heat capacity at constant temperature,  J\/mol\/K is the universal gas constant,  kg\/mol for dry air.       You have probably previously encountered the ideal gas law in the form , where is the volume occupied by moles of a gas.   Proof that this is equivalent to . The relationship implies since is the mass of the gas molecules in and therefore is the average density.  In fluid dynamics the form is more convenient than because it can be applied at each point in the gas, whereas is a law applying to a fixed finite volume.     "
},
{
  "id": "example-viscosity",
  "level": "2",
  "url": "definitions.html#example-viscosity",
  "type": "Example",
  "number": "7.1.1",
  "title": "Thought experiment to measure viscosity.",
  "body": " Thought experiment to measure viscosity   We could imagine a thought experiment to measure the shear viscosity of a fluid as follows, see also . A solid block of area floats on the surface of a thin layer of the fluid of thickness . The block is pushed with a force parallel to the surface of the fluid, causing it to move with a steady velocity . The shear viscosity is given by In principle this formula could be used to determine the viscosity of a fluid experimentally; however, in practice it is more common to use a falling ball viscometer (see in the worksheet at the end of this chapter).   Experiment to determine the shear viscosity of a fluid.   Fluid     "
},
{
  "id": "viscosity-4",
  "level": "2",
  "url": "definitions.html#viscosity-4",
  "type": "Definition",
  "number": "7.1.3",
  "title": "Kinematic viscosity.",
  "body": " Kinematic viscosity   It is sometimes mathematically more convenient to work in terms of the kinematic viscosity (measured in ). This is related to the shear viscosity via    "
},
{
  "id": "viscosity-5",
  "level": "2",
  "url": "definitions.html#viscosity-5",
  "type": "Table",
  "number": "7.1.4",
  "title": "Shear viscosities at <span class=\"process-math\">\\(1\\,\\mathrm{atm}\\)<\/span> pressure and <span class=\"process-math\">\\(20\\,^\\circ\\mathrm{C}\\text{.}\\)<\/span>",
  "body": " Shear viscosities at pressure and .     ( )  ( )  ( )    Air       Water       Blood       Glycerol       Honey       Tar       "
},
{
  "id": "viscosity-7",
  "level": "2",
  "url": "definitions.html#viscosity-7",
  "type": "Remark",
  "number": "7.1.5",
  "title": "",
  "body": " Note that we have not yet formally defined the shear viscosity, although the example given in provides an informal definition. This concept will be formalised in .  "
},
{
  "id": "reynolds-number-3",
  "level": "2",
  "url": "definitions.html#reynolds-number-3",
  "type": "Definition",
  "number": "7.1.6",
  "title": "The Reynolds number.",
  "body": " The Reynolds number   The Reynolds number is a dimensionless quantity, defined by where is a characteristic (or typical) velocity of the flow and is a characteristic lengthscale. It equals the typical size of an inertial acceleration divided by a typical size of a viscous acceleration in the flow.   "
},
{
  "id": "example-choice-of-scales",
  "level": "2",
  "url": "definitions.html#example-choice-of-scales",
  "type": "Remark",
  "number": "7.1.7",
  "title": "Choice of characteristic scales.",
  "body": " Choice of characteristic scales  What do we pick as the characteristic length and velocity scales? This is something that gets easier with increasing experience. For a given problem there are usually ‘natural’ scales that arise within it.  As an illustrative example of how we might think about choosing suitable scales, consider a steady flow along a pipe with a circular cross-section. An appropriate choice of could be the pipe radius or diameter, while an appropriate value of could be the velocity along the centreline (axis) of the pipe or the average velocity across the pipe cross-section (equal to the volumetric flux (volume per unit time) of fluid passing along the pipe divided by the cross-sectional area of the pipe).  Different choices of scales (for example radius vs. diameter and centreline vs. average velocity in the pipe example given in ) would lead to different numerical values of . However, note:   The order of magnitude of the Reynolds number is the same for all choices. Thus, when describing a flow, the value of is often quoted as an order-of-magnitude property.    If we give detailed information about exactly which length and velocity scales are being used then we can directly compare different values of , even if they are of the same order of magnitude. For example, we might do this in a plot of a property of the flow against the Reynolds number. In this case, it would be good scientific practice to specify the choice of velocity and length scales used.     "
},
{
  "id": "reynolds-number-5",
  "level": "2",
  "url": "definitions.html#reynolds-number-5",
  "type": "Remark",
  "number": "7.1.8",
  "title": "Flow characteristics at different Reynolds numbers.",
  "body": " Flow characteristics at different Reynolds numbers  Typical characteristics of the flow are strongly associated with the order of magnitude of the Reynolds number:   Low-Reynolds-number flows ( ):   Examples include several biological examples, such as flow in capillaries (the smallest blood vessels) swimming bacteria or other single cell organisms, lymphatic system flow, and other examples include microfluidics, glacier flow, and spreading honey on toast.  These flows are called Stokes flows (after G. G. Stokes who studied them) or creeping flows.  Low-Reynolds-number flows are also reversible, meaning that if a force is applied, followed by the reverse of that force then the fluid particles return to their original positions. This movie shows a low-Reynolds-number flow that is reversible, whereas this movie shows a flow with a higher Reynolds number that is not reversible.  Inertial effects are negligible and viscous effects are important.      Flows with moderate Reynolds number ( ):   Examples include flows in most blood vessels that are not capillaries, small fish swimming, not-too-fast flow out of a domestic tap, stirring a cup of tea.  Flows in pipes with moderate Reynolds number are often described as laminar , meaning that the fluid moves in ‘layers’ sliding past each other (in fluid dynamics, the word ‘laminar’ is often used to mean that the flow is not turbulent ).      High-Reynolds-number flows (typically above about ):   Examples include atmospheric and ocean flows, rivers, large industrial processes, flows around vehicles, airflow in trachea and ships or large animals swimming.  Inertial effects are important and viscous effects are small.  Since viscous effects are small, they may often be neglected in these flows, and the Euler equations  govern the dynamics.  These flows are often unstable or turbulent (especially for very high Reynolds numbers).     This movie shows flows for a range of Reynolds numbers.  "
},
{
  "id": "reynolds-number-6",
  "level": "2",
  "url": "definitions.html#reynolds-number-6",
  "type": "Remark",
  "number": "7.1.9",
  "title": "Turbulent flow.",
  "body": " Turbulent flow  This is a qualitative type of flow that is characterised as having many different length scales, and the flow is mathematically chaotic . Chaotic flow means that fluid particles that start close together can become widely separated over time. As well as the scale of the whole experiment, the turbulence has eddies on all small length scales. Turbulent flows are analysed mathematically by decomposing the fluid velocity into a mean flow , which describes the large-scale flow and a fluctuating flow , which describes the eddies. Equations can be written for each of these, but this decomposition leads to the so-called closure problem , in which an assumption needs to be made to provide a final equation that governs the dynamics.  Turbulence is of great importance in applications such as aeronautical engineering, weather forecasting and large-scale industrial flows, basically because large and fast moving flows have a sufficiently high Reynolds number that turbulence is unavoidable and it dominates the flow characteristics.  The study of turbulence could constitute a lecture course in its own right, and therefore a detailed analysis is beyond the scope of this course.  "
},
{
  "id": "state-relations-3-3",
  "level": "2",
  "url": "definitions.html#state-relations-3-3",
  "type": "Remark",
  "number": "7.1.10",
  "title": "",
  "body": " One of the most common reasons that making the assumption does not capture the flow dynamics accurately is if there are significant temperature variations within the liquid. Typically, liquids expand as the temperature rises, and this leads to thermal convection , which needs to be taken into account in the mathematical analysis.  "
},
{
  "id": "def-boussinesq",
  "level": "2",
  "url": "definitions.html#def-boussinesq",
  "type": "Definition",
  "number": "7.1.11",
  "title": "The Boussinesq approximation.",
  "body": " The Boussinesq approximation   In a problem in which temperature variations are important in the fluid dynamics, it is often sufficient to assume the Boussinesq approximation :   In the buoyancy term of the momentum conservation equation (that is the term appearing in the Euler equation), we assume the density is a linear function of the temperature. Thus we write , where and are a reference temperature and density, respectively, and is the coefficient of thermal expansion .    In all other appearances in the governing equations, is replaced by the constant value .      "
},
{
  "id": "state-relations-4-3",
  "level": "2",
  "url": "definitions.html#state-relations-4-3",
  "type": "Definition",
  "number": "7.1.12",
  "title": "The ideal or perfect gas law.",
  "body": " The ideal or perfect gas law   This law states where  is the specific gas constant,  m \/s \/K (for air) is the specific heat capacity at constant pressure,  m \/s \/K (for air) is the specific heat capacity at constant temperature,  J\/mol\/K is the universal gas constant,  kg\/mol for dry air.     "
},
{
  "id": "state-relations-4-4",
  "level": "2",
  "url": "definitions.html#state-relations-4-4",
  "type": "Remark",
  "number": "7.1.13",
  "title": "",
  "body": " You have probably previously encountered the ideal gas law in the form , where is the volume occupied by moles of a gas.   Proof that this is equivalent to . The relationship implies since is the mass of the gas molecules in and therefore is the average density.  In fluid dynamics the form is more convenient than because it can be applied at each point in the gas, whereas is a law applying to a fixed finite volume.  "
},
{
  "id": "boundaries-surfaces-interfaces",
  "level": "1",
  "url": "boundaries-surfaces-interfaces.html",
  "type": "Section",
  "number": "7.2",
  "title": "Boundaries, surfaces and interfaces of fluids",
  "body": " Boundaries, surfaces and interfaces of fluids   This movie shows an experiment in which two dye streaks illustrate the motion of a viscous fluid. As can be seen:   The end of dye streak at the solid wall does not move relative to the wall. This motivates the no slip condition at a solid fluid boundary .    The two dye streaks on either side of the fluid fluid interface move together, illustrating that the velocity is continuous across a fluid fluid interface .       Boundary conditions on the velocity   Fluid solid boundary   It is observed empirically that Newtonian viscous fluids interact with solid boundaries in such a way that are satisfied. This condition on the velocity components is called the no-slip condition . When solving problems in fluid mechanics we usually apply these relationships to provide boundary conditions.     In many cases, , so the no-slip conditions mean that the velocity is zero at the boundaries.    Comparison with inviscid fluids  In the previous sections of the course, you studied inviscid fluids , for which the boundary conditions was Note that this condition is weaker than the corresponding one for viscous fluids, since it only applies to one component of the velocity. As we will shortly see, the extra conditions for viscous fluids are mathematically necessary, since the equation for conservation of momentum for viscous fluids has spatial derivatives of higher order.    Fluid fluid interface   At the interface between two different viscous fluids, the velocities must match:      Comparison with inviscid fluids  For inviscid fluids, only the normal component balances:      Force balance at the boundary\/interface  In addition to the boundary conditions on the velocity given in , we sometimes need to apply a force balance condition at the boundary of the fluid or at the interface between two fluids in a free boundary problem.  Rigid boundaries  Thankfully, in the case of a fluid solid boundary, if the solid is rigid (which we often assume), the no-slip boundary conditions on the velocity are sufficient to solve the problem mathematically. If desired, a force balance can be performed after solving the problem, and this determines the stress (force per unit area) that the fluid exerts on the solid wall, and we can thus find the reaction force that the wall applies in order to maintain its position in the presence of the flowing fluid.   However, if the solid moves in response to the fluid , either because it is an elastic solid or because the solid is not tethered , then a force balance is required to solve the problem mathematically. This is called a fluid structure interaction problem , and these are typically very difficult to solve.  Furthermore, at a fluid fluid interface, a force balance is typically required to solve the problem. The difference between the stresses of the two fluids on the interface (the forces each fluid exerts on the interface per unit area of the interface) is balanced by the surface tension that arises within the interface.    Surface tension  The interface between two immiscible fluids (e.g. air and water, or water and mercury) creates surface tension, a force per unit length. This is of considerable importance in many fluid mechanics problems, especially those involving small lengthscales.   Surface tension is very important if you are small! Credit J. Bush and D. Hu   Water strider    A cut of length experiences forces on each edge, with being the surface tension coefficient.   Thought experiment to illustrate surface tension   Surface tension    This movie shows the effect of different values of on the shape of a droplet.   Droplet pressure  A spherical fluid droplet of radius has coefficient of surface tension . What is the pressure difference between the inside and outside of the droplet?    Surface tension example: droplet   Droplet      Meniscus   Surface tension example: meniscus   Meniscus      Flat surface: no net surface tension force pressures equal.  Concave up: resultant points outward pressure below surface lower than atmospheric.  Concave down: resultant points inward pressure inside greater than atmospheric.    These agree with the hydrostatic pressure profile within the fluid. In principle, the shape of the meniscus can be calculated from this agreement.    "
},
{
  "id": "def-fluid-solid-boundary",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#def-fluid-solid-boundary",
  "type": "Definition",
  "number": "7.2.1",
  "title": "Fluid–solid boundary.",
  "body": " Fluid solid boundary   It is observed empirically that Newtonian viscous fluids interact with solid boundaries in such a way that are satisfied. This condition on the velocity components is called the no-slip condition . When solving problems in fluid mechanics we usually apply these relationships to provide boundary conditions.   "
},
{
  "id": "boundary-conditions-velocity-3",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#boundary-conditions-velocity-3",
  "type": "Remark",
  "number": "7.2.2",
  "title": "",
  "body": " In many cases, , so the no-slip conditions mean that the velocity is zero at the boundaries.  "
},
{
  "id": "boundary-conditions-velocity-4",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#boundary-conditions-velocity-4",
  "type": "Remark",
  "number": "7.2.3",
  "title": "Comparison with inviscid fluids.",
  "body": " Comparison with inviscid fluids  In the previous sections of the course, you studied inviscid fluids , for which the boundary conditions was Note that this condition is weaker than the corresponding one for viscous fluids, since it only applies to one component of the velocity. As we will shortly see, the extra conditions for viscous fluids are mathematically necessary, since the equation for conservation of momentum for viscous fluids has spatial derivatives of higher order.  "
},
{
  "id": "def-fluid-fluid-interface",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#def-fluid-fluid-interface",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Fluid–fluid interface.",
  "body": " Fluid fluid interface   At the interface between two different viscous fluids, the velocities must match:    "
},
{
  "id": "boundary-conditions-velocity-6",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#boundary-conditions-velocity-6",
  "type": "Remark",
  "number": "7.2.5",
  "title": "Comparison with inviscid fluids.",
  "body": " Comparison with inviscid fluids  For inviscid fluids, only the normal component balances:   "
},
{
  "id": "boundaries-surfaces-interfaces-4-3",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#boundaries-surfaces-interfaces-4-3",
  "type": "Remark",
  "number": "7.2.6",
  "title": "Rigid boundaries.",
  "body": "Rigid boundaries  Thankfully, in the case of a fluid solid boundary, if the solid is rigid (which we often assume), the no-slip boundary conditions on the velocity are sufficient to solve the problem mathematically. If desired, a force balance can be performed after solving the problem, and this determines the stress (force per unit area) that the fluid exerts on the solid wall, and we can thus find the reaction force that the wall applies in order to maintain its position in the presence of the flowing fluid.  "
},
{
  "id": "fig-water-strider",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#fig-water-strider",
  "type": "Figure",
  "number": "7.2.7",
  "title": "",
  "body": " Surface tension is very important if you are small! Credit J. Bush and D. Hu   Water strider   "
},
{
  "id": "fig-surfacetension",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#fig-surfacetension",
  "type": "Figure",
  "number": "7.2.8",
  "title": "",
  "body": " Thought experiment to illustrate surface tension   Surface tension   "
},
{
  "id": "boundaries-surfaces-interfaces-5-7",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#boundaries-surfaces-interfaces-5-7",
  "type": "Example",
  "number": "7.2.9",
  "title": "Droplet pressure.",
  "body": " Droplet pressure  A spherical fluid droplet of radius has coefficient of surface tension . What is the pressure difference between the inside and outside of the droplet?    Surface tension example: droplet   Droplet    "
},
{
  "id": "boundaries-surfaces-interfaces-5-8",
  "level": "2",
  "url": "boundaries-surfaces-interfaces.html#boundaries-surfaces-interfaces-5-8",
  "type": "Example",
  "number": "7.2.11",
  "title": "Meniscus.",
  "body": " Meniscus   Surface tension example: meniscus   Meniscus      Flat surface: no net surface tension force pressures equal.  Concave up: resultant points outward pressure below surface lower than atmospheric.  Concave down: resultant points inward pressure inside greater than atmospheric.    These agree with the hydrostatic pressure profile within the fluid. In principle, the shape of the meniscus can be calculated from this agreement.  "
},
{
  "id": "sec-stress",
  "level": "1",
  "url": "sec-stress.html",
  "type": "Section",
  "number": "7.3",
  "title": "Stress in a fluid",
  "body": " Stress in a fluid   Stress at a surface   Definition of stress at a surface   The fluid stress on a surface, , is the force per unit area exerted by the fluid; note that this is a vector quantity. It is often convenient to decompose the stress into two contributions, as these are often quite different both in magnitude and in physical origin:  Shear stress: the components tangential to the surface  Normal stress: the component perpendicular to the surface.       Fluid stress in arteries  The shear stress on arterial walls is everywhere maintained at around Pa, whereas the normal stress is typically much larger at ~11–16 kPa. The distribution of shear stress, although much smaller than the normal stress, is known to be of great importance to our health as it is linked to the development of atherosclerosis, which leads to heart attacks and strokes, two of the leading causes of death worldwide.    Calculation of stress at a surface   For Newtonian fluids at a no-slip surface:  The wall shear stress equals the fluid shear viscosity multiplied by the normal derivative of the tangential velocity.  Provided the surface is not accelerating, the normal stress equals the pressure.  Note that in 3D there are two shear components and one normal component.     Shear stress at a flat wall  Flat wall at and fluid in : Flat wall at and fluid in :     Shear stress on a circular pipe  Flow in a circular pipe, wall at in cylindrical polar coordinates:     Cone-and-plate viscometer  Cone-and-plate viscometer: cone lowered into fluid, torque needed to rotate cone gives viscosity.   Cone and plate viscometer   Cone and plate viscometer      Falling ball viscometer  Falling-ball viscometer: measure terminal velocity of a ball in fluid at low Reynolds number (see ).     The stress tensor  Cauchy showed that the state of stress at a point in a continuum body is completely defined by a rank two tensor (that is, a matrix with appropriate transformation properties) called the Cauchy stress tensor , , given by which has nine scalar components.   Obtaining the stress from the stress tensor    can be extended to any surface within the fluid. The stress is a vector (or rank one tensor), , given by where is the unit normal vector to the surface, pointing into the fluid that is giving rise to the stress.     Element interpretation of the stress tensor  The element of the stress tensor can be defined as the th component of the stress on the plane with normal vector in the direction of increasing .  Thus for example is the -component of the stress on the surface within the fluid, and acting on the fluid in . There is an equal and opposite stress acting on the fluid in .    Notes about the stress tensor     The stress is the force per unit area exerted by the fluid on the right-hand side of the small imaginary surface shown in the figure below upon the fluid on the left-hand side of .   Imaginary surface in a flowing fluid, illustrating the concept of stress within a fluid.   Stress within a fluid      The stresses acting on opposite sides of a surface (i.e. on the surfaces with normals and ) are equal and opposite. This is required for linear equilibrium within the fluid.    The stress tensor is symmetric, i.e. . This is required for rotational equilibrium within the fluid, and can be derived from the principle of conservation of angular momentum.    The elements on the principal diagonal of the stress tensor matrix are called the normal stresses . The other six elements are called the shear stresses . The diagram below illustrates this; a cuboid with side lengths , and in the -, - and -directions, respectively, is shown, and the - and -components of the stresses on those faces that can be seen are shown.   Components of the stress on the faces of a small cuboid within a fluid.   Stress components    In :   The -components of the stresses are not shown in order that the diagram does not get too complicated (also the stress on the back face is not shown).    The -axis points outwards from the figure right-handed axes.    Note that these forces assume that the components of the stress tensor are uniform over the faces in question, which would not generally be the case, (although it is quite accurate in the case that the lengths , and are small.          Defining the fluid pressure in terms of the stress tensor  We can now write a mathematical definition of the fluid pressure in terms of the stress tensor: This equation gives us a method by which we can (at least in our imagination) think about measuring the pressure at a particular point in the fluid. We consider three small, mutually orthogonal planes passing through the point (aligned perpendicular to the -, - and -directions) and measure the three forces on the three surfaces. Dividing each force by the area of the respective plane leads to the stresses on the surfaces, which are, respectively, The normal components of the respective stresses are , and , and hence the pressure is the average of the three normal components of the stresses. The interpretation of the pressure is different for compressible and incompressible fluids:    Compressible fluids: From classical thermodynamics it is known that we can define the pressure of the fluid as a parameter of state, making use of an equation of state (for example for an ideal gas).     Incompressible fluids: For an incompressible fluid the pressure is an independent, purely dynamical, variable.   In this course we mainly consider incompressible fluids.    Notes about the stress tensor and pressure   naturally leads to where is called the deviatoric stress tensor , and this part of the stress occurs entirely due to the fluid motion. Taking the trace of this equation gives , and implies that .    Special case of a fluid at rest  In a fluid at rest we have , and thus , where is the identity matrix, meaning that is a multiple of the identity matrix and the only stresses are due to the pressure.    The constitutive relationship of a fluid   This is an equation that describes the relationship between the stress tensor and the kinematic state of the fluid. It is found from experiments, and governs the mechanical behaviour of the fluid, that is the rheology of the fluid. Together with the equations of mass and momentum conservation, this closes the problem for the velocity and pressure fields. Every fluid obeying the continuum approximation has a constitutive relationship, which can be thought of as a definition of its mechanical properties.     "
},
{
  "id": "def-stress-surface",
  "level": "2",
  "url": "sec-stress.html#def-stress-surface",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Definition of stress at a surface.",
  "body": " Definition of stress at a surface   The fluid stress on a surface, , is the force per unit area exerted by the fluid; note that this is a vector quantity. It is often convenient to decompose the stress into two contributions, as these are often quite different both in magnitude and in physical origin:  Shear stress: the components tangential to the surface  Normal stress: the component perpendicular to the surface.     "
},
{
  "id": "example-shear-stress",
  "level": "2",
  "url": "sec-stress.html#example-shear-stress",
  "type": "Example",
  "number": "7.3.2",
  "title": "Fluid stress in arteries.",
  "body": " Fluid stress in arteries  The shear stress on arterial walls is everywhere maintained at around Pa, whereas the normal stress is typically much larger at ~11–16 kPa. The distribution of shear stress, although much smaller than the normal stress, is known to be of great importance to our health as it is linked to the development of atherosclerosis, which leads to heart attacks and strokes, two of the leading causes of death worldwide.  "
},
{
  "id": "def-stress-surface-calculation",
  "level": "2",
  "url": "sec-stress.html#def-stress-surface-calculation",
  "type": "Definition",
  "number": "7.3.3",
  "title": "Calculation of stress at a surface.",
  "body": " Calculation of stress at a surface   For Newtonian fluids at a no-slip surface:  The wall shear stress equals the fluid shear viscosity multiplied by the normal derivative of the tangential velocity.  Provided the surface is not accelerating, the normal stress equals the pressure.  Note that in 3D there are two shear components and one normal component.   "
},
{
  "id": "sec-stress-2-5",
  "level": "2",
  "url": "sec-stress.html#sec-stress-2-5",
  "type": "Example",
  "number": "7.3.4",
  "title": "Shear stress at a flat wall.",
  "body": " Shear stress at a flat wall  Flat wall at and fluid in : Flat wall at and fluid in :   "
},
{
  "id": "sec-stress-2-6",
  "level": "2",
  "url": "sec-stress.html#sec-stress-2-6",
  "type": "Example",
  "number": "7.3.5",
  "title": "Shear stress on a circular pipe.",
  "body": " Shear stress on a circular pipe  Flow in a circular pipe, wall at in cylindrical polar coordinates:   "
},
{
  "id": "sec-stress-2-7",
  "level": "2",
  "url": "sec-stress.html#sec-stress-2-7",
  "type": "Example",
  "number": "7.3.6",
  "title": "Cone-and-plate viscometer.",
  "body": " Cone-and-plate viscometer  Cone-and-plate viscometer: cone lowered into fluid, torque needed to rotate cone gives viscosity.   Cone and plate viscometer   Cone and plate viscometer    "
},
{
  "id": "sec-stress-2-8",
  "level": "2",
  "url": "sec-stress.html#sec-stress-2-8",
  "type": "Example",
  "number": "7.3.8",
  "title": "Falling ball viscometer.",
  "body": " Falling ball viscometer  Falling-ball viscometer: measure terminal velocity of a ball in fluid at low Reynolds number (see ).  "
},
{
  "id": "subsec-stress-tensor-3",
  "level": "2",
  "url": "sec-stress.html#subsec-stress-tensor-3",
  "type": "Definition",
  "number": "7.3.9",
  "title": "Obtaining the stress from the stress tensor.",
  "body": " Obtaining the stress from the stress tensor    can be extended to any surface within the fluid. The stress is a vector (or rank one tensor), , given by where is the unit normal vector to the surface, pointing into the fluid that is giving rise to the stress.   "
},
{
  "id": "subsec-stress-tensor-4",
  "level": "2",
  "url": "sec-stress.html#subsec-stress-tensor-4",
  "type": "Remark",
  "number": "7.3.10",
  "title": "Element interpretation of the stress tensor.",
  "body": " Element interpretation of the stress tensor  The element of the stress tensor can be defined as the th component of the stress on the plane with normal vector in the direction of increasing .  Thus for example is the -component of the stress on the surface within the fluid, and acting on the fluid in . There is an equal and opposite stress acting on the fluid in .  "
},
{
  "id": "subsec-stress-tensor-5",
  "level": "2",
  "url": "sec-stress.html#subsec-stress-tensor-5",
  "type": "Remark",
  "number": "7.3.11",
  "title": "Notes about the stress tensor.",
  "body": " Notes about the stress tensor     The stress is the force per unit area exerted by the fluid on the right-hand side of the small imaginary surface shown in the figure below upon the fluid on the left-hand side of .   Imaginary surface in a flowing fluid, illustrating the concept of stress within a fluid.   Stress within a fluid      The stresses acting on opposite sides of a surface (i.e. on the surfaces with normals and ) are equal and opposite. This is required for linear equilibrium within the fluid.    The stress tensor is symmetric, i.e. . This is required for rotational equilibrium within the fluid, and can be derived from the principle of conservation of angular momentum.    The elements on the principal diagonal of the stress tensor matrix are called the normal stresses . The other six elements are called the shear stresses . The diagram below illustrates this; a cuboid with side lengths , and in the -, - and -directions, respectively, is shown, and the - and -components of the stresses on those faces that can be seen are shown.   Components of the stress on the faces of a small cuboid within a fluid.   Stress components    In :   The -components of the stresses are not shown in order that the diagram does not get too complicated (also the stress on the back face is not shown).    The -axis points outwards from the figure right-handed axes.    Note that these forces assume that the components of the stress tensor are uniform over the faces in question, which would not generally be the case, (although it is quite accurate in the case that the lengths , and are small.        "
},
{
  "id": "subsec-stress-tensor-6",
  "level": "2",
  "url": "sec-stress.html#subsec-stress-tensor-6",
  "type": "Remark",
  "number": "7.3.14",
  "title": "Defining the fluid pressure in terms of the stress tensor.",
  "body": " Defining the fluid pressure in terms of the stress tensor  We can now write a mathematical definition of the fluid pressure in terms of the stress tensor: This equation gives us a method by which we can (at least in our imagination) think about measuring the pressure at a particular point in the fluid. We consider three small, mutually orthogonal planes passing through the point (aligned perpendicular to the -, - and -directions) and measure the three forces on the three surfaces. Dividing each force by the area of the respective plane leads to the stresses on the surfaces, which are, respectively, The normal components of the respective stresses are , and , and hence the pressure is the average of the three normal components of the stresses. The interpretation of the pressure is different for compressible and incompressible fluids:    Compressible fluids: From classical thermodynamics it is known that we can define the pressure of the fluid as a parameter of state, making use of an equation of state (for example for an ideal gas).     Incompressible fluids: For an incompressible fluid the pressure is an independent, purely dynamical, variable.   In this course we mainly consider incompressible fluids.  "
},
{
  "id": "subsec-stress-tensor-7",
  "level": "2",
  "url": "sec-stress.html#subsec-stress-tensor-7",
  "type": "Remark",
  "number": "7.3.15",
  "title": "Notes about the stress tensor and pressure.",
  "body": " Notes about the stress tensor and pressure   naturally leads to where is called the deviatoric stress tensor , and this part of the stress occurs entirely due to the fluid motion. Taking the trace of this equation gives , and implies that .  "
},
{
  "id": "subsec-stress-tensor-8",
  "level": "2",
  "url": "sec-stress.html#subsec-stress-tensor-8",
  "type": "Remark",
  "number": "7.3.16",
  "title": "Special case of a fluid at rest.",
  "body": " Special case of a fluid at rest  In a fluid at rest we have , and thus , where is the identity matrix, meaning that is a multiple of the identity matrix and the only stresses are due to the pressure.  "
},
{
  "id": "def-constitutive-relation",
  "level": "2",
  "url": "sec-stress.html#def-constitutive-relation",
  "type": "Definition",
  "number": "7.3.17",
  "title": "The constitutive relationship of a fluid.",
  "body": " The constitutive relationship of a fluid   This is an equation that describes the relationship between the stress tensor and the kinematic state of the fluid. It is found from experiments, and governs the mechanical behaviour of the fluid, that is the rheology of the fluid. Together with the equations of mass and momentum conservation, this closes the problem for the velocity and pressure fields. Every fluid obeying the continuum approximation has a constitutive relationship, which can be thought of as a definition of its mechanical properties.   "
},
{
  "id": "subsec-newtonian-fluids",
  "level": "1",
  "url": "subsec-newtonian-fluids.html",
  "type": "Section",
  "number": "7.4",
  "title": "Newtonian fluids",
  "body": " Newtonian fluids   Incompressible Newtonian fluid   We can define a Newtonian fluid by stating its constitutive relationship. where is the dynamic shear viscosity . Alternatively, in vector form, where is the rate-of-strain tensor, where or, alternatively, All three of these forms ( and ) are equivalent. Using , we may write the stress tensor of an incompressible Newtonian fluid in component form in Cartesian coordinates as      Derivation of Newtonian fluid stress tensor from first principles  Non-examinable:  Newtonian fluids have the following properties:   The deviatoric part of the stress tensor, , is a linear function of the nine velocity gradients, This implies for some unknown scalars .    The fluid is homogeneous, i.e. does not depend explicitly on . This implies that the 's are constant in space. An example of when this would not be the case would be an inhomogeneous fluid, such as a fluid that is heated differentially.    The fluid is isotropic, i.e. there is no preferred direction. Insisting that transforms correctly under rotations (and in fact we only need to consider rotations through about the coordinate axes) implies that is zero unless each subscript appears an even number of times. That is, the only non-zero terms are , , (which must all be equal), and those 's in which two of the indices , , , are '1' and two indices are '2', also terms with two `2's and two `3's, and terms with two `1's and two `3's (and these obey certain equalities too). An example of when this would not be the case would be an anisotropic fluid, such as nematic liquid crystals (long chain molecules that align in a magnetic field) or flowing blood in which the red blood cells align in the direction of flow).   Additionally requiring that is a symmetric matrix means that, in component form, we can reduce the 's down to just two independent scalar parameters, and , and we have where is the bulk viscosity of the fluid and is the dynamic shear viscosity . In vector form where is the rate-of-strain tensor, given by If the fluid is incompressible, then and the bulk viscosity is undefined, meaning that reduces to .    Formula in cylindrical and spherical coordinates  In cylindrical polar coordinates the rate-of-strain tensor is given by and in spherical polar coordinates it is You do not need to know these matrices for this course. You might have to use them, but these formulae would be supplied. You do need to know the Cartesian equivalent .    Notes on the Newtonian fluids stress tensor     For an incompressible Newtonian fluid the stress tensor has only one parameter, the shear viscosity, , and there are are only two parameters needed to describe the mechanical behaviour of the fluid: and the fluid density, .    The shear viscosity, , is often a function of temperature, and sometimes of pressure too. For most common fluids the shear viscosity decreases with increasing temperature.       Stress at a surface  In , we stated formulae for the stress that a fluid exerts on a rigid solid boundary. We are now in a position to check the formulae given there.  The normal stress on a surface with normal is given by The last term represents times the derivative of the normal component of the velocity in the normal direction. Thus the normal stress is not necessary equal to the pressure!  However, if we assume that the surface is fixed then we may show that the normal stress of an incompressible Newtonian fluid does equal the pressure:   By rotating the coordinate axes we may assume that .    From , the normal stress is .    Since the fluid is incompressible,     The boundary conditions at the solid surface are . Thus on the surface. The continuity equation implies that also.    Hence the normal stress on the surface is .     At a fixed solid surface the shear stress of a Newtonian fluid equals the viscosity multiplied by the derivative of the component of velocity parallel to the surface with respect to the perpendicular coordinate. We can show this as follows:   As before we may rotate the coordinate axes so that .    Using , the stress at the surface is and the shear stresses are given by the - and -components:     No slip boundary conditions at the solid surface are . Thus on the surface.    Hence the shear stresses on the surface are agreeing with the previous definitions.       Inviscid fluids  In previous chapters, you studied inviscid or ideal fluids. These are fluids with . In this case, the constitutive law becomes and thus the stress in the fluid is not affected by the fluid motion.    Non-Newtonian fluids  Many fluids do not obey the assumptions underlying a Newtonian fluid, meaning that their constitutive relationship takes a more complicated form. Many foods and household products, e.g. egg white, custard, shampoo, toothpaste have a non-Newtonian rheology. In the case of foods, this is often because the non-Newtonian properties themselves lend a texture that makes them taste better! For household products the non-Newtonian properties help us use them (for example a Newtonian shampoo might drain off our hair before we have a chance to work it in).  The Navier Stokes equations do not work for genuinely non-Newtonian flows, and the pressure and viscous terms must be replaced by a formula that captures the rheology. However, for a surprising variety of complex fluids, the Navier Stokes equations do in fact provide a remarkably good description of the behaviour.  In general, however, the rheology of non-Newtonian fluids is often very complex, and is an area of active research. Categories include the following:    Non-constant viscosity: This is perhaps the simplest way a fluid can be non-Newtonian. Examples include shear thinning fluids, e.g. blood, and shear-thickening fluids, e.g. fluids containing cornflour such as custard, or fluids whose viscosity depends on the temperature of the fluid.   Examples of Non-Newtonian fluids   Non-Newtonian fluids    A short video on shear thickening fluids is both fun and educational.     Viscoelastic fluids: These are fluids that have both elastic and viscous properties, that is the molecules seem to have a memory and spring back when they are suddenly displaced (but not so much when they are slowly displaced); thus they are sometimes described as having a `fading memory'. In this case the formula for the deviatoric part of the stress tensor involves an integral over the previous states of the fluid. Examples include ketchup, paint, mucus and vitreous humour.     Anisotropic fluids: Some fluids respond differently to the same stress but applied in different directions. An example of this is blood, which contains red blood cells affecting the dynamics. When the blood is flowing the cells align, meaning the effective viscosity is much less in the direction of flow and more in the transverse direction (this is also related to the fact that blood is shear thinning). In large arteries it is usually acceptable to model blood as a Newtonian fluid because the diameter of the artery is many times that of the cells. However, for small arteries, such as that in , the Newtonian model does not give an accurate picture.   Computer simulation of blood flow in a microvessel by the Biological Flow Studies Laboratory in Tohoku University, Japan. The left picture shows the view of the blood from the outside (with the vessel walls removed), whilst that on the right shows the view in the central plane of the vessel.   Blood flow     shows a schematic representation of nematic liquid crystals, which are used in computer displays, electronic signs etc. These align by themselves to a preferred direction for high enough temperatures, and a magnetic field can be used to set the direction.   Schematic representation of nematic liquid crystals, an example of an anisotropic fluid.   Liquid crystals         Calculating the stress due to a shear flow    Shear flow   Shear flow    Consider an incompressible Newtonian fluid flowing in in Cartesian coordinates in a uniform pressure field with constant, and whose velocity components are respectively given by (it may be shown these satisfy the governing equations). Find the stress tensor at a general location. Hence find the stress at a general location on an imaginary surface with unit normal vector . In this question you may neglect gravity.    The stress tensor is given by where the rate-of-strain tensor is given by Hence the stress tensor is given by Thus for a general unit vector Note:   For example with , we have . This makes sense as there is a background pressure pressing into the surface and a stress arising from the shear flow and running along the surface. It also agrees with the formulae for stress at a surface given in .    Likewise if , we have . This formula cannot be compared with the formula given in as it would not be possible to put in a rigid surface with normal without changing the flow.        Calculating the stress due to flow in a pipe   We consider a flow of an incompressible Newtonian fluid in a circular cylinder of radius and infinite length in the -direction, working in cylindrical polar coordinates with axis along the cylinder axis. The velocity components are given by where is the axial pressure gradient. Find the stress tensor at a general point and comment on it. Note that this flow is a famous solution of the governing equations and is called Hagen Poiseuille flow .    We have the rate-of-strain tensor given by as and hence Incompressibility requires to be constant, and hence , where is a constant, and giving Hence for imaginary surfaces with normal vectors , , , respectively, the stress on the surface is given by It is not possible to compare these formulae with the ones given in . The exception is the case when we find the stress on the wall ( ), which we can do by setting the normal vector , giving that is a normal stress equal to minus the pressure and an axial shear stress (which is , as expected).    "
},
{
  "id": "def-newtonian-fluid",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#def-newtonian-fluid",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Incompressible Newtonian fluid.",
  "body": " Incompressible Newtonian fluid   We can define a Newtonian fluid by stating its constitutive relationship. where is the dynamic shear viscosity . Alternatively, in vector form, where is the rate-of-strain tensor, where or, alternatively, All three of these forms ( and ) are equivalent. Using , we may write the stress tensor of an incompressible Newtonian fluid in component form in Cartesian coordinates as    "
},
{
  "id": "subsec-newtonian-fluids-3",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-3",
  "type": "Remark",
  "number": "7.4.2",
  "title": "Derivation of Newtonian fluid stress tensor from first principles.",
  "body": " Derivation of Newtonian fluid stress tensor from first principles  Non-examinable:  Newtonian fluids have the following properties:   The deviatoric part of the stress tensor, , is a linear function of the nine velocity gradients, This implies for some unknown scalars .    The fluid is homogeneous, i.e. does not depend explicitly on . This implies that the 's are constant in space. An example of when this would not be the case would be an inhomogeneous fluid, such as a fluid that is heated differentially.    The fluid is isotropic, i.e. there is no preferred direction. Insisting that transforms correctly under rotations (and in fact we only need to consider rotations through about the coordinate axes) implies that is zero unless each subscript appears an even number of times. That is, the only non-zero terms are , , (which must all be equal), and those 's in which two of the indices , , , are '1' and two indices are '2', also terms with two `2's and two `3's, and terms with two `1's and two `3's (and these obey certain equalities too). An example of when this would not be the case would be an anisotropic fluid, such as nematic liquid crystals (long chain molecules that align in a magnetic field) or flowing blood in which the red blood cells align in the direction of flow).   Additionally requiring that is a symmetric matrix means that, in component form, we can reduce the 's down to just two independent scalar parameters, and , and we have where is the bulk viscosity of the fluid and is the dynamic shear viscosity . In vector form where is the rate-of-strain tensor, given by If the fluid is incompressible, then and the bulk viscosity is undefined, meaning that reduces to .  "
},
{
  "id": "subsec-newtonian-fluids-4",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-4",
  "type": "Remark",
  "number": "7.4.3",
  "title": "Formula in cylindrical and spherical coordinates.",
  "body": " Formula in cylindrical and spherical coordinates  In cylindrical polar coordinates the rate-of-strain tensor is given by and in spherical polar coordinates it is You do not need to know these matrices for this course. You might have to use them, but these formulae would be supplied. You do need to know the Cartesian equivalent .  "
},
{
  "id": "subsec-newtonian-fluids-5",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-5",
  "type": "Remark",
  "number": "7.4.4",
  "title": "Notes on the Newtonian fluids stress tensor.",
  "body": " Notes on the Newtonian fluids stress tensor     For an incompressible Newtonian fluid the stress tensor has only one parameter, the shear viscosity, , and there are are only two parameters needed to describe the mechanical behaviour of the fluid: and the fluid density, .    The shear viscosity, , is often a function of temperature, and sometimes of pressure too. For most common fluids the shear viscosity decreases with increasing temperature.     "
},
{
  "id": "subsec-newtonian-fluids-6",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-6",
  "type": "Remark",
  "number": "7.4.5",
  "title": "Stress at a surface.",
  "body": " Stress at a surface  In , we stated formulae for the stress that a fluid exerts on a rigid solid boundary. We are now in a position to check the formulae given there.  The normal stress on a surface with normal is given by The last term represents times the derivative of the normal component of the velocity in the normal direction. Thus the normal stress is not necessary equal to the pressure!  However, if we assume that the surface is fixed then we may show that the normal stress of an incompressible Newtonian fluid does equal the pressure:   By rotating the coordinate axes we may assume that .    From , the normal stress is .    Since the fluid is incompressible,     The boundary conditions at the solid surface are . Thus on the surface. The continuity equation implies that also.    Hence the normal stress on the surface is .     At a fixed solid surface the shear stress of a Newtonian fluid equals the viscosity multiplied by the derivative of the component of velocity parallel to the surface with respect to the perpendicular coordinate. We can show this as follows:   As before we may rotate the coordinate axes so that .    Using , the stress at the surface is and the shear stresses are given by the - and -components:     No slip boundary conditions at the solid surface are . Thus on the surface.    Hence the shear stresses on the surface are agreeing with the previous definitions.     "
},
{
  "id": "subsec-newtonian-fluids-7",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-7",
  "type": "Remark",
  "number": "7.4.6",
  "title": "Inviscid fluids.",
  "body": " Inviscid fluids  In previous chapters, you studied inviscid or ideal fluids. These are fluids with . In this case, the constitutive law becomes and thus the stress in the fluid is not affected by the fluid motion.  "
},
{
  "id": "subsec-newtonian-fluids-8",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-8",
  "type": "Remark",
  "number": "7.4.7",
  "title": "Non-Newtonian fluids.",
  "body": " Non-Newtonian fluids  Many fluids do not obey the assumptions underlying a Newtonian fluid, meaning that their constitutive relationship takes a more complicated form. Many foods and household products, e.g. egg white, custard, shampoo, toothpaste have a non-Newtonian rheology. In the case of foods, this is often because the non-Newtonian properties themselves lend a texture that makes them taste better! For household products the non-Newtonian properties help us use them (for example a Newtonian shampoo might drain off our hair before we have a chance to work it in).  The Navier Stokes equations do not work for genuinely non-Newtonian flows, and the pressure and viscous terms must be replaced by a formula that captures the rheology. However, for a surprising variety of complex fluids, the Navier Stokes equations do in fact provide a remarkably good description of the behaviour.  In general, however, the rheology of non-Newtonian fluids is often very complex, and is an area of active research. Categories include the following:    Non-constant viscosity: This is perhaps the simplest way a fluid can be non-Newtonian. Examples include shear thinning fluids, e.g. blood, and shear-thickening fluids, e.g. fluids containing cornflour such as custard, or fluids whose viscosity depends on the temperature of the fluid.   Examples of Non-Newtonian fluids   Non-Newtonian fluids    A short video on shear thickening fluids is both fun and educational.     Viscoelastic fluids: These are fluids that have both elastic and viscous properties, that is the molecules seem to have a memory and spring back when they are suddenly displaced (but not so much when they are slowly displaced); thus they are sometimes described as having a `fading memory'. In this case the formula for the deviatoric part of the stress tensor involves an integral over the previous states of the fluid. Examples include ketchup, paint, mucus and vitreous humour.     Anisotropic fluids: Some fluids respond differently to the same stress but applied in different directions. An example of this is blood, which contains red blood cells affecting the dynamics. When the blood is flowing the cells align, meaning the effective viscosity is much less in the direction of flow and more in the transverse direction (this is also related to the fact that blood is shear thinning). In large arteries it is usually acceptable to model blood as a Newtonian fluid because the diameter of the artery is many times that of the cells. However, for small arteries, such as that in , the Newtonian model does not give an accurate picture.   Computer simulation of blood flow in a microvessel by the Biological Flow Studies Laboratory in Tohoku University, Japan. The left picture shows the view of the blood from the outside (with the vessel walls removed), whilst that on the right shows the view in the central plane of the vessel.   Blood flow     shows a schematic representation of nematic liquid crystals, which are used in computer displays, electronic signs etc. These align by themselves to a preferred direction for high enough temperatures, and a magnetic field can be used to set the direction.   Schematic representation of nematic liquid crystals, an example of an anisotropic fluid.   Liquid crystals       "
},
{
  "id": "subsec-newtonian-fluids-9",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-9",
  "type": "Example",
  "number": "7.4.11",
  "title": "Calculating the stress due to a shear flow.",
  "body": " Calculating the stress due to a shear flow    Shear flow   Shear flow    Consider an incompressible Newtonian fluid flowing in in Cartesian coordinates in a uniform pressure field with constant, and whose velocity components are respectively given by (it may be shown these satisfy the governing equations). Find the stress tensor at a general location. Hence find the stress at a general location on an imaginary surface with unit normal vector . In this question you may neglect gravity.    The stress tensor is given by where the rate-of-strain tensor is given by Hence the stress tensor is given by Thus for a general unit vector Note:   For example with , we have . This makes sense as there is a background pressure pressing into the surface and a stress arising from the shear flow and running along the surface. It also agrees with the formulae for stress at a surface given in .    Likewise if , we have . This formula cannot be compared with the formula given in as it would not be possible to put in a rigid surface with normal without changing the flow.      "
},
{
  "id": "subsec-newtonian-fluids-10",
  "level": "2",
  "url": "subsec-newtonian-fluids.html#subsec-newtonian-fluids-10",
  "type": "Example",
  "number": "7.4.13",
  "title": "Calculating the stress due to flow in a pipe.",
  "body": " Calculating the stress due to flow in a pipe   We consider a flow of an incompressible Newtonian fluid in a circular cylinder of radius and infinite length in the -direction, working in cylindrical polar coordinates with axis along the cylinder axis. The velocity components are given by where is the axial pressure gradient. Find the stress tensor at a general point and comment on it. Note that this flow is a famous solution of the governing equations and is called Hagen Poiseuille flow .    We have the rate-of-strain tensor given by as and hence Incompressibility requires to be constant, and hence , where is a constant, and giving Hence for imaginary surfaces with normal vectors , , , respectively, the stress on the surface is given by It is not possible to compare these formulae with the ones given in . The exception is the case when we find the stress on the wall ( ), which we can do by setting the normal vector , giving that is a normal stress equal to minus the pressure and an axial shear stress (which is , as expected).   "
},
{
  "id": "sec-linear-momentum-cons",
  "level": "1",
  "url": "sec-linear-momentum-cons.html",
  "type": "Section",
  "number": "7.5",
  "title": "Conservation of linear momentum",
  "body": " Conservation of linear momentum    Small cube used to derive the equations of motion   Small cube    We consider the balance of linear momentum in a small cube of side length for an incompressible fluid , see . To do this we employ the Reynolds Transport Theorem , with equal to the linear momentum of the fluid per unit volume, , and being the small volume of fluid under consideration, which coincides with the cube at time (however, note that the volume of fluid we are following is not generally a cube at other times). The theorem states that:     Left-hand side  We note that is the integral of the linear momentum per unit volume over the volume and is therefore the total momentum of the fluid particles in . The left-hand side of this equation is thus the Lagrangian rate of change of momentum of these fluid particles. By Newton's second law, this must equal the total force acting on the fluid in , which we denote by . This force has different contributions, which can be categorised into body forces (which act on the whole volume of fluid) and surface forces (acting only on the surface of the fluid, and which arise from the fluid stress):    Body forces: These are equal to either zero (if gravity is not important) or equal to the gravitational force    Surface forces: These arise from the stress exerted at the surface of the fluid parcel, and these can be computed by integrating the stress vector over the surface of the cube. On the left face, we have , and, using , the stress vector is and the force on the left face is this expression multiplied by the area . Similarly, on the right-hand face, we have , and the stress vector is with the contribution to the force being this expression multiplied by . Hence the contribution to the force from the left and right faces is After a similar calculation, the contributions from the front and back faces can be shown to be and from the top and bottom faces we get Hence the total force due to surface stresses is where the final equality was obtained using the incompressibility condition  .  Hence, the left-hand side of the Reynolds Transport Theorem becomes     Right-hand side  We now evaluate the right-hand side of the Reynolds Transport Theorem: where the final equality was obtained using the incompressibility condition  .    Equating the two sides  Setting the two sides equal gives and since this must hold for any small volume of fluid, we obtain Rearranging gives the incompressible Navier Stokes equation:    Clarification on the detail of the proof  Note that there was some sleight of hand going on in this proof! We assumed that the stress was uniform over each face of the cube, meaning we could just multiply the stress on each face by the area of the face to get the force on that face. Indeed, if this were actually the case, then the stress would be uniform over the whole surface of the cube, and hence the net force on the surface would be zero. To resolve this, we would need to add higher-order contributions into the integrand when calculating the force on each face, which could result in higher-order contributions to the resultant force due to the sum of the stresses. We could do this by writing the stress as a Taylor series about the corner of the cube. Happily, with a bit more work (not included here), these higher order terms cancel and the result we obtained here holds.    The incompressible Navier Stokes equation together with the incompressible continuity equation is often used to study problems encountered in fluid dynamics and it was developed by Claude-Louis Navier (1785 1836) and George Gabriel Stokes (1819 1903).     Discussion of the Navier Stokes equation   Inertial terms  The terms on the left-hand side of represent inertial effects, since the material derivative is the acceleration moving with the fluid. Thus the left-hand side is rate of change of momentum of the fluid particles per unit volume of the fluid. As remarked earlier in this course, it is not surprising that the material derivative appears in the governing equations, since forces act on fluid particles.    Solving the equations  The Navier Stokes equation is notoriously difficult to solve, particularly as the term is nonlinear. In fact, one of the famous Millennium Prize Problems is to prove that in three dimensions, given suitable initial and boundary conditions, there always exists a smooth solution of the Navier Stokes equation for all time, or to provide an example where this does not hold. The problem is that the nonlinear term can lead to singularities developing in the solution, which would correspond to infinite velocities or pressures at some point in the fluid. This is not expected to happen in real fluids, but proving this rigorously is a major challenge.  You will be relieved to know that in this course we will only consider simple solutions of the Navier Stokes equations (often ones in which the nonlinear term equals zero).  In a typical problem, there are four unknown variables: , , and . There are four equations governing their behaviour, which are the incompressible continuity equation and the three components of the Navier Stokes equation . In addition, we need to specify appropriate boundary conditions (for example, no slip conditions at a solid boundary) and initial conditions (the velocity and pressure at time ).    Equations in components  The Navier Stokes and continuity equations and can be written in component form as Or, in two dimensions:   The special case of an axisymmetric flow (one that is rotationally symmetric) is also much simpler to analyse (and sometimes this is also referred to as being two-dimensional). You will derive the equations in other coordinates in .    Comparison with analysis of the extensive properties  As mentioned in , some engineering problems can be analysed in terms of applying the principle of mass and linear momentum conservation to a defined region of the fluid, and this can be used for some engineering applications. In contrast, the Navier Stokes and continuity equations, and , apply mass and linear momentum conservation at each point in the fluid.    The Cauchy equation  Instead of working in terms of the stress tensor for Newtonian fluids, as we did in the derivation of the Navier Stokes equation , we can instead work in terms of a general stress tensor to derive the Cauchy equation, which applies to any fluid. This states where is the body force per unit mass (for example, gravity). This is a more general equation than the Navier Stokes equation, which applies only to Newtonian fluids obeying the consititutive law . You will perform the derivation in this more general case in .    Non-inertial reference frames  The Navier Stokes equations can be adapted for use in a non-inertial reference frame: where and are, respectively, the velocity and gradient operator in the non-inertial coordinates, and is the apparent additional force acting on the fluid due to the non-inertial nature of the reference frame, which has contributions due to the linear acceleration and angular accelerations of the non-inertial reference frame, and the Coriolis and centrifugal forces.    Inviscid fluids  In the case of an inviscid fluid, , and we recover the Euler equation .     Example of the application   Application of Navier Stokes and continuity equations   Consider an incompressible Newtonian fluid flowing in a gravitational field with velocity Check that this flow satisfies the continuity and Navier Stokes equations, and find the pressure field. Based on Problem 4.34 in .    To check the continuity equation, we show so this is satisfied.  The Navier Stokes equations are For the flow given    ,     which gives      .   Hence, the components of the Navier Stokes equations become The question of whether the flow satisfies the Navier Stokes equations now becomes a question of whether we can find a pressure field satisfying each of these equations. The first equation has solution where is an arbitrary function of and . Substituting this solution into the second equation gives where is an arbitrary function of . Substituting this solution into the third equation gives Since we have found an expression for the pressure that satisfies all three components of the Navier Stokes equations, we can say that the given flow does satisfy the equations.     Note that in general if we have an expression for , say we know that , then we can check whether or not it it is possible to find by taking the curl of both sides, i.e. (since for all functions ). If satisfies then it is possible to find a pressure field (and hence the Navier Stokes equations are satisfied), otherwise it is not. In this example and as expected.    It is quite possible for a flow not to satisfy the Navier Stokes equations. For example, the similar looking flow does satisfy the continuity equation, but has The Navier Stokes equations would give Trying to solve this from the first equation would give and substituting this solution into the second equation gives This is a contradiction as is supposed to be a function of and only, but here the right-hand side depends on , meaning that has to depend on . Alternatively we could show that the curl of is non-zero, which also implies a contradiction.  If the flow were given at a particular point in time by , what do you think would happen next?    "
},
{
  "id": "fig-small-cube",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#fig-small-cube",
  "type": "Figure",
  "number": "7.5.1",
  "title": "",
  "body": " Small cube used to derive the equations of motion   Small cube   "
},
{
  "id": "subsec-rtt-equality-3",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-rtt-equality-3",
  "type": "Remark",
  "number": "7.5.2",
  "title": "Clarification on the detail of the proof.",
  "body": " Clarification on the detail of the proof  Note that there was some sleight of hand going on in this proof! We assumed that the stress was uniform over each face of the cube, meaning we could just multiply the stress on each face by the area of the face to get the force on that face. Indeed, if this were actually the case, then the stress would be uniform over the whole surface of the cube, and hence the net force on the surface would be zero. To resolve this, we would need to add higher-order contributions into the integrand when calculating the force on each face, which could result in higher-order contributions to the resultant force due to the sum of the stresses. We could do this by writing the stress as a Taylor series about the corner of the cube. Happily, with a bit more work (not included here), these higher order terms cancel and the result we obtained here holds.  "
},
{
  "id": "subsec-rtt-equality-4",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-rtt-equality-4",
  "type": "Remark",
  "number": "7.5.3",
  "title": "",
  "body": " The incompressible Navier Stokes equation together with the incompressible continuity equation is often used to study problems encountered in fluid dynamics and it was developed by Claude-Louis Navier (1785 1836) and George Gabriel Stokes (1819 1903).  "
},
{
  "id": "subsec-navierstokes-discussion-2",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-navierstokes-discussion-2",
  "type": "Remark",
  "number": "7.5.4",
  "title": "Inertial terms.",
  "body": " Inertial terms  The terms on the left-hand side of represent inertial effects, since the material derivative is the acceleration moving with the fluid. Thus the left-hand side is rate of change of momentum of the fluid particles per unit volume of the fluid. As remarked earlier in this course, it is not surprising that the material derivative appears in the governing equations, since forces act on fluid particles.  "
},
{
  "id": "subsec-navierstokes-discussion-3",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-navierstokes-discussion-3",
  "type": "Remark",
  "number": "7.5.5",
  "title": "Solving the equations.",
  "body": " Solving the equations  The Navier Stokes equation is notoriously difficult to solve, particularly as the term is nonlinear. In fact, one of the famous Millennium Prize Problems is to prove that in three dimensions, given suitable initial and boundary conditions, there always exists a smooth solution of the Navier Stokes equation for all time, or to provide an example where this does not hold. The problem is that the nonlinear term can lead to singularities developing in the solution, which would correspond to infinite velocities or pressures at some point in the fluid. This is not expected to happen in real fluids, but proving this rigorously is a major challenge.  You will be relieved to know that in this course we will only consider simple solutions of the Navier Stokes equations (often ones in which the nonlinear term equals zero).  In a typical problem, there are four unknown variables: , , and . There are four equations governing their behaviour, which are the incompressible continuity equation and the three components of the Navier Stokes equation . In addition, we need to specify appropriate boundary conditions (for example, no slip conditions at a solid boundary) and initial conditions (the velocity and pressure at time ).  "
},
{
  "id": "remark-navierstokes-components",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#remark-navierstokes-components",
  "type": "Remark",
  "number": "7.5.6",
  "title": "Equations in components.",
  "body": " Equations in components  The Navier Stokes and continuity equations and can be written in component form as Or, in two dimensions:   The special case of an axisymmetric flow (one that is rotationally symmetric) is also much simpler to analyse (and sometimes this is also referred to as being two-dimensional). You will derive the equations in other coordinates in .  "
},
{
  "id": "subsec-navierstokes-discussion-5",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-navierstokes-discussion-5",
  "type": "Remark",
  "number": "7.5.7",
  "title": "Comparison with analysis of the extensive properties.",
  "body": " Comparison with analysis of the extensive properties  As mentioned in , some engineering problems can be analysed in terms of applying the principle of mass and linear momentum conservation to a defined region of the fluid, and this can be used for some engineering applications. In contrast, the Navier Stokes and continuity equations, and , apply mass and linear momentum conservation at each point in the fluid.  "
},
{
  "id": "subsec-navierstokes-discussion-6",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-navierstokes-discussion-6",
  "type": "Remark",
  "number": "7.5.8",
  "title": "The Cauchy equation.",
  "body": " The Cauchy equation  Instead of working in terms of the stress tensor for Newtonian fluids, as we did in the derivation of the Navier Stokes equation , we can instead work in terms of a general stress tensor to derive the Cauchy equation, which applies to any fluid. This states where is the body force per unit mass (for example, gravity). This is a more general equation than the Navier Stokes equation, which applies only to Newtonian fluids obeying the consititutive law . You will perform the derivation in this more general case in .  "
},
{
  "id": "subsec-navierstokes-discussion-7",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-navierstokes-discussion-7",
  "type": "Remark",
  "number": "7.5.9",
  "title": "Non-inertial reference frames.",
  "body": " Non-inertial reference frames  The Navier Stokes equations can be adapted for use in a non-inertial reference frame: where and are, respectively, the velocity and gradient operator in the non-inertial coordinates, and is the apparent additional force acting on the fluid due to the non-inertial nature of the reference frame, which has contributions due to the linear acceleration and angular accelerations of the non-inertial reference frame, and the Coriolis and centrifugal forces.  "
},
{
  "id": "subsec-navierstokes-discussion-8",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-navierstokes-discussion-8",
  "type": "Remark",
  "number": "7.5.10",
  "title": "Inviscid fluids.",
  "body": " Inviscid fluids  In the case of an inviscid fluid, , and we recover the Euler equation .  "
},
{
  "id": "subsec-example-application-2",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-example-application-2",
  "type": "Example",
  "number": "7.5.11",
  "title": "Application of Navier–Stokes and continuity equations.",
  "body": " Application of Navier Stokes and continuity equations   Consider an incompressible Newtonian fluid flowing in a gravitational field with velocity Check that this flow satisfies the continuity and Navier Stokes equations, and find the pressure field. Based on Problem 4.34 in .    To check the continuity equation, we show so this is satisfied.  The Navier Stokes equations are For the flow given    ,     which gives      .   Hence, the components of the Navier Stokes equations become The question of whether the flow satisfies the Navier Stokes equations now becomes a question of whether we can find a pressure field satisfying each of these equations. The first equation has solution where is an arbitrary function of and . Substituting this solution into the second equation gives where is an arbitrary function of . Substituting this solution into the third equation gives Since we have found an expression for the pressure that satisfies all three components of the Navier Stokes equations, we can say that the given flow does satisfy the equations.   "
},
{
  "id": "subsec-example-application-3",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-example-application-3",
  "type": "Remark",
  "number": "7.5.12",
  "title": "",
  "body": " Note that in general if we have an expression for , say we know that , then we can check whether or not it it is possible to find by taking the curl of both sides, i.e. (since for all functions ). If satisfies then it is possible to find a pressure field (and hence the Navier Stokes equations are satisfied), otherwise it is not. In this example and as expected.  "
},
{
  "id": "subsec-example-application-4",
  "level": "2",
  "url": "sec-linear-momentum-cons.html#subsec-example-application-4",
  "type": "Remark",
  "number": "7.5.13",
  "title": "",
  "body": " It is quite possible for a flow not to satisfy the Navier Stokes equations. For example, the similar looking flow does satisfy the continuity equation, but has The Navier Stokes equations would give Trying to solve this from the first equation would give and substituting this solution into the second equation gives This is a contradiction as is supposed to be a function of and only, but here the right-hand side depends on , meaning that has to depend on . Alternatively we could show that the curl of is non-zero, which also implies a contradiction.  If the flow were given at a particular point in time by , what do you think would happen next?  "
},
{
  "id": "ws-viscousflows",
  "level": "1",
  "url": "ws-viscousflows.html",
  "type": "Exercises",
  "number": "7.6",
  "title": "Exercises",
  "body": "   We look to complete worksheets in the week prior to the content being delivered. Once this is done, this disclaimer message will be removed.     Falling ball viscometer   For slowly moving spheres, the resistive force is given by Stokes drag, and equals , where is the diameter of the sphere, is the dynamic viscosity of the fluid, and is the speed of the sphere (this is a famous result).     Check the dimensions of the Stokes drag. Is the dimension what you expect?    The dimensions of the terms are as follows: meaning that Thus the expression for the Stokes drag has the dimensions of force, as expected.      A steel ballbearing of mass , diameter falls slowly through a viscous fluid of dynamic viscosity . In this question you can neglect the buoyancy force. What are the other two forces acting on the ballbearing?    Gravity and fluid drag      Write down a differential equation for the time-evolution of the velocity of the ballbearing, assuming that the acceleration due to gravity is .    Newton's second law gives       Given that the ballbearing is released from rest, solve the differential equation to show that where and are constant parameters that you should define. What is the physical significance of and ?    We have for which the integrating factor is , and where is a constant of integration. Hence The initial condition is at , and, substituting this into the above equation, , giving . Hence We substitute and . With these substitutions we get The physical significance of these choices is that is the terminal velocity of the sphere and is the timescale over which the velocity of the sphere approaches the terminal velocity. Every units of time, the velocity of the sphere becomes closer to the terminal velocity by a factor .      Sketch the velocity as a function of time.     Sketch of velocity as a function of time.        If the ballbearing has diameter 2 mm and is falling through glycerol at 20 C, what is its terminal velocity in mm\/s and what is the timescale taken to reach the terminal velocity? You may assume that the dynamic viscosity of glycerol at 20 C is 1.2 Pa s and the density of steel is 8,000 kg\/m .    Using the fact that the volume of a sphere is , where is the diameter, we have , where kg\/m . Thus The timescale is given by       Comment on the experimental set up needed to measure the terminal velocity.    The ball would attain its terminal velocity very quickly (in much less than a second), and since is on order of centimetres per second, a container of about 10 cm deep would be suitable for measurement. In fact this idea is commonly used to measure the viscosity of fluids (since the viscosity can be calculated from the terminal velocity); this is called a falling ball viscometer .      Stress on a plate   A rigid plate of length is fixed along the line and has width in the -direction. An incompressible fluid of density and viscosity flows steadily in the shaded region , shown in .   Sketch of plate.       Given that the velocity field is what are , , , in terms of and ? Simplify the velocity components and . (Note that the fact that the coefficients on the terms in and in are equal and opposite is required to ensure incompressibility of the fluid).    We apply no-slip boundary conditions at the plate. Thus if then we must have and . Hence for all , which implies that , , and . Solving, we obtain Hence       Find the drag force on the plate.    The drag force can be found by changing coordinates from to , which are Cartesian coordinates where the -axis runs along the plate and the -axis goes from the plate perpendicularly into the fluid. You may use the fact that where , are unit vectors in the - and -directions, respectively, and , are unit vectors in the - and -directions, respectively, and is the angle between the plate and the -axis. You may use the fact that , and     We perform the coordinate transform illustrated in from the -plane to the -plane:   Sketch of plate.    We use and so the velocity components are and .  Thus the shear stress is given by and hence the drag force equals       Stress on a surface due to the pressure   In this problem, you will calculate the resultant force on the cube shown in due to the pressure in the surrounding fluid acting on the fluid within the cube. We will consider two different methods of calculating this force.  Note that, in this question, as with the derivation of the Navier Stokes equations , you may use some sleight of hand, so as to avoid carefully integrating the force over the surface. However, as in that case, fortunately the errors cancel and the result is correct.     Assuming that the pressure is uniform over the surface and over the surface , calculate the force on the fluid in the cube due to the pressure of the surrounding fluid on these two faces and show that it is approximately where is the volume of the cube.    The force on is pressure times area acting into the cube, which is , while the force on equals . Hence the contribution to the force from these two faces is       Similarly, calculate the force on the fluid in the cube due to the pressure of the surrounding fluid on the faces and , and on the faces and . Hence show that the total force on the fluid in the cube due to the pressure of the surrounding fluid is given by     The force on is and that on is . This gives a contribution Similarly, the force on is and that on is . This gives a contribution Hence the total force on the fluid in the cube due to the pressure of the surrounding fluid is given by       Check that you get the same result using the stress tensor of an inviscid fluid .    The unit normal to the face is , and hence the stress at a point in this face is Hence the force on this face equals . Similarly, the unit normal to the face is , and hence the stress at a point in this face is Hence the force on this face equals . Thus the contribution to the force from these two faces is The contributions from the other faces can be calculated similarly, and the total force on the fluid in the cube due to the pressure of the surrounding fluid is given by       Derivation of the Cauchy equation   In this problem, you will derive the Cauchy equation for the conservation of linear momentum in a more general fluid (the Navier Stokes equation only applies to Newtonian fluids). We will consider a small cube of fluid as shown in , and apply the Reynolds Transport Theorem .     In this task you will    Here is the solution.      Expressing the Navier Stokes equation in other coordinates   In this problem, you will express the Navier Stokes equation in terms of cylindrical and spherical polar coordinates.     Expressing the Navier Stokes equation in other coordinates   Streamfunction and in axisymmetric flows.    "
},
{
  "id": "ws-viscousflows-1-1",
  "level": "2",
  "url": "ws-viscousflows.html#ws-viscousflows-1-1",
  "type": "Warning",
  "number": "7.6.1",
  "title": "",
  "body": " We look to complete worksheets in the week prior to the content being delivered. Once this is done, this disclaimer message will be removed.  "
},
{
  "id": "ps-falling-ball-viscometer",
  "level": "2",
  "url": "ws-viscousflows.html#ps-falling-ball-viscometer",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "Falling ball viscometer.",
  "body": " Falling ball viscometer   For slowly moving spheres, the resistive force is given by Stokes drag, and equals , where is the diameter of the sphere, is the dynamic viscosity of the fluid, and is the speed of the sphere (this is a famous result).     Check the dimensions of the Stokes drag. Is the dimension what you expect?    The dimensions of the terms are as follows: meaning that Thus the expression for the Stokes drag has the dimensions of force, as expected.      A steel ballbearing of mass , diameter falls slowly through a viscous fluid of dynamic viscosity . In this question you can neglect the buoyancy force. What are the other two forces acting on the ballbearing?    Gravity and fluid drag      Write down a differential equation for the time-evolution of the velocity of the ballbearing, assuming that the acceleration due to gravity is .    Newton's second law gives       Given that the ballbearing is released from rest, solve the differential equation to show that where and are constant parameters that you should define. What is the physical significance of and ?    We have for which the integrating factor is , and where is a constant of integration. Hence The initial condition is at , and, substituting this into the above equation, , giving . Hence We substitute and . With these substitutions we get The physical significance of these choices is that is the terminal velocity of the sphere and is the timescale over which the velocity of the sphere approaches the terminal velocity. Every units of time, the velocity of the sphere becomes closer to the terminal velocity by a factor .      Sketch the velocity as a function of time.     Sketch of velocity as a function of time.        If the ballbearing has diameter 2 mm and is falling through glycerol at 20 C, what is its terminal velocity in mm\/s and what is the timescale taken to reach the terminal velocity? You may assume that the dynamic viscosity of glycerol at 20 C is 1.2 Pa s and the density of steel is 8,000 kg\/m .    Using the fact that the volume of a sphere is , where is the diameter, we have , where kg\/m . Thus The timescale is given by       Comment on the experimental set up needed to measure the terminal velocity.    The ball would attain its terminal velocity very quickly (in much less than a second), and since is on order of centimetres per second, a container of about 10 cm deep would be suitable for measurement. In fact this idea is commonly used to measure the viscosity of fluids (since the viscosity can be calculated from the terminal velocity); this is called a falling ball viscometer .    "
},
{
  "id": "ps-stress-plate",
  "level": "2",
  "url": "ws-viscousflows.html#ps-stress-plate",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "Stress on a plate.",
  "body": " Stress on a plate   A rigid plate of length is fixed along the line and has width in the -direction. An incompressible fluid of density and viscosity flows steadily in the shaded region , shown in .   Sketch of plate.       Given that the velocity field is what are , , , in terms of and ? Simplify the velocity components and . (Note that the fact that the coefficients on the terms in and in are equal and opposite is required to ensure incompressibility of the fluid).    We apply no-slip boundary conditions at the plate. Thus if then we must have and . Hence for all , which implies that , , and . Solving, we obtain Hence       Find the drag force on the plate.    The drag force can be found by changing coordinates from to , which are Cartesian coordinates where the -axis runs along the plate and the -axis goes from the plate perpendicularly into the fluid. You may use the fact that where , are unit vectors in the - and -directions, respectively, and , are unit vectors in the - and -directions, respectively, and is the angle between the plate and the -axis. You may use the fact that , and     We perform the coordinate transform illustrated in from the -plane to the -plane:   Sketch of plate.    We use and so the velocity components are and .  Thus the shear stress is given by and hence the drag force equals     "
},
{
  "id": "ps-stress-pressure",
  "level": "2",
  "url": "ws-viscousflows.html#ps-stress-pressure",
  "type": "Exercise",
  "number": "7.6.3",
  "title": "Stress on a surface due to the pressure.",
  "body": " Stress on a surface due to the pressure   In this problem, you will calculate the resultant force on the cube shown in due to the pressure in the surrounding fluid acting on the fluid within the cube. We will consider two different methods of calculating this force.  Note that, in this question, as with the derivation of the Navier Stokes equations , you may use some sleight of hand, so as to avoid carefully integrating the force over the surface. However, as in that case, fortunately the errors cancel and the result is correct.     Assuming that the pressure is uniform over the surface and over the surface , calculate the force on the fluid in the cube due to the pressure of the surrounding fluid on these two faces and show that it is approximately where is the volume of the cube.    The force on is pressure times area acting into the cube, which is , while the force on equals . Hence the contribution to the force from these two faces is       Similarly, calculate the force on the fluid in the cube due to the pressure of the surrounding fluid on the faces and , and on the faces and . Hence show that the total force on the fluid in the cube due to the pressure of the surrounding fluid is given by     The force on is and that on is . This gives a contribution Similarly, the force on is and that on is . This gives a contribution Hence the total force on the fluid in the cube due to the pressure of the surrounding fluid is given by       Check that you get the same result using the stress tensor of an inviscid fluid .    The unit normal to the face is , and hence the stress at a point in this face is Hence the force on this face equals . Similarly, the unit normal to the face is , and hence the stress at a point in this face is Hence the force on this face equals . Thus the contribution to the force from these two faces is The contributions from the other faces can be calculated similarly, and the total force on the fluid in the cube due to the pressure of the surrounding fluid is given by     "
},
{
  "id": "ps-Cauchy-equation",
  "level": "2",
  "url": "ws-viscousflows.html#ps-Cauchy-equation",
  "type": "Exercise",
  "number": "7.6.4",
  "title": "Derivation of the Cauchy equation.",
  "body": " Derivation of the Cauchy equation   In this problem, you will derive the Cauchy equation for the conservation of linear momentum in a more general fluid (the Navier Stokes equation only applies to Newtonian fluids). We will consider a small cube of fluid as shown in , and apply the Reynolds Transport Theorem .     In this task you will    Here is the solution.    "
},
{
  "id": "ps-polar-coordinates",
  "level": "2",
  "url": "ws-viscousflows.html#ps-polar-coordinates",
  "type": "Exercise",
  "number": "7.6.5",
  "title": "Expressing the Navier–Stokes equation in other coordinates.",
  "body": " Expressing the Navier Stokes equation in other coordinates   In this problem, you will express the Navier Stokes equation in terms of cylindrical and spherical polar coordinates.   "
},
{
  "id": "ps-streamfunction",
  "level": "2",
  "url": "ws-viscousflows.html#ps-streamfunction",
  "type": "Exercise",
  "number": "7.6.6",
  "title": "Expressing the Navier–Stokes equation in other coordinates.",
  "body": " Expressing the Navier Stokes equation in other coordinates   Streamfunction and in axisymmetric flows.   "
},
{
  "id": "sec-converting-between-coordinates",
  "level": "1",
  "url": "sec-converting-between-coordinates.html",
  "type": "Section",
  "number": "A.1",
  "title": "Converting between different coordinate systems",
  "body": " Converting between different coordinate systems   It is often convenient to convert a problem from one coordinate system to another, and, although converting scalar quantities is reasonably straightforward, converting vector quantities (such as the fluid velocity vector) is more complicated. This section briefly goes through how to convert vectors and scalars between different reference frames, as this seems to cause issues for students.    Converting between Cartesian coordinates and cylindrical polar coordinates    Cylindrical polar coordinates.     Planar view of cylindrical polar coordinates (or plane polar coordinates).     We write a position vector in Cartesians as and as in cylindrical polars. You need to know the following formulae for conversion from polar to Cartesian coordinates: and these formulae for conversion back: Note that can be derived by rearranging , and vice versa. You also need to know the following definitions of the unit vectors: and it might help to know that , which can be used to remember if you struggle. In addition, you need to know which can if necessary be derived by rearranging the formulae , and . As you might expect, these equations are all consistent with one another, so if you substitute into and use to rewrite and in terms of and , you will end up with .  Scalar and vector quantities are converted as follows:    Conversion of scalar quantities: To convert a scalar quantity (e.g. lengths, pressures) from Cartesians to polars you substitute and to go from polars to Cartesians use . For example if in Cartesians then, using , in polars.     Conversion of vector quantities: To convert a vector from cylindrical polar to Cartesian coordinates you will have a vector written something like this: where , and are all given scalar expressions. You need to end up with something of this form: Two methods:   Substitute the expressions , and into , and then use to get everything in terms of the Cartesian coordinates and . To convert the other way, substitute into and then use to replace any instances of or by and .    Alternatively, take the dot product of with , and , respectively, and simplify the resulting expressions using , and , which gives Similarly, taking the dot product of with , and , respectively, and simplifying leads to          What you need to know: You need to remember the formulae and , but you would be given , and or in an exam question, but you need to be able to use them to do the conversion yourself.    Converting between Cartesian coordinates and plane polar coordinates  Two-dimensional plane polars work like the first two coordinates of cylindrical polars. Thus converting between plane polars and Cartesian coordinates works the same as for cylindrical coordinates and Cartesians , except there is no third dimension.  See for example Part (b).    Converting between Cartesian coordinates and spherical polar coordinates   Spherical polar coordinates.    We write a position vector in Cartesians as   You need the following formulae for conversion from spherical polar to Cartesian: and these formulae for conversion back: The unit vectors in spherical polars are given by and rearranging these leads to     Conversion of scalar quantities:} As with Cartesians to cylindrical polars, to convert a scalar quantity from Cartesians to spherical polars you substitute into the expression and to convert the other way use , and .     Conversion of vector quantities: To convert a vector from spherical polar to Cartesian coordinates you will start with a vector written something like this: and you want to write it like this: As with Cartesians to cylindrical polars, there are two methods:   Substitute the expressions , and into and use , and to get everything in terms of the Cartesian coordinates . To convert from Cartesians to sphericals, substitute , and into and use to replace any instances of with .    Alternatively, take the dot product of with , and in turn, and use , and or , and to simplify the dot products of the unit vectors. You will end up with the following conversion formulae: To convert back, take the dot product of with , and in turn, and use , and to simplify to give          What you need to know: You might have to do some limited converting of expressions between spherical and Cartesian coordinate systems, but we would give you all the formulae , and , and , and the equations for conversion of the unit vectors, as they are difficult to remember.     General conversion  In the other cases you need to follow the same general principles as we followed in the previous sections. In the most general case you might have two coordinate systems and with coordinates and , respectively, and unit vectors , , and , , , respectively. To convert between the systems, you need to write down three (if in 3D) relationships between , , and , , , which allows the conversion of scalar quantities. To convert vectors you also need formulae for , , in terms of and , , . You can convert vectors by substituting the relationships between the unit vectors in and then substituting the relationships between the coordinates. You can only use the alternative methods of converting vectors by taking the dot product if both coordinate systems are orthogonal.   gives an example of a question involving changing coordinates in a more general case.     Differential operators  The gradient and curl operators are converted as    "
},
{
  "id": "cylindrical-coords",
  "level": "2",
  "url": "sec-converting-between-coordinates.html#cylindrical-coords",
  "type": "Figure",
  "number": "A.1.1",
  "title": "",
  "body": " Cylindrical polar coordinates.   "
},
{
  "id": "cylindrical-coords-planeview",
  "level": "2",
  "url": "sec-converting-between-coordinates.html#cylindrical-coords-planeview",
  "type": "Figure",
  "number": "A.1.2",
  "title": "",
  "body": " Planar view of cylindrical polar coordinates (or plane polar coordinates).   "
},
{
  "id": "spherical-coords",
  "level": "2",
  "url": "sec-converting-between-coordinates.html#spherical-coords",
  "type": "Figure",
  "number": "A.1.3",
  "title": "",
  "body": " Spherical polar coordinates.   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "refs-references",
  "level": "1",
  "url": "refs-references.html",
  "type": "References",
  "number": "",
  "title": "References and further reading",
  "body": " References and further reading  Homsy, G. M. (Ed.) (2019). Multimedia Fluid Mechanics Online. Cambridge University Press.  Kreyszig, E. (2007). Advanced engineering mathematics 9th edition. Wiley. US: John Wiley and Sons.  Van Dyke, M. (1982). An Album of Fluid Motion. Parabolic Press.  Acheson, D. J. (1990). Elementary fluid dynamics. Oxford University Press.  Needham, T. (2023). Visual complex analysis. Oxford University Press.  Fornberg, B. and Piret, C. (2019). Complex Variables and Analytic Functions. Society for Industrial and Applied Mathematics.  Shapiro, A. (Ed.) (1961). National Committee for Fluid Mechanics Films. Available at https:\/\/web.mit.edu\/hml\/ncfmf.html.  White, F. M. and Xue H. (2021). Fluid mechanics (ninth edition). McGraw--Hill, New York.  White, F. M. (2003). Fluid mechanics (fifth edition). McGraw--Hill, New York.  Paterson, A. R. (1983). A first course in fluid dynamics. Cambridge University Press.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
