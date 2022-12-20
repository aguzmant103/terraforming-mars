<p align="center">
  <img src="https://cdn1.epicgames.com/spt-assets/5199b206e46947ebad5e5c282e95776f/terraforming-mars-offer-1j70f.jpg?h=270&resize=1&w=480" alt="Terraforming Mars"/>
</p>

# Terraforming Mars

Terraforming Mars is a game by Jacob Fryxelius. In Terraforming Mars, you control a corporation, and you buy and play cards describing different projects.

The projects often directly or indirectly contribute to the terraforming process, but can also consist of business enterprises of different kinds. In order to win, you have to accumulate a good terraform rating (TR) and many victory points (VPs). Your TR is increased each time you raise a global parameter (temperature, oxygen or ocean).

## This implementation

This implementation of Terraforming Mars is built using OOP in Typescript as part of Object Oriented Programming course.

## How to run me
1. Change directory to the main "terraforming-mars" folder.
2. Run 'node tests.js' and experiment by toggling the different console elements.

## Out of Scope
The following features have being deliveratively left out from implementation from the original game:
- Tags, Awards, Actions, Milestones
- Whole card deck, Corporations

## Example Implementation and Concepts
To exemplify the usage of different OOP concepts, the following list was compiled with examples:

##### Basic elements:
- [X] Static Types "./resources.ts" Line 5
- [X] Type Aliases "./cards.ts" Line 15, 16
- [X] For...of Loops "./terraform.ts" Line 45
- [X] For...in Loops "./gameEngine.ts" Line 80
- [] Constructing
- [X] Destructuring "./players.ts" Line 55, 72

##### More elements:
- [X] Classes
- [] Interfaces aka Class implementations
- [X] Class inheritance "./objects.ts" Lines 79, 122
- [X] Usage of static property "./terraform.ts" Line 15
- [X] Usage of private and not exportable methods "./logs.ts" Line 66


##### Usage of data structures:
- [X] Stack "./logs.ts" Line 5
- [X] LinkedList "./gameEngine.ts" Line 14 and 27

##### Usage of advanced elements:
- [] Polymorphism in sub-typing (including inheritance and interface extension)
- [] Polymorphism (multiple call signatures)
- [X] Generics - Polymorphism in parametric polymorphism "./logs.ts" Line 5

##### Usage of Design Patterns:
- [X] Façade Pattern "./terraform.ts" Line 7
- [X] Factory Pattern "./terraform.ts" Line 59
- [X] Builder Pattern "./player.ts" Line 73

##### Usage of principles and concepts:
- [X] SOLID "Across the application"

##### Organization:
- [X] Index: can be found under "terraform_files/index.ts"
- [X] Single folder: can be found under the folder "terraform_files"
- [X] Export modules and use local modules "This is used accross all modules"

##### Documentation:
- [X] Add one line per method
- [X] Except terribly basic (1-2 lines of code)

##### Style:
- [X] Usage of TSList

##### ReadMe
- [X] Here explains the background, list of elements looked, and how to run it.

##### Specifications:
- [X] Multiple independent instances of Game "./test" Line 17
- [X] Use of Readonly "./objects" Line 80, 81, 82... and many other places
- [X] Game show data - "Methods like Game.getGlobalParameters, getAllLogs, printBoard, etc"
- [X] Prevent illegal actions! - "Tested as much as possible"
- [X] Don't use classes for small things
- [] Basic structure types to be more specific with input parameters.
- [] Global Parameters are not publicly accesible
- [] Game has sole responsibility for action execution and/or information exposure instead of sub-components. 

##### Safe execution:
  - The public methods and properties of the Game class and any sub-components which it exposes must not allow illegal actions to be performed.
  - Methods can be successfully invoked with illegal parameters, or in illegal order. 
	- Mutable public properties allow illegal values to be set.
  - Read-only properties expose objects which can themselves be illegally modified. 