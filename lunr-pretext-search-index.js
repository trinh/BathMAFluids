var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Official description",
  "body": "Official description   Rayleigh's experiment on turbulence   The description of this unit in the official catalogue is the following: Aims In this unit you will explore the mathematical theory of fluid dynamics, with a view towards applications to physical phenomena such as flight, vortex motion and water waves. You will study the mathematics of conservation laws and the derivation of governing fluid dynamical equations. This unit will provide you with a foundation for further study of more advanced theory of fluid dynamics and continuum mechanics, and its application in scientific areas including engineering, physics and biology. Outcomes (i) Demonstrate an understanding of the principles of mathematical fluids dynamics; (ii) discuss and apply techniques from vector calculus and complex variable theory to analyse and solve fluid flow problems; (iii) give a qualitative and quantitative account of a range of phenomena in fluid dynamics. Content Complex analysis primer: Cauchy-Riemann equations; harmonic functions; complex maps; residue integration. The mathematics of fluid phenomena and its applications: derivation and interpretation of governing equations; reduction of governing equations to equations of simpler formulation; potential flow; vortical flow. Two-dimensional incompressible and irrotational flow: velocity potential; stream function; complex potential. Conformal mapping. Vortex motion: vortex lines and tubes; Kelvin circulation theorem; Helmholtz' principal. Water waves: free surfaces; harmonic waves; finite depth; instability; group velocity. Computational fluid dynamics.  "
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
  "title": "Moodle and references",
  "body": "Moodle and references   Besides this document, the main resource for this unit is the Moodle page . There is also a folder on Re:View for the recordings . In Week 1 we walked through this Moodle page and talked about various other administrative things; unfortunately the recording was lost due to a Moodle\/Panopto error.  There are countless fluid mechanics or fluid dynamics courses and textbooks, and for the most part, the development of a first course on fluid dynamics tends to be quite similar between universities and treatments. If you would like additional references, here are a few useful ones.  "
},
{
  "id": "sec-preliminary-vector-calculus",
  "level": "1",
  "url": "sec-preliminary-vector-calculus.html",
  "type": "Section",
  "number": "1.1",
  "title": "A reminder of vector calculus",
  "body": " A reminder of vector calculus  Brief listing of things that we shall remind you of: vector operations, div, grad, curl, vector identities, divergence theorem, Stokes theorem, line integrals, different coordinate systems.  "
},
{
  "id": "sec-preliminary-complex-variables",
  "level": "1",
  "url": "sec-preliminary-complex-variables.html",
  "type": "Section",
  "number": "1.2",
  "title": "A reminder of complex variables",
  "body": " A reminder of complex variables  Brief listing of things we shall remind you of: interpretation of complex variables in the Argand plane, polar-coordinate representation, exponential and logarithm.  "
},
{
  "id": "sec-eulerlagrang",
  "level": "1",
  "url": "sec-eulerlagrang.html",
  "type": "Section",
  "number": "2.1",
  "title": "Eulerian and Lagrangian coordinates",
  "body": " Eulerian and Lagrangian coordinates   There are essentially two natural ways to think of motion in a fluid. We can imagine positioning ourselves at a fixed point in space, . At this point, we then attempt to measure a fluid quantity such as the density, , or temperature, . This is essentially the Eulerian frame . One can imagine, for example, fixing sensor station into the ocean bottom, and obtaining measurements of the water temperature.   (a) The Eulerian interpretation; (b) the Lagrangian interpretation.   Alternatively, we can imagine tracking of a single fixed particle (or a fluid element) within the flow. The particle begins at some position. Let us define a label to describe the particle's initial position. For example, if the particle's position is given by we can define the corresponding Lagrangian label as We then ask for the corresponding measurement of the fluid quantity that corresponds to the label . For example, this is equivalent to tagging a free-floating buoy in the ocean with the label , then measuring the temperature of the water as the buoy drifts in the ocean. This Lagrangian temperature could be written where is simply a fixed quantity for the particular buoy.    The convective derivative  Let us now be more specific. We wish to consider how different quantities in our flow changes with time, but the matter is made complicated by the two above perspectives (fixed or following the flow).  Again, let us consider a scalar property of the fluid (for example, its density, temperature, velocity component, pressure, etc.), and let us suppose that this quantity is a function of both position, , and time, , and denote it by . This is the Eulerian description of the property since it is defined by specifying a fixed position in space. Fixing and then measuring is akin to standing in the fluid at a fixed location and measuring the property value in time.  We can alternatively write the property by its Lagrangian description. That is, given a label , we obtain the current position of the particle associated with this label, , then obtain its property value. This we can write as the following: Now, fixing and changing corresponds to tracking the scalar property at a material point in the flow, or, equivalently, how changes as we move with the particle along the deforming fluid.  There are thus two ways of considering time derivatives.   We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is defined at a fixed material point in the fluid. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .      The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables. This is because physical forces act on physical particles, or material elements, of the fluid.   The natural question is how the two derivatives relate to one another. This is given by the following theorem.  The material\/convective derivative   The material or convective derivative can be defined in terms of Eulerian derivative in the following way:    This is a result of the chain rule. For a scalar function , we have the fact that         You are asked to work out the above proof more carefully using individual coordinates (instead of vector notation) in the problem set.    We can now apply the above result to the question of how to calculate the acceleration within the fluid (more specifically, we are enquiring about the acceleration of a volume or particle within the fluid). The acceleration is given by the convective or material derivative of the velocity:    "
},
{
  "id": "def-eulerlag",
  "level": "2",
  "url": "sec-eulerlagrang.html#def-eulerlag",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is defined at a fixed material point in the fluid. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .   "
},
{
  "id": "subsec-laglabel-6",
  "level": "2",
  "url": "sec-eulerlagrang.html#subsec-laglabel-6",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": " The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables. This is because physical forces act on physical particles, or material elements, of the fluid.  "
},
{
  "id": "thm-DDt",
  "level": "2",
  "url": "sec-eulerlagrang.html#thm-DDt",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "The material\/convective derivative.",
  "body": " The material\/convective derivative   The material or convective derivative can be defined in terms of Eulerian derivative in the following way:    This is a result of the chain rule. For a scalar function , we have the fact that     "
},
{
  "id": "subsec-laglabel-8-1",
  "level": "2",
  "url": "sec-eulerlagrang.html#subsec-laglabel-8-1",
  "type": "Note",
  "number": "2.1.4",
  "title": "",
  "body": " You are asked to work out the above proof more carefully using individual coordinates (instead of vector notation) in the problem set.  "
},
{
  "id": "sec-flowexamples",
  "level": "1",
  "url": "sec-flowexamples.html",
  "type": "Section",
  "number": "2.2",
  "title": "Examples and flow visualisation",
  "body": " Examples and flow visualisation  There are different ways to visualise the dynamics of a fluid. Given the velocity, , we can plot a vector field at each point in space, and at a fixed moment in time. Little arrows are used to indicate the direction and the length of the arrow can be chosen to represent the magnitude. Joining these up at a fixed moment in time into smooth curves gives the streamlines of the flow. This is often the easiest type of visualisation to perform mathematically, but the hardest experimentally.  Another representation of the flow is using particle paths or pathlines . Given a point and time, the particle path is the trajectory that would result if a particle were dropped into the flow at that chosen point and time. It is thus found by solving an equation where at every point on the trajectory, the particle's velocity is the specified velocity of the fluid.  A third representation is a streakline . If dye were continuously released into a fluid from a fixed chosen point, the streakline at a given time is the line that would be made by the dye. It is thus found by finding the current position of those particles whose pathline has visited the chosen point at any past time. This is often the easiest type of visualisation to perform experimentally, but the hardest to perform mathematically.  Note that in a steady flow, the streamlines, pathlines and streaklines all coincide. However, in an unsteady flow, they are all different. Although the video is dated and the sound and picture quality are not up to modern standards, the clearest introduction to these concepts is given in the first fourteen minutes of the 1963 production titled ``Flow visualization'' available at this website .  In the definition below, we define these concepts more concretely.    Particle streamlines, pathlines and streaklines   The streamline is given by solving the parametric equation where is a parameter along the streamline, and is the chosen time. Choosing a variety of different initial points, , and solving the above equation gives a family of streamlines at time .  The particle path or pathline for a particle is given by solving the equation for a chosen initial value of . Choosing a variety of points yields a family of pathlines.  The streakline for a point is given by solving the equation for a variety of values of . This gives the current position of all particles that have passed through the point at any time in the past.  If it is the case that the velocity is time independent, i.e. , then these three definitions coincide.       Above, we have been somewhat diligent not to abuse notation and distinguish between independent and dependent variables. For example, is the independent variable that corresponds to an arbitrary spatial location. Therefore, when referring to a particular particle trajectory, we would introduce a new dependent variable, , which depends on time, with being the horizontal position of the particle.  In many usages, this rigorous distinguishing of dependent and independent variables is commonly abused (because the notation becomes too burdensome). Therefore, we will commonly write e.g. that is the position of the particle. The above abuse of notation uses both as independent variable (left) and dependent variable (right).    Let us practice these concepts.   Consider a fluid described by the two-dimensional velocity field . Derive and plot the streamlines of the flow.   There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.  (for accessibility)    The particle paths or streamlines of the flow are found by solving the equations: Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories in time. However, in this case, it is easier to remove the time variable entirely. Notice that Therefore, the trajectories lie along the above hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths coincide with the streamlines.      Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories.     "
},
{
  "id": "def-streamline",
  "level": "2",
  "url": "sec-flowexamples.html#def-streamline",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Particle streamlines, pathlines and streaklines.",
  "body": " Particle streamlines, pathlines and streaklines   The streamline is given by solving the parametric equation where is a parameter along the streamline, and is the chosen time. Choosing a variety of different initial points, , and solving the above equation gives a family of streamlines at time .  The particle path or pathline for a particle is given by solving the equation for a chosen initial value of . Choosing a variety of points yields a family of pathlines.  The streakline for a point is given by solving the equation for a variety of values of . This gives the current position of all particles that have passed through the point at any time in the past.  If it is the case that the velocity is time independent, i.e. , then these three definitions coincide.   "
},
{
  "id": "sec-flowexamples-8-1",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-8-1",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": " Above, we have been somewhat diligent not to abuse notation and distinguish between independent and dependent variables. For example, is the independent variable that corresponds to an arbitrary spatial location. Therefore, when referring to a particular particle trajectory, we would introduce a new dependent variable, , which depends on time, with being the horizontal position of the particle.  In many usages, this rigorous distinguishing of dependent and independent variables is commonly abused (because the notation becomes too burdensome). Therefore, we will commonly write e.g. that is the position of the particle. The above abuse of notation uses both as independent variable (left) and dependent variable (right).  "
},
{
  "id": "sec-flowexamples-10",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-10",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " Consider a fluid described by the two-dimensional velocity field . Derive and plot the streamlines of the flow.   There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.  (for accessibility)    The particle paths or streamlines of the flow are found by solving the equations: Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories in time. However, in this case, it is easier to remove the time variable entirely. Notice that Therefore, the trajectories lie along the above hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths coincide with the streamlines.   "
},
{
  "id": "sec-flowexamples-11",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-11",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories.    "
},
{
  "id": "sec-RTT",
  "level": "1",
  "url": "sec-RTT.html",
  "type": "Section",
  "number": "3.1",
  "title": "Reynolds’ transport theorem",
  "body": " Reynolds' transport theorem   Jacobian of Lagrangian to Eulerian  Consider a fluid volume, , that is initially dyed a certain colour. The packet of fluid is initially located at . As the fluid evolves in time, it then occupies the volume with .  As an example, we may express the density of the fluid as i.e. at every point in space and moment in time, the above retrieves the density of the fluid within a designated region (which may be changing). This is a natural quantity to study in a fixed frame of the fluid.  Alternatively, we can write which is the density of fluid for those particles making up an originally chosen volume, . This is a natural quantity to study if we were to move with the fluid; for instance, if we were to colour the volume with a dye and track its density in time.  The correspondence between the Euclidean and Lagrangian coordinates is written as    Jacobian of Lagrangian to Eulerian   Since we assume the medium is continuous, then we would generally require that the mapping from Lagrangian to Eulerian coordinates is continuous and one-to-one; then the map assigns every element (label) in the original reference configuration, denoted , a unique position, , in the deformed state.  From Multivariable Calculus, a sufficient condition for this to be true is that the Jacobian of the transformation , is finite and non-zero:     The following requires a bit of algebra, and you are not required to prove the result.  Euler's identity   The material derivative of the Jacobian of the transformation is given by where .    The proof follows from direct differentiation on the determinant and use of the identity of the material derivative.       Reynolds transport theorem  We are now ready to derive a key result that eases our path towards developing the governing equations for a fluid. The result is as follows.  Reynolds transport theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' transport theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' transport theorem.  It is helpful for you to convince yourself that the above vector identity is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.         Reynolds' transport theorem thus gives an identity for how time differentiation can pass through the integral when the domain of integration is changing in time!      In 1D, Reynolds transport theorem reduces to an identity known as Leibniz's rule. This will be proven in your problem sets.      The Reynolds transport theorem can be stated in words as follows: the rate of change of the integral of a quantity over a material volume is equal to the local rate of change of the quantity plus the net flux of the quantity out of the control volume.     "
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
  "title": "Reynolds transport theorem.",
  "body": " Reynolds transport theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' transport theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' transport theorem.  It is helpful for you to convince yourself that the above vector identity is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.     "
},
{
  "id": "subsec-RTT-3-1",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-3-1",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": " Reynolds' transport theorem thus gives an identity for how time differentiation can pass through the integral when the domain of integration is changing in time!  "
},
{
  "id": "subsec-RTT-4-1",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-4-1",
  "type": "Remark",
  "number": "3.1.6",
  "title": "",
  "body": " In 1D, Reynolds transport theorem reduces to an identity known as Leibniz's rule. This will be proven in your problem sets.  "
},
{
  "id": "subsec-RTT-5-1",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-5-1",
  "type": "Remark",
  "number": "3.1.7",
  "title": "",
  "body": " The Reynolds transport theorem can be stated in words as follows: the rate of change of the integral of a quantity over a material volume is equal to the local rate of change of the quantity plus the net flux of the quantity out of the control volume.  "
},
{
  "id": "ch-chapter03-equations-4",
  "level": "1",
  "url": "ch-chapter03-equations-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conservation of mass",
  "body": " Conservation of mass  Our task from this section is to prove the following equation for the conservation of mass of a fluid:  Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to      In fact, as it turns out, the proof of this result is trivial if we use the Reynolds' transport theorem and Lagrangian formulation following .   We consider the time differentiation of the mass integral. By , we can use the Reynolds' transport theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .    Derivation of mass conservation using Eulerian methods  The derivation we have just shown for , using the Lagrangian viewpoint and the Reynolds' transport theorem is misleadingly simple, and it can be instructive to see how the result is proved purely from the perspective of Eulerian coordinates.  For this, let us consider to be a fixed and closed subregion of the overall fluid, that does not change with time. An illustration of this is shown in   Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid     We want to prove the following result, which essentially equates the change in mass, due to density changes, to the flow of mass in or out of the volume.  Integral form of the law of conservation of mass  Given a fixed volume element and boundary , the integral form of the law of mass conservation is     The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.    We now want to transform the integral form in into the form of a partial differential equation. To do this, apply the Divergence theorem to the right hand-side of the above integral, converting the surface integral to a volume integral. Moving all quantities to the left hand side now yields Since the above integral equation holds for all possible , it must be equivalent to the integrand equated to zero. This yields our final result leading to .    Corollary of the Transport Theorem    There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . In this case the Reynolds transport theorem is     This is left as an exercise. It will be useful for you to consider the vector identity      "
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
  "id": "ch-chapter03-equations-4-4",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#ch-chapter03-equations-4-4",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " We consider the time differentiation of the mass integral. By , we can use the Reynolds' transport theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .  "
},
{
  "id": "fig-normalvolume",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#fig-normalvolume",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid   "
},
{
  "id": "ch-chapter03-equations-4-5-4-1",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#ch-chapter03-equations-4-5-4-1",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Integral form of the law of conservation of mass.",
  "body": " Integral form of the law of conservation of mass  Given a fixed volume element and boundary , the integral form of the law of mass conservation is   "
},
{
  "id": "ch-chapter03-equations-4-5-4-2",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#ch-chapter03-equations-4-5-4-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.  "
},
{
  "id": "cor-convmass",
  "level": "2",
  "url": "ch-chapter03-equations-4.html#cor-convmass",
  "type": "Corollary",
  "number": "3.2.4",
  "title": "",
  "body": "  There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . In this case the Reynolds transport theorem is     This is left as an exercise. It will be useful for you to consider the vector identity    "
},
{
  "id": "subsec-euler-momentum",
  "level": "1",
  "url": "subsec-euler-momentum.html",
  "type": "Section",
  "number": "3.3",
  "title": "Momentum balance",
  "body": " Momentum balance  With mass conservation now handled, we turn our eyes towards a law that governs the conservation of momentum. This is Newton's second law the rate of change of momentum of a body is equal to the sum of all forces acting on the body.  Our task from this section is to prove the following equation for the conservation of mass of a fluid:  Momentum equation   The differential form of the law of conservation of momentum, is where is the density of the fluid, is the velocity of the fluid, is the pressure, and is the acceleration due to a body force (typically gravity).      Proof of the momentum equation for an inviscid fluid  Consider again a material volume of the fluid. Then the rate of change of net momentum of this volume is equal to It is helpful to remember that the mass of a volume element is and the acceleration is , so the above is similar to mass times acceleration. However, we work with the more general form above to allow for changes in the density throughout the fluid, and also for variable fluid elements, .  We must equate the above to the sum of all surface and body forces applied to the fluid element.  An example of a body force is the force of gravity. For a small volume element of mass , the force of gravity is equal to . Therefore, the total external force due to gravity on the volume is equal to There may be other external body forces. For example, if your fluid is electrically conductive (like a plasma), there may be electromagnetic forces that must be considered. In any case, can be considered as the analogous body force.  The final type of forces we should consider are surface forces , which are applied to the boundary of the fluid element, denoted . Let us assume that at each point on the boundary, there is a per-surface area surface force, , that decomposes into component normal to the boundary, , and a component tangential to the boundary, . So the surface forces, summed over the boundary, will be In the above, the interpretation is that the force on a small patch of surface area is equal to the per-area force, say , multiplied by the area, then directed into the normal direction, .  At this point, we make a key assumption that is applied in the particular case of inviscid fluids .   In the case of inviscid fluids , we assume that the surface pressure exerted on (interior) volume elements is accounted solely by a pressure, , which acts in the inward normal direction at each point, with . Consequently, the surface force, given by , is   In particular, for the case of inviscid fluids, we ignore tangential internal forces.    The result follows by a corollary of the diverence theorem. The divergence theorem is Let where and apply to the above.     Finally, it follows by summation of the forces above that Newton's law states that We can now use the corollary to the transport theorem , with the assignment of and this allows us to the conclude that Again, the above holds for all material volumes and therefore it must follow that the integrand is zero. We conclude thus with the following result as stated at the start of this section.    "
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
  "id": "def-inviscid",
  "level": "2",
  "url": "subsec-euler-momentum.html#def-inviscid",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "  In the case of inviscid fluids , we assume that the surface pressure exerted on (interior) volume elements is accounted solely by a pressure, , which acts in the inward normal direction at each point, with . Consequently, the surface force, given by , is   In particular, for the case of inviscid fluids, we ignore tangential internal forces.    The result follows by a corollary of the diverence theorem. The divergence theorem is Let where and apply to the above.   "
},
{
  "id": "sec-incompressible",
  "level": "1",
  "url": "sec-incompressible.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Euler equations",
  "body": " The Euler equations  Recall from that the Jacobian relates infinitessimal volumes in Eulerian and Lagrangian frames via . So the Jacobian is a measure of the local expansion or contraction of a fluid (relative to its original state). If we use Euler's identity in the theorem, we are led to an important interpretation for what it means for a fluid to satisfy . This leads us to defining the notion of an incompressible fluid.     Incompressible fluids   A fluid is said to be incompressible if it preserves infinitessimal volumes. That is, The following equivalence (iff) then follows:    This is immediate with Euler's identity in .      So in conclusion, for the case of an incompressible fluid, it suffices to solve the equation instead of the more complicated equation in .  By the way, what happens to the mass conservation equation in if the fluid is incompressible? This leads to the following corollary.  Constant density along streamlines   For an incompressible fluid, the density is constant along streamlines, i.e.     This relies on setting in .     Let us return to consider the total sum of equations and unknowns. We have introduced the scalar mass conservation equation found in (or alternatively the more simplified equation for incompressible fluids). Also the vector momentum equation found in . This yields four scalar equations for five unknowns: the pressure , density , and the three velocity components .  One way of proceeding is to attempt to establish or to inuit a relationship between pressure and density. For instance, the assumption of an ideal gas law can be derived from kinetic theory, which leads to the empirical law that , relating pressure in a linear fashion to density, and depending on the temperature, , and a (gas) constant . Other assumptions of the form are possible, and this is involved in the study of gases and compressible fluids .  However, empirically, we observe that in most liquids, the density only varies within a few percent under typical variations of temperature and pressure. Therefore, it is common to assume:   Constant density assumption  We often assume that in the situation of liquids, the density is taken to be constant, .    Note, then that in the case of constant density fluids, if we consider the mass conservation equation , it follows that . Therefore, from the definition , we conclude that the fluid is indeed incompressible.     Confusingly, in many references, authors define a fluid to be incompressible if is constant. However, we see this is not necessarily the case. A fluid can be incompressible and therefore without being constant.     We are finally ready to state the Euler equations .  Euler equations   The Euler equations consist of the continuity equation and momentum equations , considered in the situation of an incompressible fluid: Note this is then four scalar equations for the three unknown velocities in and pressure . We shall assume in the course that incompressible fluids have constant density, . The above Euler equations include the (gravitational) body force .      Boundary conditions  boundary conditions  A great deal of the complexity of fluid motion comes from the conditions that we must consider between the fluid and its bounding surfaces. For water in the ocean, a bounding surfaces might include the ocean floor bottom and the body of a boat, down to the vegetation in the water or the sand on a beach. This can get quite complex! In this module, and when we first learn fluid dynamics, we only consider simple bounded fluid regions (fluid above a plate, fluid in a box, fluid in a channel, etc.)  In the case of a water wave, a bounding surface will also include the free surface of the wave, itself, which interacts with the surrounding atmospheric gas. This leads to the situation of free-boundary or free-surface conditions free-surface .  For the situation of fluid at a solid boundary, this leads us to formulate the following.    No-flux condition through a boundary  For a fluid in contact with a fixed rigid boundary, , then we require that the normal velocity of the fluid there must be zero: where is the unit normal to . This condition states that the fluid cannot flow through or separate from (hence leaving a vacuum).    It turns out that the above no-flux condition is sufficient to provide well-posed boundary conditions for most inviscid fluids. Note that in particular, we have not constrained the tangential velocity of the fluid, i.e. , where is the tangential vector at the boundary.  Later in , you will study the situation of a viscous fluid , where it will be important to consider the tangential fluid velocity.   "
},
{
  "id": "def-incompressible",
  "level": "2",
  "url": "sec-incompressible.html#def-incompressible",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Incompressible fluids.",
  "body": " Incompressible fluids   A fluid is said to be incompressible if it preserves infinitessimal volumes. That is, The following equivalence (iff) then follows:    This is immediate with Euler's identity in .    "
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
  "id": "sec-incompressible-9-1",
  "level": "2",
  "url": "sec-incompressible.html#sec-incompressible-9-1",
  "type": "Note",
  "number": "3.4.3",
  "title": "Constant density assumption.",
  "body": " Constant density assumption  We often assume that in the situation of liquids, the density is taken to be constant, .  "
},
{
  "id": "sec-incompressible-11-1",
  "level": "2",
  "url": "sec-incompressible.html#sec-incompressible-11-1",
  "type": "Remark",
  "number": "3.4.4",
  "title": "",
  "body": "  Confusingly, in many references, authors define a fluid to be incompressible if is constant. However, we see this is not necessarily the case. A fluid can be incompressible and therefore without being constant.   "
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
  "id": "note-noflux-BC",
  "level": "2",
  "url": "sec-incompressible.html#note-noflux-BC",
  "type": "Note",
  "number": "3.4.6",
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
  "body": " Bernoulli's equation  There is a reformulation of the momentum equations that proves to be useful. In essence, it emerges from attempting to integrate the momentum equation and yields the famous Bernoulli equation(s) .  We will first need a vector identity.   Note the following identity:     The proof follows from direct expansion of both sides.     It will also be useful for us to introduce the notion of vorticity.  Vorticity of a vector field   The vorticity , , of a vector field is defined by The vorticity is a measure of the local rotation of the flow.     Let us recall the definition of a conservative force .  Conservative forces   A force is a conservative force if and only if there exists a potential , such that in a simply connected region where the quantities are defined.   Note the distinction about a simply-connected neighbourhood. The above is not quite the definition of a conservative force (typically defined to be a force for which the work done on an object between two points is independent of path). For now, this is not an important distinction since we will focus on fluid regions that are free of holes. Until told otherwise, we will always assume that the fluid is simply connected and therefore the above serves as a definition of conservative forces.    Bernoulli's equation for steady flow   Bernoulli's equation (theorem) for steady flow states that where we have assumed that the body force is conservative , i.e. it can be written as for a potential function, .    Start from the momentum equation , and use the vector identity gives   Next, the flow is steady, and therefore we can zero the first term. This leaves We now take the dot product of both sides of the equation with . We use the fact that, since it is a triple scalar product with two repeated entries. It therefore results in the fact that Notice that this is the steady component that comes from the material derivative, . So we conclude that is constant along streamlines of the flow.  It is useful to note that if we use the definition of vorticity in , and the definition of in , we have from the above that a form that will be useful, shortly.       For the typical gravity force directed in the direction, we can write . So in this case, the (gravitational) potential is .    The proof of introduced a useful form of the momentum equation using the vorticity function, resulting in . This leads to the so-called vorticity equation form of the momentum equation.  The vorticity equation for incompressible flow   The momentum equation for incompressible flow, reposed in terms of the vorticity is: or, equivalently, and is known as the vorticity equation .     In the proof, it is useful to use the vector identity for the curl of a cross product:     Crucially, we recall the result that \"curl grad equals zero\" for a vector field. So from , we take the curl of both sides to obtain Expanding the outer cross product, the first term can be simplified by swapping differentiation in space with differentiation in time. The second term requires the cross product identity . For the second term, we get with the first zero resulting in the fact that \"div curl equals zero\", while the second results from incompressibility.  Thus we have, which is the main result.     Potential flow  We are interested in the simplest scenarios that will result in reducing the governing equations. Previosly, we introduced the notion of incompressible flows, which results in the Euler equations in and in particular, the reduction of the mass conservation equation to .  We attempt to reduce further by assuming that the fluid is irrotational . This lends to the following definition.  Irrotational flows   A flow is said to be irrotational if the vorticity is identically zero:      For an irrotational and incompressible flow, there is a more powerful version of Bernoulli's equation.  Bernoulli's equation for steady irrotational flow   For an incompressible and irrotational flow, Bernoulli's theorem states that where is the body force.       The proof of this relies on returning to the proof of the unsteady Bernoulli's equation in . In the proof, we arrived at the result in that For steady flow, the first term disappears. If we have the additional assumption that the flow is irrotational, then we have that , and therefore we have But the only way that all spatial derivatives is zero is if the function is constant.     "
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
  "id": "sec-bernoulli-7-1",
  "level": "2",
  "url": "sec-bernoulli.html#sec-bernoulli-7-1",
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
  "id": "sec-bernoulli-10-1",
  "level": "2",
  "url": "sec-bernoulli.html#sec-bernoulli-10-1",
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
  "body": " Bernoulli's equation for steady irrotational flow   For an incompressible and irrotational flow, Bernoulli's theorem states that where is the body force.   "
},
{
  "id": "subsec-potential-5-1",
  "level": "2",
  "url": "sec-bernoulli.html#subsec-potential-5-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The proof of this relies on returning to the proof of the unsteady Bernoulli's equation in . In the proof, we arrived at the result in that For steady flow, the first term disappears. If we have the additional assumption that the flow is irrotational, then we have that , and therefore we have But the only way that all spatial derivatives is zero is if the function is constant.  "
},
{
  "id": "sec-Potential-and-streamfunction",
  "level": "1",
  "url": "sec-Potential-and-streamfunction.html",
  "type": "Section",
  "number": "4.1",
  "title": "The velocity potential",
  "body": " The velocity potential  In this chapter, we focus on 2D flows where the velocity vector is given by With the velocity given as above, the vorticity is then If we assume that the flow is irrotational according to , then and   Further, we know that if the flow is irrotational, then there exists a velocity potential , , such that . Thus the velocities are expressed as   The above result about irrotational flows is a standard result in Vector Calculus, but we will re-state the result here for reference, and provide a review of its proof.  Existence of a potential   Consider a three-dimensional time-dependent velocity field, defined on a simply connected domain   Then is irrotational, i.e. if and only if there exists a scalar potential, defined on , such that .     Define where is any contour connecting an arbitrary origin point to the point (changing the origin point will change the \"constant\" of integration ).  We can verify, using the definition of differentiation, and the fundamental theorme of calculus, applied along each of the three coordinate directions, that as desired.  The key is to prove that the above definition is unique, regardless of the choice of contour . To this end, consider two contours, and , both with the same origin point, , and end point . Then the contour is a close contour beginning and ending at .   Proof of the uniqueness of the potential    By Stokes' theorem, where is any surface with bounding curve , and with unit normal positively oriented with the bounding curve. However, the right hand-side is zero by irrotationality, and therefore and our choice of curve in the definition of the potential is irrelevant.  The converse direction of the theorem follows directly from the fact that \"curl grad equals zero\", i.e. .      Let us return to discussing the setting of potential flow.  In addition to being irrotational, we furthermore have assumed that the flow is incompressible. Therefore from , This is the crucial result, which is that in potential flows, we need only solve the Laplace equation: within the flow region. This is effectively a single linear equation for the single unknown . However, for different problems, the boundary conditions can render even this \"simple\" problem difficult.  Once the velocity potential has been solved, the velocities in the flow can be recovered from the relationship . The pressure in the flow also follows from Bernoulli's equation. For the situation of a steady potential flow, following , it is    Elementary flows  The next three examples will introduce you to the elementary flows consisting of uniform flow, stagnation point flow, and line source\/sink flows. You will also investigate the notion of a source \"strength\".    Uniform flow  uniform flow  Consider the potential given by the linear function with constants and . Then by differentiation we have that the velicity is   The image shown below shows the streamlines of the flow. c   Streamlines (or velocity field) of uniform flow with and .        Stagnation point flow stagnation point flow  We can verify that the velocity potential satisfies Laplace's equation. The corresponding velocity field is given by and corresponds to stagnation point flow .  The streamlines (or velocity field) is shown below.   Streamlines (or velocity field) of stagnation point flow.        Line source  line source  We aim to derive the potential and velocity for a line source , imagined as the flow consisting of a point source or point sink that ejects\/drains fluid from a point in space. Since it would be expected for the potential to be axisymmetric, we attempt to solve in plane polar coordinates. This is given by We assume that the potential takes the form . Then direct integration gives where we have set an additional constant of integration to zero without loss of generality. The leading constant has been set to so that can be later identified with a physical quantity.  The velocity then follows from consideration of the gradient in polar form, where the unit vectors written in the Cartesian basis are and . Thus we can write the velocity as The above corresponds to a velocity field directed radially outwards from the origin. The flow is a called a line source because fluid is ejected from the origin (a source). It refers to a \"line\" because in , the source runs parallel to the -axis.  The streamlines (or velocity field) are shown below.   Streamlines (or velocity field) of line source flow.    Let us also identify the strength of this line source. Consider a closed contour around the origin. Then the quantity is the flux (the flow per unit time) of fluid crossing the contour, with denoting the unit normal along .  For simplicity, let us take the contour to be a circle of constant radius . Then since the unit normal is precisely , we have that In computing the above integral, remember that the conversion following the polar Jacobian is where .  Therefore, is the rate at which fluid is produced from the line source. If , we refer to the flow as a line sink . line sink     Crucially, because the governing fluid mechanical equation is only Laplace's equation: this is a linear partial differential equation, and therefore the summation of elementary flows also produces an admissible flow.    Line source in a uniform flow  For instance, we may combine a uniform flow in the -direction with a line source: We can then obtain the velocity field as   The streamlines (or velocity field) is shown below.   Streamlines (or velocity field) of a line source in a uniform flow with and .    Where do you think the stagnation point lies in this flow?     "
},
{
  "id": "thm-exist-potential",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#thm-exist-potential",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "Existence of a potential.",
  "body": " Existence of a potential   Consider a three-dimensional time-dependent velocity field, defined on a simply connected domain   Then is irrotational, i.e. if and only if there exists a scalar potential, defined on , such that .     Define where is any contour connecting an arbitrary origin point to the point (changing the origin point will change the \"constant\" of integration ).  We can verify, using the definition of differentiation, and the fundamental theorme of calculus, applied along each of the three coordinate directions, that as desired.  The key is to prove that the above definition is unique, regardless of the choice of contour . To this end, consider two contours, and , both with the same origin point, , and end point . Then the contour is a close contour beginning and ending at .   Proof of the uniqueness of the potential    By Stokes' theorem, where is any surface with bounding curve , and with unit normal positively oriented with the bounding curve. However, the right hand-side is zero by irrotationality, and therefore and our choice of curve in the definition of the potential is irrelevant.  The converse direction of the theorem follows directly from the fact that \"curl grad equals zero\", i.e. .    "
},
{
  "id": "example-potential-uniform",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#example-potential-uniform",
  "type": "Example",
  "number": "4.1.3",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow  Consider the potential given by the linear function with constants and . Then by differentiation we have that the velicity is   The image shown below shows the streamlines of the flow. c   Streamlines (or velocity field) of uniform flow with and .    "
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
  "body": " The streamfunction  Our next task is to introduce the concept of the streamfunction . Remember that in 2D, the irrotational flow led to the equation and this led to the existence of the potential function. If we begin with incompressibility, however, we have , which can be written as And we can deduce the existence of an analogous function, the streamfunction , satisfying, Alternatively and more conveniently, we can write To establish the existence of the streamfunction, we follow a similar proof as in but now with the definition that where again is an arbitrary function of . The proof is otherwise identical, relying on establishing the independence of path of the integral using Stokes' theorem.  Why all this work? The streamfunction has an intuitive intepretation via the following result.  The streamfunction is constant along streamlines   The streamfunction, , is constant along streamlines of the flow (i.e. the trajectory formed by a particle in the flow).     The proof follows simply by the fact that and for which the substitution in the first equality follows from .  The above equality indicates that the velocity vector, , is orthogonal to the vector pointing along . However, it is known from Vector Calculus that runs along curves of steepest descent\/ascent of ---these must hence be orthogonal to the level sets of . Therefore, the level sets of are tangential to (the definition of a streamline).      A graphical depiction of the property in is shown below.   Flow between two streamlines, where the streamlines and are constant. Later, we will consider the flux through the contour illustrated in the figure along with its unit normal .     The streamfunction is thus constant on streamlines. Consider two streamlines. The following theorem relates the flux between the streamlines to the streamline values.  Flux between streamlines   Consider streamlines and . The flux (net flow of fluid) between the two streamlines is given by      By definition, the flux is given by the integral where is any smooth path joining the two streamlines with unit normal , as shown in FIGURE.  Note that given the curve, the unit normal is written as , so . Then the flux is re-written as the following: In the third line above, is the change of across the contour. Note that there is somewhat an arbitrary choice of direction for the contour , as related to the selection of the normal direction , and the positivity or negativity of the flux.      Finally, note that the velocity potential was governed by Laplace's equation, . The streamfunction is also governed by the same Laplace's equation.  Streamfunction satisfies Laplace's equation   Like the velocity potential, the streamfunction satisfies Laplace's equation:      Substitute the relationship into .      Like in the situation of certain flows, e.g. the line source in , it is easier to work in alternative coordinate systems to study the streamfunction. Since we know that by , we can use the conversion of the curl to polar coordinates in to give which allows us to relate the radial and angular velocities to the streamfunction.   Elementary flows  Let us return to each of the examples in and reconsider their corresponding streamfunctions.    Uniform flow  uniform flow, streamfunction  From , we can directly integrate and to get up to an arbitrary constant. Therefore, lines of constant correspond to which indeed yields the image seen in .      Stagnation point flow stagnation point flow, streamfunction  Now turning to , we integrate and . This gives up to an arbitrary constant. Indeed curves of constant match the hyperbole shown in .      Line source  line source, streamfunction  For the situation of the line source in , we want to work with polar coordinates. From the previous work, we have for this situation the potential . It then follows from the polar version of the gradient in , that the velocity is entirely radial and We use the formulae in and integrate yielding Then indeed note that the lines of constant are given by the radial lines of constant , matching the illustration in .    Another remark concerns the fact that is a multi-valued function in the example of the line source , gaining a jump of every time the origin is encircled. This is indeed a warning that the standard proof, analogous to , leading to the existence of a unique streamfunction, via would not apply since the velocity field is not defined at the origin. However, despite this, we see that the streamfunction provides well-defined predictions of streamlines on the cut plane with e.g. .    Line source in a uniform flow  Like the case of the potential function in , the linearity of the equation governing the streamfunction implies that we can consider the combination of those streamfunctions for a line source with a uniform flow. This yields for the case of uniform flow of speed in the positive -direction. The streamlines are then given by having designed the constant combination on the right hand-side for convenience. Then using , we have     Our previous examples were reliant on considering the flows generated by the velocity potentials studied previously. However, we can also consider \"fundamental solutions\" of the equation in their own right. Recall that in deriving the velocity potential of the line source in , we considered the solution of an axi-symmetric problem, where is only dependent on the distance from the origin. A similar argument must imply that the analogous axi-symmetric streamfunction is a permissible solution. And this leads us to the following example.    Line vortex  line vortex  The fundamental solution for the streamfunction, in plane polar coordinates, is the axisymmetric solution, defined up to a constant, and corresponds to a line vortex .  The streamlines of such a flow correspond to circular trajectories with constant, and are visualised in    Streamlines (or velocity field) of a line vortex with .    Recall that the radial and angular velocities are given by . Therefore, we see that the velocity vector is given by and thus this flow corresponds to entirely circular trajectories orbiting the origin, and with angular velocity increasing as .  The quantity is called the vortex strength , analogous to the source strength in . Let us consider the amount of circulation around a contour that contains the origin: i.e. one envisions encircling the origin along , adding up each of the velocity components tangential to the path. This is the circulation. By Stokes' theorem it is equal to the flux of vorticity of the corresponding bounding surface.  Choosing to be the circle of radius , we have . Then the circulation is given by So indeed this gives us an intuitive understanding of . Notice that corresponds to flow in the anticlockwise sense, and corresponds to flow in the clockwise sense.     "
},
{
  "id": "thm-streamfunction",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#thm-streamfunction",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "The streamfunction is constant along streamlines.",
  "body": " The streamfunction is constant along streamlines   The streamfunction, , is constant along streamlines of the flow (i.e. the trajectory formed by a particle in the flow).     The proof follows simply by the fact that and for which the substitution in the first equality follows from .  The above equality indicates that the velocity vector, , is orthogonal to the vector pointing along . However, it is known from Vector Calculus that runs along curves of steepest descent\/ascent of ---these must hence be orthogonal to the level sets of . Therefore, the level sets of are tangential to (the definition of a streamline).    "
},
{
  "id": "fig-streamfunction",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#fig-streamfunction",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "  Flow between two streamlines, where the streamlines and are constant. Later, we will consider the flux through the contour illustrated in the figure along with its unit normal .  "
},
{
  "id": "thm-flux-streamlines",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#thm-flux-streamlines",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "Flux between streamlines.",
  "body": " Flux between streamlines   Consider streamlines and . The flux (net flow of fluid) between the two streamlines is given by      By definition, the flux is given by the integral where is any smooth path joining the two streamlines with unit normal , as shown in FIGURE.  Note that given the curve, the unit normal is written as , so . Then the flux is re-written as the following: In the third line above, is the change of across the contour. Note that there is somewhat an arbitrary choice of direction for the contour , as related to the selection of the normal direction , and the positivity or negativity of the flux.    "
},
{
  "id": "thm-streamfunction-laplace",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#thm-streamfunction-laplace",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "Streamfunction satisfies Laplace’s equation.",
  "body": " Streamfunction satisfies Laplace's equation   Like the velocity potential, the streamfunction satisfies Laplace's equation:      Substitute the relationship into .    "
},
{
  "id": "ch-chapter04-potentialflows-4-8-3-1",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-8-3-1",
  "type": "Example",
  "number": "4.2.5",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow, streamfunction  From , we can directly integrate and to get up to an arbitrary constant. Therefore, lines of constant correspond to which indeed yields the image seen in .  "
},
{
  "id": "ch-chapter04-potentialflows-4-8-4-1",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-8-4-1",
  "type": "Example",
  "number": "4.2.6",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow stagnation point flow, streamfunction  Now turning to , we integrate and . This gives up to an arbitrary constant. Indeed curves of constant match the hyperbole shown in .  "
},
{
  "id": "example-streamfunction-linesource",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#example-streamfunction-linesource",
  "type": "Example",
  "number": "4.2.7",
  "title": "Line source.",
  "body": " Line source  line source, streamfunction  For the situation of the line source in , we want to work with polar coordinates. From the previous work, we have for this situation the potential . It then follows from the polar version of the gradient in , that the velocity is entirely radial and We use the formulae in and integrate yielding Then indeed note that the lines of constant are given by the radial lines of constant , matching the illustration in .  "
},
{
  "id": "ch-chapter04-potentialflows-4-8-7-1",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#ch-chapter04-potentialflows-4-8-7-1",
  "type": "Example",
  "number": "4.2.8",
  "title": "Line source in a uniform flow.",
  "body": " Line source in a uniform flow  Like the case of the potential function in , the linearity of the equation governing the streamfunction implies that we can consider the combination of those streamfunctions for a line source with a uniform flow. This yields for the case of uniform flow of speed in the positive -direction. The streamlines are then given by having designed the constant combination on the right hand-side for convenience. Then using , we have   "
},
{
  "id": "example-streamfunction-linevortex",
  "level": "2",
  "url": "ch-chapter04-potentialflows-4.html#example-streamfunction-linevortex",
  "type": "Example",
  "number": "4.2.9",
  "title": "Line vortex.",
  "body": " Line vortex  line vortex  The fundamental solution for the streamfunction, in plane polar coordinates, is the axisymmetric solution, defined up to a constant, and corresponds to a line vortex .  The streamlines of such a flow correspond to circular trajectories with constant, and are visualised in    Streamlines (or velocity field) of a line vortex with .    Recall that the radial and angular velocities are given by . Therefore, we see that the velocity vector is given by and thus this flow corresponds to entirely circular trajectories orbiting the origin, and with angular velocity increasing as .  The quantity is called the vortex strength , analogous to the source strength in . Let us consider the amount of circulation around a contour that contains the origin: i.e. one envisions encircling the origin along , adding up each of the velocity components tangential to the path. This is the circulation. By Stokes' theorem it is equal to the flux of vorticity of the corresponding bounding surface.  Choosing to be the circle of radius , we have . Then the circulation is given by So indeed this gives us an intuitive understanding of . Notice that corresponds to flow in the anticlockwise sense, and corresponds to flow in the clockwise sense.  "
},
{
  "id": "sec-complex-potential",
  "level": "1",
  "url": "sec-complex-potential.html",
  "type": "Section",
  "number": "4.3",
  "title": "The complex potential",
  "body": " The complex potential  In the previous two sections, we studied the properties and utility of the velocity potential and streamfunction in the context of two-dimensional potential flows (inviscid, incompressible, irrotational). We did this with techniques from real-valued Vector Calculus. As it turns out, there is a much more elegant and powerful framework for studying two-dimensional flow which leverages the significant power of complex analysis and complex variables.  In fact, you may have already noticed this on an intuitive level, given the intimate relationships between and , seeming to exhibit a certain kind of symmetry in formulae and operations. Complex analysis is the language in which we can make this kind of \"symmetry\" transparent.  We begin by reviewing (or in some cases, introducing) you to some key theorems about the properties of well-behaved (analytic) complex functions.  In his section, we will refer to a complex function generically as where and and the real-valued decompositions of the complex-valued function . Also, .  A complex function is differentiated in much the same way as real-valued functions, with the definition that The crucial difference with real-valued differentiation is that the above limit is required to hold whilst approaching the point in any direction of the complex plane.    As long as you stay away from exceptional points of a function, the \"calculus\" of complex functions is largely the same as for real-valued functions, e.g. and the usual rules of algebraic manipulations hold. There are some caveats, however, which are dealt with on an individual manner.    Below, we will often use susbcripts for partial differentiation, e.g. .   Cauchy's theorem and harmonic functions  We will follow the reference text by and and introduce the basic notions of complex functions that we will need.    Analyticity  analytic   A function is said to be analytic in a domain if is defined and differentiable at all points in the domain. The function is said to be analytic at a point  if it is analytic in a neighbourhood of .  When we refer to an analytic function , we mean a function that is analytic in some domain of (often clear by context).  The function is holomorphic holomorphic if it is analytic; the terms are synonyms.  An analytic function is entire entire if its region of analyticity includes all points in , including infinity.     Note that above, we have stated that a function is analytic if it is well-defined and differentiable once (!) As it turns out, the requirement that a complex-valued function is differentiable is a strong condition. An analytic function turns out to be infinitely differentiable by consequence!    In this module, we will not be concerned with formalities when they are not relevant. For example, in our definition of analyticity, we do not specify if the relevant domains are open or closed. The functions we work with are generally non-pathological---they may have isolated singularities or exceptional points, but generally the application and context will make it clear the limits of our results.    Now we have one of the most important theorems of complex analysis.  Cauchy-Riemann equations I   If is differentiable, then the Cauchy-Riemann equations, given by hold.  In particular, if is analytic on a domain, then its real and complex parts must satisfy the Cauchy-Riemann equations (in that domain).     (Non-examinable)  This follows by considering the definition of the derivative when the point is approached from the or directions.  With real, we can verify from applying the definition that On the other hand, approaching with gives Equating the two results then yields the Cauchy-Riemann equations.      It turns out that the Cauchy-Riemann equations are not only necessary to an analytic function, but are actually sufficient as well.  Cauchy-Riemann equations II   If two real-valued continuous functions, and of two real variables and have continuous firsst partial derivatives that satisfy the Cauchy-Riemann equations in some domain, then is analytic in that domain.     (Non-examinable)  The proof is not difficult, but we will refer students to for its proof. It relies on constructing the derivative of along any direction using the decomposition into the two Cartesian directions.         If is analytic, it is differentiable to all orders.     Our last step involves relating complex functions to the solution of Laplace's equation(s), i.e. or , that govern potential flow.  Analyticity and Laplace's equation   If is analytic in a domain , then and satisfy Laplace's equation, in , and have continuous second partial derivatives in .     Since is analytic, then it follows from that and . It furthermore follows from that is differentiable to all orders; therefore, we can take derivatives to obtain The second derivatives are continuous and therefore . Therefore . Laplace's equation is analogously proved for .      The above theorem is truly a remarkable result; it would not be a stretch to state that this single result was at the forefront of why complex analysis played such an important role in the development of applied mathematics and physics in the 18th, 19th, and 20th centuries.  Since Laplace's equation, , is such an important equation in physics, occuring in theories of gravitation, electrostatics, fluid mechanics, etc. the theorem establishes that there exists a parallel theory in the language of complex variables for the specific case of two-dimensional applications.  A potential fluid, for example, can be studied by manipulating complex functions of the form One can envision all kinds of different forms of ---polynomials, cosines and sines, exponentials, logarithms, etc. As long as the function is locally differentiable, it is thus analytic and therefore can be associated with (some kind of) fluid flow.    Examples of elementary flows  Let us return to the examples of flows studied in and re-interpret them using the theory of analytic functions.  We will associate the velocity potential, , and streamfunction with an analytic function in the following way.   Let and be the respective velocity potential and streamfunction for some potential flow. We define and call the complex potential .  Note that by differentiating in the horizontal and vertical directions, we have Therefore it follows that the horizontal and vertical velocity components of the flow, related via , are given by        Uniform flow  uniform flow, complex  We can verify that the complex potential for uniform flow is given from This can be compared to .      Stagnation point flow  stagnation point flow, complex  We can verify that the complex potential for a stagnation point flow is given by This can be compared to .      Line source  line source, complex  We can verify that the complex potential for a line source flow is given by This can be compared to .  The complex logarithm is an example of a function that is not analytic at the isolated point where it possesess a branch point . However, it still provides a permissible analytic function away from the origin.  The evaluation of the complex logarithm can be performed via the definition where is the polar form representation of . In particular is a multi-function with a branch point at the origin.  With the above decomposition of the logarithm in mind, notice that we can then conclude that the velocity potential and streamfunction are given by Indeed the streamlines are along the rays constant.  From , we can also compute the velocities using the relationship . We thus have once we have multiplied the top and bottom by the conjugate of .      Line vortex flow  line vortex, complex  We can verify that the complex potential for a line vortex is given by This can be compared to .  Again, using the definition of the complex logarithm, via , we can write in terms of its real and complex components as where >. Therefore, the streamfunction is given by and is constant along circular trajectories with constant distance from the origin, .     "
},
{
  "id": "sec-complex-potential-7-1",
  "level": "2",
  "url": "sec-complex-potential.html#sec-complex-potential-7-1",
  "type": "Remark",
  "number": "4.3.1",
  "title": "",
  "body": " As long as you stay away from exceptional points of a function, the \"calculus\" of complex functions is largely the same as for real-valued functions, e.g. and the usual rules of algebraic manipulations hold. There are some caveats, however, which are dealt with on an individual manner.  "
},
{
  "id": "def-analytic",
  "level": "2",
  "url": "sec-complex-potential.html#def-analytic",
  "type": "Definition",
  "number": "4.3.2",
  "title": "Analyticity.",
  "body": " Analyticity  analytic   A function is said to be analytic in a domain if is defined and differentiable at all points in the domain. The function is said to be analytic at a point  if it is analytic in a neighbourhood of .  When we refer to an analytic function , we mean a function that is analytic in some domain of (often clear by context).  The function is holomorphic holomorphic if it is analytic; the terms are synonyms.  An analytic function is entire entire if its region of analyticity includes all points in , including infinity.   "
},
{
  "id": "subsec-complex-introduction-5-1",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-introduction-5-1",
  "type": "Remark",
  "number": "4.3.3",
  "title": "",
  "body": " In this module, we will not be concerned with formalities when they are not relevant. For example, in our definition of analyticity, we do not specify if the relevant domains are open or closed. The functions we work with are generally non-pathological---they may have isolated singularities or exceptional points, but generally the application and context will make it clear the limits of our results.  "
},
{
  "id": "thm-CR1",
  "level": "2",
  "url": "sec-complex-potential.html#thm-CR1",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "Cauchy-Riemann equations I.",
  "body": " Cauchy-Riemann equations I   If is differentiable, then the Cauchy-Riemann equations, given by hold.  In particular, if is analytic on a domain, then its real and complex parts must satisfy the Cauchy-Riemann equations (in that domain).     (Non-examinable)  This follows by considering the definition of the derivative when the point is approached from the or directions.  With real, we can verify from applying the definition that On the other hand, approaching with gives Equating the two results then yields the Cauchy-Riemann equations.    "
},
{
  "id": "thm-CR2",
  "level": "2",
  "url": "sec-complex-potential.html#thm-CR2",
  "type": "Theorem",
  "number": "4.3.5",
  "title": "Cauchy-Riemann equations II.",
  "body": " Cauchy-Riemann equations II   If two real-valued continuous functions, and of two real variables and have continuous firsst partial derivatives that satisfy the Cauchy-Riemann equations in some domain, then is analytic in that domain.     (Non-examinable)  The proof is not difficult, but we will refer students to for its proof. It relies on constructing the derivative of along any direction using the decomposition into the two Cartesian directions.    "
},
{
  "id": "thm-complex-inf-derivatives",
  "level": "2",
  "url": "sec-complex-potential.html#thm-complex-inf-derivatives",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "",
  "body": "  If is analytic, it is differentiable to all orders.   "
},
{
  "id": "thm-complex-laplace",
  "level": "2",
  "url": "sec-complex-potential.html#thm-complex-laplace",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "Analyticity and Laplace’s equation.",
  "body": " Analyticity and Laplace's equation   If is analytic in a domain , then and satisfy Laplace's equation, in , and have continuous second partial derivatives in .     Since is analytic, then it follows from that and . It furthermore follows from that is differentiable to all orders; therefore, we can take derivatives to obtain The second derivatives are continuous and therefore . Therefore . Laplace's equation is analogously proved for .    "
},
{
  "id": "def-complex-potential",
  "level": "2",
  "url": "sec-complex-potential.html#def-complex-potential",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  Let and be the respective velocity potential and streamfunction for some potential flow. We define and call the complex potential .  Note that by differentiating in the horizontal and vertical directions, we have Therefore it follows that the horizontal and vertical velocity components of the flow, related via , are given by    "
},
{
  "id": "subsec-complex-examples-4-1",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-4-1",
  "type": "Example",
  "number": "4.3.9",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow, complex  We can verify that the complex potential for uniform flow is given from This can be compared to .  "
},
{
  "id": "subsec-complex-examples-5-1",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-5-1",
  "type": "Example",
  "number": "4.3.10",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow  stagnation point flow, complex  We can verify that the complex potential for a stagnation point flow is given by This can be compared to .  "
},
{
  "id": "subsec-complex-examples-6-1",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-6-1",
  "type": "Example",
  "number": "4.3.11",
  "title": "Line source.",
  "body": " Line source  line source, complex  We can verify that the complex potential for a line source flow is given by This can be compared to .  The complex logarithm is an example of a function that is not analytic at the isolated point where it possesess a branch point . However, it still provides a permissible analytic function away from the origin.  The evaluation of the complex logarithm can be performed via the definition where is the polar form representation of . In particular is a multi-function with a branch point at the origin.  With the above decomposition of the logarithm in mind, notice that we can then conclude that the velocity potential and streamfunction are given by Indeed the streamlines are along the rays constant.  From , we can also compute the velocities using the relationship . We thus have once we have multiplied the top and bottom by the conjugate of .  "
},
{
  "id": "subsec-complex-examples-7-1",
  "level": "2",
  "url": "sec-complex-potential.html#subsec-complex-examples-7-1",
  "type": "Example",
  "number": "4.3.12",
  "title": "Line vortex flow.",
  "body": " Line vortex flow  line vortex, complex  We can verify that the complex potential for a line vortex is given by This can be compared to .  Again, using the definition of the complex logarithm, via , we can write in terms of its real and complex components as where >. Therefore, the streamfunction is given by and is constant along circular trajectories with constant distance from the origin, .  "
},
{
  "id": "sec-method-of-images",
  "level": "1",
  "url": "sec-method-of-images.html",
  "type": "Section",
  "number": "4.4",
  "title": "The method of images",
  "body": " The method of images  The preceeding sections would give the misleading impression that solving potential-flow problems for two-dimensional flows is easy. This is not the case, and the primary reason is due to the presence of boundary conditions . The elementary flows we have previously considered were unconfined and\/or we did not consider additonal constraints on their behaviours at infinity. In reality, a real physical fluid, whether in the ocean, the air, or in a container, is confined in some direction, and we must often consider subtle questions about the mechanism that produces the fluid motion.  In this section, we consider the situation of solving for the potential flow in a fluid region with boundaries. Recall that this is equivalent to finding a velocity potential satisfying or an analytic complex potential, .  Recall from that on solid boundaries, we must impose the no-flux condition that    Planar boundaries: a half-plane  Consider the situation illustrated in .  Blah     We envision a semi-infinite region of fluid bounded on the left by a wall at . A single (line) source of strength is placed at . Therefore from , we would expect that at least near , the complex potential behaves as However the above solution does not satisfy the required boundary conditions at since it corresponds to a velocity field for which the horizontal velocity penetrates through . This can be verified via inspection. For example, we can inspect the velocity or the streamlines; this is part of .  Rephrased in terms of the streamlines, the boundary condition at is equivalent to the constraint that   Our inspired solution to the above problem is referred to as the method of images .    Method of images  Given potential flow problem, we consider the superposition of elementary sinks\/sources, i.e. and\/or vortices, The strengths and locations of the individual contributions are chosen so that boundary conditions on the required boundaries (including at infinity) can be met.    Notice that the linearity of the potential flow problem is crucial: any analytic function is associated with a velocity potential that satisfies Laplace's equation, , and therefore the superposition of such functions also yields a permissible complex potential, .  We consider the addition of a \"fictitious\" image source, with the same strength at the reflected point , which lies outside of the posited fluid region. This gives the complex potential of This yields the illustration of the flow in   Blah     The corresponding complex velocity is given by So indeed, on the central boundary, we have , and and the velocity is entirely vertical. So indeed, the condition that on the planar boundary is satisfied.  In order to study the complex velocity, , and develop an equation for the streamlines of the flow, we must first navigate the fact that the complex logarithm function is only well-defined in a slit complex plane. First, let Using the definition of the complex logarithm , we have The definitions of and , are shown in the below figure. In order for each logarithm to be well defined, the angles and must be restricted to be less than a complete revolution. We thus restrict and .  Blah   In , you will be asked to develop an equation for the streamlines of this flow.  The above ideas can be extended to the situation of a line vortex in a half plane. Again, we are interested in describing the flow due to a line vortex at , and therefore we expect that near this point, However, the above potential does not satisfy the necessary zero-flux condition at .  In this case, the approach is to add an image vortex at , but opposite in direction: Therefore, this flow is composed by a line vortex circulating anticlockwise on the right, and a line vortex circulating clockwise on the left. It can be verified that the complex velocity is given by and indeed the velocity at is entirely vertical and there is no flux through the boundary.  There is an exercise in .    Uniqueness of solutions  You may be wondering: if a permissible potential function is found that satisfies the necessary boundary conditions, can we be certain it is the unique solution in the problem (up to a constant)? You may understand the construction of potentials, via the method of images, but perhaps irked that it involves the insertion of these so-called 'fictitious' points. The answer, at least for most non-pathological problems in potential flow theory (i.e. all the problems you study) is yes , the solution you have found is assured to be the only solution (up to a constant).  This is, to some extent, related to the uniqueness of analytic continuation . In a nutshall, the relevant theorem states that given two admissible complex potentials, say and , that agree on the line (in the case of the above situation), it is the case that everywhere (where they are analytic).  Therefore, you can be certain that solutions you find via the trick of method of images are the only solutions.    "
},
{
  "id": "image-planar01",
  "level": "2",
  "url": "sec-method-of-images.html#image-planar01",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " Blah   "
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
  "body": " Blah   "
},
{
  "id": "fig-image-duallog",
  "level": "2",
  "url": "sec-method-of-images.html#fig-image-duallog",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": " Blah   "
},
{
  "id": "sec-method-of-images-6",
  "level": "2",
  "url": "sec-method-of-images.html#sec-method-of-images-6",
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
  "body": " Conformal mapping  "
},
{
  "id": "ws-potentialflows",
  "level": "1",
  "url": "ws-potentialflows.html",
  "type": "Worksheet",
  "number": "4.6",
  "title": "Worksheet",
  "body": "  Method of images   Intro.    Single source in a semi-infinite flow   Verify that a single source of strength placed at the point is insufficient to describe flow bounded in the semi-infinite region, , with a planar boundary at . What is the horizontal and vertical velocities on the boundary? Find an equation for the streamlines and sketch the flow.     A source in a semi-infinite flow   Consider the situation of two point sources of identical strength, , placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by hyperbolae and develop the equation for their form.     Two vortices and a dividing boundary   Consider the situation of two point vorticies of identical strength, but opposite direction, placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by      "
},
{
  "id": "ps-image-planar01",
  "level": "2",
  "url": "ws-potentialflows.html#ps-image-planar01",
  "type": "Worksheet Exercise",
  "number": "4.6.1",
  "title": "Single source in a semi-infinite flow.",
  "body": " Single source in a semi-infinite flow   Verify that a single source of strength placed at the point is insufficient to describe flow bounded in the semi-infinite region, , with a planar boundary at . What is the horizontal and vertical velocities on the boundary? Find an equation for the streamlines and sketch the flow.   "
},
{
  "id": "ps-image-planar02",
  "level": "2",
  "url": "ws-potentialflows.html#ps-image-planar02",
  "type": "Worksheet Exercise",
  "number": "4.6.2",
  "title": "A source in a semi-infinite flow.",
  "body": " A source in a semi-infinite flow   Consider the situation of two point sources of identical strength, , placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by hyperbolae and develop the equation for their form.   "
},
{
  "id": "ps-image-planar03",
  "level": "2",
  "url": "ws-potentialflows.html#ps-image-planar03",
  "type": "Worksheet Exercise",
  "number": "4.6.3",
  "title": "Two vortices and a dividing boundary.",
  "body": " Two vortices and a dividing boundary   Consider the situation of two point vorticies of identical strength, but opposite direction, placed at , with . Develop equations for the complex potential, , and complex velocity, .  Demonstrate that the streamlines are given by    "
},
{
  "id": "ch-chapter05-waves",
  "level": "1",
  "url": "ch-chapter05-waves.html",
  "type": "Chapter",
  "number": "5",
  "title": "Water waves",
  "body": " Water waves   Brief introduction to appear here.   "
},
{
  "id": "sec-helmholtz",
  "level": "1",
  "url": "sec-helmholtz.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Helmholtz principle",
  "body": " The Helmholtz principle  As mentioned in Chapter , the vorticity obeys the vorticity equation : In two-dimensional irrotational flow, the right-hand side is zero, so the vorticity of each fluid particle is constant in time. This is a special case of the more general result known as the Helmholtz principle , which states that in an inviscid fluid, the vorticity of each fluid particle is conserved.  "
},
{
  "id": "sec-helmholtz-examples",
  "level": "1",
  "url": "sec-helmholtz-examples.html",
  "type": "Section",
  "number": "6.2",
  "title": "Examples illustrating the use of the Helmholtz principle",
  "body": " Examples illustrating the use of the Helmholtz principle Here are some examples. "
},
{
  "id": "ch-viscousflows",
  "level": "1",
  "url": "ch-viscousflows.html",
  "type": "Chapter",
  "number": "7",
  "title": "Viscous flows",
  "body": " Viscous flows   In this chapter we introduce the effects of viscosity into our fluid model. This leads to the famous Navier--Stokes equations, which are the governing equations for many fluid flows of practical interest. The viscosity has a profound effect on the flow, and it can lead to the formation of boundary layers and the generation of vorticity at solid boundaries.  Test matrix.    "
},
{
  "id": "ws-intro",
  "level": "1",
  "url": "ws-intro.html",
  "type": "Worksheet",
  "number": "8.1",
  "title": "Boo.",
  "body": " Boo.   Test.    Blah.   "
},
{
  "id": "ws-intro-3",
  "level": "2",
  "url": "ws-intro.html#ws-intro-3",
  "type": "Worksheet Exercise",
  "number": "8.1.1",
  "title": "",
  "body": " Blah.  "
},
{
  "id": "sec-vector-calculus-planepolar",
  "level": "1",
  "url": "sec-vector-calculus-planepolar.html",
  "type": "Section",
  "number": "A.1",
  "title": "Identities for plane polar coordinates",
  "body": " Identities for plane polar coordinates   "
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
  "body": " References and further reading  Kreyszig, E. (2007). Advanced engineering mathematics 9th edition with Wiley plus set (Vol. 334). US: John Wiley and Sons.  Fornberg  "
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
