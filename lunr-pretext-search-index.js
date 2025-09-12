var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Official description",
  "body": "Official description The description of this unit in the official catalogue is the following: Aims In this unit you will explore the mathematical theory of fluid dynamics, with a view towards applications to physical phenomena such as flight, vortex motion and water waves. You will study the mathematics of conservation laws and the derivation of governing fluid dynamical equations. This unit will provide you with a foundation for further study of more advanced theory of fluid dynamics and continuum mechanics, and its application in scientific areas including engineering, physics and biology. Outcomes (i) Demonstrate an understanding of the principles of mathematical fluids dynamics; (ii) discuss and apply techniques from vector calculus and complex variable theory to analyse and solve fluid flow problems; (iii) give a qualitative and quantitative account of a range of phenomena in fluid dynamics. Content Complex analysis primer: Cauchy-Riemann equations; harmonic functions; complex maps; residue integration. The mathematics of fluid phenomena and its applications: derivation and interpretation of governing equations; reduction of governing equations to equations of simpler formulation; potential flow; vortical flow. Two-dimensional incompressible and irrotational flow: velocity potential; stream function; complex potential. Conformal mapping. Vortex motion: vortex lines and tubes; Kelvin circulation theorem; Helmholtz' principal. Water waves: free surfaces; harmonic waves; finite depth; instability; group velocity. Computational fluid dynamics.  "
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
  "body": "Related units at Bath     MA22016: Differential equations and vector calculus   This unit forms a standard second-year module on differential equations and vector calculus, and is a key pre-requisite for this module. In addition to teaching and reviewing basic techniques for solving ordinary differential equations, you will learn about some of the core methods in vector calculus (directional derivatives; gradients; potentials; line integrals; divergence; curl; surface and volume integrals; curvilinear coordinates; integral theorems).    MA22021: Partial differential equations  This module teaches basic techniques and theory for the core PDEs (Laplace, heat, wave equations). Generally, we will make with your broad familiarity of PDE different equation types and terminology (e.g. boundary conditions).       "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "Moodle page etc.",
  "body": "Moodle page   Besides this document, the main resource for this unit is the Moodle page . There is also a folder on Re:View for the recordings . In Week 1 we walked through this Moodle page and talked about various other administrative things; unfortunately the recording was lost due to a Moodle\/Panopto error.  "
},
{
  "id": "ch-chapter00-introduction",
  "level": "1",
  "url": "ch-chapter00-introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   Brief introduction to appear here.   "
},
{
  "id": "sec-eulerlagrang",
  "level": "1",
  "url": "sec-eulerlagrang.html",
  "type": "Section",
  "number": "2.1",
  "title": "Eulerian and Lagrangian coordinates",
  "body": " Eulerian and Lagrangian coordinates   There are essentially two natural ways to think of motion in a fluid. We can imagine positioning ourselves at a fixed point in space, . At this point, we then attempt to measure a fluid quantity such as the density, , or temperature, . This is essentially the Eulerian frame . One can imagine, for example, fixing sensor station into the ocean bottom, and obtaining measurements of the water temperature.   (a) The Eulerian interpretation; (b) the Lagrangian interpretation.   Alternatively, we can imagine tracking of a single fixed particle (or a fluid element) within the flow. The particle begins at some position. Let us define a label to describe the particle's initial position. For example, if the particle's position is given by we can define the corresponding Lagrangian label as We then ask for the corresponding measurement of the fluid quantity that corresponds to the label . For example, this is equivalent to tagging a free-floating buoy in the ocean with the label , then measuring the temperature of the water as the buoy drifts in the ocean. This temperature, we might write as where is simply a fixed quantity for the particular buoy.    The convective derivative  Let us now be more specific. We wish to consider how different quantities in our flow changes with time, but the matter is made complicated by the two above perspectives (fixed or following the flow).  Again, let us consider a scalar property of the fluid (for example, its density, temperature, velocity component, pressure, etc.), and let us suppose that this quantity is a function of both position, , and time, and denote it by . This is the Eulerian description of the property since it is defined by specifying a fixed position in space. Fixing and then measuring is akin to standing in the fluid at a fixed location and measuring the property value in time.  We can alternatively write the property by its Lagrangian description. That is, given a label , we obtain the current position of the particle associated with this label, , then obtain its property value. This we can write as the following: Now, fixing corresponds to tracking how changes as we move with the particle along the deforming fluid.  There are thus two ways of considering time derivatives.   We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is considered for a fix label. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .      The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables.   The natural question is how the two derivatives relate to one another. This is given by the following theorem.  The material\/convective derivative   The material or convective derivative can be defined in terms of Eulerian derivative in the following way:    This is a result of the chain rule. For a scalar function , we have the fact that         You are asked to work out the above proof more carefully using individual coordinates (instead of vector notation) in the problem set.    We can now apply the above result to the question of how to calculate the acceleration within the fluid (more specifically, we are enquiring about the acceleration of a volume or particle within the fluid). The acceleration is given by the convective or material derivative of the velocity:    "
},
{
  "id": "def-eulerlag",
  "level": "2",
  "url": "sec-eulerlagrang.html#def-eulerlag",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is considered for a fix label. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .   "
},
{
  "id": "subsec-laglabel-6",
  "level": "2",
  "url": "sec-eulerlagrang.html#subsec-laglabel-6",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": " The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables.  "
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
  "body": " Examples and flow visualisation  There are different ways to visualise the dynamics of a fluid. Given the velocity, , we can plot a vector field at each point in space, and at a fixed moment in time. Little arrows are used to indicate the direction and the length of the arrow can be chosen to represent the magnitude.  Another representation of the flow is using particle paths and streamlines . Given a point and time, the particle path is the trajectory that would result if a particle were dropped into the flow at that chosen point. It is thus found by solving an equation where at every point on the trajectory, the particle's velocity is the specified velocity of the fluid.  In the below definition, we define these concepts more concretely.    Particle path and streamlines   Consider a particle whose position is given by lying in a fluid with velocity .  The particle path for the particle is given by solving the equation with appropriate initial conditions, i.e. a specified value of .  If it is the case that the velocity is time independent, i.e. , then the particle path is called a streamline .       Above, we have been somewhat diligent not to abuse notation and distinguish between independent and dependent variables. For example, is the independent variable that corresponds to an arbitrary spatial location. Therefore, when referring to a particular particle trajectory, we would introduce a new dependent variable, , which depends on time, with being the horizontal position of the particle.  In many usages, this rigorous distinguishing of dependent and independent variables is commonly abused (because the notation becomes too burdensome). Therefore, we will commonly write e.g. that is the position of the particle. The above abuse of notation uses both as independent variable (left) and dependent variable (right).    Let us practice these concepts.   Consider a fluid described by the two-dimensional velocity field . Derive and plot the streamlines of the flow.   There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.  (for accessibility)    The particle paths or streamlines of the flow are found by solving the equations: Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories in time. However, in this case, it is easier to remove the time variable entirely. Notice that Therefore, the trajectories lie along the above hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths are streamlines .      Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories.     "
},
{
  "id": "def-streamline",
  "level": "2",
  "url": "sec-flowexamples.html#def-streamline",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Particle path and streamlines.",
  "body": " Particle path and streamlines   Consider a particle whose position is given by lying in a fluid with velocity .  The particle path for the particle is given by solving the equation with appropriate initial conditions, i.e. a specified value of .  If it is the case that the velocity is time independent, i.e. , then the particle path is called a streamline .   "
},
{
  "id": "sec-flowexamples-6-1",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-6-1",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": " Above, we have been somewhat diligent not to abuse notation and distinguish between independent and dependent variables. For example, is the independent variable that corresponds to an arbitrary spatial location. Therefore, when referring to a particular particle trajectory, we would introduce a new dependent variable, , which depends on time, with being the horizontal position of the particle.  In many usages, this rigorous distinguishing of dependent and independent variables is commonly abused (because the notation becomes too burdensome). Therefore, we will commonly write e.g. that is the position of the particle. The above abuse of notation uses both as independent variable (left) and dependent variable (right).  "
},
{
  "id": "sec-flowexamples-8",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-8",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " Consider a fluid described by the two-dimensional velocity field . Derive and plot the streamlines of the flow.   There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.  (for accessibility)    The particle paths or streamlines of the flow are found by solving the equations: Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories in time. However, in this case, it is easier to remove the time variable entirely. Notice that Therefore, the trajectories lie along the above hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths are streamlines .   "
},
{
  "id": "sec-flowexamples-9",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-9",
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
  "body": " Reynolds' transport theorem   Jacobian of Lagrangian to Eulerian  Consider a fluid volume, , that is initially dyed a certain colour. The packet of fluid is initially located at . As the fluid evolves in time, it then occupies the volume with .  As an exmaple, we may express the density of the fluid as i.e. at every point in space and moment in time, the above retrieves the density of the fluid within a designated region (which may be changing). This is a natural quantity to study in a fixed frame of the fluid.  Alternatively, we can write which is the density of fluid for those particles making up an originally chosen volume, . This is a natural quantity to study if we were to move with the fluid; for instance, if we were to colour the volume with a dye and track its density in time.  The correspondence between the Euclidean and Lagrangian coordinates is written as    Jacobian of Lagrangian to Eulerian   Since we assume the medium is continuous, then we would generally require that the mapping from Lagrangian to Eulerian coordinates is continuous and one-to-one; then the map assigns every element (label) in the original reference configuration, denoted , a unique position, , in the deformed state.  From Multivariable Calculus, a sufficient condition for this to be true is that the Jacobian of the transformation , is finite and non-zero:     The following requires a bit of algebra, and you are not required to prove the result.  Euler's identity   The material derivative of the Jacobian of the transformation is given by where .    The proof follows from direct differentiation on the determinant and use of the identity of the material derivative.       Reynolds transport theorem  We are now ready to derive a key result that eases our path towards developing the governing equations for a fluid. The result is as follows.  Reynolds transport theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' transport theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' transport theorem.  It is helpful for you to convince yourself that the above vector identity is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.         Reynolds' transport theorem thus gives an identity for how time differentiation can pass through the integral when the domain of integration is changing in time!      In 1D, Reynolds transport theorem reduces to an identity known as Leibniz's rule. This will be proven in your problem sets.     "
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
  "id": "ch-chapter01-equations-4",
  "level": "1",
  "url": "ch-chapter01-equations-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conservation of mass",
  "body": " Conservation of mass  Our task from this section is to prove the following equation for the conservation of mass of a fluid:  Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to      In fact, as it turns out, the proof of this result is trivial if we use the Reynolds' transport theorem and Lagrangian formulation following .   We consider the time differentiation of the mass integral. By , we can use the Reynolds' transport theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .    Derivation of mass conservation using Eulerian methods  The derivation we have just shown for , using the Lagrangian viewpoint and the Reynolds' transport theorem is misleadingly simple, and it can be instructive to see how the result is proved purely from the perspective of Eulerian coordinates.  For this, let us consider to be a fixed and closed subregion of the overall fluid, that does not change with time. An illustration of this is shown in   Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid     We want to prove the following result, which essentially equates the change in mass, due to density changes, to the flow of mass in or out of the volume.  Integral form of the law of conservation of mass  Given a fixed volume element and boundary , the integral form of the law of mass conservation is     The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.    We now want to transform the integral form in into the form of a partial differential equation. To do this, apply the Divergence theorem to the right hand-side of the above integral, converting the surface integral to a volume integral. Moving all quantities to the left hand side now yields Since the above integral equation holds for all possible , it must be equivalent to the integrand equated to zero. This yields our final result leading to .    Corollary of the Transport Theorem    There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . In this case the Reynolds transport theorem is     This is left as an exercise. It will be useful for you to consider the vector identity      "
},
{
  "id": "thm-mass",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#thm-mass",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Continuity equation.",
  "body": " Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to    "
},
{
  "id": "ch-chapter01-equations-4-4",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#ch-chapter01-equations-4-4",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " We consider the time differentiation of the mass integral. By , we can use the Reynolds' transport theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .  "
},
{
  "id": "fig-normalvolume",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#fig-normalvolume",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid   "
},
{
  "id": "ch-chapter01-equations-4-5-4-1",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#ch-chapter01-equations-4-5-4-1",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Integral form of the law of conservation of mass.",
  "body": " Integral form of the law of conservation of mass  Given a fixed volume element and boundary , the integral form of the law of mass conservation is   "
},
{
  "id": "ch-chapter01-equations-4-5-4-2",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#ch-chapter01-equations-4-5-4-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.  "
},
{
  "id": "cor-convmass",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#cor-convmass",
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
  "title": "Incompressible flow and Euler",
  "body": " Incompressible flow and Euler  Recall from that the Jacobian relates infinitessimal volumes in Eulerian and Lagrangian frames via . So the Jacobian is a measure of the local expansion or contraction of a fluid (relative to its original state). If we use Euler's identity in the theorem, we are led to an important interpretation for what it means for a fluid to satisfy . This leads us to defining the notion of an incompressible fluid.     Incompressible fluids   A fluid is said to be incompressible if it preserves infinitessimal volumes. That is, The following equivalence (iff) then follows:    This is immediate with Euler's identity in .      So in conclusion, for the case of an incompressible fluid, it suffices to solve the equation instead of the more complicated equation in .  By the way, what happens to the mass conservation equation in if the fluid is incompressible? This leads to the following corollary.  Constant density along streamlines   For an incompressible fluid, the density is constant along streamlines, i.e.     This relies on setting in .     Let us return to consider the total sum of equations and unknowns. We have introduced the scalar mass conservation equation found in (or alternatively the more simplified equation for incompressible fluids). Also the vector momentum equation found in . This yields four scalar equations for five unknowns: the pressure , density , and the three velocity components .  One way of proceeding is to attempt to establish or to inuit a relationship between pressure and density. For instance, the assumption of an ideal gas law can be derived from kinetic theory, which leads to the empirical law that , relating pressure in a linear fashion to density, and depending on the temperature, , and a (gas) constant . Other assumptions of the form are possible, and this is involved in the study of gases and compressible fluids .  However, empirically, we observe that in most liquids, the density only varies within a few percent under typical variations of temperature and pressure. Therefore, it is common to assume:   Constant density assumption  We often assume that in the situation of liquids, the density is taken to be constant, .    Note, then that in the case of constant density fluids, if we consider the mass conservation equation , it follows that . Therefore, from the definition , we conclude that the fluid is indeed incompressible.     Confusingly, in many references, authors define a fluid to be incompressible if is constant. However, we see this is not necessarily the case. A fluid can be incompressible and therefore without being constant.     We are finally ready to state the Euler equations .  Euler equations   The Euler equations consist of the continuity equation and momentum equations , considered in the situation of an incompressible fluid: Note this is then four scalar equations for the three unknown velocities in and pressure . We shall assume in the course that incompressible fluids have constant density, . The above Euler equations include the (gravitational) body force .     "
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
  "id": "sec-bernoulli",
  "level": "1",
  "url": "sec-bernoulli.html",
  "type": "Section",
  "number": "3.5",
  "title": "Bernoulli’s equation",
  "body": " Bernoulli's equation  There is a reformulation of the momentum equations that proves to be useful. In essence, it emerges from attempting to integrate the momentum equation and yields the famous Bernoulli equation(s) .  We will first need a vector identity.   Note the following identity:     The proof follows from direct expansion of both sides.     It will also be useful for us to introduce the notion of vorticity.  Vorticity of a vector field   The vorticity , , of a vector field is defined by The vorticity is a measure of the local rotation of the flow.     Let us recall the definition of a conservative force .  Conservative forces   A force is a conservative force if and only if there exists a potential , such that in a simply connected region where the quantities are defined.   Note the distinction about a simply-connected neighbourhood. The above is not quite the definition of a conservative force (typically defined to be a force for which the work done on an object between two points is independent of path). For now, this is not an important distinction since we will focus on fluid regions that are free of holes. Until told otherwise, we will always assume that the fluid is simply connected and therefore the above serves as a definition of conservative forces.    Bernoulli's equation for steady flow   Bernoulli's equation (theorem) for steady flow states that where we have assumed that the body force is conservative , i.e. it can be written as for a potential function, .    Start from the momentum equation , and use the vector identity gives   Next, the flow is steady, and therefore we can zero the first term. This leaves We now take the dot product of both sides of the equation with . We use the fact that, since it is a triple scalar product with two repeated entries. It therefore results in the fact that Notice that this is the steady component that comes from the material derivative, . So we conclude that is constant along streamlines of the flow.  It is useful to note that if we use the definition of vorticity in , and the definition of in , we have from the above that a form that will be useful, shortly.       For the typical gravity force directed in the direction, we can write . So in this case, the (gravitational) potential is .    The proof of introduced a useful form of the momentum equation using the vorticity function, resulting in . This leads to the so-called vorticity equation form of the momentum equation.  The vorticity equation for incompressible flow   The momentum equation for incompressible flow, reposed in terms of the vorticity is: known as the vorticity equation .     In the proof, it is useful to use the vector identity for the curl of a cross product:     Crucially, we recall the result that \"curl grad equals zero\" for a vector field. So from , we take the curl of both sides to obtain Expanding the outer cross product, the first term can be simplified by swapping differentiation in space with differentiation in time. The second term requires the cross product identity . For the second term, we get with the first zero resulting in the fact that \"div curl equals zero\", while the second results from incompressibility.  Thus we have, which is the main result.     Potential flow  We are interested in the simplest scenarios that will result in reducing the governing equations. Previosly, we introduced the notion of incompressible flows, which results in the Euler equations in and in particular, the reduction of the mass conservation equation to .  We attempt to reduce further by assuming that the fluid is irrotational . This lends to the following definition.  Irrotational flows   A flow is said to be irrotational if the vorticity is identically zero:      For an irrotational and incompressible flow, there is a more powerful version of Bernoulli's equation.  Bernoulli's equation for steady irrotational flow   For an incompressible and irrotational flow, Bernoulli's theorem states that where is the body force.       The proof of this relies on returning to the proof of the unsteady Bernoulli's equation in . In the proof, we arrived at the result in that For steady flow, the first term disappears. If we have the additional assumption that the flow is irrotational, then we have that , and therefore we have But the only way that all spatial derivatives is zero is if the function is constant.     "
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
  "body": " The vorticity equation for incompressible flow   The momentum equation for incompressible flow, reposed in terms of the vorticity is: known as the vorticity equation .   "
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
  "title": "Potential and streamfunction",
  "body": " Potential and streamfunction  In this chapter, we focus on 2D flows where the velocity vector is given by With the velocity given as above, the vorticity is then If we assume that the flow is irrotational according to , then and   Further, we know that if the flow is irrotational, then there exists a velocity potential , , such that . Thus the velocities are expressed as   Now we furthermore have assumed that the flow is incompressible. Therefore from , This is the crucial result, which is that in potential flows, we need only solve the Laplace equation: within the flow region. This is effectively a single linear equation for the single unknown . However, for different problems, the boundary conditions can render even this \"simple\" problem difficult.  Once the velocity potential has been solved, the velocities in the flow can be recovered from the relationship . The pressure in the flow also follows from Bernoulli's equation. For the situation of a steady potential flow, following , it is    Elementary flows  The next three examples will introduce you to the elementary flows consisting of uniform flow, stagnation point flow, and line source\/sink flows.    Uniform flow  uniform flow  Consider the potential given by the linear function with constants and . Then by differentiation we have that the velicity is Therefore this is a constant velocity field with vectors oriented an angle to the horizontal.      Stagnation point flow stagnation point flow  We can verify that the velocity potential satisfies Laplace's equation. The corresponding velocity field is given by and corresponds to stagnation point flow .      Line source  line source  We aim to derive the potential and velocity for a line source , imagined as the flow consisting of a point source or point sink that ejects\/drains fluid from a point in space. Since it would be expected for the potential to be axisymmetric, we attempt to solve in plane polar coordinates. This is given by We assume that the potential takes the form . Then direct integration gives where we have set an additional constant of integration to zero without loss of generality. The leading constant has been set to so that can be later identified with a physical quantity.  The velocity then follows from consideration of the gradient in polar form, where the unit vectors written in the Cartesian basis are and . Thus we can write the velocity as The above corresponds to a velocity field directed radially outwards from the origin. The flow is a called a line source because fluid is ejected from the origin (a source). It refers to a \"line\" because in , the source runs parallel to the -axis.  Let us also identify the strength of this line source. Consider a closed contour around the origin. Then the quantity is the flux (the flow per unit time) of fluid crossing the contour, with denoting the unit normal along .  For simplicity, let us take the contour to be a circle of constant radius . Then since the unit normal is precisely , we have that In computing the above integral, remember that the conversion following the polar Jacobian is where .  Therefore, is the rate at which fluid is produced from the line source. If , we refer to the flow as a line sink . line sink     Crucially, because the governing fluid mechanical equation is only Laplace's equation: this is a linear partial differential equation, and therefore the summation of elementary flows also produces an admissible flow.    Line source in a uniform flow  For instance, we may combine a uniform flow in the -direction with a line source: We can then obtain the velocity field as       On the streamfunction   "
},
{
  "id": "sec-Potential-and-streamfunction-6-3-1",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#sec-Potential-and-streamfunction-6-3-1",
  "type": "Example",
  "number": "4.1.1",
  "title": "Uniform flow.",
  "body": " Uniform flow  uniform flow  Consider the potential given by the linear function with constants and . Then by differentiation we have that the velicity is Therefore this is a constant velocity field with vectors oriented an angle to the horizontal.  "
},
{
  "id": "sec-Potential-and-streamfunction-6-4-1",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#sec-Potential-and-streamfunction-6-4-1",
  "type": "Example",
  "number": "4.1.2",
  "title": "Stagnation point flow.",
  "body": " Stagnation point flow stagnation point flow  We can verify that the velocity potential satisfies Laplace's equation. The corresponding velocity field is given by and corresponds to stagnation point flow .  "
},
{
  "id": "sec-Potential-and-streamfunction-6-5-1",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#sec-Potential-and-streamfunction-6-5-1",
  "type": "Example",
  "number": "4.1.3",
  "title": "Line source.",
  "body": " Line source  line source  We aim to derive the potential and velocity for a line source , imagined as the flow consisting of a point source or point sink that ejects\/drains fluid from a point in space. Since it would be expected for the potential to be axisymmetric, we attempt to solve in plane polar coordinates. This is given by We assume that the potential takes the form . Then direct integration gives where we have set an additional constant of integration to zero without loss of generality. The leading constant has been set to so that can be later identified with a physical quantity.  The velocity then follows from consideration of the gradient in polar form, where the unit vectors written in the Cartesian basis are and . Thus we can write the velocity as The above corresponds to a velocity field directed radially outwards from the origin. The flow is a called a line source because fluid is ejected from the origin (a source). It refers to a \"line\" because in , the source runs parallel to the -axis.  Let us also identify the strength of this line source. Consider a closed contour around the origin. Then the quantity is the flux (the flow per unit time) of fluid crossing the contour, with denoting the unit normal along .  For simplicity, let us take the contour to be a circle of constant radius . Then since the unit normal is precisely , we have that In computing the above integral, remember that the conversion following the polar Jacobian is where .  Therefore, is the rate at which fluid is produced from the line source. If , we refer to the flow as a line sink . line sink   "
},
{
  "id": "sec-Potential-and-streamfunction-6-7-1",
  "level": "2",
  "url": "sec-Potential-and-streamfunction.html#sec-Potential-and-streamfunction-6-7-1",
  "type": "Example",
  "number": "4.1.4",
  "title": "Line source in a uniform flow.",
  "body": " Line source in a uniform flow  For instance, we may combine a uniform flow in the -direction with a line source: We can then obtain the velocity field as   "
},
{
  "id": "ch-chapter-waves",
  "level": "1",
  "url": "ch-chapter-waves.html",
  "type": "Chapter",
  "number": "5",
  "title": "Water waves",
  "body": " Water waves   Brief introduction to appear here.   "
},
{
  "id": "ch-chapter05-vorticity",
  "level": "1",
  "url": "ch-chapter05-vorticity.html",
  "type": "Chapter",
  "number": "6",
  "title": "Vorticity",
  "body": " Vorticity   Brief introduction to appear here.   "
},
{
  "id": "ch-chapter06-viscousflows",
  "level": "1",
  "url": "ch-chapter06-viscousflows.html",
  "type": "Chapter",
  "number": "7",
  "title": "Viscous flows",
  "body": " Viscous flows   Brief introduction to appear here. Are we ready?   "
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
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Vector calculus",
  "body": " Vector calculus  Vector identities go here.  "
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
