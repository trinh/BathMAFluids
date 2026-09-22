var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "downloads",
  "level": "1",
  "url": "downloads.html",
  "type": "Preface",
  "number": "",
  "title": "Downloads",
  "body": "Downloads  This set of notes is written to be read online, but two downloadable versions are also available:  PDF version , typeset for printing.  Word (.docx) version , generated automatically and provided as a convenience — equations and figures may need manual tidying.  Both are regenerated whenever the online version is updated, so they may occasionally lag behind this page.  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Official description",
  "body": "Official description    Rayleigh's 1883 experiment on turbulence, as duplicated in World of Flosws (Darrigol, 2005).   Turbulence     The description of this unit in the official catalogue is the following: Aims In this unit you will explore the mathematical theory of fluid dynamics, with a view towards applications to physical phenomena such as flight, vortex motion and water waves. You will study the mathematics of conservation laws and the derivation of governing fluid dynamical equations. This unit will provide you with a foundation for further study of more advanced theory of fluid dynamics and continuum mechanics, and its application in scientific areas including engineering, physics and biology. Outcomes (i) Demonstrate an understanding of the principles of mathematical fluid dynamics; (ii) discuss and apply techniques from vector calculus and complex variable theory to analyse and solve fluid flow problems; (iii) give a qualitative and quantitative account of a range of phenomena in fluid dynamics. Content Complex analysis primer: Cauchy-Riemann equations; harmonic functions; complex maps; residue integration. The mathematics of fluid phenomena and its applications: derivation and interpretation of governing equations; reduction of governing equations to equations of simpler formulation; potential flow; vortical flow. Two-dimensional incompressible and irrotational flow: velocity potential; stream function; complex potential. Conformal mapping. Vortex motion: vortex lines and tubes; Kelvin circulation theorem; Helmholtz' principal. Water waves: free surfaces; harmonic waves; finite depth; instability; group velocity. Computational fluid dynamics.  "
},
{
  "id": "fig-rayleigh",
  "level": "2",
  "url": "frontmatter-4.html#fig-rayleigh",
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
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "Related units at Bath",
  "body": "Related units at Bath  We will only mention units from Year 2 onwards in this. Apart from the key pre-requisites of MA22016 (Differential equations and vector calculus) and\/or MA20223 (the older Vector calculus and partial differential equations), we make an effort to keep the material in the module self-contained. You are recommended to have taken MA22021 (partial differential equations).     MA22016: Differential equations and vector calculus   This unit forms a standard second-year module on differential equations and vector calculus, and is a key pre-requisite for this module. In addition to teaching and reviewing basic techniques for solving ordinary differential equations, you will learn about some of the core methods in vector calculus (directional derivatives; gradients; potentials; line integrals; divergence; curl; surface and volume integrals; curvilinear coordinates; integral theorems).  Note prior to curriculum transformation, this would have been part of the MA20223 unit (with additional material from the below MA22021).    MA22021: Partial differential equations   This module teaches basic techniques and theory for the core PDEs (Laplace, heat, wave equations). Generally, we will make with your broad familiarity of PDE different equation types and terminology (e.g. boundary conditions). This unit will be useful, as it will teach you some basic familiarity with partial differential equations. However, the current fluid dynamics module assumes you may not have taken it, and attempts to fill in any necessary gaps.    MA32045: Complex analysis  This module covers some of the theory and applications behind complex-valued functions. You will have encountered complex functions, e.g. in an ad-hoc way, perhaps in earlier courses on Analysis. Again, we will attempt to cover all the necessary pre-requisites, and also provide you with helpful references.       "
},
{
  "id": "frontmatter-7",
  "level": "1",
  "url": "frontmatter-7.html",
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
  "body": " A reminder of complex variables   In , we will leverage the power of complex variables to study certain problems in fluids (flow of a potential flow). One concept that you may be unfamiliar with at this stage is the concept of a branch cut .   An image from Tristan Needham's \"Visual Complex Analysis\" showing how complex mappings transform shapes from one region to another.   Cover      Basic complex representations  Generally, we write the Cartesian and polar form of a complex number as, for magnitude and angle . Below, we will consistently refer to . The decomposition of the complex exponential is given by Euler's identity:   The usual trigonometric functions can be extended to the complex plane by considering their definition in terms of complex exponentials and Euler's identity. For example, we have   Another important function we shall consider is the complex logarithm, defined as where . That this definition is sensible is verified by checking that the logarithm is the inverse of the exponential. That is,   Note that the definition is troubling because it is not single-valued. For example, writing and gives two different possible values of for the same value of . In order to restrict the logarithm to a well-defined single-valued function, we typically establish a branch cut, restricting evaluation of the function from encircling the origin more than once.    Complex functions  A complex function maps points on the complex plane to points on the complex plane. For instance, the square function, can be better understood by its effect on points on the unit circle, .  Consider a particle that orbits around the unit circle in the plane at unit speed. If the particle rotates by half a revolution, with , then in the image plane, the image particle has rotated by a full revolution, with in this same unit time. This is illustrated by the image in .   A revolution of in the pre-image produces a full rotation in the image plane.   z2 map    Now we continue rotating around the unit circle in the plane, performing an additional rotation. Within the image plane, the particle has now completed another full rotation around the unit circle. This is shown in .   A revolution of in the pre-image produces a full rotation in the image plane.   z2 map      "
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
  "id": "ws-intro",
  "level": "1",
  "url": "ws-intro.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "Exercises",
  "body": "    There are currently no problems in this set.    "
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
  "id": "sec-converting-between-coordinates",
  "level": "1",
  "url": "sec-converting-between-coordinates.html",
  "type": "Section",
  "number": "A.1",
  "title": "Converting between different coordinate systems",
  "body": " Converting between different coordinate systems   It is often convenient to convert a problem from one coordinate system to another, and, although converting scalar quantities is reasonably straightforward, converting vector quantities (such as the fluid velocity vector) is more complicated. This section briefly goes through how to convert vectors and scalars between different reference frames, as this seems to cause issues for students.    Converting between Cartesian coordinates and cylindrical polar coordinates    Cylindrical polar coordinates.     Planar view of cylindrical polar coordinates (or plane polar coordinates).     We write a position vector in Cartesians as and as in cylindrical polars. You need to know the following formulae for conversion from polar to Cartesian coordinates: and these formulae for conversion back: Note that can be derived by rearranging , and vice versa. You also need to know the following definitions of the unit vectors: and it might help to know that , which can be used to remember if you struggle. In addition, you need to know which can if necessary be derived by rearranging the formulae , and . As you might expect, these equations are all consistent with one another, so if you substitute into and use to rewrite and in terms of and , you will end up with .  Scalar and vector quantities are converted as follows:    Conversion of scalar quantities: To convert a scalar quantity (e.g. lengths, pressures) from Cartesians to polars you substitute and to go from polars to Cartesians use . For example if in Cartesians then, using , in polars.     Conversion of vector quantities: To convert a vector from cylindrical polar to Cartesian coordinates you will have a vector written something like this: where , and are all given scalar expressions. You need to end up with something of this form: Two methods:   Substitute the expressions , and into , and then use to get everything in terms of the Cartesian coordinates and . To convert the other way, substitute into and then use to replace any instances of or by and .    Alternatively, take the dot product of with , and , respectively, and simplify the resulting expressions using , and , which gives Similarly, taking the dot product of with , and , respectively, and simplifying leads to          What you need to know: You need to remember the formulae and , but you would be given , and or in an exam question, but you need to be able to use them to do the conversion yourself.    Converting between Cartesian coordinates and plane polar coordinates  Two-dimensional plane polars work like the first two coordinates of cylindrical polars. Thus converting between plane polars and Cartesian coordinates works the same as for cylindrical coordinates and Cartesians , except there is no third dimension.  See for example Part (b).    Converting between Cartesian coordinates and spherical polar coordinates   Spherical polar coordinates.    We write a position vector in Cartesians as   You need the following formulae for conversion from spherical polar to Cartesian: and these formulae for conversion back: The unit vectors in spherical polars are given by and rearranging these leads to     Conversion of scalar quantities:} As with Cartesians to cylindrical polars, to convert a scalar quantity from Cartesians to spherical polars you substitute into the expression and to convert the other way use , and .     Conversion of vector quantities: To convert a vector from spherical polar to Cartesian coordinates you will start with a vector written something like this: and you want to write it like this: As with Cartesians to cylindrical polars, there are two methods:   Substitute the expressions , and into and use , and to get everything in terms of the Cartesian coordinates . To convert from Cartesians to sphericals, substitute , and into and use to replace any instances of with .    Alternatively, take the dot product of with , and in turn, and use , and or , and to simplify the dot products of the unit vectors. You will end up with the following conversion formulae: To convert back, take the dot product of with , and in turn, and use , and to simplify to give          What you need to know: You might have to do some limited converting of expressions between spherical and Cartesian coordinate systems, but we would give you all the formulae , and , and , and the equations for conversion of the unit vectors, as they are difficult to remember.     General conversion  In the other cases you need to follow the same general principles as we followed in the previous sections. In the most general case you might have two coordinate systems and with coordinates and , respectively, and unit vectors , , and , , , respectively. To convert between the systems, you need to write down three (if in 3D) relationships between , , and , , , which allows the conversion of scalar quantities. To convert vectors you also need formulae for , , in terms of and , , . You can convert vectors by substituting the relationships between the unit vectors in and then substituting the relationships between the coordinates. You can only use the alternative methods of converting vectors by taking the dot product if both coordinate systems are orthogonal.   gives an example of a question involving changing coordinates in a more general case.     Differential operators  The gradient and curl operators are converted as You would always be given these formulae in an exam question if you needed them.   "
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
  "body": " References and further reading  Homsy, G. M. (Ed.) (2019). Multimedia Fluid Mechanics Online. Cambridge University Press.  Kreyszig, E. (2007). Advanced engineering mathematics 9th edition. Wiley. US: John Wiley and Sons.  Van Dyke, M. (1982). An Album of Fluid Motion. Parabolic Press.  Acheson, D. J. (1990). Elementary fluid dynamics. Oxford University Press.  Needham, T. (2023). Visual complex analysis. Oxford University Press.  Fornberg, B. and Piret, C. (2019). Complex Variables and Analytic Functions. Society for Industrial and Applied Mathematics.  Shapiro, A. (Ed.) (1961). National Committee for Fluid Mechanics Films. Available at https:\/\/web.mit.edu\/hml\/ncfmf.html.  White, F. M. and Xue H. (2021). Fluid mechanics (ninth edition). McGraw--Hill, New York. Note that this book is available online in the University of Bath's collection, so you should easily be able to view it.  White, F. M. (2003). Fluid mechanics (fifth edition). McGraw--Hill, New York.  Paterson, A. R. (1983). A first course in fluid dynamics. Cambridge University Press.  "
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
