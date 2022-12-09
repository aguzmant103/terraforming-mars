<p align="center">
  <img src="https://cdn1.epicgames.com/spt-assets/5199b206e46947ebad5e5c282e95776f/terraforming-mars-offer-1j70f.jpg?h=270&resize=1&w=480" alt="Terraforming Mars"/>
</p>

# Terraforming Mars

Terraforming Mars is a game by Jacob Fryxelius. In Terraforming Mars, you control a corporation, and you buy and play cards describing different projects.

The projects often directly or indirectly contribute to the terraforming process, but can also consist of business enterprises of different kinds. In order to win, you have to accumulate a good terraform rating (TR) and many victory points (VPs). Your TR is increased each time you raise a global parameter (temperature, oxygen or ocean).

## This implementation

This implementation of Terraforming Mars is implemented using OOP in Typescript as part of Object Oriented Programming course.

## How to run me
1. Change directory to the main "terraforming-mars" folder.
2. Run 'node tests.js' and experiment by toggling the different console elements.
Alternatively:
2. Run 'node'
3. Interactively use the following commands:
4. PENDING OF IMPLEMENTATION

## Out of Scope
The following features have being deliveratively left out from implementation from the original game:

- Tags
- Awards
- Milestones
- Complete list of Cards
- Corporation selection for players
- Editing other's players production values

## Example Implementation and Concepts
To exemplify the usage of different OOP concepts, the following list was compiled:

##### Basic elements:
- [X] Static Types "./resources" Line 5
- [X] Type Aliases "./cards" Line 15, 16
- [] Constructing
- [X] Destructuring "./players" Line 55, 72
- [X] For...of Loops "./terraform" Line 45
- [] For...in Loops

More elements:
- [] Classes:
    - Single Responsibility Principle
    - Dependency
- [] Class inheritance
- [] Class implementations
- [] Interfaces
- [] Usage of private and not exportable methods

Usage of data structures:
- [X] Stack "./logs" Line 5
- [] LinkedList

Usage of advanced elements:
- [] Polymorphism in sub-typing (including inheritance and interface extension)
- [] Polymorphism in function overloading (multiple call signatures)
- [X] Generics - Polymorphism in parametric polymorphism "./logs" Line 5

Usage of idiomatic features:
- []

Usage of Design Patterns:
- [X] Façade Pattern: data management
- [] Factory Pattern
- [] State Pattern
- [] Builder Pattern
- [] Fluint

Usage of principles and concepts:
- [] SOLID

Organization:
- [X] Single folder: can be found under the folder "terraform_files"
- [X] Index: can be found under "terraform_files/index.ts"
- [] Export and local elements

Extra Points:
- [] Recursion

Documentation:
- [] Add one line per method
- [] Except terribly basic (1-2 lines of code)

Style:
- [] Usage of TSList

Readme
- [X] Here explains the background, list of elements looked, and how to run it.

Specifications:
- [X] Multiple independent instances of Game "./test" Line 17
- [] Game show data
- [] Prevent illegal actions!
- [] Readonly
- [] Basic Types, Obect Literal,
- [] Don't use classes for small things
- [] Usage of static types
- [] Basic structure types to be more specific with input parameters.

- [] Global Parameters are not publicly accesible
- [] Game has sole responsibility for action execution and/or information exposure instead of  sub-components. 


- Safe execution:
- 		c. Code executing illegal actions must not compile (preferred), or it must otherwise raise error at runtime. This includes playing illegal moves and other illegal modification of the game state/information. In other words, the public methods and properties of the Game class and any sub-components which it exposes must not allow illegal actions to be performed. Common issues: 
			i. Methods can be successfully invoked with illegal parameters, or in illegal order. 
			ii. Mutable public properties allow illegal values to be set.
 Read-only properties expose objects which can themselves be illegally modified. 